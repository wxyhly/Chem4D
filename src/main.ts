import { CanvasDraw } from "./draw.js";
import { mdata } from "./molecgen.js";
import { Parser } from "./parser.js";
import { ShapeBuilder } from "./shape.js";
import { wikiData, writeWiki, writeWikiElementsFromAtoms } from "./wiki.js";

window.onload = () => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const engine = new CanvasDraw(canvas);
    let id = 0;
    let smilesDom = document.getElementById("smiles") as HTMLInputElement;
    const wikiPanel = document.getElementById("wiki") as HTMLDivElement;
    const drawCanvas = (id: number) => {
        smilesDom.value = mdata[id][1] as string;
        const g = new ShapeBuilder(new Parser(smilesDom.value).parse()).build();
        engine.drawMolecule(g.atoms, g.bonds);
        document.querySelector("h2").innerText = mdata[id][2] + " - 相关信息";
        const name = mdata[id][2] as string;
        wikiPanel.innerHTML = "";
        if (mdata[id][3]) writeWiki(wikiPanel, mdata[id][2] as string, mdata[id][3] as string);
        for (const d of Object.keys(wikiData)) {
            if (name.includes(d)) {
                writeWiki(wikiPanel, d);
            }
        }
        writeWikiElementsFromAtoms(wikiPanel, g.atoms);
    }
    document.getElementById("random").addEventListener("click", function (e) {
        id = Math.floor(Math.sqrt(Math.sqrt(Math.random())) * mdata.length);
        drawCanvas(id);
        const img = document.createElement("img");
        img.src = canvas.toDataURL();
        const nid = id;
        
        const imgdiv = document.createElement("imgdiv");
        imgdiv.className = "image-item";
        imgdiv.appendChild(img);
        imgdiv.onclick = () => {
            drawCanvas(nid);
        }
        const title = document.createElement("p");
        title.className="image-caption";
        title.innerHTML = mdata[nid][2] as string;
        imgdiv.appendChild(title);
        document.getElementById("gallery").prepend(imgdiv);

    });
    document.getElementById("search").addEventListener("click", function (e) {
        const txt = (document.getElementById("name") as HTMLInputElement).value;
        if (!txt) return;
        const res = (mdata as string[][]).filter(e => {
            const f = e;
            return (f[1].includes(txt) || f[2]?.includes(txt) || f[3]?.includes(txt)) && (e[0] as any) < 10;
        }).sort((a, b) => (a[2].length - b[2].length + ((a[0] as any) - (b[0] as any))));
        wikiPanel.innerHTML = "";
        for (let i = 0; i < 8 && i < res.length; i++) {
            writeWiki(wikiPanel, res[i][2], `$$${res[i][1]}$$`)?.addEventListener('click', function (e) {
                drawCanvas(mdata.indexOf(res[i]));
            });
        }
    });

    smilesDom.addEventListener("change", function (e) {
        const g = new ShapeBuilder(new Parser(smilesDom.value).parse()).build();
        engine.drawMolecule(g.atoms, g.bonds);
    });

}