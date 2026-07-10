import os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
import trimesh

out_dir = r"C:\Mydocs\PRANEEL\Projects\kairos\assets\logo-stl"
mk = trimesh.load(os.path.join(out_dir, "kairos-labs-logo_kairos-part.stl"))
ml = trimesh.load(os.path.join(out_dir, "kairos-labs-logo_labs-part.stl"))


def render(elev, azim, fname):
    fig = plt.figure(figsize=(14, 5))
    fig.patch.set_facecolor("#100A12")
    ax = fig.add_subplot(111, projection="3d")
    ax.set_facecolor("#100A12")
    for mesh, color in [(mk, "#F05941"), (ml, "#EAE0D5")]:
        tris = mesh.triangles
        coll = Poly3DCollection(tris, facecolors=color, edgecolor="none", linewidths=0, shade=True)
        ax.add_collection3d(coll)
    ax.set_xlim(0, 200)
    ax.set_ylim(-10, 55)
    ax.set_zlim(-40, 40)
    ax.set_box_aspect((200, 65, 40))
    ax.view_init(elev=elev, azim=azim)
    ax.axis("off")
    plt.tight_layout()
    plt.savefig(os.path.join(out_dir, fname), dpi=160, facecolor="#100A12")
    plt.close(fig)


render(28, -60, "preview_3d_iso.png")
render(90, -90, "preview_3d_top.png")
print("done")
