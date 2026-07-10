# -*- coding: utf-8 -*-
import os
import numpy as np
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties
from fontTools.ttLib import TTFont
import shapely.geometry as sg
import shapely.affinity as sa
import trimesh

FONT = r"C:\Mydocs\PRANEEL\Projects\kairos\assets\fonts\Cardo-Bold.ttf"
SIZE = 1000.0

# "kairos" is built letter-by-letter so the Greek rho (ρ) can be swapped for
# a Latin "r" — Cardo's lowercase rho reads as a "p" at a glance, which is
# correct classical Greek but confuses a general audience. Substituting the
# Latin "r" glyph (same font, same weight) keeps the stroke style consistent
# while making the sound instantly legible.
KAIROS_CHARS = ["κ", "α", "ι", "r", "ό", "ς"]
LABS_CHARS = ["l", "a", "b", "s"]
WORD_GAP_CHAR = " "

TARGET_WIDTH_MM = 200.0
DEPTH_MM = 6.0

EMBER = (240, 89, 65, 255)      # #F05941 "kairos" — the orange
PARCHMENT = (234, 224, 213, 255)  # #EAE0D5 "labs"
INK_BG = (16, 10, 18, 255)      # #100A12

_FONT_CACHE = {}


def _tt_font(font_path):
    if font_path not in _FONT_CACHE:
        _FONT_CACHE[font_path] = TTFont(font_path)
    return _FONT_CACHE[font_path]


def char_advance(char, font_path=FONT, size=SIZE):
    f = _tt_font(font_path)
    upm = f["head"].unitsPerEm
    cmap = f.getBestCmap()
    hmtx = f["hmtx"]
    gname = cmap.get(ord(char))
    if gname is None:
        return 0.0
    aw, _lsb = hmtx[gname]
    return aw * (size / upm)


def char_glyph_polygons(char, font_path=FONT, size=SIZE):
    """Render a single character to nested shapely polygons (holes handled)."""
    fp = FontProperties(fname=font_path)
    tp = TextPath((0, 0), char, size=size, prop=fp)
    polys = tp.to_polygons(closed_only=True)
    rings = [np.asarray(p) for p in polys if len(p) >= 3]

    ring_polys = []
    for r in rings:
        poly = sg.Polygon(r)
        if not poly.is_valid:
            poly = poly.buffer(0)
        if poly.is_empty or poly.area < 1e-6:
            continue
        ring_polys.append(poly)
    ring_polys.sort(key=lambda p: p.area, reverse=True)

    depth = [0] * len(ring_polys)
    parent = [None] * len(ring_polys)
    for i, p in enumerate(ring_polys):
        pt = p.representative_point()
        d = 0
        best_parent = None
        best_parent_area = None
        for j, q in enumerate(ring_polys):
            if i == j:
                continue
            if q.area > p.area and q.contains(pt):
                d += 1
                if best_parent_area is None or q.area < best_parent_area:
                    best_parent_area = q.area
                    best_parent = j
        depth[i] = d
        parent[i] = best_parent if d % 2 == 1 else None

    holes_by_parent = {}
    for i, p in enumerate(ring_polys):
        if depth[i] % 2 == 1 and parent[i] is not None:
            holes_by_parent.setdefault(parent[i], []).append(p.exterior.coords[:])

    glyph_polys = []
    for i, p in enumerate(ring_polys):
        if depth[i] % 2 == 0:
            holes = holes_by_parent.get(i, [])
            glyph_polys.append(sg.Polygon(p.exterior.coords[:], holes))

    return glyph_polys


def build_word(chars, font_path=FONT, size=SIZE):
    """Compose a word from individual characters, advancing each by its own
    font metric so a substituted glyph (different width than the letter it
    replaces) still sits with natural spacing."""
    polys = []
    cursor = 0.0
    for ch in chars:
        for p in char_glyph_polygons(ch, font_path, size):
            polys.append(sa.translate(p, xoff=cursor, yoff=0))
        cursor += char_advance(ch, font_path, size)
    return polys, cursor


def polys_to_mesh(polys, depth_mm, color):
    meshes = []
    for poly in polys:
        m = trimesh.creation.extrude_polygon(poly, height=depth_mm, engine="earcut")
        meshes.append(m)
    mesh = trimesh.util.concatenate(meshes)
    mesh.visual.face_colors = color
    return mesh


def build_normalized_words(target_width_mm=TARGET_WIDTH_MM):
    """Returns (kairos_polys, labs_polys, width_mm, height_mm) scaled to real
    units, kairos at x=0 and labs positioned right after it with a word gap,
    baseline at y=0."""
    kairos_polys, kairos_width = build_word(KAIROS_CHARS)
    gap = char_advance(WORD_GAP_CHAR)
    labs_polys, _labs_width = build_word(LABS_CHARS)
    labs_polys = [sa.translate(p, xoff=kairos_width + gap, yoff=0) for p in labs_polys]

    all_polys = kairos_polys + labs_polys
    minx = min(p.bounds[0] for p in all_polys)
    miny = min(p.bounds[1] for p in all_polys)
    maxx = max(p.bounds[2] for p in all_polys)
    maxy = max(p.bounds[3] for p in all_polys)
    total_width = maxx - minx
    total_height = maxy - miny
    scale = target_width_mm / total_width

    def norm(polys):
        out = []
        for p in polys:
            p2 = sa.translate(p, xoff=-minx, yoff=-miny)
            p2 = sa.scale(p2, xfact=scale, yfact=scale, origin=(0, 0))
            out.append(p2)
        return out

    kairos_mm = norm(kairos_polys)
    labs_mm = norm(labs_polys)
    return kairos_mm, labs_mm, total_width * scale, total_height * scale


def main():
    kairos_polys_mm, labs_polys_mm, width_mm, height_mm = build_normalized_words()

    mesh_kairos = polys_to_mesh(kairos_polys_mm, DEPTH_MM, EMBER)
    mesh_labs = polys_to_mesh(labs_polys_mm, DEPTH_MM, PARCHMENT)

    out_dir = r"C:\Mydocs\PRANEEL\Projects\kairos\assets\logo-stl"
    os.makedirs(out_dir, exist_ok=True)

    mesh_kairos.export(os.path.join(out_dir, "kairos-labs-logo_kairos-part.stl"))
    mesh_labs.export(os.path.join(out_dir, "kairos-labs-logo_labs-part.stl"))

    combined = trimesh.util.concatenate([mesh_kairos, mesh_labs])
    combined.export(os.path.join(out_dir, "kairos-labs-logo_combined.stl"))

    scene = trimesh.Scene([mesh_kairos, mesh_labs])
    scene.export(os.path.join(out_dir, "kairos-labs-logo_colored.glb"))

    print("kairos watertight:", mesh_kairos.is_watertight, "bodies:", mesh_kairos.body_count)
    print("labs watertight:", mesh_labs.is_watertight, "bodies:", mesh_labs.body_count)
    print("combined bounds (mm):", combined.bounds)
    print("combined watertight:", combined.is_watertight)
    print("Files written to:", out_dir)

    return mesh_kairos, mesh_labs, combined


if __name__ == "__main__":
    main()
