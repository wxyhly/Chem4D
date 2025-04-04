import { CanvasDraw } from "./draw.js";
import { mdata } from "./molecgen.js";
import { Parser } from "./parser.js";
import { ShapeBuilder } from "./shape.js";
import { wikiData, writeWiki, writeWikiElementsFromAtoms } from "./wiki.js";
window.name = "Chem4D";
window.onload = () => {
    document.getElementById("uke").style.display = "none";
    const canvas = document.querySelector("canvas");
    let smilesDom = document.getElementById("smiles");
    let windowTsx = null;
    async function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async function waitToLoad() {
        while (!windowTsx["changeFromWindow"]) {
            await delay(1000);
            console.log("wait");
        }
        console.log("wait finished, okay！");
        windowTsx.document.getElementById("smiles-input").value = smilesDom.value;
        windowTsx["changeFromWindow"]();
    }
    document.getElementById("model").addEventListener('click', () => {
        if ((!windowTsx || windowTsx.closed) && (!window.opener || window.opener.closed)) {
            windowTsx = null;
            console.log("startnewWindow");
            const newWindow = window.open(window.location.host.startsWith("127.0.0.1") ? "/webgpu/tesserxel/examples/#molecule" : "/tesserxel/examples/#molecule");
            newWindow.addEventListener('load', () => {
                windowTsx = newWindow.document.querySelector('iframe').contentWindow;
                console.log("newWindowLoaded", windowTsx);
                waitToLoad();
            });
        }
        else if (window.opener && !window.opener.closed) {
            windowTsx = window.opener;
        }
        if (windowTsx) {
            console.log("send");
            windowTsx.document.getElementById("smiles-input").value = smilesDom.value;
            windowTsx["changeFromWindow"]();
            window.open("javascript:void(0);", "TsxChem4D");
        }
        else {
            console.log("404");
        }
    });
    const engine = new CanvasDraw(canvas);
    let id = 0;
    const wikiPanel = document.getElementById("wiki");
    const drawCanvas = (id) => {
        smilesDom.value = mdata[id][1];
        const g = new ShapeBuilder(new Parser(smilesDom.value, true).parse()).build();
        engine.drawMolecule(g.atoms, g.bonds);
        document.querySelector("h2").innerText = mdata[id][2] + " - 相关信息";
        const name = mdata[id][2];
        wikiPanel.innerHTML = "";
        if (mdata[id][3])
            writeWiki(wikiPanel, mdata[id][2], mdata[id][3]);
        for (const d of Object.keys(wikiData)) {
            if (name.includes(d)) {
                writeWiki(wikiPanel, d);
            }
        }
        writeWikiElementsFromAtoms(wikiPanel, g.atoms);
    };
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
        };
        const title = document.createElement("p");
        title.className = "image-caption";
        title.innerHTML = mdata[nid][2];
        imgdiv.appendChild(title);
        document.getElementById("gallery").prepend(imgdiv);
    });
    document.getElementById("search").addEventListener("click", function (e) {
        const txt = document.getElementById("name").value;
        if (!txt)
            return;
        const res = mdata.filter(e => {
            const f = e;
            return (f[1].includes(txt) || f[2]?.includes(txt) || f[3]?.includes(txt)) && e[0] < 10;
        }).sort((a, b) => (a[2].length - b[2].length + (a[0] - b[0])));
        document.querySelector("h2").innerText = res.length ? txt + " - 搜索结果" : "未找到任何关于“" + txt + "”的信息";
        wikiPanel.innerHTML = "";
        for (let i = 0; i < 8 && i < res.length; i++) {
            writeWiki(wikiPanel, res[i][2], `$$${res[i][1]}$$`)?.addEventListener('click', function (e) {
                drawCanvas(mdata.indexOf(res[i]));
            });
        }
    });
    smilesDom.addEventListener("change", function (e) {
        const g = new ShapeBuilder(new Parser(smilesDom.value, true).parse()).build();
        engine.drawMolecule(g.atoms, g.bonds);
    });
    document.getElementById("random").click();
};
//# sourceMappingURL=main.js.map