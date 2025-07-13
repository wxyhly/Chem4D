import { CanvasDraw } from "./draw.js";
import { Parser } from "./parser.js";
import { ShapeBuilder } from "./shape.js";
const englishName = (`H:Protium D:Deuterium T:Tritium He:Helium Li:Lithium Be:Beryllium B:Boron C:Carbon N:Nitrogen O:Oxygen F:Fluorine Ne:Neon Na:Sodium Mg:Magnesium Al:Aluminium Si:Silicon P:Phosphorus S:Sulfur Cl:Chlorine Ar:Argon K:Potassium Ca:Calcium Sc:Scandium Ti:Titanium V:Vanadium Cr:Chromium Mn:Manganese Fe:Iron Co:Cobalt Ni:Nickel Cu:Copper Zn:Zinc Ga:Gallium Ge:Germanium As:Arsenic Se:Selenium Br:Bromine Kr:Krypton ` +
    `Rb:Rubidium Sr:Strontium Y:Yttrium Zr:Zirconium Nb:Niobium Mo:Molybdenum Tc:Technetium Ru:Ruthenium Rh:Rhodium Pd:Palladium Ag:Silver Cd:Cadmium In:Indium Sn:Tin Sb:Antimony Te:Tellurium I:Iodine Xe:Xenon Cs:Caesium Ba:Barium La:Lanthanum Ce:Cerium Pr:Praseodymium Nd:Neodymium Pm:Promethium Sm:Samarium Eu:Europium Gd:Gadolinium Tb:Terbium Dy:Dysprosium Ho:Holsnium Er:Erbium Tm:Thulium Yb:Ytterbium Lu:Lutetium ` +
    `Hf:Hafnium Ta:Tantalum W:Tungsten Re:Rhenium Os:Osmium Ir:Iridium Pt:Platinum Au:Gold Hg:Mercury Tl:Thallium Pb:Lead Bi:Bismuth Po:Polonium At:Astatine Rn:Radon Fr:Francium Ra:Rarium Ac:Actinium Th:Thorium Pa:Protactinium U:Uranium Np:Neptunium Pu:Plutonium Am:Americium Cm:Curium Bk:Berkelium Cf:Californium Es:Einsteinium Fm:Fermium Md:Mendelevium No:Nobelium Lr:Lawrencium Rf:Rutherfordium Db:Dubnium Sg:Seaborgium Bh:Bohrium Hs:Hassium Mt:Meitnerium Ds:Darmstadtium Rg:Roentgenium Cn:Copernicium Nh:Nihonium Fl:Flerovium Mc:Moscovium Lv:Livermorium Ts:Tennessine Og:Oganesson ` +
    `Nt:Natium Nm:Nimium Kt:Katium Cj:Canium Bc:Borcon Q:Halcyon Qc:Sorium Tk:Tinkaron Tn:Tenaron E:Entron Ny:Nyxogen Fn:Funigen Fd:Fundine Qc:Quietacon Qb:Quibon Lt:Litinium Lb:Liborium G:Hesperus Ml:Malonium Da:Dacydium Bd:Badine Ps:Thionus Ld:Ludrine Lp: Dd:Dandium Du:Dubium Gs:Graverus Gp:Hesphorus Lp:Wellium Bs:Spirine Ae:Asterium Dt:Deductrium St:Steinium Ia:Italium Iv:Anvilium Mu:Miegakurium Rd:Roadium Fx:Frequenium Hn:Hannium Ai:Artium Az:Azimovium Bn:Beneum Wd:Wardium L:Liminum Ju:Jupiterium Ft:Frentrium Z:Zamnium Hv:Helvetium Pc:Princium Uk:Ukranium Mh:Mashpoenium Tq:Tesserxelium Cw:Cellulium Ns:Norsouthium Sp:Sympletium ` +
    `Bo:Bolognium Ot:Ostentatium Pl:Planetium Sa:Saturatium Sk:Seekrium Ht:Hitanium Vj:Dzhanibium Vz:Vezium Cz:Celizium Bb:Banbium Bm:Bemium Fw:Framium Ch:Chyuanium Pq:Pourquoium Mi:Mifanium M:Mimnirchium Xk:Mooshrium Lz:Lizium Le:Leilium Ln:Linium Km:Kilomium Td:Tiodium Qm:Quackium Su:Sinicium Ci:Canadium Ap:Aphirum Ab:Arabium Bj:Britannium Pi:Pailium Pk:Paulium Cp:Couplium Hc:Macelium Hj:Contractium Hz:Hertzium Gz:Gazium Bz:Lanelium ` +
    `Kc:Kercorium Ka:Kariun Kp:Kepium Fp:Ferplorium Mf:Mafabium Dk:Dekronium Zd:Zedianium Tz:Tazirium Hw:Howorium Gt:Getium Gm:Garmium Mx:Maxorium Xd:Xedronium Xc:Xecorium Ji:Jirium Tj:Tajium Js:Javascrium Gu:Gurium Ee:Enetherium Kl:Kelurium Kk:Kankium Gn:Genorium Gj:Gajorium Rj:Rijelium Jt:Jetorium Kb:Kibrium Mk:Mekronium Kd:Kedrium Df:Deforium Sf:Sefronium Fh:Ferhium Sw:Sawolium Wj:Wadgium Vo:Voronoidium Cv:Caverium Vd:Vordium Hd:Hadronium Hr:Harkium Aw:Awelium Jw:Jeworium Jm:Jemium Ri:Rithium Cy:Cyanium An:Antronium Ma:Malium Jh:Jaherium Vh:Vahnium Kh:Khelerium Kj:Kijorium Sq:Sequarium Sz:Sezonium Sv:Sevalium Ty:Teryllium Tu:Turanium Ur:Urthonium Mr:Marionium Mz:Mazorium A:Arconium Ay:Ayerium Tp:Teptronium To:Torlium Tw:Twelvium Pv:Pulvonium Ey:Eryllium Em:Embolium Rm:Remnium Ry:Rylonium Rw:Ruwelium En:Enthium Cq:Caquium Je:Jelurium Ej:Ejarium Jk:Jekyrium Bl:Blasorium Bf:Bufium Bq:Bequarium Rc:Rocorium Rp:Rupenium Py:Pyronium Mm:Memorium Vm:Venomium Ss:Sassorium Sl:Silvarium Sd:Sidronium De:Dellium Dm:Damerium Af:Afirium Ax:Axelium Xm:Xemium Vp:Veporium Vc:Vercorium Vn:Venorium ` +
    `Bg:Bagnium Ih:Ihthonon Rt:Retherium Rs:Rasorium Sy:Seyronium Yz:Yzonium Zt:Zetronium Zb:Zebrium Zk:Zakarium Nk:Nekrium Hb:Herobrium Hx:Hexorium Mj:Majium Mb:Mobrilium Bt:Betronium Tr:Trionium Me:Merillium Mw:Mawelium Rv:Revalium Mp:Maphium Ah:Ahrium Hi:Hilarium Ig:Ignesium Aa:Aarium Ak:Akridium Ad:Adurium Sj:Sajium Mq:Marquium Ze:Zenerium Cg:Cognium It:Itheron Id:Idriteon Ct:Catronium Cb:Cabronium Bu:Burium Uv:Uvelium Vf:Veforium Uf:Ufalium Ut:Uterium Tt:Tetronium Wm:Wemium Wo:Woronium Or:Orrhium Ro:Ronelium Zo:Zoronium Zi:Zithorium My:Myconium El:Elorium Ao:Aoronium So:Sonorium Lh:Laherium Fa:Falorium Fu:Furium J:Juronium Aj:Ajurium Jg:Jargium Tg:Targonium Ql:Quelium By:Byronium Bp:Beponium Pe:Perelium Et:Ethoron Fc:Focarium Rr:Rorium Lc:Lecorium Pf:Perfium Rk:Rankium Lk:Lokorium Jd:Jedrium Dh:Dahnium Eh:Eherium Eg:Egzium Pg:Paragonium Pn:Penrium Ph:Phorium Bw:Bewelium Hm:Hamorium Hu:Huronium Ez:Ezionium Ov:Ovelium Ve:Verenium Do:Doronium Zu:Zutronium Zh:Zherium Zx:Zexionium Ck:Carkorium Gk:Garkorium Kn:Kenerium Nc:Nacrium Sh:Sharium Fs:Fasorium Fb:Fibrilium Aq:Aquilium Mv:Movirium Ls:Losorium`).split(" ").map(e => e.split(":")).reduce((a, b) => { a[b[0]] = b[1]; return a; }, {});
let wikidata = `
氢::氕、氘、氚元素的统称。
烷::(Alkane)单键饱和碳氢（包含氕、氘、氚）化合物，也可指其它单原子与五个氢原子形成的化合物。
烜::(Alkone)双键不饱和碳氢（包含氕、氘、氚）化合物。
烯::(Alkene)三键不饱和碳氢（包含氕、氘、氚）化合物。
炔::(Alkyne)四键不饱和碳氢（包含氕、氘、氚）化合物。
酢::基团-CO2，泎酸酐。结构式：$$X-C(=O)2$$。此外有以下共振式：$$X-C(<<#O)->>O$$、$$X-C(->>O)<<#O$$。
砏::基团RFnFn。结构式：$$R(<=Fn)(->Fn)$$，默认R为碳：-CFnFn-。
枌::基团X<=Fn。
泎酸::基团-COOOD2，结构式：$$X-C(=O)(OD)2$$，一种二元氘酸，容易脱水形成酢。
羧酸::基团-COOD-，结构式：$$X-C(=O)(OD)-X$$，一种一元氘酸。
砏酸::基团-CFnFnOD，结构式：$$X-C(<=Fn)(->Fn)OD$$，一种一元氘酸。
氘酸::能电离出$$[D+2]$$离子的酸，一般为弱酸。
氕酸::能电离出$$[H+]$$离子的酸，一般为强酸。
𣸣酸::基团<-FnH2，由羒酸中的一个氘换成两个氕得到，一般为强酸。
涪酸::基团-OH2，由氘氧酸中的一个氘换成两个氕得到，一般为中强酸。
氚酸::不存在。氚的电负性较大，电离常数较小，不易形成酸，含有<-O<-T的结构一般归类为酰汌。
羒酸::包含基团$$X<-FnD$$的含氧/氛酸，电离为$$X<-[Fn-2].[D+2]$$。
汾酸::将氘酸中的-OD基团换成-FnH基团得到的氕酸，为强酸。
玢酸::砏汾酸的简称，即-CFn3H，结构式：$$X-C(<=Fn)(->Fn)-Fn->H$$。
洋酸::包含基团$$X->O->H$$的含氧/氛酸，电离为$$X->[O-].[H+]$$。
洺酸::包含基团$$X<-O(->H)3$$的含氧/氛酸，电离为$$X<-[O-3](.[H+])3$$。
蕰酸::包含基团$$X<-Fd->H$$的含氧/氛酸，电离为$$X<-[Fd-].[H+]$$。
氨酸::三维氨基酸的类比之一，包含氨基ND2与甲酸基-CDOOD的酸，可以脱水缩合成氨肽，结构式$$NC(-X)(-X)C(=O)OD$$。
氠酸::三维氨基酸的类比之一，包含氠基-ED3与甲酸基-CDOOD的酸，可以脱水缩合成氠肽，结构式$$EC(-X)(-X)C(=O)OD$$。
胙::基团X(=>Ny)2，默认为硝胙。
脽::有机的碓化物，三维膦的类比之一。
膦::有机的磷化物，三维膦的类比之一。
磠::磺与砜在㲶元素上的类比。

韫::基团X<<=Fd。
羘::基团X->N<-T。
胂::(Shanine)基团-ED3。
胺::(Amine)基团-ND2。
洝::基团=NH2。
腤::基团<<=ND2。
滕::基团<=TnD2。
亚胺::基团=ND。
沮::QcD5一价负离子。
潘::QD5二价负离子。
汝::NH5一价负离子。
氨::(Ammonia)ND3，即氮氨，亦可指其它元素的一个原子与三个氢原子形成的化合物。
氠::(Shanum)ED4，即硝氠，亦可指其它元素的一个原子与四个氢原子形成的化合物。
水::(Water)OD2，即氧水，亦可指其它元素的一个原子与两个氢原子形成的化合物。
腅::基团-NO2，结构式$$X-N(=O)->>O$$，类似硝基。
硣酸::基团-EOOOD，硝酸的羟基被烃基替代的产物，结构式$$X-E(=O)(->>O)OD$$，一种一元氘酸。
酵::基团-EO-，结构式$$R-E(=O)-R$$。
汌::基团<-OT，类似于醇，但无酸性。
腈::(Nitrile)基团-CND，结构式$$X-C(#N)D$$。
胴::(Ketazene)基团-CN-，结构式$$X-C(#N)X$$。
醝::基团-CO，结构式$$X-C(<<#O)$$，一般以醝酮$$X<-C(<<#O)->Y$$形式存在，单独易被氧化为酢。
瑥::基团C<-Fd->C，氧醚的类比。
琭::基团C<-Ld->C，硫醚的类比。
塭::韫酰氲的简称，即$$Fd=>>C(->>O)(X)-Fd$$，亚塭为$$Fd=>>C(X)-Fd$$。
嗢::含<-Fd->结构的杂环。
噜::含<-Ld->结构的杂环。
焇::基团C=E=C，氧醚的类比。
熳::基团C<=N=>C，氧醚的类比。
酊::基团C<<=O=>>C，醚的类比。
灲::基团C=>C<=C，氧醚的类比。
膯::含有累积双三键碳的基团=>CTn，结构式$$X=>C(#>Tn)$$。
欭::含有累积双三键碳的基团<=CNy，结构式$$X<=C(<#Ny)$$。
馧::基团C<-Fd->H，弱酸。
䃔::以三键连接的硝、磴、𥓬原子与碳原子基团，默认为硝䃔。
馚::基团C-FnH，弱酸。
氘馚::基团C<-FnD。
氛胺::基团<-FnH2，结构式$$X<-Fn(->H)2$$，弱酸。
醇::基团C-OD。
醅::基团C-OH2，结构式$$X-O(->H)2$$，比醇酸性略强。
酩::基团C<-OH3，结构式$$X<-O(->H)3$$，比醅酸性略强。
醩::基团X<=OH，弱酸。
肗::基团-NH4，结构式$$X-N(->H)4$$。
䂩::基团->NyD，弱碱性。
栶::基团<=NyD。
珚::䂩基、栶基连接在同一原子上简称珚。
胭::Ny2H6，类似于肼。
㲴::(Centranide)基团-CE，类似于氰。
硌::基团<-CTn，即磴㲴。
肿::(Entrile)基团-CE，类似于腈。
氰::(Cyanide)物质CN=CN。
泾::基团-H2，其中两个氕原子与另一个原子形成3中心4电子键，弱酸性。
泾酸::泾基团容易电离出一个氕离子，电离后的负离子称为泾酸根。
釧::将有机物中氘替换为氚后，将多的电子丢掉形成的阳离子。
苯::(Benzene)二重芳香烃，平面六边形结构，具有以下共振式：$$C%1#CC#CC#C%1$$、$$C%1=C=C=C=C=C=%1$$、$$C%1C#CC#CC#%1$$。
萱::(Shrinone)单重芳香烃，椅形或船型平胞结构，具有以下共振式：$$C%1=CC=CC=C%1$$、$$C%1C=CC=CC=%1$$。
䐊::芳环上连三键氮。
醌::芳环上连双键氧。
哨::类似吡咯或吡唑的含-NH-的杂环为“吡”，含-ED2-的的杂环为“哨”。
唑::含硝的五元二重芳香杂环。
吣::类似咪唑的含-NH-的杂环为“咪”，含-ED2-的的杂环为“吣”。
咱::含氮的五元单重芳香杂环，对应含硝的五元双重芳香杂环为“唑”。
啖::在词尾指含氮的六元单重芳香杂环，对应含硝的六元双重芳香杂环为“啶”；在词首指含->N<-结构的杂环。
咁::含氮的六元单重芳香杂环，对应含硝的六元双重芳香杂环为“嗪”。
羏::NyT2一价正离子，类似于铵。
钟::ED5二价正离子，类似于铵。
镫::TnD5三价正离子，类似于铵。
铵::ND4二价正离子。
朌::基团-NFn3->，结构式$$N(<-FnX)(Fn->Y)(->Fn)$$。
`.split("\n").map(s => s.split("::"));
const electrons = [["1s<sup>1</sup>"], ["1s<sup>2</sup>"], ["1s<sup>3</sup>"], ["1s<sup>4</sup>"], ["2s<sup>1</sup>"], ["2s<sup>2</sup>"], ["2s<sup>3</sup>"], ["2s<sup>4</sup>"], ["2s<sup>4</sup>", "2p<sup>1</sup>"], ["2s<sup>4</sup>", "2p<sup>2</sup>"], ["2s<sup>4</sup>", "2p<sup>3</sup>"], ["2s<sup>4</sup>", "2p<sup>4</sup>"], ["2s<sup>4</sup>", "2p<sup>5</sup>"], ["2s<sup>4</sup>", "2p<sup>6</sup>"], ["2s<sup>4</sup>", "2p<sup>7</sup>"], ["2s<sup>4</sup>", "2p<sup>8</sup>"], ["2s<sup>4</sup>", "2p<sup>9</sup>"], ["2s<sup>4</sup>", "2p<sup>10</sup>"], ["2s<sup>4</sup>", "2p<sup>11</sup>"], ["2s<sup>4</sup>", "2p<sup>12</sup>"], ["2s<sup>4</sup>", "2p<sup>13</sup>"], ["2s<sup>4</sup>", "2p<sup>14</sup>"], ["2s<sup>4</sup>", "2p<sup>15</sup>"], ["2s<sup>4</sup>", "2p<sup>16</sup>"], ["3s<sup>1</sup>"], ["3s<sup>2</sup>"], ["3s<sup>3</sup>"], ["3s<sup>4</sup>"], ["3s<sup>4</sup>", "3p<sup>1</sup>"], ["3s<sup>4</sup>", "3p<sup>2</sup>"], ["3s<sup>4</sup>", "3p<sup>3</sup>"], ["3s<sup>4</sup>", "3p<sup>4</sup>"], ["3s<sup>4</sup>", "3p<sup>5</sup>"], ["3s<sup>4</sup>", "3p<sup>6</sup>"], ["3s<sup>4</sup>", "3p<sup>7</sup>"], ["3s<sup>4</sup>", "3p<sup>8</sup>"], ["3s<sup>4</sup>", "3p<sup>9</sup>"], ["3s<sup>4</sup>", "3p<sup>10</sup>"], ["3s<sup>4</sup>", "3p<sup>11</sup>"], ["3s<sup>4</sup>", "3p<sup>12</sup>"], ["3s<sup>4</sup>", "3p<sup>13</sup>"], ["3s<sup>4</sup>", "3p<sup>14</sup>"], ["3s<sup>4</sup>", "3p<sup>15</sup>"], ["3s<sup>4</sup>", "3p<sup>16</sup>"], ["4s<sup>1</sup>"], ["4s<sup>2</sup>"], ["4s<sup>3</sup>"], ["4s<sup>4</sup>"], ["3d<sup>1</sup>", "4s<sup>4</sup>"], ["3d<sup>2</sup>", "4s<sup>4</sup>"], ["3d<sup>3</sup>", "4s<sup>4</sup>"], ["3d<sup>4</sup>", "4s<sup>4</sup>"], ["3d<sup>5</sup>", "4s<sup>4</sup>"], ["3d<sup>6</sup>", "4s<sup>4</sup>"], ["3d<sup class='modified'>9</sup>", "4s<sup class='modified'>2</sup>"], ["3d<sup>8</sup>", "4s<sup>4</sup>"], ["3d<sup>9</sup>", "4s<sup>4</sup>"], ["3d<sup>10</sup>", "4s<sup>4</sup>"], ["3d<sup>11</sup>", "4s<sup>4</sup>"], ["3d<sup>12</sup>", "4s<sup>4</sup>"], ["3d<sup>13</sup>", "4s<sup>4</sup>"], ["3d<sup>14</sup>", "4s<sup>4</sup>"], ["3d<sup class='modified'>18</sup>", "4s<sup class='modified'>1</sup>"], ["3d<sup class='modified'>18</sup>", "4s<sup class='modified'>2</sup>"], ["3d<sup class='modified'>18</sup>", "4s<sup class='modified'>3</sup>"], ["3d<sup>18</sup>", "4s<sup>4</sup>"], ["3d<sup>19</sup>", "4s<sup>4</sup>"], ["3d<sup>20</sup>", "4s<sup>4</sup>"], ["3d<sup>21</sup>", "4s<sup>4</sup>"], ["3d<sup>22</sup>", "4s<sup>4</sup>"], ["3d<sup>23</sup>", "4s<sup>4</sup>"], ["3d<sup>24</sup>", "4s<sup>4</sup>"], ["3d<sup class='modified'>27</sup>", "4s<sup class='modified'>2</sup>"], ["3d<sup class='modified'>27</sup>", "4s<sup class='modified'>3</sup>"], ["3d<sup>27</sup>", "4s<sup>4</sup>"], ["3d<sup>28</sup>", "4s<sup>4</sup>"], ["3d<sup>29</sup>", "4s<sup>4</sup>"], ["3d<sup>30</sup>", "4s<sup>4</sup>"], ["3d<sup>31</sup>", "4s<sup>4</sup>"], ["3d<sup>32</sup>", "4s<sup>4</sup>"], ["3d<sup class='modified'>36</sup>", "4s<sup class='modified'>1</sup>"], ["3d<sup class='modified'>36</sup>", "4s<sup class='modified'>2</sup>"], ["3d<sup class='modified'>36</sup>", "4s<sup class='modified'>3</sup>"], ["3d<sup>36</sup>", "4s<sup>4</sup>"], ["4s<sup>4</sup>", "4p<sup>1</sup>"], ["4s<sup>4</sup>", "4p<sup>2</sup>"], ["4s<sup>4</sup>", "4p<sup>3</sup>"], ["4s<sup>4</sup>", "4p<sup>4</sup>"], ["4s<sup>4</sup>", "4p<sup>5</sup>"], ["4s<sup>4</sup>", "4p<sup>6</sup>"], ["4s<sup>4</sup>", "4p<sup>7</sup>"], ["4s<sup>4</sup>", "4p<sup>8</sup>"], ["4s<sup>4</sup>", "4p<sup>9</sup>"], ["4s<sup>4</sup>", "4p<sup>10</sup>"], ["4s<sup>4</sup>", "4p<sup>11</sup>"], ["4s<sup>4</sup>", "4p<sup>12</sup>"], ["4s<sup>4</sup>", "4p<sup>13</sup>"], ["4s<sup>4</sup>", "4p<sup>14</sup>"], ["4s<sup>4</sup>", "4p<sup>15</sup>"], ["4s<sup>4</sup>", "4p<sup>16</sup>"], ["5s<sup>1</sup>"], ["5s<sup>2</sup>"], ["5s<sup>3</sup>"], ["5s<sup>4</sup>"], ["4d<sup>1</sup>", "5s<sup>4</sup>"], ["4d<sup>2</sup>", "5s<sup>4</sup>"], ["4d<sup>3</sup>", "5s<sup>4</sup>"], ["4d<sup>4</sup>", "5s<sup>4</sup>"], ["4d<sup>5</sup>", "5s<sup>4</sup>"], ["4d<sup class='modified'>9</sup>", "5s<sup class='modified'>1</sup>"], ["4d<sup class='modified'>9</sup>", "5s<sup class='modified'>2</sup>"], ["4d<sup class='modified'>9</sup>", "5s<sup class='modified'>3</sup>"], ["4d<sup>9</sup>", "5s<sup>4</sup>"], ["4d<sup>10</sup>", "5s<sup>4</sup>"], ["4d<sup>11</sup>", "5s<sup>4</sup>"], ["4d<sup>12</sup>", "5s<sup>4</sup>"], ["4d<sup>13</sup>", "5s<sup>4</sup>"], ["4d<sup class='modified'>16</sup>", "5s<sup class='modified'>2</sup>"], ["4d<sup class='modified'>18</sup>", "5s<sup class='modified'>1</sup>"], ["4d<sup class='modified'>18</sup>", "5s<sup class='modified'>2</sup>"], ["4d<sup class='modified'>18</sup>", "5s<sup class='modified'>3</sup>"], ["4d<sup>18</sup>", "5s<sup>4</sup>"], ["4d<sup>19</sup>", "5s<sup>4</sup>"], ["4d<sup>20</sup>", "5s<sup>4</sup>"], ["4d<sup>21</sup>", "5s<sup>4</sup>"], ["4d<sup>22</sup>", "5s<sup>4</sup>"], ["4d<sup>23</sup>", "5s<sup>4</sup>"], ["4d<sup>24</sup>", "5s<sup>4</sup>"], ["4d<sup class='modified'>27</sup>", "5s<sup class='modified'>2</sup>"], ["4d<sup class='modified'>27</sup>", "5s<sup class='modified'>3</sup>"], ["4d<sup>27</sup>", "5s<sup>4</sup>"], ["4d<sup>28</sup>", "5s<sup>4</sup>"], ["4d<sup>29</sup>", "5s<sup>4</sup>"], ["4d<sup>30</sup>", "5s<sup>4</sup>"], ["4d<sup>31</sup>", "5s<sup>4</sup>"], ["4d<sup>32</sup>", "5s<sup>4</sup>"], ["4d<sup class='modified'>36</sup>", "5s<sup class='modified'>1</sup>"], ["4d<sup class='modified'>36</sup>", "5s<sup class='modified'>2</sup>"], ["4d<sup class='modified'>36</sup>", "5s<sup class='modified'>3</sup>"], ["4d<sup>36</sup>", "5s<sup>4</sup>"], ["5s<sup>4</sup>", "5p<sup>1</sup>"], ["5s<sup>4</sup>", "5p<sup>2</sup>"], ["5s<sup>4</sup>", "5p<sup>3</sup>"], ["5s<sup>4</sup>", "5p<sup>4</sup>"], ["5s<sup>4</sup>", "5p<sup>5</sup>"], ["5s<sup>4</sup>", "5p<sup>6</sup>"], ["5s<sup>4</sup>", "5p<sup>7</sup>"], ["5s<sup>4</sup>", "5p<sup>8</sup>"], ["5s<sup>4</sup>", "5p<sup>9</sup>"], ["5s<sup>4</sup>", "5p<sup>10</sup>"], ["5s<sup>4</sup>", "5p<sup>11</sup>"], ["5s<sup>4</sup>", "5p<sup>12</sup>"], ["5s<sup>4</sup>", "5p<sup>13</sup>"], ["5s<sup>4</sup>", "5p<sup>14</sup>"], ["5s<sup>4</sup>", "5p<sup>15</sup>"], ["5s<sup>4</sup>", "5p<sup>16</sup>"], ["6s<sup>1</sup>"], ["6s<sup>2</sup>"], ["6s<sup>3</sup>"], ["6s<sup>4</sup>"], ["5d<sup class='modified'>1</sup>", "6s<sup class='modified'>4</sup>"], ["5d<sup class='modified'>2</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup class='modified'>1</sup>", "5d<sup class='modified'>2</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup class='modified'>2</sup>", "5d<sup class='modified'>2</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup class='modified'>4</sup>", "5d<sup class='modified'>1</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup>6</sup>", "6s<sup>4</sup>"], ["4f<sup>7</sup>", "6s<sup>4</sup>"], ["4f<sup>8</sup>", "6s<sup>4</sup>"], ["4f<sup>9</sup>", "6s<sup>4</sup>"], ["4f<sup>10</sup>", "6s<sup>4</sup>"], ["4f<sup>11</sup>", "6s<sup>4</sup>"], ["4f<sup>12</sup>", "6s<sup>4</sup>"], ["4f<sup>13</sup>", "6s<sup>4</sup>"], ["4f<sup>14</sup>", "6s<sup>4</sup>"], ["4f<sup>15</sup>", "6s<sup>4</sup>"], ["4f<sup>16</sup>", "6s<sup>4</sup>"], ["4f<sup class='modified'>16</sup>", "5d<sup class='modified'>1</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup class='modified'>16</sup>", "5d<sup class='modified'>2</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup>19</sup>", "6s<sup>4</sup>"], ["4f<sup>20</sup>", "6s<sup>4</sup>"], ["4f<sup>21</sup>", "6s<sup>4</sup>"], ["4f<sup>22</sup>", "6s<sup>4</sup>"], ["4f<sup>23</sup>", "6s<sup>4</sup>"], ["4f<sup>24</sup>", "6s<sup>4</sup>"], ["4f<sup>25</sup>", "6s<sup>4</sup>"], ["4f<sup>26</sup>", "6s<sup>4</sup>"], ["4f<sup>27</sup>", "6s<sup>4</sup>"], ["4f<sup>28</sup>", "6s<sup>4</sup>"], ["4f<sup>29</sup>", "6s<sup>4</sup>"], ["4f<sup>30</sup>", "6s<sup>4</sup>"], ["4f<sup>31</sup>", "6s<sup>4</sup>"], ["4f<sup>32</sup>", "6s<sup>4</sup>"], ["4f<sup class='modified'>32</sup>", "5d<sup class='modified'>1</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup class='modified'>32</sup>", "5d<sup class='modified'>2</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup>35</sup>", "6s<sup>4</sup>"], ["4f<sup>36</sup>", "6s<sup>4</sup>"], ["4f<sup>37</sup>", "6s<sup>4</sup>"], ["4f<sup>38</sup>", "6s<sup>4</sup>"], ["4f<sup>39</sup>", "6s<sup>4</sup>"], ["4f<sup>40</sup>", "6s<sup>4</sup>"], ["4f<sup>41</sup>", "6s<sup>4</sup>"], ["4f<sup>42</sup>", "6s<sup>4</sup>"], ["4f<sup>43</sup>", "6s<sup>4</sup>"], ["4f<sup>44</sup>", "6s<sup>4</sup>"], ["4f<sup>45</sup>", "6s<sup>4</sup>"], ["4f<sup>46</sup>", "6s<sup>4</sup>"], ["4f<sup>47</sup>", "6s<sup>4</sup>"], ["4f<sup>48</sup>", "6s<sup>4</sup>"], ["4f<sup class='modified'>48</sup>", "5d<sup class='modified'>1</sup>", "6s<sup class='modified'>4</sup>"], ["4f<sup>50</sup>", "6s<sup>4</sup>"], ["4f<sup>51</sup>", "6s<sup>4</sup>"], ["4f<sup>52</sup>", "6s<sup>4</sup>"], ["4f<sup>53</sup>", "6s<sup>4</sup>"], ["4f<sup>54</sup>", "6s<sup>4</sup>"], ["4f<sup>55</sup>", "6s<sup>4</sup>"], ["4f<sup>56</sup>", "6s<sup>4</sup>"], ["4f<sup>57</sup>", "6s<sup>4</sup>"], ["4f<sup>58</sup>", "6s<sup>4</sup>"], ["4f<sup>59</sup>", "6s<sup>4</sup>"], ["4f<sup>60</sup>", "6s<sup>4</sup>"], ["4f<sup>61</sup>", "6s<sup>4</sup>"], ["4f<sup>62</sup>", "6s<sup>4</sup>"], ["4f<sup>63</sup>", "6s<sup>4</sup>"], ["4f<sup>64</sup>", "6s<sup>4</sup>"], ["5d<sup>1</sup>", "6s<sup>4</sup>"], ["5d<sup>2</sup>", "6s<sup>4</sup>"], ["5d<sup>3</sup>", "6s<sup>4</sup>"], ["5d<sup>4</sup>", "6s<sup>4</sup>"], ["5d<sup>5</sup>", "6s<sup>4</sup>"], ["5d<sup>6</sup>", "6s<sup>4</sup>"], ["5d<sup>7</sup>", "6s<sup>4</sup>"], ["5d<sup>8</sup>", "6s<sup>4</sup>"], ["5d<sup>9</sup>", "6s<sup>4</sup>"], ["5d<sup>10</sup>", "6s<sup>4</sup>"], ["5d<sup>11</sup>", "6s<sup>4</sup>"], ["5d<sup>12</sup>", "6s<sup>4</sup>"], ["5d<sup>13</sup>", "6s<sup>4</sup>"], ["5d<sup>14</sup>", "6s<sup>4</sup>"], ["5d<sup>15</sup>", "6s<sup>4</sup>"], ["5d<sup class='modified'>18</sup>", "6s<sup class='modified'>2</sup>"], ["5d<sup class='modified'>18</sup>", "6s<sup class='modified'>3</sup>"], ["5d<sup>18</sup>", "6s<sup>4</sup>"], ["5d<sup>19</sup>", "6s<sup>4</sup>"], ["5d<sup>20</sup>", "6s<sup>4</sup>"], ["5d<sup>21</sup>", "6s<sup>4</sup>"], ["5d<sup>22</sup>", "6s<sup>4</sup>"], ["5d<sup>23</sup>", "6s<sup>4</sup>"], ["5d<sup>24</sup>", "6s<sup>4</sup>"], ["5d<sup class='modified'>27</sup>", "6s<sup class='modified'>2</sup>"], ["5d<sup>26</sup>", "6s<sup>4</sup>"], ["5d<sup>27</sup>", "6s<sup>4</sup>"], ["5d<sup>28</sup>", "6s<sup>4</sup>"], ["5d<sup>29</sup>", "6s<sup>4</sup>"], ["5d<sup>30</sup>", "6s<sup>4</sup>"], ["5d<sup>31</sup>", "6s<sup>4</sup>"], ["5d<sup class='modified'>34</sup>", "6s<sup class='modified'>2</sup>"], ["5d<sup class='modified'>36</sup>", "6s<sup class='modified'>1</sup>"], ["5d<sup class='modified'>36</sup>", "6s<sup class='modified'>2</sup>"], ["5d<sup class='modified'>36</sup>", "6s<sup class='modified'>3</sup>"], ["5d<sup>36</sup>", "6s<sup>4</sup>"], ["6s<sup>4</sup>", "6p<sup>1</sup>"], ["6s<sup>4</sup>", "6p<sup>2</sup>"], ["6s<sup>4</sup>", "6p<sup>3</sup>"], ["6s<sup>4</sup>", "6p<sup>4</sup>"], ["6s<sup>4</sup>", "6p<sup>5</sup>"], ["6s<sup>4</sup>", "6p<sup>6</sup>"], ["6s<sup>4</sup>", "6p<sup>7</sup>"], ["6s<sup>4</sup>", "6p<sup>8</sup>"], ["6s<sup>4</sup>", "6p<sup>9</sup>"], ["6s<sup>4</sup>", "6p<sup>10</sup>"], ["6s<sup>4</sup>", "6p<sup>11</sup>"], ["6s<sup>4</sup>", "6p<sup>12</sup>"], ["6s<sup>4</sup>", "6p<sup>13</sup>"], ["6s<sup>4</sup>", "6p<sup>14</sup>"], ["6s<sup>4</sup>", "6p<sup>15</sup>"], ["6s<sup>4</sup>", "6p<sup>16</sup>"], ["7s<sup>1</sup>"], ["7s<sup>2</sup>"], ["7s<sup>3</sup>"], ["7s<sup>4</sup>"], ["6d<sup class='modified'>1</sup>", "7s<sup class='modified'>4</sup>"], ["6d<sup class='modified'>2</sup>", "7s<sup class='modified'>4</sup>"], ["6d<sup class='modified'>3</sup>", "7s<sup class='modified'>4</sup>"], ["6d<sup class='modified'>4</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup class='modified'>3</sup>", "6d<sup class='modified'>2</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup class='modified'>4</sup>", "6d<sup class='modified'>2</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup>7</sup>", "7s<sup>4</sup>"], ["5f<sup>8</sup>", "7s<sup>4</sup>"], ["5f<sup>9</sup>", "7s<sup>4</sup>"], ["5f<sup>10</sup>", "7s<sup>4</sup>"], ["5f<sup>11</sup>", "7s<sup>4</sup>"], ["5f<sup>12</sup>", "7s<sup>4</sup>"], ["5f<sup>13</sup>", "7s<sup>4</sup>"], ["5f<sup>14</sup>", "7s<sup>4</sup>"], ["5f<sup>15</sup>", "7s<sup>4</sup>"], ["5f<sup>16</sup>", "7s<sup>4</sup>"], ["5f<sup class='modified'>16</sup>", "6d<sup class='modified'>1</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup>18</sup>", "7s<sup>4</sup>"], ["5f<sup>19</sup>", "7s<sup>4</sup>"], ["5f<sup>20</sup>", "7s<sup>4</sup>"], ["5f<sup>21</sup>", "7s<sup>4</sup>"], ["5f<sup>22</sup>", "7s<sup>4</sup>"], ["5f<sup>23</sup>", "7s<sup>4</sup>"], ["5f<sup>24</sup>", "7s<sup>4</sup>"], ["5f<sup>25</sup>", "7s<sup>4</sup>"], ["5f<sup>26</sup>", "7s<sup>4</sup>"], ["5f<sup>27</sup>", "7s<sup>4</sup>"], ["5f<sup>28</sup>", "7s<sup>4</sup>"], ["5f<sup>29</sup>", "7s<sup>4</sup>"], ["5f<sup>30</sup>", "7s<sup>4</sup>"], ["5f<sup>31</sup>", "7s<sup>4</sup>"], ["5f<sup>32</sup>", "7s<sup>4</sup>"], ["5f<sup class='modified'>32</sup>", "6d<sup class='modified'>1</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup class='modified'>32</sup>", "6d<sup class='modified'>2</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup>35</sup>", "7s<sup>4</sup>"], ["5f<sup>36</sup>", "7s<sup>4</sup>"], ["5f<sup>37</sup>", "7s<sup>4</sup>"], ["5f<sup>38</sup>", "7s<sup>4</sup>"], ["5f<sup>39</sup>", "7s<sup>4</sup>"], ["5f<sup>40</sup>", "7s<sup>4</sup>"], ["5f<sup>41</sup>", "7s<sup>4</sup>"], ["5f<sup>42</sup>", "7s<sup>4</sup>"], ["5f<sup>43</sup>", "7s<sup>4</sup>"], ["5f<sup>44</sup>", "7s<sup>4</sup>"], ["5f<sup>45</sup>", "7s<sup>4</sup>"], ["5f<sup>46</sup>", "7s<sup>4</sup>"], ["5f<sup>47</sup>", "7s<sup>4</sup>"], ["5f<sup>48</sup>", "7s<sup>4</sup>"], ["5f<sup class='modified'>48</sup>", "6d<sup class='modified'>1</sup>", "7s<sup class='modified'>4</sup>"], ["5f<sup>50</sup>", "7s<sup>4</sup>"], ["5f<sup>51</sup>", "7s<sup>4</sup>"], ["5f<sup>52</sup>", "7s<sup>4</sup>"], ["5f<sup>53</sup>", "7s<sup>4</sup>"], ["5f<sup>54</sup>", "7s<sup>4</sup>"], ["5f<sup>55</sup>", "7s<sup>4</sup>"], ["5f<sup>56</sup>", "7s<sup>4</sup>"], ["5f<sup>57</sup>", "7s<sup>4</sup>"], ["5f<sup>58</sup>", "7s<sup>4</sup>"], ["5f<sup>59</sup>", "7s<sup>4</sup>"], ["5f<sup>60</sup>", "7s<sup>4</sup>"], ["5f<sup>61</sup>", "7s<sup>4</sup>"], ["5f<sup>62</sup>", "7s<sup>4</sup>"], ["5f<sup>63</sup>", "7s<sup>4</sup>"], ["5f<sup>64</sup>", "7s<sup>4</sup>"], ["6d<sup>1</sup>", "7s<sup>4</sup>"], ["6d<sup>2</sup>", "7s<sup>4</sup>"], ["6d<sup>3</sup>", "7s<sup>4</sup>"], ["6d<sup>4</sup>", "7s<sup>4</sup>"], ["6d<sup>5</sup>", "7s<sup>4</sup>"], ["6d<sup>6</sup>", "7s<sup>4</sup>"], ["6d<sup>7</sup>", "7s<sup>4</sup>"], ["6d<sup>8</sup>", "7s<sup>4</sup>"], ["6d<sup>9</sup>", "7s<sup>4</sup>"], ["6d<sup>10</sup>", "7s<sup>4</sup>"], ["6d<sup>11</sup>", "7s<sup>4</sup>"], ["6d<sup>12</sup>", "7s<sup>4</sup>"], ["6d<sup>13</sup>", "7s<sup>4</sup>"], ["6d<sup>14</sup>", "7s<sup>4</sup>"], ["6d<sup>15</sup>", "7s<sup>4</sup>"], ["6d<sup>16</sup>", "7s<sup>4</sup>"], ["6d<sup>17</sup>", "7s<sup>4</sup>"], ["6d<sup>18</sup>", "7s<sup>4</sup>"], ["6d<sup>19</sup>", "7s<sup>4</sup>"], ["6d<sup>20</sup>", "7s<sup>4</sup>"], ["6d<sup>21</sup>", "7s<sup>4</sup>"], ["6d<sup>22</sup>", "7s<sup>4</sup>"], ["6d<sup>23</sup>", "7s<sup>4</sup>"], ["6d<sup>24</sup>", "7s<sup>4</sup>"], ["6d<sup>25</sup>", "7s<sup>4</sup>"], ["6d<sup>26</sup>", "7s<sup>4</sup>"], ["6d<sup>27</sup>", "7s<sup>4</sup>"], ["6d<sup>28</sup>", "7s<sup>4</sup>"], ["6d<sup>29</sup>", "7s<sup>4</sup>"], ["6d<sup>30</sup>", "7s<sup>4</sup>"], ["6d<sup>31</sup>", "7s<sup>4</sup>"], ["6d<sup>32</sup>", "7s<sup>4</sup>"], ["6d<sup class='modified'>36</sup>", "7s<sup class='modified'>1</sup>"], ["6d<sup class='modified'>36</sup>", "7s<sup class='modified'>2</sup>"], ["6d<sup class='modified'>36</sup>", "7s<sup class='modified'>3</sup>"], ["6d<sup>36</sup>", "7s<sup>4</sup>"], ["7s<sup>4</sup>", "7p<sup>1</sup>"], ["7s<sup>4</sup>", "7p<sup>2</sup>"], ["7s<sup>4</sup>", "7p<sup>3</sup>"], ["7s<sup>4</sup>", "7p<sup>4</sup>"], ["7s<sup>4</sup>", "7p<sup>5</sup>"], ["7s<sup>4</sup>", "7p<sup>6</sup>"], ["7s<sup>4</sup>", "7p<sup>7</sup>"], ["7s<sup>4</sup>", "7p<sup>8</sup>"], ["7s<sup>4</sup>", "7p<sup>9</sup>"], ["7s<sup>4</sup>", "7p<sup>10</sup>"], ["7s<sup>4</sup>", "7p<sup>11</sup>"], ["7s<sup>4</sup>", "7p<sup>12</sup>"], ["7s<sup>4</sup>", "7p<sup>13</sup>"], ["7s<sup>4</sup>", "7p<sup>14</sup>"], ["7s<sup>4</sup>", "7p<sup>15</sup>"], ["7s<sup>4</sup>", "7p<sup>16</sup>"]];
const atomData = `					@	@																																																					@	@				
%	%	%	%	#	H氕	D氘	@	@																																					@	@	@	@	@	@	@	@	@	@	@	@	@	@	T氚	He氦				
%	%	%	%	#	Li锂	Lt铤	Lb钹	Be铍																																					Bc磐	B硼	Qb矻	Q磻	Qc砠	C碳	Tk𥓬	E硝	Tn磴	N氮	Ny氤	O氧	Fn氛	Fd氲	F氟	Ne氖				
%	%	%	%	#	Na钠	Nt铙	Nm𨰾	Mg镁	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	@	Ml镙	Al铝	Da锾	Dd砃	Du砡	Si硅	Gs磪	G碓	Gp䂾	P磷	Ps硖	S硫	Lp硠	Ld㲶	Cl氯	Ar氩				
%	%	%	%	#	K钾	Kt鉲	Cj钘	Ca钙	Sa𫔌	Sc钪	Sk镩	Hn铖	Ht镬	Ti钛	Tq镡	Ai铚	Vj𬭫	V钒	Vz𬬬	Az銸	Cz𫓥	Cr铬	Bb镑	Bn鉼	Bm䤮	Mn锰	Fx锴	Fe铁	Fw䥽	Wd釫	Cw鍢	Co钴	Ch鈨	Sp铴	Ns钑	Ni镍	Pi鎃	Pk铇	Cp𨱎	Hj锲	Hc锏	Cu铜	Hz镔	Zn锌	Gz鍜	Ga镓	Bz𫓬	Bj铡	Bg錊	Ge锗	Ih䃎	Ia砧	Iv磌	As砷	Ae䃏	Se硒	Bs𪶭	Bd溴	Br𣱕	Kr氪				
%	%	%	%	#	Rb铷	Rt𨧨	Rs鐩	Sr锶	Sy𫓹	Y钇	Yz鈏	Z铎	Zt镃	Zr锆	Zb鉡	Zk鐰	Nk錼	Nb铌	Hb锛	Hx鑛	Mj鑂	Mo钼	Mb铫	Bo𫔆	Bt釱	Tc锝	Tr鏶	Ru钌	Rd鏴	Me鋈	Mw铉	Rh铑	Rv銋	Mu𬭁	Mp鉖	Pd钯	Ah锷	Hi铘	Ig镒	Aa鈪	Ak锵	Ag银	Ad钭	Cd镉	Sj𬬱	In铟	Mi銤	M铓	Mq𨭩	Sn锡	Ze䤠	Ci鈶	Cg𨥜	Sb锑	St碁	Te碲	It碤	Id砥	I碘	Xe氙				
%	%	%	%	#	Cs铯	Ct铩	Cb鎟	Ba钡    #	Ln鋓	La镧	Lz釼	L釖	Le釰	Ce铈	Kc鏮	Ka𫔋	Kp鏿	Pr镨	Fp錗	Mf鍲	Km钎	Dk镗	Dt𬭬	Nd钕	Zd钊	Tz铳	Hw鈋	Gt鈊	Gm釛	Pm钷	Mx铐	Xd鏬	Xc鏭	Sm钐	Ji鎅	Tj钝	Js鈌	Eu铕	Gu锢	Ee𫔅	Kl镂	Kk锚	Gn鈝	Gd钆	Gj鑇	Rj𨱕	Jt䦂	Tb铽	Kb錓	Mk鍷	Kd鐁	Dy镝	Df鑆	Sf鉎	Fh鏣	Sw鏁	Wj钜	Ho钬	Vo锸	Cv𫓩	Vd鍨	Hd䤣	Hr锽	Er铒	Xk𫓴	Aw铻	Jw鏩	Tm铥	Jm鏋	Ri鏫	Cy锖	Yb镱	Bu鑗	Lu镥	Uv䤸	Hv铔	Vf鍝	Hf铪	Uf鍑	Uk锳	Ut䥙	Ta钽	Tt鎕	Mh釯	Wm釪	W钨	Wo鉥	Ot锬	Or䥃	Re铼	Ro鍒	Os锇	Zo𫟻	Zi鐑	My𬭆	Ir铱	El鏂	Ao䥝	So𫓪	Pt铂	Lh鏸	Fa𫔍	Fu鍸	J𨱓	Aj𫓦	Au金	Jg釶	Hg汞	Tg釭	Tl铊	Ql钶	Qm钤	Pq銙	Pb铅	Pl鐱	Ap镛	By𫔇	Bi铋	Bp鈵	Po钋	Pe碚	Et砈	At砹	Rn氡				
%	%	%	%	#	Fr钫	Ft鍅	Fc钣	Ra镭    #	An錌	Ac锕	Ma镘	Ju鈢	Jh銲	Th钍	Vh𬭃	Kh鑘	Kj𬭿	Pa镤	Sq𨱑	Sz𫟳	Sv𫔊	Ty钺	Tu鏕	U铀	Ur𫔉	Mr𨱔	Mz镞	A𨤿	Ay𫒉	Np镎	Tp𨱏	To镋	Tw鋔	Pu钚	Pv鐻	Ey𬬩	Em铧	Am镅	Rm鎠	Ry镮	Rw镟	En钲	Cq锜	Cm锔	Je镊	Ej镢	Jk𨱄	Bk锫	Bl𫔒	Bf镚	Bq镵	Cf锎	Rc鉌	Rp锟	Py𫔐	Mm𫓯	Vm铏	Es锿	Ss䦅	Sl𫔕	Sd𨰿	De𨱐	Dm釥	Fm镄	Af𨥁	Ax鎐	Xm鎋	Md钔	Vp釮	Vc锒	Vn镏	No锘	Rr釢	Lr铹	Lc𫓺	Pc鉘	Pf鉜	Rf𬬻	Rk顉	Lk铆	Jd鎌	Db𬭊	Dh鍕	Eh銰	Eg𬬧	Sg𬭳	Pg铸	Pn鍻	Ph𬭖	Bh𬭛	Bw䥤	Hs𬭶	Hm𫟺	Hu锪	Ez鉙	Mt鿏	Ov鉒	Ve䥳	Do鍎	Ds𫟼	Zu𬬺	Zh鉊	Zx鏉	Ck鏪	Gk𬬪	Rg𬬭	Kn銶	Cn鿔	Nc鈤	Nh鿭	Sh鍉	Su鋜	Fs鏠	Fl𫓧	Fb𬬯	Ab鎴	Aq铰	Mc镆	Mv鍡	Lv𫟷	Ls鈻	Td𬭓	Ts钿	Og鿫				
																																																																


`.split(/[\t\n%\#\@]/).filter(e => e).map((v, id) => [v.slice(0, -1).replace(/[\u4e00-\uFfa5]/g, ""), v.replace(/[A-z]/g, ""), "(" + englishName[v.slice(0, -1).replace(/[\u4e00-\uFfa5]/g, "")] + ")原子序数：" + (id + 1) + "，价电子排布：" + electrons[id] + "。"]);
`H::氢类元素中质量最小的，易失去电子形成阳离子，一般为一价半，非金属性相对较弱。
D::氢类非金属元素，电离能力弱于氕，一般为一价。
T::电负性非金属性较高，不易电离形成酸，与卤素接近，但原子半径小，一般为半价。
C::有机物骨架元素，一般为五价。
Q::三维硼元素的一种类比，一般为六价。
B::三维硼元素的一种类比，一般为七价。
Bc::两性元素。
Hc::一副族金属元素。
Cu::二副族金属元素。
Hz::三副族金属元素。
Zn::四副族金属元素。
Qc::可做有机物骨架非金属元素，一般为五价半。
Tk::可做有机物骨架非金属元素，一般为四价半。
Tn::介于氮与硝之间的非金属元素，一般为四价半。
N::三维氮元素的一种类比，一般为三价。
E::三维氮元素的一种类比，一般为四价。
Ny::介于氮与氧之间的非金属元素，一般为二价半。
O::一般为二价。
S::一般为二价。
Fn::类似氧元素，常见于酸中，一般为一价半。
Gs::𥓬族非金属元素，一般为四价半。
Lp::氛族非金属元素，一般为一价半。
Ld::三维氯元素的一种类比，氲族非金属元素，一般为一价。
Cl::三维氯元素的一种类比，氟族非金属元素，一般为半价。
Fd::三维氟元素的一种类比，一般为一价。
F::三维氟元素的一种类比，为非金属性最强的元素，一般为半价。
`.split(/\n/).filter(e => e).map(e => e.split(/::/)).forEach(e => atomData.find(a => a[0] === e[0])[2] += e[1]);
export const wikiData = Object.fromEntries(wikidata);
export const writeWikiElementsFromAtoms = (dom, atoms) => {
    const elements = new Set(atoms.map(a => a.name));
    for (const e of elements) {
        const [ee, eName, eVal] = atomData.find(l => l[0] === e) ?? [e, ""];
        writeWiki(dom, `${e}(${eName})`, eVal);
    }
};
export const writeWiki = (dom, key, value) => {
    value ??= wikiData[key];
    if (value) {
        const span = document.createElement("div");
        span.className = "wiki";
        span.innerHTML = `<b>${key}</b>：${value.replace(/\$\$(.*?)\$\$/g, "<img class='smiles' alt='$1'>")}`;
        dom.appendChild(span);
        dom.appendChild(document.createElement("br"));
        dom.querySelectorAll("img.smiles").forEach(e => {
            const g = new ShapeBuilder(new Parser(e.getAttribute("alt"), true).parse()).build();
            const canvas = document.createElement("canvas");
            const engine = new CanvasDraw(canvas);
            engine.calcDim(g.atoms);
            engine.drawMolecule(g.atoms, g.bonds);
            e.setAttribute("src", canvas.toDataURL());
        });
        return span;
    }
};
//# sourceMappingURL=wiki.js.map