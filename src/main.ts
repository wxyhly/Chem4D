import { CanvasDraw } from "./draw.js";
import { mdata } from "./molecgen.js";
import { Parser } from "./parser.js";
import { ShapeBuilder } from "./shape.js";
import { wikiData, writeWiki, writeWikiElementsFromAtoms } from "./wiki.js";
window.name = "Chem4D";

const urlp = new URLSearchParams(window.location.search.slice(1));
const lang = urlp.get("lang") ?? (navigator.languages.join(",").includes("zh") ? "zh" : "en");
window.onload = () => {
    document.getElementById("uke").style.display = "none";
    if (lang === "en") {
        document.getElementById("random").innerText = "I'm feeling Lucky";
        document.getElementById("model").innerText = "Open in Tsx";
        document.getElementById("search").innerText = "Search";
        document.getElementById("infos").innerText = "Information";
        document.getElementById("history").innerText = "History";
        document.getElementById("p-zh").remove();
    } else {
        document.getElementById("p-en").remove();
    }
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    let smilesDom = document.getElementById("smiles") as HTMLInputElement;
    let windowTsx = null;
    async function delay(ms: number) {
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
        const n = mdata.find(e => e[1] === smilesDom.value)?.[2] as string;
        windowTsx["changeFromWindow"](n);

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
            })
        } else if (window.opener && !window.opener.closed) {
            windowTsx = window.opener;
        }
        if (windowTsx) {
            console.log("send");
            windowTsx.document.getElementById("smiles-input").value = smilesDom.value;
            const n = mdata.find(e => e[1] === smilesDom.value)?.[2] as string;
            windowTsx["changeFromWindow"](n);
            window.open("javascript:void(0);", "TsxChem4D");
        } else {
            console.log("404");

        }
    });
    const engine = new CanvasDraw(canvas);
    let id = 0;
    const wikiPanel = document.getElementById("wiki") as HTMLDivElement;
    const drawCanvas = (id: number) => {
        smilesDom.value = mdata[id][1] as string;
        const g = new ShapeBuilder(new Parser(smilesDom.value, true).parse()).build();
        engine.drawMolecule(g.atoms, g.bonds);
        document.querySelector("h2").innerText = mdata[id][2] + (lang === "en" ? " - Information" : " - 相关信息");
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
        id = Math.floor((Math.sqrt(Math.random())) * mdata.length);
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
        title.className = "image-caption";
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
        document.querySelector("h2").innerText = lang === "en" ?
            res.length ? txt + " - Search result" : "Found nothing about “" + txt + "”." :
            res.length ? txt + " - 搜索结果" : "未找到任何关于“" + txt + "”的信息";
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
    window["changeFromWindow"] = function (s: string, n: string) {
        const idx = mdata.findIndex(e => e[2] === n);
        if (idx >= 0) {
            drawCanvas(idx);
        } else {
            smilesDom.value = s;
            const g = new ShapeBuilder(new Parser(smilesDom.value, true).parse()).build();
            engine.drawMolecule(g.atoms, g.bonds);
        }
    }
    document.getElementById("random").click();
}