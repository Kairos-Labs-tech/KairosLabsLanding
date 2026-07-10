# -*- coding: utf-8 -*-
import os
import shapely.affinity as sa
from build_logo import TARGET_WIDTH_MM, build_normalized_words

EMBER_HEX = "#F05941"
PARCHMENT_HEX = "#EAE0D5"
INK_HEX = "#100A12"

OUT_DIR = r"C:\Mydocs\PRANEEL\Projects\kairos\assets\logo-svg"
MARGIN_MM = 6.0


def polygon_to_path_d(poly, precision=2):
    def ring_to_d(coords):
        pts = [f"{x:.{precision}f},{y:.{precision}f}" for x, y in coords]
        return "M" + " L".join(pts) + " Z"

    d = ring_to_d(list(poly.exterior.coords))
    for interior in poly.interiors:
        d += " " + ring_to_d(list(interior.coords))
    return d


def polys_to_svg_path(polys, fill_hex):
    d_parts = [polygon_to_path_d(p) for p in polys]
    d = " ".join(d_parts)
    return f'<path d="{d}" fill="{fill_hex}" fill-rule="evenodd"/>'


def build_normalized_groups():
    kairos_polys, labs_polys, width_mm, height_mm = build_normalized_words(TARGET_WIDTH_MM)

    def flip_for_svg(polys):
        # build_normalized_words already scales to mm with baseline-min at y=0
        # (font y grows upward); SVG y grows downward, so flip and re-anchor.
        out = []
        for p in polys:
            p2 = sa.scale(p, xfact=1, yfact=-1, origin=(0, 0))
            p2 = sa.translate(p2, xoff=0, yoff=height_mm)
            out.append(p2)
        return out

    kairos_mm = flip_for_svg(kairos_polys)
    labs_mm = flip_for_svg(labs_polys)
    return kairos_mm, labs_mm, width_mm, height_mm


def write_svg(path, body, width_mm, height_mm, margin, bg=None):
    vb_w = width_mm + margin * 2
    vb_h = height_mm + margin * 2
    bg_rect = f'<rect x="{-margin:.2f}" y="{-margin:.2f}" width="{vb_w:.2f}" height="{vb_h:.2f}" fill="{bg}"/>' if bg else ""
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-margin:.2f} {-margin:.2f} {vb_w:.2f} {vb_h:.2f}" width="{vb_w:.2f}mm" height="{vb_h:.2f}mm">
{bg_rect}
{body}
</svg>
'''
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    kairos_mm, labs_mm, width_mm, height_mm = build_normalized_groups()

    kairos_path = polys_to_svg_path(kairos_mm, EMBER_HEX)
    labs_path = polys_to_svg_path(labs_mm, PARCHMENT_HEX)

    # Individual parts, transparent background
    write_svg(os.path.join(OUT_DIR, "kairos-labs-logo_kairos-part.svg"),
              kairos_path, width_mm, height_mm, MARGIN_MM)
    write_svg(os.path.join(OUT_DIR, "kairos-labs-logo_labs-part.svg"),
              labs_path, width_mm, height_mm, MARGIN_MM)

    # Combined, transparent background
    write_svg(os.path.join(OUT_DIR, "kairos-labs-logo_combined.svg"),
              kairos_path + "\n" + labs_path, width_mm, height_mm, MARGIN_MM)

    # Combined, on dark ink background (drop-in wordmark lockup)
    write_svg(os.path.join(OUT_DIR, "kairos-labs-logo_combined_on-dark.svg"),
              kairos_path + "\n" + labs_path, width_mm, height_mm, MARGIN_MM, bg=INK_HEX)

    # Single flat-color silhouette (parchment only) for monochrome use (stamps, engraving previews)
    mono_path = polys_to_svg_path(kairos_mm + labs_mm, PARCHMENT_HEX)
    write_svg(os.path.join(OUT_DIR, "kairos-labs-logo_mono.svg"),
              mono_path, width_mm, height_mm, MARGIN_MM)

    print("width x height (mm):", round(width_mm, 2), round(height_mm, 2))
    print("Files written to:", OUT_DIR)


if __name__ == "__main__":
    main()
