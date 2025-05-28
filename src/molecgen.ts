let data = `
// 烃
// default: [1]
C;甲烷[0]
CC;乙烷[0]
CCC;丙烷[0]
T->C->C->C->H;1-氚-3-氕丙烷[0]
C%1=C(<-T)=>C=>C(->H)=C=C=%1;间氕氚苯
C%1=C(<-T)=>C=>C=>C(->H)=C=%1;对氕氚苯
CC(-C)C;2-甲基丙烷;异丁烷[2]
C=C;乙烜[0]
C=CC;丙烜
C=C=C;丙二烜
C=CC=C;1,3-丁二烜
C=C=CC;1,2-丁二烜
C#C;乙烯[0]
C#CC;丙烯
C$C;乙炔[0]
Tk$Tk;乙𥓬炔
Qc$Qc;乙砠炔
Tk$>Qc;乙𥓬砠炔
Tk$Qc<-T;氚乙𥓬砠炔
C$CC;丙炔
O(->N<-T)4;四羘氠醚;

C(=O)2;甲酢[0]
C(=O)2C;乙酢[0]
C(=O)=C;乙烯酢[0]
C(=O)=C=O;乙烯二酢[0]
C(=O)=CC;丙烯酢
C(=O)2OD;碳酸[0]
C(=O)(<-FnD)2;碳羒酸[0]
C(=O)(-OD)2;甲泎酸[0]
C(=O)(-OD)2C;乙泎酸[0]
C(=O)(-OD);甲酸[0]
C(=O)(-OD)C;乙酸[0]
C(=O)(-OD)C(=O)(-OD);乙二酸
C(=O)(-OD)C=C;丙烜酸
CC(=O)(-OD)C;2-丙酸;异丙酸[2]
C(<=Fn)(->Fn)(-OD)2;砏酸[0]
C(<=Fn)(->Fn)(-OD);甲砏酸
C(<=Fn)(->Fn)(-OD)C;乙砏酸
C(-OD)(<=Fn)(->Fn)C(<=Fn)(->Fn)(-OD);乙二砏酸[0]
C(<=Fn)(->Fn)(-OD)C(<=Fn)(->Fn);砏基乙砏酸
C%1(<=Fn)(->Fn)C(<=Fn)(->Fn)C(<=Fn)(->Fn)C(<=Fn)(->Fn)C(<=Fn)(->Fn)C%1(<=Fn)(->Fn);环己六砏[0]
C%1(<=Fn)(->O(->H))C(<=Fn)(->O(->H))C(<=Fn)(->O(->H))C(<=Fn)(->O(->H))C(<=Fn)(->O(->H))C%1(<=Fn)(->O(->H));环己六枌酸[0]
C(<<=Fd)(-OD)2;亚碳韫酸
C(<<=Fd)(-OD);甲亚韫酸
C(<<=Fd)(-OD)C;乙亚韫酸[2]
C(<<=Fd)(->>O)(-OD)2;碳韫酸
C(<<=Fd)(->>O)(-OD);甲韫酸
C(<<=Fd)(->>O)(-OD)C;乙韫酸
C(<<=Fd)(-OD)(->O->H)2;碳韫洋酸

C#CC#N;丙烯腈
C%1CC%1;环丙烷
C%1CO%1;环氧乙烷
C%1=CC=CC=CC=C%1;环辛四烜
C%1#CC#CC#CC#C%1;环辛四烯[0]
C%1=CC=CC%1(<=Fn)(->Fn);环戊二烜砏
C%1#CC#CC%1(<=Fn)(->Fn);环戊二烯砏
C%1#CC#CC%1(#N);环戊二烯胴
C%1#CC#CC%1;环戊二烯
C%1=CC=CC%1;环戊二烜
C%1(=O)CCCC%1;环戊酮
C%1(#N)CCCC%1;环戊胴
C%1(=>>N)-CCCC->%1;1,2-二氚环戊氮酮
C%1(=>>N)<-CCCC->%1;2,5-二氚环戊氮酮
C%1(<=Fn)(->Fn)CCCC%1;环戊砏
C(Fd)2#C(Fd)2;四氲乙烯
C(Fd)3=C(Fd)3;六氲乙烜
C(=O);甲醛[0]
C(=O)C;乙醛[0]
CC(=O)C;丙酮[0]
C%1#CC#CC<#C%1<-C(<<#O)->C%1#CC#CC#C<-%1;二苯醝酮[0]
Tn(->H)4<-C(<<#O)->Tn(->H)4;二磴肗醝酮
C<-C(<<#O)->C;丙醝酮[0]
CC(=O)CC;丁酮
C<-C(<<#O)->CC;丁醝酮
CC(=O)(-C)2;2-甲基丙酮;异丁酮[2]
C=>Ny;甲氤醛
C(=>Ny)C;乙氤醛
CC(=>Ny)C;丙氤酮
CC(=>Ny)CC;丁氤酮[2]
C->C(=>Ny)(-C)2;2-甲基丙氤酮;异丁氤酮
C=>>N;甲氮醛[0]
C(=>>N)C;乙氮醛
C->C(=>>N)C;丙氮酮
C->C(=>>N)CC;1-氚丁氮酮[2]
CC(=>>N)<-CC;3-氚丁氮酮[2]
C->C(=>>N)<-C<-C;1,4-氚丁氮酮[2]
C->C(C)(=>>N)(<-C);1,3-二氚-2-甲基丙氮酮;异丁氮酮[2]
C->>C(=>>N)(-C)2;1,1-二氚-2-甲基丙氮酮;偏异丁氮酮[2]
C#N;甲腈[0]
C(#N)C;乙腈
CC(#N)C;丙胴[0]
O=C(OD)C(#N)C;丙胴酸[0]
C<#Ny;甲氤腈[0]
C(<#Ny)C;乙氤腈
C(<#Ny)->C;2-氕乙氤腈;异乙氤腈
C<-C(<#Ny)C;丙氤胴[0]
O=C(OD)<-C(<#Ny)C;1-丙氤胴酸
O=C(OD)C(<#Ny)->C;3-丙氤胴酸
C#>Tn;甲磴腈[0]
C(<<#O)OD;亚醝酸
C(<<#O)(->O->H)2;醝酸
X-C(<<#O);X醝[0]
// C(<<#O)(->>O)OD;醝酸; 没有，就是碳酸
C(#>Tn)C;乙磴腈
C(#>Tn)<-C;2-氚乙磴腈;异乙磴腈
C->C(#>Tn)C;丙磴胴[0]
O=C(OD)->C(#>Tn)C;1-丙磴胴酸
O=C(OD)C(#>Tn)<-C;3-丙磴胴酸
C(#>>E);甲硝腈
C(#>>E)<-C;乙硝腈
C(#>>E)<-CC;丙硝腈
C->>C->>C(#>>E);3,3-二氚丙硝腈
C->C(#>>E)<-C;丙硝胴[0]

CC(#N)CC;丁胴
C(<=Fn)(->Fn);甲砏[0]
C(<=Fn)(->Fn)C;乙砏
CC(<=Fn)(->Fn)C;丙硐[0]
CC(<=Fn)(->Fn)CC;丁硐

COC;二甲醚;甲醚[0]
CCOCC;二乙醚;乙醚[0]
COCC;甲乙醚
C<-Fd->C;二甲瑥;甲瑥[0]
CC<-Fd->CC;二乙瑥;乙瑥[0]
C<<=O=>>C;二甲酊;甲酊[0]
CC<<=O=>>CC;二乙酊;乙酊
O(->C)4;四甲氠醚;甲氠醚[2]
O(->CC)4;四乙氠醚;乙氠醚[2]
C=E=C;二甲焇;甲焇[0]
CC=E=CC;二乙焇;乙焇[0]
C<=N=>C;二甲熳;甲熳[0]
CC<=N=>CC;二乙熳;乙熳[0]
C=>C<=C;二甲灲;甲灲[0]
CE(=O)C;二甲酵;甲酵[0]
CCE(=O)CC;二乙酵;乙酵[0]
C<=O->C;二甲醪;甲醪[0]
C<=O->CC;甲乙醪[0]
CC<=O->C;乙甲醪 [0]
Tk=>C<=Tk;二𥓬烷基灲;𥓬烷基灲[0]
Q=>C<=Q;二磻烷基灲;磻烷基灲[0]
N(->H)2=>C<=N(->H)2;二亚肗基灲;亚肗基灲[0]
N(->H)2=C(->H)<=N(->H)2;亚肗基洝基氕基甲烷;异二亚肗基灲[0]
CC=>C<=CC;二乙灲;乙灲[0]

N(C)3;三甲胺[0]
N(C)3->>O;氧化三甲胺
N(C)3(->>O)2;二氧化三甲胺
E(C)4;四甲胂[0]
E(C)4->>O;氧化四甲胂
X=>C#>Tn;X膯[0]
X<=C<#Ny;X欭[0]
X<<=C<<#Ny;X氕欭[0]
X=C#Tn;X氕膯[0]
X<=C<#Tn;X氘膯[0]
X<-Fd;X馧;馧基[0]
X<<=Fd;X韫;韫基[0]
X#E;X䃔[0]
X#Tn;X磴䃔
X#Tk<-T;X𥓬䃔
X#Tk;X半𥓬烯
X=Tk;X半𥓬烜
X#Qc;X半砠烯
X=Qc;X半砠烜
X#Q;X半磻烯
X=Q;X半磻烜
X=Qb;X半矻烜

X-Fn;X馚;馚基[0]
X<-Fn;X氘馚;氘馚基[0]
X<-Fn(->H)2;X氛胺;氛氨基
X<=Fn;X枌;枌基[0]

X-O;X醇;羟基[0]
X-S;X硫醇;巯基[2]
X-O(->H)2;X醅;醅基[0]
X-S(->H)2;X硫醅;硫醅基[2]
X<-O(->H)3;X酩;酩基[0]
X<-S(->H)3;X硫酩;硫酩基[2]
X<-O<-T;X汌;汌基
X->O->H;X氕醇;氕羟基
X<=O->H;X醩;醩基
X<-O(->H)D;X氘醅;氘醅基

X<-S<-T;X氚硫醇;氚巯基[3]
X->S->H;X氕硫醇;氕巯基[3]
X<=S->H;X硫醩;硫醩基[3]
X<-S(->H)D;X氘硫醅;氘硫醅基[3]

X-Ny;X氤胺;氤氨基
X-Ny(->H)3;X氤胂;氤氠基
X<-Ny(->H)4;X氤肗;氤烷基
X->Ny;X䂩;䂩基[0]
X->Ny(->H)2;X䂩醅;䂩醅基
X<=Ny;X栶[0]
X=Ny;X氕栶
X-Ny<-T;X氚䂩;氚䂩基
X<<=Ny<-T;X氚栶
C(<=Ny)(->Ny);甲珚
C(<=Ny)(->Ny)C;乙珚
C(<=Ny)(->Ny)CC;丙珚
CC(<=Ny)(->Ny)C;2-丙珚

X->N<-T;羘;羘基[0]
X->>ND;氘羘
X=N->H;X洝;洝基[0]
X=N;X亚胺;亚胺基
X<=N<-T;氚亚胺;氚亚胺基
X-N<-T;X氚胺;氚氨基
X-N(->H)2;X氮胂;氮氠基
X-N(->H)4;X肗;肗基[0]
X<=N(->H)3;X亚肗;亚肗基
X<-N(->H)3;X氘肗;氘肗基
X<-N<-T;X氘氚胺;氘氚氨基[2]
X<-N;X氕氮胂;氕氮氠基
H<-N(->H)3O D;肗醇

X-N=O;亚腅基[2]
X-N(=O)->>O;腅基
X-N(=O)(->>O)2;高腅基
N(=O)OD;亚氮酸
N(=O)(->>O)OD;氮酸
N(=O)(->>O)2OD;高氮酸
X-E(=O)-OD;X亚硣酸
X-E(=O)(->>O)OD;X硣酸
E(=O)(-OD)2;亚硝酸
E(=O)(->>O)(-OD)2;硝酸[0]
E(<=Fn)(->Fn)(-OD);亚硝砏酸
E(<=Fn)(->Fn)(->>O)(-OD);硝砏酸
S(-OD)2(->>O);亚硫酸
S(-OD)2(->>O)2;硫酸[0]
S(-OD)2(->>O)3;高硫酸
S(->O->H)4(->>O);硫洋酸[0]
S(->O->H)4;亚硫洋酸[2]
X-S(-OD)(->>O);X亚磺酸
X-S(-OD)(->>O)2;X磺酸
X->S(->O->H)(->>O)2;X磺酸
X-S(->O->H)2(->>O)2;X磺洋酸
X-S(-OD)(->>O)3;X高磺酸
Ps(->O->H)5;硖洋酸[2]


Ny(->O->H)(=O);亚氤酸
Ny(->O->H)(=O)(->>O);氤酸[0]
Ny(->O->H)(=O)(->>O)2;高氤酸[2]
Ny(<-FnD)(-OD)(->>O);氤羒酸[2]
Ny(<-O(->H)3)(-OD)(->>O);氤洺酸
Ny(-OD)(<-T)(->>O);亚氚氤酸[2]
Ny(-OD)(<-T)(->>O)2;氚氤酸[2]
Ny(=O)(->>O)->C;甲氤酸[2]
Ny(=O)(->>O)->CC;乙氤酸[2]

N(<-FnD)2;亚氮羒酸
N(<-FnD)2(->>O);氮羒酸
N(<-FnD)(Fn)(->Fn);朌酸
N(<-Fn->H)(Fn)(->Fn);朌𣸣酸
N(<-FnD)(Fn)(->Fn)(->>O);高朌酸
N(<=Fn)->O->H;亚氮枌酸
N(<=Fn)(->>O)->O->H;氮枌酸

Tn(-OD)(->O->H)(=O);亚磴酸
Tn(-OD)(->O->H)(=O)(->>O);磴酸[0]

// 看到这里了，后面不对

Tn(<-FnD)(=O);次磴羒酸[3]
Tn(<=Fn)(-OD);次磴枌酸[3]
Tn(<-FnD)(=O)(->>O);亚磴羒酸[3]
Tn(<=Fn)(-OD)(->>O);亚磴枌酸[3]
Tn(<-FnD)(=O)(->>O)2;磴羒酸[3]
Tn(<=Fn)(-OD)(->>O)2;磴枌酸

E(<-FnD)(<-T)(-OD)(->>O);硝氚羒酸
E(<-FnD)(<-C)(-OD)(->>O);甲硝羒酸
E(<-FnD)(-D)(-OD)(->>O);硝氘羒酸[2]
E(<-FnD)2-D;次硝氘羒酸[2]
E(<-FnD)2(-D)(->>O);亚硝氘羒酸[4]
E(<-FnD)2(-D)(->>O)2;硝氘羒酸[3]

Gs(<-FnD)3;次磪羒酸[3]
Gs(<-FnD)3(->>O);亚磪羒酸[3]
Gs(<-FnD)3(->>O)2;磪羒酸[2]
Gs(-OD)4(->O->H);原磪酸
Gs(=O)(-OD)2(->O->H);磪酸[0]

DFd;氘氲酸[0]
H<-F;氕氟酸[0]

H<-Cl;盐酸[0]
Cl->O->H;次氯酸[0]
Cl(->O->H)(->>O);低氯酸[2]
Cl(->O->H)(->>O)2;亚氯酸
Cl(->O->H)(->>O)3;氯酸[0]
Cl(->O->H)(->>O)4;高氯酸

LdD;氘㲶酸[0]
LdOD;次㲶酸
Ld(OD)(->>O);低㲶酸[2]
Ld(OD)(->>O)2;亚㲶酸[2]
Ld(OD)(->>O)3;㲶酸[0]
Ld(OD)(->>O)4;高㲶酸
Ld(->O->H)2;次㲶洋酸[2]
Ld(->O->H)2(->>O);亚㲶洋酸[4]
Ld(->O->H)2(->>O)2;㲶洋酸[2]
Ld(->O->H)2(->>O)3;高㲶洋酸[3]

Lp(<-FnD);次硠羒酸[2]
Lp(<-FnD)(->>O);低硠羒酸[2]
Lp(<-FnD)(->>O)2;亚硠羒酸[4]
Lp(<-FnD)(->>O)3;硠羒酸[2]
Lp(<-FnD)(->>O)4;高硠羒酸[3]
Lp(->O->H)3;次硠洋酸[3]
Lp(->O->H)3(->>O);亚硠洋酸[2]
Lp(->O->H)3(->>O)2;硠洋酸[2]

Qc(<=Fn)2->O->H;砠洋酸
Qc(<=Fn)(->Fn)(<-FnD)OD;砠砏酸
Qc(<=Fn)(->Fn)(<-Fd->H)OD;砠砏蕰酸
Qc(=O)2<-FnD;砠羒酸
Qc(<=Fn)(OD)3;原砠氛酸
Qc(<=Fn)(=O)(OD);砠氛酸
Q(<=Fn)2(OD);磻酸
Q(<=Fn)(=O)<-FnD;磻羒酸

Tk(=O)2->H;𥓬酢[0]
C<-Tk(=O)2;甲𥓬酢
Tk<-Tk(=O)2;𥓬胂𥓬酢
T->TkC(=O)2;𥓬胂酢
Qc<-Tk(=O)2;甲砠基𥓬酢

Qc(=O)2;砠酢[0]
X-Q(<=Fn)2;X磻酢
Q(<=Fn)2Q(<=Fn)2;二磻酢

C->Qc(=O)2;甲砠酢
CC->Qc(=O)2;乙砠酢
Qc(=O)2<-Qc;甲砠基砠酢
Qc(=O)2<-Tk;甲𥓬基砠酢
Qc(=O)2<-Tk(=O)2;𥓬砠二酢[0]
Qc(=S)2<-Tk(=S)2;硫代𥓬砠二酢[0]
CC<-Tk(=O)2;乙𥓬酢

Tk(<=Fn)(OD)2;𥓬枌酸[0]
Tk(<=Fn)=O;𥓬枌酸酐
Tk(=O)2->O->H;𥓬酸[0]
Tk(<=Fn)(->Fn)(OD)(->O->H);𥓬砏酸
Tk(<=Fn)(->Fn)2OD;𥓬砏氛酸
Tk(<=Fn)(->Fn)(<-FnD);𥓬砏羒酸
Fd=>>Tk<-Fd->H;𥓬氲酸[0]
Fd=>>Qb(<<=Fd)->O->H;矻氲酸
Fn=>Qb(<=Fn)<-FnD;矻酸
// (<-Fd->H) (蕰)
// (<-FnD) (羒)
// (<-O<-T) (汌)

// (-Fn->H) (汾)
// (-O-D) (酸)
// (-Ny<-T)氚䂩

// (->O->H) (洋)
// (->Ny-D)䂩
// (->N<-T)羘

P(->>O)(-OD)3;亚磷酸[2]
P(->>O)2(-OD)3;磷酸[0]
P(->>O)2(=O)(-OD);偏磷酸
G(->>O)(-OD)4;碓酸[0]
G(->>O)(=O)(-OD)2;偏碓酸
Si(=O)(OD)3;硅酸[0]
Si(OD)5;原硅酸[2]
Si(=O)2(OD);偏硅酸

X-E<<=Fd;X腽;腽基[0]
D-E<<=Fd;腽化氘;氘腽酸
E(<<=Fd)(->H)2;腽化氕;氕腽酸
E(-OD)<<=Fd;亚腽酸
E(->>O)(-OD)<<=Fd;腽酸[0]
E(->>O)2(-OD)<<=Fd;高腽酸

B(<=Fn)(<-FnD)3;硼酸[0]

Ny(->H)3Ny(->H)3;胭
H<-Ny<-Ny(->H)3->Ny->H;叠胭

X-N;X胺;氨基[0]
NN;肼
N(->H)4N(->H)4;乙氮烷;联肗
N=N;二亚胺;二氮烯
H<-N=N->H;联洝[0]
X-E;X胂;氠基
EE;乙氠[0]
EEE;丙氠
E=E;硝烜;二亚胂
EE=E;硝烜氠[2]
E=E=E;二亚胂焇
CE=E;甲基硝烜[2]
E#E;硝烯[0]
E(->Fn)2#E(->Fn)2;四氛硝烯
E#EE;氠硝烯[2]
Tk;甲𥓬烷[0]
TkTk;乙𥓬烷
Tk=Tk;乙𥓬烜
Tk(->H)<=Tk;1,1-二氕乙𥓬烜
Tk#Tk;乙𥓬烯
Tk(->H)<#Tk;1,1-二氕乙𥓬烯
Qc(<-T);甲砠烷[0]
Qc(<-T)Qc(<-T);乙砠烷
Qc(<-T)=Qc(<-T);乙砠烜
Qc(<-T)#Qc(<-T);乙砠烯
Tk->Qc;乙𥓬砠烷
TkQc;Tk-氕-Qc-氚-乙𥓬砠烷
Q(<-T)2;甲磻烷[0]
Q(<-T)2Q(<-T)2;乙磻烷
Q(<-F)2#Q(<-F)2;四氟乙磻烯
Q(<-T)2=Q(<-T)2;乙磻烜
Q(<-T)2#Q(<-T)2;乙磻烯[0]
E->>Q;乙硝磻烷
Tk(O)Tk(O)Tk(O);丙𥓬三醇[0]
Tk(->O)Tk(->O)Tk(->O);丙𥓬三氕醇[0]

E(=O)2;二氧化硝
E(=O)2->>O;三氧化硝
Q(<<=Fd)2;二氲化磻
B(<<=Fd)2-Fd;三氲化硼
Q(-Fd)3<<=Fd;四氲化磻[0]
C(-Fd)2<<=Fd;三氲化碳
E(-Fd)<<=Fd;二氲化硝;亚腽酰氲
N<<=Fd;氲化氮;氮韫
Fn=>N->Fn;二氛化氮;氮砏
C(<=Fn)2;二氛化碳
Qc(<=Fn)2(->Fn);三氛化砠
E(<=Fn)(->Fn)3;四氛化硝
C(<#Ny)=>Ny;二氤化碳
N(=>Ny)2;二氤化氮

O$>>>>Q->>O;二氧化磻
O$>>>>Q;一氧化磻
O%1->Q(=O)<=O->Q<=%1(=O);四氧化二磻
O%1=>>Q<<=O=>>Q<<=%1;二氧化二磻
C%1<-*(D)->C<-*->%1(D);乙碳氠;不稳定，几乎立即转变为乙烜
Q%1<-*(D)->Q<-*->%1(D);乙磻桥烷;全氘乙磻烷

FnFn;过氛化氕[0]
OO;过氧化氘[0]
H<-OO->H;过氧化氕[0]
O=O->>O;臭氧[0]
C(N)2(#N);氰胺[0]
C(OD)2#N;氰酸[0]
N#C=C#N;氰气[0]
C#N;氰化氘[0]
N#C(OD)2;氰酸[0]
E$CC$E;㲴气[0]
C$E;㲴化氘[0]
C<$Tn;硌化氕[0]
C(->O->H)<$Tn;硌酸[0]
DOC$E;㲴酸[0]
X-C$E;X肿[0]

[F-];氟化[14]
[Cl-];氯化[14]
[Br-];𣱕化[14]
[Bd-2];溴化[14]
[I-];碘化[14]
[Ld-2];㲶化[14]
[Fd-2];氲化[14]
[Fn-3];氛化[15]
[O-4];氧化[15]
[S-4];硫化[15]
E$[C-2];㲴化[15]
[N-2]=N=>>N;叠氮化[15]
[E-4]=E#>>E;叠硝化[15]
[E-4]#>>E;重硝化[15]
D-[Qc-]-D;沮化[15]
D-[Q-2]-D;潘化[15]
H<-[N-](->H)3->H;汝化[15]
H<-[Tn-2](->H)3->H;磴汝化[15]

[O-2]D;氘氧化[15]
[O-](->H)3;叔氕氧化[15]
[O-2](->H)2;仲氕氧化[15]
[O-3](->H);氕氧化[15]
[O-](<-T);氚氧化[15]
[Ny-2]<-T;氚氤化[15]
[Ny-2];氕氘氤化[15]
[Ny-];氘氤化[15]
[Fd-](->H);氕氲化[15]
[Fn-2](->H);氕氛化[15]
[Fn-](->H)2;仲氕氛化[15]
[Fn-];氘氛化[15]
[Fn-];氘氛化[15]

[Na+];钠[12]
[Fe+6];铁[12]
[Cu+2];铜[12]
[Hc+];锏[12]
[Fe+4];亚铁[12]
[K+];钾[12]
[Nt+2];铙[12]
[Kt+2];鉲[12]
[Nm+3];𨰾[12]
[Mg+4];镁[12]
[Ca+4];钙[12]
[E+2];钟[13]
[N+2];铵[13]
[Tn+3];镫[13]

[Ak+];锵[12]
[Ag+2];银[12]
[Cj+3];钘[12]
[Hz+3];镔[12]
[Bb+];镑[12]
[Bn+2];鉼[12]
[Bm+3];䤮[12]
[Zn+4];锌[12]
[Co+4];钴[12]
[Qm+4];钤[12]
[Ba+4];钡[12]
[Pk+4];铇[12]
[Mn+4];锰[12]
[Ag+2];银[12]
[Ch+2];亚鈨[12]
[Ch+5];鈨[12]
[Ml+5];镙[12]
[Fx+5];锴[12]
[Fx+4];亚锴[12]
[Hg+4];汞[12]
[Pb+6];铅[12]
[Da+7];锾[12]
T->[Ny+]<-T;羏[13]

[C-]-D.T->[C+]-D;甲泾酸甲钏[0]
[C-]-D.[D+2].D-[C-]-D;甲泾酸[0]


C%1#CC#CC#C%1CC(N)C(=O)(OD);苯丙氨酸[0]
C%1=CC=CC=C%1CC(N)C(=O)(OD);萱丙氨酸[0]
C%1#CC(O)#CC#C%1CC(N)C(=O)(OD);酪氨酸[0]
DOC(=O)CCC(N)C(=O)(OD);谷氨酸[0]
CSCCC(N)C(=O)(OD);甲硫氨酸[0]
SCC(N)C(=O)(OD);半胱氨酸[0]
CC(O)C(N)C(=O)(OD);苏氨酸[0]
NC(=N)NCCCC(N)C(=O)(OD);精氨酸[0]
EC(=E)ECCCC(N)C(=O)(OD);亚胂精氨酸
EC(#E)ECCCC(N)C(=O)(OD);硝精氨酸
DC(N)C(=O)(OD);甘氨酸[0]
NTkC(=O)(OD);鱼氨酸[0]
ETkC(=O)(OD);鱼氠酸
TnTkC(=O)(OD);鱼磴氠酸
N%1CCCC%1C(=O)(OD);脯氨酸[0]
E%1CCCC%1C(=O)(OD);脯氠酸
E%1CCCTk%1C(=O)(OD);脯鱼氠酸[2]
E%1CCCQc%1C(=O)(OD);脯昆氠酸[2]
N%1CCCC%1(N)C(=O)(OD);脯二氨酸
NQcC(=O)(OD);昆氨酸[0]
EQcC(=O)(OD);昆氠酸
TnQcC(=O)(OD);昆磴氠酸
C(C)3C(N)C(=O)(OD);亮氨酸[0]
OCC(N)C(=O)(OD);丝氨酸[0]
C%1#CC#CC%2#C%1NC#C%2CC(N)C(=O)(OD);色氨酸[0]
C%1(OD)C(OD)C(OD)(C(OD))OC%1(OD)(C(OD));果糖[0]
C%1(OD)C(OD)C(OD)C(OD)OC%1(OD)(C(OD));葡萄糖;碳原子不再有手性，跟半乳糖无区别[0]
C%1(OD)C(OD)C(OD)C(OD)OC%1(OC%2(OD)C(OD)C(OD)C(OD)OC%2(OD)COD)(C(OD));麦芽糖;碳原子不再有手性，跟乳糖无区别[0]
C%1(OD)C(OD)C(OD)C(OD)(CO)OC%1(OC%2(CO)C(OD)C(OD)C(OD)(CO)O%2);蔗糖[0]
COC%1#CC(C(CCNC(=O)C)#CN%2)#C%2C#C%1;褪黑素[0]
C%1#CC#CC#C%1CC(=O)NC%1C(SC(C)(C)C%2(C(=O)OD))N%2C%1(=O);青霉素G[0]
CC#CCC(=O)NC%1C(SC(C)(C)C%2(C(=O)OD))N%2C%1(=O);青霉素F[0]
C%1#CC#CC#C%1OCC(=O)NC%1C(SC(C)(C)C%2(C(=O)OD))N%2C%1(=O);青霉素V[0]
C%1#CC#CC#C%1C(N)C(=O)NC%1C(SC#C(C)C%2(C(=O)OD))N%2C%1(=O);头孢氨苄[0]
C%1#CC#CC#C%1C(E)C(=O)NC%1C(SC#C(C)C%2(C(=O)OD))N%2C%1(=O);头孢氠苄[0]
Tn%1#>C(->Tn)SC#C%1C(=NOCC(=O)OD)C(=O)NC%1C(SC#C(C#C)C%2(C(=O)OD))N%2C%1(=O);头孢克肟[0]
C%1#CC#CC%2#C%1C(=O)-O-C%2(C%1#CC#C(O)C#C%1)(C%1#CC#C(O)C#C%1)(C%1#CC#C(O)C#C%1);酚酞[0]
C%1C%3CC%2CC%1CC(C%2)C%3;金刚烷;2D分子结构式引擎未优化，请在Tesserxel中查看金刚烷的立体结构。
C%1C%3(CC%4%5C%6)CC%2(C%5)CC%1%6CC(C%3)(C%2)(C%4);超金刚烷;2D分子结构式引擎未优化，请在Tesserxel中查看超金刚烷的立体结构。

Fn<-FnFn->Fn;异氛[0]
[F-]..D[F+];氟化氘;直线形分子
[F+][T+](..[F-])2;氟化氚;平面正三角形分子
Fd->H;氲水[0]
Fd;氲化氘[0]
T->[Fd+](..[T-])Elc4;一氲化二氚
Fn(->H)3;氛氨[0]
Fn(->H);氛水[0]
Fn->Fn;氛化氘;叠氛酸[0]
Fn<-T;氛化氚[0]
O(->H)4;氧氠[0]
O->H;氧氨[0]
O;水[0]
O<-T;氚水[0]
Ny(->H)5;氤烷[0]
Ny(->H)3;氤氠[0]
Ny(->H);氤氨[0]
Ny(<-T)->H;氚氤氨[2]
Ny<-T;氤水[0]
N(->H)4;氮烷[2]
N(->H)4*;泾氮烷[2]
N(->H)2;氮氠[2]
N;氨[0]
N(->H)3<-T;氚氮氠[2]
N(->H)<-T;氚氨[2]
T->N<-T;氮水[0]
Tn(*)2(->H)3;二泾磴烷[2]
Tn(->H)3*;一泾磴烷[2]
Tn(->H)3;磴烷
Tn;磴氠
Tn(<-T)(->H)4;氚磴烷[2]
Tn(<-T)(->H);氚磴氠[2]
Tn(<-T);一氚磴氨[2]
Tn(<-T)2;二氚磴氨[2]
E->H;硝烷
E(->H)3(<-T)*;泾氚硝烷[2]
E(->H)3(<-T);氚硝烷[2]
E(->H)*;一泾硝烷[2]
E(->H)*2;二泾硝烷[2]
E(->H)*3;三泾硝烷[2]
E;氠;正四面体锥形分子[0]
E(<-T);一氚氠
E(<-T)2->H;二氚氠
E(<-T)2;硝氨
Q(<-T)4;磻氠
C(<-T);氚甲烷[2]
C(<-T)(->H)*3;三泾氚甲烷[2]
C(<-T)(->H)*2;二泾氚甲烷[2]
C(<-T)(->H)*;一泾氚甲烷[2]
C(<-T)2(->H)*;泾二氚甲烷[2]
C(<-T)2(->H);二氚甲烷[2]
C(<-T)2;二氚碳氠[2]
C(<-T)3;三氚碳氠[2]
B;甲硼烷
BB;乙硼烷
Bc;磐烷[0]
Qb->Bc<-Qb;二矻烷基磐烷;磐杂丙矻烷[2]
Qb->BB<-Qb;1,2-二矻烷基乙硼烷;硼杂丁矻烷[2]
Qb->Bc(<-Qb)2;三矻烷基磐烷;磐杂异丁矻烷[2]
Ny(->Bc)5;五磐烷基氤烷
Qb%1QbQbQbQbQb%1;环己矻烷[0]
Tk;𥓬烷
Tk(<-T)(->H);一氚𥓬烷[2]
Tk(<-T)2(->H)3;二氚𥓬烷[2]
Tk*;泾𥓬烷;一泾𥓬烷
Tk(*)2;二泾𥓬烷[2]
Tk(*)(<-T)(->H);一泾氚𥓬烷[2]
Tk(*)2(<-T)(->H);二泾氚𥓬烷[2]
Tk(*)3;三泾𥓬烷[2]
Tk(*)4;四泾𥓬烷
Tk(<-T)3;𥓬氨[0]
Tk(<-T);𥓬氠;一氚𥓬氠[0]
Tk(<-T)2;二氚𥓬氠
C(<-T)2;二氚碳氠
C(<-T)3;三氚碳氠
C(*);泾甲烷;一泾甲烷
CLd;㲶甲烷;一㲶甲烷
CFd;氲甲烷;一氲甲烷
C(*)2;二泾甲烷
C(Ld)2;二㲶甲烷
C(Fd)2;二氲甲烷
C(*)3;三泾甲烷
C(Ld)3;三㲶甲烷
C(Fd)3;三氲甲烷
C(*)4;四泾甲烷
C(Ld)4;四㲶甲烷
C(Fd)4;四氲甲烷
C(*)5;五泾甲烷

C(Ld)5;五㲶甲烷;五㲶化碳
C(Fd)5;五氲甲烷;五㲶化碳
C%1#CC#CC#C%1C(C%1#CC#CC#C%1);二苯甲烷
C%1#CC#CC#C%1C(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);三苯甲烷
C%1#CC#CC#C%1C(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);四苯甲烷
C%1#CC#CC#C%1C(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);五苯甲烷
N#C(C%1#CC#CC#C%1)C%1#CC#CC#C%1;二苯腈
Q(*)3(<-*)2;氕化磻[0]

*(->H)4;氕气;正四面体分子[0]
D*(->H)2;氘化氕[0]
[T+][T+](..[T-])2;氚气;正四面体分子[0]
[T-]..D[T+];氚化氘
H<-T;氚化氕[0]
O([T+])2(..[T-])2Elc3;四氚化氧;平面正方形（有3对在绝对垂直平面中的孤电子）
FdS(->>[Fd+2])3(Fd)(..[Fd-2])3;八氲化硫;正十六胞体
C(<-T)2([T+])2(..[T-])2Elc1;六氚化碳;可能是三棱柱锥形（有个孤电子指向锥点外）
Q(<-T)2([T+])3(..[T-])3;八氚化磻;正十六胞体
N([T+])3(..[T-])3Elc1;六氚化氮;正八面体平胞（有两个孤电子在法线两侧）
[F+][F+](..[F-])2Elc3;氟气;平面正三角形（有4对在绝对垂直平面中的孤电子）
Fn(->Fn)3;氛气;三角锥形（有2个孤电子对，连价电子按五胞体分布）
[F+][I+](..[F-])2Elc4;三氟化碘[0]
[I+]([F+])(->>[F+3])(..[F-])5Elc3;七氟化碘[0]
[I+]([F+])(->>[F+3])2(..[F-])8Elc2;十一氟化碘[0]
[I+]([F+])(->>[F+3])3(..[F-])11Elc1;十五氟化碘[0]
[I+]([F+])(..[F-])14(->>[F+3])4;十九氟化碘[0]
Fd-Fd;氲气[0]
Fd-[Xe+2](..[Fd-2])Elc4;二氲化氙[0]
[Xe+4](Fd)2(..[Fd-2])2Elc3;四氲化氙
[Xe+6](Fd)3(..[Fd-2])3Elc2;六氲化氙
[Xe+8](Fd)4(..[Fd-2])4Elc;八氲化氙
[Xe+10](Fd)5(..[Fd-2])5;十氲化氙[0]
F->[Xe+3](..[F-])3Elc4;四氟化氙[0]
[Xe+6](<-F)2(..[F-])6Elc3;八氟化氙[0]
[Xe+9](<-F)3(..[F-])9ElcElc2;十二氟化氙
[Xe+12](<-F)4(..[F-])12Elc1;十六氟化氙
[Xe+15](<-F)5(..[F-])15;二十氟化氙[0]



Tk%1#TkTk#TkTk#Tk%1;𥓬苯[0]
Tk%1#TkC#TkTk#Tk%1;碳杂𥓬苯[0]
Tk%1#TkQc#TkTk#Tk%1;砠杂𥓬苯[0]
Tk%1#TkTk#TkTk#Tk%1->N<-T;𥓬苯羘
Tk%1#TkTk#TkTk#Tk%1->Ny-D;𥓬苯䂩
Tk%1#TkTk#TkTk#Tk%1->Fn;1-氛𥓬苯
C%1#CC#CC#C%1;苯[0]
C%1=CC=CC=C%1;萱[0]
Q%1=QQ=QQ=Q%1;磻萱[0]
Qc%1=QcQc=QcQc=Qc%1;砠萱
Tk%1=TkTk=TkTk=Tk%1;𥓬萱
E%1(->H)=E(->H)E(->H)=E(->H)E(->H)=E%1(->H);硝萱
C%1(*)#C(*)C(*)#C(*)C(*)#C%1*;六泾苯[0]
C%1(*)2=C(*)2C(*)2=C(*)2C(*)2=C%1(*)2;十二泾萱[0]
C%1(<-T)=C(<-T)C(<-T)=C(<-T)C(<-T)=C%1(<-T);六氚萱[0]
C%1(=O)=C(=O)C(=O)=C(=O)C(=O)=C%1(=O);三醌[0]
Qc%1(=O)=Tk(=O)->Qc(=O)=Tk(=O)->Qc(=O)=Tk->%1(=O);三𥓬砠醌[0]
Qc%1(<=Fn)=Qc(<=Fn)Qc(<=Fn)=Qc(<=Fn)Qc(<=Fn)=Qc%1(<=Fn);六砠苯枌[0]
Tk%1(=>Ny)=Tk(=>Ny)Tk(=>Ny)=Tk(=>Ny)Tk(=>Ny)=Tk%1(=>Ny);三𥓬氤醌[0]
Qc%1#QcQc#QcQc#Qc%1;砠苯[0]
Qc%1(<-*)#Qc(<-*)Qc(<-*)#Qc(<-*)Qc(<-*)#Qc%1(<-*);六叠氕砠苯[0]
Qc%1#QcC#QcQc#Qc%1;碳杂砠苯[0]
Qc%1#QcTk#QcQc#Qc%1;𥓬杂砠苯[0]
Qc%1#QcQc#QcQc#Qc%1<-O<-T;砠苯氚酚
Qc%1#QcQc#QcQc#Qc%1<-Fn;砠苯氘馚
Qc%1#Tk->Qc#Tk->Qc#Tk->%1;𥓬砠苯[0]
Tk%1#CC#CC#C%1;𥓬杂苯[0]
Qc%1#CC#CC#C%1;砠杂苯[0]
Qc%1#CC#TkC#C%1;氚𥓬砠对杂苯[0]
C%1#[Qc-]C#C[Tk+]#C%1;𥓬砠对杂苯[0]
Qc%1(*)#Tk(*)->Qc(*)#Tk(*)->Qc(*)#Tk->%1*;六泾𥓬砠苯[0]
Qc%1#TkQc#TkQc#Tk%1;1,3,5-三氚𥓬砠苯[0]
Qc%1#QcQc#QcQc#Qc%1<-C;甲砠苯
C%1#CC#CC#C%1C;甲苯
C%1#CC#CC#C%1CC;乙苯
C%1#CC#CC#C%1C=C;苯乙烜
C%1#CC#CC#C%1C#C;苯乙烯
C%1=CC=CC=C%1C;甲萱
C%1=CC=CC=C%1CC;乙萱
C%1=CC=CC=C%1C=C;萱乙烜
C%1=CC=CC=C%1C#C;萱乙烯

C%1#CC#CC#C%1C%1#CC#CC#C%1;联苯[0]
C%1#CC#CC#C%1C%1=CC=CC=C%1;联苯萱[0]
C%1=CC=CC=C%1C%1=CC=CC=C%1;联萱[0]
C%1#CC#CC#C%1C(=O)2;苯甲酢
C%1#CC#CC#C%1C(=O)(OD);苯甲酸
C%1#CC#CC#C%1CC(=O)(OD);1,2-苯乙酸[2]
C%1#CC#CC#C%1C(=O)(OD)C;1,1-苯乙酸[2]
C%1#CC#CC#C%1C(=O)(OD)2;苯甲泎酸
C%1#CC#CC#C%1CC(=O)(OD)2;苯乙泎酸[2]
C%1(#N)C#CC(#N)C#C%1;对苯䐊
C%1(=O)C=CC(=O)C=C%1;对萱醌
C%1(#N)C=CC(#N)C=C%1;对萱䐊
C%1(=O)C#CC(=O)C#C%1;对苯醌

C%1#CC(C#CC#C%2)#C%2C#C%1;萘[0]
C%1=CC(C=CC=C%2)=C%2C=C%1;萱萘[0]
C%1#CC(C=CC=C%2)#C%2C#C%1;萱苯萘
Tk%1#TkC(Tk#TkTk#Tk%2)#C%2Tk#Tk%1;𥓬萘
Qc%1#QcC(Qc#QcQc#Qc%2)#C%2Qc#Qc%1;砠萘
Qc%1=QcQc(Qc=QcQc=Qc%2)=Qc%2Qc=Qc%1;萱砠萘
Tk%1=TkTk(Tk=TkTk=Tk%2)=Tk%2Tk=Tk%1;萱𥓬萘
C%1#CC(C#CN%2)#C%2C#C%1;吲哚[0]
C%1#CC(C#CNy%2)#C%2C#C%1;氤吲哚
C%1#CC(C(CC(=O)OD)#CN%2)#C%2C#C%1;吲哚乙酸
C%1#CC(C(CC(=O)OD)#CNy%2)#C%2C#C%1;氤吲哚乙酸
C%1#CC(C(CC(<=Fn)(->Fn)OD)#CN%2)#C%2C#C%1;吲哚乙砏酸
E%1#CC(E#CN%2)#C%2E#C%1;嘌呤[0]
E%1#C(E)C(E#CN%2)#C%2E#C%1;腺嘌呤[0]
E%1=C(=O)C(E#CN%2)#C%2EC=%1(E);鸟嘌呤[0]
EC%1C#CE=C(=O)E#%1;胞嘧啶[0]
O=C%1C#CE=C(=O)E=%1;尿嘧啶[0]
O=C%1C(C)#CE=C(=O)E=%1;胸腺嘧啶[0]
E%1#CC(Tn=C=Tn%2)#C%2E#C%1;磴嘌呤[0]
E%1(C)=C(=O)C(E#C(C)N%2)#C%2E(C)=C%1(=O);咖啡因[0]
P(->>O)2(OD)2OP(->>O)2(OD)CC%1C(O)C(O)C(O%1)N%1C(E#CE#C%2E)#C%2E#C%1;二磷酸腺苷[0]
C%1#[C+](<-T)C#C[Q-](<-T)#C%1;4-氚磻杂苯[0]
C%1->Q#C->Q#C->Q#%1;磻碳苯[0]
C%1<-E#C<-E#C<-E#%1;硝碳苯[0]

N%1C#CC#C%1;吡咯
E%1C#CC#C%1;哨咯
O%1C#CC#C%1;呋喃
Ny%1C#CC#C%1;氤吡咯 [2]
Tn%1(<-T)C#CC#C%1;磴吡咯 [2]
Tn%1C#CC#C%1;磴哨咯 [2]
N%1(->H)2C#CC#C%1;氮哨咯 [2]
O%1C=CC=C%1;四氢呋喃
O%1CCCC%1;八氢呋喃
S%1C#CC#C%1;噻吩
S%1C=CC=C%1;四氢噻吩
N%1=CC=CC=C%1;吡啖[2]
Ny%1=>CC=CC=C%1;氤吡啖 [2]
O%1=>CC=CC=C<-%1;氧吡啖 [2]
Tn%1<=CC=CC=C%1;磴吡啖 [2]
E%1<=CC=CC=C->%1;硝吡啖 [2]
E%1#CC#CC#C%1;吡啶
Tk%1<#CC#CC#C%1;𥓬吡啶 [2]
Tn%1#>CC#CC#C%1;磴吡啶 [2]
E%1#CE#CC#C%1;嘧啶
N%1=CN=CC=C%1;嘧啖
O%1C#EC#C%1;𫫇唑[0]
O%1C=EC=C%1;四氢𫫇唑
O%1E#CC#C%1;异𫫇唑
O%1C=NC=C%1;𫫇咱[0]
O%1N=CC=C%1;异𫫇咱
S%1C#EC#C%1;噻唑[0]
S%1C=NC=C%1;噻咱[0]
O%1C=C=C=C=C%1;吡喃[0]
O%1C=CC=CC%1;四氢吡喃
N%1C#EC#C%1;咪唑[0]
N%1C=EC=C%1;四氢咪唑
N%1C=NC=C%1;咪咱[0]
E%1C#EC#C%1;吣唑[0]
E%1C=EC=C%1;四氢吣唑
E%1C=NC=C%1;吣咱[0]

N%1E#CC#C%1;吡唑[0]
N%1E=CC=C%1;四氢吡唑
N%1N=CC=C%1;吡咱[0]
E%1E#CC#C%1;哨唑[0]
E%1E=CC=C%1;四氢哨唑
E%1N=CC=C%1;哨咱[0]
Fd%1->C#EC#C<-%1;嗢唑[0]
Fd%1->C=EC=C<-%1;四氢嗢唑
Fd%1->C=NC=C<-%1;嗢咱[0]
Fd%1->C#CC#C<-%1;嗢喃[0]
Fd%1->C=CC=C<-%1;四氢嗢喃
Fd%1->CCCC<-%1;八氢嗢喃
Ld%1->C#EC#C<-%1;噜唑[0]
Ld%1->C=EC=C<-%1;四氢噜唑
Ld%1->C=NC=C<-%1;噜咱[0]
Ld%1->C#CC#C<-%1;噜喃[0]
Ld%1->C=CC=C<-%1;四氢噜喃
Ld%1->CCCC<-%1;八氢噜喃
Fn%1->C#CC#C%1;吩喃[0]
Fn%1->C=CC=C%1;四氢吩喃[2]
Fn%1->CCCC%1;八氢吩喃[2]
Fn%1->C#EC#C%1;吩唑[0]
Fn%1->C=EC=C%1;四氢吩唑
Fn%1->C=NC=C%1;吩咱[0]
Fn%1->N=>CC=C%1;异吩咱 [1]
Fn%1->E#>CC#C%1;异吩唑 [1]
Fn%1->E=CC=C%1;四氢异吩唑

Fn%1C=NC=C<-%1;反吩咱
Fn%1N=CC=C<-%1;反异吩咱
Fn%1E#CC#C<-%1;反异吩唑
Fn%1E=CC=C<-%1;反四氢异吩唑[2]
Ny%1<-C#CC#C%1;咽喃 [1]
Ny%1<-C=CC=C%1;四氢咽喃 [2]
N%1<-C#CC#C->%1;啖喃 [0]
N%1<-C=CC=C->%1;四氢啖喃 [2]
Ny%1<-C=NC=C%1;咽咱 [1]
N%1<-C=NC=C->%1;啖咱 [1]
Ny%1<-C#EC#C%1;咽唑 [1]
N%1<-C#EC#C->%1;啖唑 [1]
N%1C=NC=NC=%1;1,3,5-三嗪
N%1N=CN=CC=%1;1,2,4-三嗪
E%1C#EC#EC#%1;1,3,5-三咁
E%1E#CE#CC#%1;1,2,4-三咁
E%1C=EC=EC=%1;1,3,5-六氢三咁
E%1E=CE=CC=%1;1,2,4-六氢三咁

O%1C#CC#CC#C%1;氧杂䓬
O%1C=CC=CC=C%1;六氢氧杂䓬[2]
S%1C#CC#CC#C%1;硫杂䓬
S%1C=CC=CC=C%1;六氢硫杂䓬[2]
Ny%1C#CC#CC#C%1;氤杂䓬 
Ny%1C=CC=CC=C%1;六氢氤杂䓬 [2]
N%1C#CC#CC#C%1;氮杂䓬
N%1C=CC=CC=C%1;六氢氮杂䓬[2]
E%1C#CC#CC#C%1;硝杂䓬
E%1C=CC=CC=C%1;六氢硝杂䓬[2]

C%1#CC(E#CC#C%2)#C%2C#C%1;喹啉
C%1#CC(C#EC#C%2)#C%2C#C%1;异喹啉[2]
C%1=CC(N=CC=C%2)=C%2C=C%1;喹㕲
C%1=CC(C=NC=C%2)=C%2C=C%1;异喹㕲[2]
C%1=CC(C=CC=C%2)#C%2C=C%1;累萘;两个芳环共用两个稠碳原子，但电子无法整体在两环间离域。
O%1C#COC#C%1;二𫫇英[0]
O%1C=COC=C%1;二𫫇燕[0]

CS(->>O)C;二甲亚砜
CS(->>O)2C;二甲砜[0]
CS(->>O)3C;二甲高砜[0]

C->Ps(->>O)C;二甲亚硖砜
C->Ps(->>O)2C;二甲硖砜
C->Ps(->>O)3C;二甲高硖砜

C<-Lp(->>O)C;二甲亚硠砜
C<-Lp(->>O)2C;二甲硠砜
C<-Lp(->>O)3C;二甲高硠砜

OCC(O)C%1C(O)#C(O)C(=O)O%1;抗坏血酸;维生素C[0]
E%1#CC(C(=O)(OD))#CC#C%1;烟酸;维生素B3
OCC(O)C%1C(=O)=C(=O)C(=O)O%1;氧化抗坏血酸[0]
C(=O)(OD)CCCCCCCC#CCCCCCCCC;油酸[0]
C(=O)(OD)CCCCCCCC=CCCCCCCCC;氢油酸[0]
C(=O)(OD)CCCCCCCC#CCC#CCCCCC;亚油酸[0]
C(=O)(OD)CCCCCCCC=CCC=CCCCCC;氢亚油酸[0]
C(=O)(OD)CCCCCCCCCCCCCCCCC;硬脂酸[0]
N(=O)(->>O)2OCC(ON(=O)(->>O)2)C(ON(=O)(->>O)2);三氮酸甘油酯;氮化甘油[0]
C(OD)C(OD)C(OD);丙三醇;甘油[0]
C(OP(->>O)2([O-2])OCC[E+2](C)4)C(OC(=O)CCCCCCCC)C(OC(=O)CCCCCCCC);磷脂酰胆碱[0]
[Fe+6](..[C-2]$E)7..[C-2]$E.[D+2](.[D+2])4;八㲴合铁酸
[Fe+4](..[C-2]$E)7..[C-2]$E.[D+2](.[D+2])5;八㲴合亚铁酸
[Fe+4](..[C-]<$Tn)7..[C-]<$Tn(.[D+2])2;八硌合亚铁酸
[Fe+6](..[C-]<$Tn)7..[C-]<$Tn(.[D+2]);八硌合铁酸
{:DED.[Co+4](.DED)6.DED:}[:DE..[Co+4](..ED)6..ED:];八氠合钴[13]

[Pb+6](..[C-2]C)3;三乙基铅[0]
[Hg+4](..[C-2])2;二甲基汞[0]
Cr(=O)4OD;高铬酸[0]
Cr(=O)3(OD)2;铬酸[0]
C#EO;甲腈肟
C=NO;甲醛肟
C(#EO)C;乙腈肟
C(=NO)C;乙醛肟
C(=NO)CC;丙醛肟
C(#EO)CC;丙腈肟
CC(=NO)C;丙酮肟
CC(#EO)C;丙胴肟
CC(=NO)CC;丁酮肟
CC(=NO)(C)C;异丁酮肟
CC(=NO)C(=NO)C;丁二酮肟
CC(#EO)CC;丁胴肟
CC(#EO)(C)C;异丁胴肟
CC(#EO)C(#EO)C;丁二胴肟
CC(#EO)C(=NO)C;丁胴酮肟

T->N=>>Bc;N-氚磐腤
T->N(->C)=>>Bc;N,N-甲基氚磐腤
C(=N)2C(=N)2;四亚胺乙烷[0]
N=>>C=>>N;氮醛腤 [0]
N=>>Bc;磐腤
N=>>B;硼腤
N=>>Qb;矻腤
N=>>Q;磻腤
N=>>Qc;砠腤
N=>>C(->H);甲腤
N=>>C(->H)C(->H)<<=N;乙二腤 [0]
E=CC=E;乙二亚胂[0]
Tn=>CC<=Tn;乙二滕[0]
Tn=>QQ<=Tn;乙磻二滕
Tn=>QbQb<=Tn;乙矻二滕
Tn=>Tk(->H)Tk(->H)<=Tn;乙𥓬二滕
CN(C)=>>C(->H);N,N-二甲基甲腤
CN(C)=>>C(->H);N,N-二甲基甲腤
N=>>C(->H)C;乙腤
N=>>C(->H)CC;丙腤
C(N=>>Q);甲磻腤
CN(=>>Q)C;二甲磻腤
C(N=>>Q)C;乙磻腤
C(N=>>Q)CC;丙磻腤
C(N=>>Qc);甲砠腤
CN(=>>Qc)C;二甲砠腤
C(N=>>Qc)C;乙砠腤
C(N=>>Qc)CC;丙砠腤
C(<<=Fd)(->>O)(-Fd)C(<<=Fd)(->>O)(-Fd);乙二塭
C(<<=Fd)(-Fd)C(<<=Fd)(-Fd);乙二亚塭
Fd=>>C(Fd)OD;亚塭酸
Fd=>>C(->>O)(Fd)OD;塭酸

Ny<=E=>Ny;胙化氘
Ny<=E(=>Ny)OD;胙酸
X-E(=>Ny)2;X胙
Ny<=E(=>Ny)E(=>Ny)2;联胙
Ny<=E(=>Ny)C#CE(=>Ny)2;二胙乙烯
Ny<=E(=>Ny)C=CE(=>Ny)2;二胙乙烜
Ny<=Tk(=>Ny)<-C<$C;𥓬胙乙炔
Ny<=Tn(=>Ny)->C$>C;磴胙乙炔

Ny<=Tk=>Ny;𥓬胙化氚
Ny<=Tk(=>Ny)<-FnD;𥓬胙酸
Ny<=Tk(=>Ny)<-C;甲𥓬胙
Ny<=Tk(=>Ny)<-CC;乙𥓬胙
Ny<=Tk(=>Ny)<-CCC;丙𥓬胙
Ny<=Tk(=>Ny)<-C<-C<-C;3-氚丙𥓬胙

Ny<=Tn=>Ny;磴胙化氕
Ny<=Tn(=>Ny)->O->H;磴胙酸
Ny<=Tn(=>Ny)->C;甲磴胙
Ny<=Tn(=>Ny)->CC;乙磴胙
Ny<=Tn(=>Ny)->CCC;丙磴胙
Ny<=Tn(=>Ny)->C->C->C;3-氕丙磴胙

PPP;三膦
PP;联膦
P(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);二苯基膦[0]
P(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);三苯基膦
G(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);三苯基脽[0]
G(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1)(C%1#CC#CC#C%1);四苯基脽[0]
G(C)4;四甲基脽[0]
P(C)3;三甲基膦[0]
GGG;三脽
GG;联脽
CP(->>O)2(OD)2;甲基膦酸[0]
CG(->>O)(OD)3;甲基脽酸[0]
CG(C)(->>O)(OD)2;二甲基脽酸[0]
CG(C)2(->>O)(OD);三甲基脽酸[0]
C<-Ld(->>O)3->C;二甲高磠
C<-Ld(->>O)2->C;二甲磠[0]
C<-Ld(->>O)->C;二甲亚磠[0]
C<-Ld(->>O)3->O->H;甲高磠酸
C<-Ld(->>O)2->O->H;甲磠酸[0]
C<-Ld(->>O)->O->H;甲亚磠酸
C<-Ld->C;二甲琭;甲琭[0]
CSC;二甲硫醚;甲硫醚[0]
CC(=S)C;丙硫酮[0]
C<-C(<=Lp)C;丙硠酮[0]
X->Lp(->>O)3;硠基[0]
X->Lp(->>O)4;高硠基
C(<=Fn)(->Fn)(->Lp(->>O)3)<-C;1-硠基乙砏
C(<=Fn)(->Fn)C->Lp(->>O)3;2-硠基乙砏
C(<=Lp)(->Lp)(->Lp(->>O)3)<-C;1-硠基硠代乙砏
C(<=Lp)(->Lp)C->Lp(->>O)3;2-硠基硠代乙砏
C(<=Lp)(->Lp)C;硠代乙砏[0]
O%1P%3(->>O)OP%2(->>O)OP%1(->>O)OP(->>O)(O%2)O%3;十氧化四磷;五氧化二磷，2D分子结构式引擎未优化，请在Tesserxel中查看十氧化四磷的立体结构。[0]
O%1P%3(->>O)2OP%2(->>O)2OP%1(->>O)2OP(->>O)2(O%2)O%3;十四氧化四磷;七氧化二磷，2D分子结构式引擎未优化，请在Tesserxel中查看十四氧化四磷的立体结构。[0]
O%1G%3(->>O)(OG%4%5(->>O)O%6)OG%2(->>O)(O%5)OG%1%6(->>O)OG(->>O)(O%3)(O%2)(O%4);十五氧化五碓;三氧化碓，2D分子结构式引擎未优化，请在Tesserxel中查看十五氧化五碓的立体结构。[0]

O$O;氧气;有孤电子的四键结构，顺磁性物质[0]
Ny$Ny;氤气;有孤电子的四键结构，顺磁性物质[0]
O$Ny;一氧化氤;有孤电子的四键结构，顺磁性物质[0]
N$N;氮气;有孤电子的四键结构，顺磁性物质[0]
Tn$Ny;氤化磴;有孤电子的四键结构，顺磁性物质[0]
Ny$Fn;氛化氤;有孤电子的四键结构，顺磁性物质[0]
`;
const rawdata = data.split("\n").filter(e => e && !e.trim().startsWith("//")).map(e => [Number(e.match(/\[([0-9]+)\]$/)?.[1] ?? 1), ...e.replace(/\[([0-9]+)\]$/, "").split(";")]);
const genIon = (a: string, b: string, v1: number, v2: number) => {
    if (v1 > v2) return genIon(b, a, v2, v1);
    if (v1 === v2) return a + "." + b;
    if (v1 * 2 === v2) return a + "." + b + "." + a;
    if (v1 * 3 === v2) return a + "." + b + "(." + a + ")2";
    if (v1 * 4 === v2) return a + "." + b + "(." + a + ")3";
    if (v1 * 5 === v2) return a + "." + b + "(." + a + ")4";
    if (v1 * 6 === v2) return a + "." + b + "(." + a + ")5";
    if (v1 * 7 === v2) return a + "." + b + "(." + a + ")6";
    if (v1 * 3 === v2 * 2) return a + "." + a + "(." + b + ")2." + a;
    if (v1 * 5 === v2 * 2) return `${b}(.${a})2.${a}.${b}(.${a})2`;
    if (v1 * 4 === v2 * 3) return `${a}(.${b})2.${a}.${a}(.${b})2`;
};
const metals = rawdata.filter(e => e[0] === 12);
const genMetaIons = (s: string, n: string, valent: number, rank: number) => {
    for (let [r, ms, mn] of metals as string[][]) {
        const mv = ms.match(/\+(.*)\]/)[1];
        database.unshift([rank, genIon(s, ms, valent, Number(mv) || 1), n + mn]);
    }
};
const database = rawdata.slice(0);
// [rank, smile, ...name]
for (const data of (rawdata as [number, string, string][])) {
    const [r, s, n] = data;
    if (n.endsWith("酸")) {
        let chargeCount = s.includes("OD)2") ? 4 : s.includes("OD)3") ? 6 : s.includes("OD)4") ? 8 : s.includes("OD)5") ? 10 : s.includes("OD") ? 2 : 0;
        let hydrongenCount = chargeCount >> 1;
        let deltaH = s.includes("->O->H)2") ? 2 : s.includes("->O->H)3") ? 3 : s.includes("->O->H)4") ? 4 : s.includes("->O->H)5") ? 5 : s.includes("->O->H") ? 1 : 0;
        hydrongenCount += deltaH; chargeCount += deltaH;
        if (s.includes("OD") && !s.includes("<-Fd->H") && !n.includes("油酸")) {
            if (chargeCount === 4) {
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + ".[Zn+4]", n + "锌"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Bn+2])2", n + "鉼"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Bb+])4", n + "镑"]);
            }
            if (chargeCount === 8) {
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Zn+4])2", n + "锌"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Bn+2])4", n + "鉼"]);
            }
            if (chargeCount === 5) {
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Fx+5])", n + "锴"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Ml+5])", n + "镙"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Ch+5])", n + "鈨"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Fx+4].[K+])", n + "亚锴钾"]);
            }
            if (chargeCount === 10) {
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Fx+5])2", n + "锴"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Ml+5])2", n + "镙"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Ch+5])2", n + "鈨"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + "(.[Fx+4])2.[K+]", n + "亚锴钾"]);
            }
            if (chargeCount === 6) {
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + ".[Fx+4](.[K+])2", n + "亚锴钾"]);
            }
            if (chargeCount === 7) {
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + ".[Fx+5](.[K+])2", n + "锴钾"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + ".[Ml+5](.[K+])2", n + "镙钾"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + ".[Ch+5](.[K+])2", n + "鈨钾"]);
                database.unshift([r - 1, s.replaceAll("OD", "[O-2]").replaceAll("->O->H", "->[O-]") + ".[Da+7]", n + "锾"]);
            }
            database.unshift([r + 2, s.replaceAll("OD", "OC").replaceAll("->O->H", "->O->C").replaceAll("<-FnD", "<-FnC"), n + ["", "", "二", "三", "四", "五"][hydrongenCount] + "甲酯"]);
            database.unshift([r + 3, s.replaceAll("OD", "OC(=O)").replaceAll("->O->H", "->O->C=O").replaceAll("<-FnD", "<-FnC=O"), (n + "甲酸酐").replace("甲酸甲酸酐", "甲酸酐")]);
            database.unshift([r + 2, s.replaceAll("OD", "[O-2](.[Na+]).[Na+]").replaceAll("->O->H", "->[O-].[Na+]").replaceAll("<-FnD", "<-[Fn-2](.[Na+])2"), n + "钠"]);
            database.unshift([r + 2, s.replaceAll("OD", "[O-2](.[K+]).[K+]").replaceAll("->O->H", "->[O-].[K+]").replaceAll("<-FnD", "<-[Fn-2](.[K+])2"), n + "钾"]);
            database.unshift([r + 2, s.replaceAll("OD", "[O-2](.[Hc+]).[Hc+]").replaceAll("->O->H", "->[O-].[Hc+]").replaceAll("<-FnD", "<-[Fn-2](.[Hc+])2"), n + "锏"]);
            database.unshift([r + 2, s.replaceAll("OD", "[O-2](.[Ny+](<-T)2).[Ny+](<-T)2").replaceAll("->O->H", "->[O-].[Ny+](<-T)2").replaceAll("<-FnD", "<-[Fn-2](.[Ny+](<-T)2)2"), n + "羏"]);
            database.unshift([r + 2, s.replaceAll("OD", "[O-2](.T->[C+]-D).T->[C+]-D").replaceAll("->O->H", "->[O-].T->[C+]-D").replaceAll("<-FnD", "<-[Fn-2](.T->[C+]-D)2"), n + "甲钏"]);
            if (!s.includes("->O->H") && !s.includes("<-FnD")) {
                database.unshift([r + 2, s.replaceAll("OD", "[O-2](.T->[C+2]<-T)").replaceAll("<-FnD", "<-[Fn-2](.T->[C+2]<-T)"), n + "甲二钏"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2](.T->[C+][C+]<-T)").replaceAll("<-FnD", "<-[Fn-2](.T->[C+][C+]<-T)"), n + "-1,2-乙二钏"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].T->[C+2](<-T)C").replaceAll("<-FnD", "<-[Fn-2](.T->[C+2](<-T)C)"), n + "-1,1-乙二钏"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].[Nt+2]"), n + "铙"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].[Kt+2]"), n + "鉲"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].[Cu+2]"), n + "铜"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].[Ch+2]"), n + "亚鈨"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].[Bn+2]"), n + "鉼"]);
                database.unshift([r + 2, s.replaceAll("OD", "[O-2].[Ag+2]"), n + "银"]);
                if (s.includes("(OD)2")) {
                    database.unshift([r + 1, s.replaceAll("(OD)2", "([O-2])([O-2].[Fe+4])"), n + "亚铁"]);
                    database.unshift([r + 1, s.replaceAll("(OD)2", "([O-2])([O-2].[Mg+4])"), n + "镁"]);
                    database.unshift([r + 1, s.replaceAll("(OD)2", "([O-2])([O-2].[Mn+4])"), n + "锰"]);
                    database.unshift([r + 1, s.replaceAll("(OD)2", "([O-2])([O-2].[Pk+4])"), n + "铇"]);
                    database.unshift([r + 1, s.replaceAll("(OD)2", "([O-2])([O-2].[Fx+4])"), n + "亚锴"]);
                } if (s.includes("(OD)3")) {
                    database.unshift([r + 1, s.replaceAll("(OD)3", "([O-2])2([O-2].[Fe+6])"), n + "铁"]);
                    database.unshift([r + 1, s.replaceAll("(OD)3", "([O-2])2([O-2].[Al+6])"), n + "铝"]);
                }
            }
            database.unshift([r + 2, s.replaceAll("OD", "O->H"), n.slice(0, -1) + "涪酸"]);
            if (s.includes("<-FnD")) {
                database.unshift([r + 2, s.replaceAll("OD", "O->H").replaceAll("<-FnD", "<-Fn(->H)2"), (n.slice(0, -1) + "𣸣涪酸").replaceAll("羒𣸣", "𣸣")]);
            }
            database.unshift([r + 1, s.replaceAll("OD", "Fn->H"), (n.slice(0, -1) + "汾酸").replace("砏汾酸", "玢酸")]);
            if (n.includes("次") || n.includes("原") || n.includes("铬") || n.includes("塭")) continue;
            database.unshift([r + 2, s.replaceAll("OD", "N"), n.slice(0, -1) + "酰胺"]);
            if (n !== "亚腽酸") database.unshift([r + 2, s.replaceAll("OD", "Fd"), (n.slice(0, -1) + "酰氲").replace("韫酰氲", "塭")]);
            database.unshift([r + 3, s.replaceAll("OD", "E"), n.slice(0, -1) + "酰胂"]);
            database.unshift([r + 4, s.replaceAll("OD", "C=>C#>Tn"), n.slice(0, -1) + "酰乙膯"]);
            database.unshift([r + 4, s.replaceAll("OD", "C<=C<#Ny"), n.slice(0, -1) + "酰乙欭"]);
            database.unshift([r + 4, s.replaceAll("OD", "Ny<-T"), n.slice(0, -1) + "酰氚䂩"]);
        }
        if (s.includes("->O->H")) {
            if (!s.includes("OD") && !s.includes("<-FnD")) {
                database.unshift([r + 1, s.replaceAll("->O->H", "->O->C"), n + ["", "", "二", "三", "四", "五"][hydrongenCount] + "甲酯"]);
                database.unshift([r + 1, s.replaceAll("->O->H", "->[O-].[Na+]"), n + "钠"]);
                database.unshift([r + 1, s.replaceAll("->O->H", "->[O-].[Hc+]"), n + "锏"]);
                database.unshift([r + 1, s.replaceAll("->O->H", "->[O-].[K+]"), n + "钾"]);
                database.unshift([r + 3, s.replaceAll("->O->H", "->[O-].[Ny+](<-T)2"), n + "羏"]);
                database.unshift([r + 3, s.replaceAll("->O->H", "->[O-].T->[C+]-D"), n + "甲钏"]);
            }
            database.unshift([r + 2, s.replaceAll("->O->H", "->N<-T"), n.slice(0, -1) + "酰羘"]);
            database.unshift([r + 2, s.replaceAll("->O->H", "->Ny"), n.slice(0, -1) + "酰䂩"]);
            database.unshift([r + 3, s.replaceAll("->O->H", "->C=>C#>Tn"), n.slice(0, -1) + "酰乙膯"]);
        }
        if (s.includes("<-FnD") && n.endsWith("羒酸")) {
            database.unshift([r, s.replaceAll("<-FnD", "<-Fd->H"), n.slice(0, -2) + "蕰酸"]);
            database.unshift([r, s.replaceAll("<-FnD", "<-O(->H)3"), n.slice(0, -2) + "洺酸"]);
            if (!s.includes("OD")) {
                if (!s.includes("->O->H")) {
                    database.unshift([r + 1, s.replaceAll("<-FnD", "<-[Fd-].[Na+]"), n.slice(0, -2) + "蕰酸钠"]);
                    database.unshift([r + 1, s.replaceAll("<-FnD", "<-[Fd-].[K+]"), n.slice(0, -2) + "蕰酸钾"]);
                    database.unshift([r + 1, s.replaceAll("<-FnD", "<-[O-3](.[Na+])3"), n.slice(0, -2) + "洺酸钠"]);
                    database.unshift([r + 1, s.replaceAll("<-FnD", "<-[O-3].[Hz+3]"), n.slice(0, -2) + "洺酸镔"]);
                    database.unshift([r + 1, s.replaceAll("<-FnD", "<-[O-3].[Cj+3]"), n.slice(0, -2) + "洺酸钘"]);
                    database.unshift([r + 1, s.replaceAll("<-FnD", "<-[O-3].[Bm+3]"), n.slice(0, -2) + "洺酸䤮"]);
                }
                database.unshift([r, s.replaceAll("<-FnD", "<-Fn(->H)2"), (n.slice(0, -1) + "𣸣酸").replaceAll("羒𣸣", "𣸣")]);
            }
        }

    }
    if (n.startsWith("X")) {
        data[0] = r + 12;
        let bn = n.slice(1);
        let containC = s.match(/^X<?[\-=#]>?C/);
        database.unshift([r, s.replace("X", "C"), (containC ? "乙" : "甲") + bn]);
        database.unshift([r, s.replace("X", "CC"), (containC ? "丙" : "乙") + bn]);
        database.unshift([r + 2, s.replace("X", "C%1#CC#CC#C%1C"), "苯" + (containC ? "乙" : "甲") + bn]);
        database.unshift([r + 2, s.replace("X", "C%1=CC=CC=C%1C"), "萱" + (containC ? "乙" : "甲") + bn]);
        const base = s.replace("X", "");
        database.unshift([r + 4, "C(" + base + ")C(" + base + ")", "乙二" + bn]);

        if (s.startsWith("X-") || s.startsWith("X<-") || s.startsWith("X->")) {
            bn = bn.replace("醇", "酚");
            database.unshift([r + 2, "C%1=CC=CC=C%1" + base, "萱" + bn]);
            database.unshift([r + 3, "C%1=CC(" + base + ")=CC=C%1" + base, "对萱" + bn]);
        }
        if (s.startsWith("X-") && s[2] !== ">") {

            database.unshift([r + 2, "C%1#CC(C#CC#C%2)#C%2C#C%1" + base, "β-萘" + bn]);
            database.unshift([r + 2, "C%1#CC(C#CC#C%2)#C%2C(" + base + ")#C%1", "α-萘" + bn]);
            database.unshift([r + 2, "C%1=CC(C=CC=C%2)=C%2C=C%1" + base, "β-萱萘" + bn]);
            database.unshift([r + 2, "C%1=CC(C=CC=C%2)=C%2C(" + base + ")=C%1", "α-萱萘" + bn]);
            database.unshift([r + 1, "C%1#CC#CC#C%1" + base, "苯" + bn]);
            database.unshift([r + 2, "Qc%1#Tk->Qc#Tk->Qc#Tk->%1" + base, "Tk-𥓬砠苯" + bn]);
            database.unshift([r + 2, "Tk%1#Qc<-Tk#Qc<-Tk#Qc<-%1" + base, "Qc-𥓬砠苯" + bn]);
            database.unshift([r + 3, "Tk%1#Qc<-Tk(" + base + ")#Qc<-Tk#Qc<-%1" + base, "对𥓬砠苯" + bn]);
            database.unshift([r + 2, "C%1#CC(" + base + ")#CC#C%1" + base, "对苯" + bn]);
        }
        if (s.startsWith("X<-")) {
            database.unshift([r + 2, "Qc%1#QcQc#QcQc#Qc%1" + base, "砠苯" + bn]);
            database.unshift([r + 2, "Qc%1#QcQc#QcQc(" + base + ")#Qc%1" + base, "邻砠苯" + bn]);
            database.unshift([r + 2, "Qc%1#QcQc#Qc(" + base + ")Qc#Qc%1" + base, "间砠苯" + bn]);
            database.unshift([r + 2, "Tk%1#QcTk#QcTk#Qc%1" + base, "3,5-二氚𥓬砠苯" + bn]);
        }
        if (s.startsWith("X->") && s[3] !== ">") {
            database.unshift([r + 2, "Tk%1#TkTk#TkTk#Tk%1" + base, "𥓬苯" + bn]);
            database.unshift([r + 2, "Tk%1#TkTk#TkTk(" + base + ")#Tk%1" + base, "邻𥓬苯" + bn]);
            database.unshift([r + 2, "Tk%1#TkTk#Tk(" + base + ")Tk#Tk%1" + base, "间𥓬苯" + bn]);
            database.unshift([r + 2, "Qc%1#TkQc#TkQc#Tk%1" + base, "2,4,6-三氚𥓬砠苯" + bn]);
        }
    }
    if (n.endsWith("化")) {
        const valent = s.includes("-]") ? 1 : s.includes("-2]") ? 2 : s.includes("-3]") ? 3 : s.includes("-4]") ? 4 : 0;
        genMetaIons(s, n, valent, 1);
        if (r === 14) {
            database.unshift([1, genIon(s, "T->[C+]-D", valent, 1), n + "甲钏"]);
            database.unshift([1, genIon(s, "T->[Q+](<-T)2", valent, 1), n + "甲磻钏"]);
            database.unshift([2, genIon(s, "T->[C+2]<-T", valent, 2), n + "甲二钏"]);
            database.unshift([3, genIon(s, "T->[C+3](<-T)2", valent, 3), n + "甲三钏"]);
            database.unshift([2, genIon(s, "T->[C+4](<-T)3", valent, 4), n + "甲四钏"]);
            database.unshift([3, genIon(s, "T->[C+5](<-T)4", valent, 5), n + "甲五钏"]);
            database.unshift([1, genIon(s, "[Ny+](<-T)2", valent, 1), n + "羏"]);
            database.unshift([2, genIon(s, "[Ny+2](<-T)2", valent, 2), n + "氕羏"]);
            database.unshift([3, genIon(s, "[N+3](<-T)3", valent, 3), n + "氚三铵"]);
            database.unshift([1, genIon(s, "D-[N+2]-D", valent, 2), n + "铵"]);
            database.unshift([2, genIon(s, "H<-[N+]-D", valent, 1), n + "氕铵"]);
            database.unshift([1, genIon(s, "D-[Tk+]-D", valent, 1), n + "𥓬钟"]);
            database.unshift([1, genIon(s, "D-[E+2]-D", valent, 2), n + "钟"]);
            database.unshift([2, genIon(s, "H<-[E+]-D", valent, 1), n + "氕钟"]);
            database.unshift([1, genIon(s, "D-[Tn+3]-D", valent, 3), n + "镫"]);
            database.unshift([2, genIon(s, "{:DED.[Co+4](.DED)6.DED:}[:DE..[Co+4](..ED)6..ED:]", valent, 4), n + "八氠合钴"]);
            database.unshift([2, genIon(s, "{:T->Q(<-T)2<-T.[Co+4](.T->Q(<-T)3)6.T->Q(<-T)2<-T:}[:Q(<-T)4..[Co+4](..Q(<-T)4)6..Q(<-T)4:]", valent, 4), n + "八磻氠合钴"]);
        }
    }
    if (n.endsWith("腤")) {
        if (!n.includes("磐")) database.unshift([r, s.replace("=>>", "=>").replaceAll("N", "Tn"), n.replace("腤", "滕").replaceAll("N", "Tn")]);
        if (!n.includes("硼") && !n.includes("磐")) database.unshift([r, s.replace("=>>", "=").replaceAll("N", "E"), n.replace("腤", "亚胂").replaceAll("N", "E")]);
        if (!n.includes("矻") && !n.includes("硼") && !n.includes("磐")) database.unshift([r, s.replace("=>>", "<=").replaceAll("N", "Tk"), n.replace("腤", "亚𥓬胂").replaceAll("N", "Tk")]);
    }
    if (r === 12) {
        // 金属氢化物
        const valent = s.includes("+]") ? 1 : s.includes("+2]") ? 2 : s.includes("+3]") ? 3 : s.includes("+4]") ? 4 : 0;
        database.unshift([2, genIon(s, "[H-3]", valent, 3), "氕化" + n]);
        database.unshift([2, genIon(s, "[D-2]", valent, 2), "氘化" + n]);
        database.unshift([2, genIon(s, "[T-]", valent, 1), "氚化" + n]);
        database.unshift([2, genIon(s, "[H-]*->H", valent, 1), "叠氕化" + n]);
        database.unshift([2, genIon(s, "[H-][H-]", valent, 2), "泾化" + n]);
        database.unshift([1, genIon(s, "E$[C-2]..[Fe+6](..[C-2]$E)6..[C-2]$E", valent, 10), "铁㲴化" + n]);
        database.unshift([1, genIon(s, "Tn$>[C-]..[Fe+6](..[C-]<$Tn)6..[C-]<$Tn", valent, 2), "铁硌化" + n]);
        database.unshift([1, genIon(s, "Tn$>[C-]..[Fe+4](..[C-]<$Tn)6..[C-]<$Tn", valent, 4), "亚铁硌化" + n]);
    }
    if (s.startsWith("C->C") || s.startsWith("CC") || s.startsWith("C=C") || s.startsWith("C#C") || s.match(/^[C=][C=][C=]/)) {
        if(n.includes("素")) continue;
        const nn = n.match(/^[1-9]/) ? "-" + n : n;
        const ss = s.startsWith("CC(=>") ? "C->" + s.slice(1) : s;
        database.unshift([3, "Ld" + s, "1-㲶" + nn]);
        database.unshift([3, "Fd" + s, "1-氲" + nn]);
        database.unshift([3, "F->" + ss, "1-氟" + nn]);
        if (!n.startsWith("1-氚")) database.unshift([3, "T->" + ss, "1-氚" + nn]);
        database.unshift([3, "Fn<-" + s, "1-氛" + nn]);
        if (s !== "CC") {
            database.unshift([3, "H<-N(->H)3" + s, "1-肗" + nn]);
            database.unshift([3, "Fn->" + ss, "1-氘馚" + nn]);
            database.unshift([3, "T->N<-" + s, "1-羘" + nn]);
            database.unshift([3, "Fn" + s, "1-馚" + nn]);
            database.unshift([4, "Ny<-" + s, "1-䂩" + nn]);
        }
        if (s.match(/^[C=][C=][C=]/) && s !== "C=C") {
            const ss = s.startsWith("C=C") ? "C=C(X)" + s.slice(3) : s.startsWith("CCC") ? "CC(X)C" + s.slice(3) : s.startsWith("CC=") ? "CC(X)=" + s.slice(3) : "CC(X)" + s.slice(3);
            database.unshift([2, ss.replace("X", "Ld"), "2-㲶" + nn]);
            database.unshift([2, ss.replace("X", "Fd"), "2-氲" + nn]);
            database.unshift([2, ss.replace("X", "N(->H)4"), "2-肗" + nn]);
            if (!s.startsWith("C=C=")) {
                database.unshift([2, ss.replace("X", "<-F"), "2-氟" + nn]);
                database.unshift([2, ss.replace("X", "<-T"), "2-氚" + nn]);
                database.unshift([2, ss.replace("X", "<-Fn"), "2-氘馚" + nn]);
                if (!s.startsWith("CC=>")) {
                    database.unshift([2, ss.replace("X", "->Fn"), "2-氛" + nn]);
                    database.unshift([2, ss.replace("X", "->N<-T"), "2-羘" + nn]);
                    database.unshift([3, ss.replace("X", "->Ny"), "2-䂩" + nn]);
                }
            }
            database.unshift([2, ss.replace("X", "Fn"), "2-馚" + nn]);
        }
    }
    if (s.endsWith("C(N)C(=O)(OD)")) {
        database.unshift([r + 2, s + "2", n.replace("酸", "泎酸")]);
        database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "C(N)C(<=Fn)(->Fn)(OD)"), n.replace("氨酸", "氨砏酸")]);
        database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "C(N)C(<=Fn)(->Fn)(Fn->H)"), n.replace("氨酸", "氨玢酸")]);
        database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "C(N)2C(=O)(OD)"), n.replace("氨酸", "二氨酸")]);
        database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "C(E)C(=O)(OD)"), n.replace("氨", "氠")]);
        database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "C(E)2C(=O)(OD)"), n.replace("氨酸", "二氠酸")]);
        database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "C(E)(N)C(=O)(OD)"), n.replace("氨酸", "氨氠酸")]);
        if (n !== "甘氨酸") {
            database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "Tk(N)C(=O)(OD)"), n.replace("氨酸", "-鱼氨酸")]);
            database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "Tk(E)C(=O)(OD)"), n.replace("氨酸", "-鱼氠酸")]);
            database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "Qc(N)C(=O)(OD)"), n.replace("氨酸", "-昆氨酸")]);
            database.unshift([r + 2, s.replace("C(N)C(=O)(OD)", "Qc(E)C(=O)(OD)"), n.replace("氨酸", "-昆氠酸")]);
        }
        if (n !== "丙氨酸") {
            database.unshift([r + 3, s.replace("C(N)C(=O)(OD)", "C(N)(C)C(=O)(OD)"), n.replace("氨酸", "-丙氨酸")]);
        }
    }
    if (n.endsWith("基")) {
        const prefix = s.startsWith("X->") || s.startsWith("X<-") ? 1 : 2;
        database.unshift([r, "C" + s.slice(prefix), n + "甲烷"]);
        database.unshift([r, "CC" + s.slice(prefix), n + "乙烷"]);
        database.unshift([r, "C=CC=C" + s.slice(prefix), n + "-1,3-丁二烜"]);
        database.unshift([r, "CCCCC" + s.slice(prefix), n + "戊烷"]);
        database.unshift([r + 1, "C%1CCCC%1" + s.slice(prefix), n + "环戊烷"]);
        database.unshift([r + 1, "C%1CCCCC%1" + s.slice(prefix), n + "环己烷"]);
        database.unshift([r, "C%1=CC=CC=C%1" + s.slice(prefix), n + "萱"]);
        if (s.startsWith("X-") && s[2] !== ">") {
            database.unshift([r, "C#CC#C" + s.slice(2), n + "丁二烯"]);
            database.unshift([r, "C%1#CC(C#CC#C%2)#C%2C#C%1" + s.slice(2), "β-" + n + "萘"]);
            database.unshift([r, "C%1#CC(C#CC#C%2)#C%2C(" + (s.slice(2)) + ")#C%1", "α-" + n + "萘"]);
            database.unshift([r, "C%1#CC#CC#C%1" + s.slice(2), n + "苯"]);
        }
    }
    if (s.startsWith("Fd%1") ||s.startsWith("Ld%1") || s.startsWith("Fn%1") || (s[1] === "%" && (n.endsWith("咯") || n.endsWith("喃") || n.endsWith("啶") || n.endsWith("唑") || n.endsWith("咱") || n.endsWith("䓬")) && !n.includes("异"))) {
        const hasD = n.includes("四氢") ? 4 : n.includes("八氢") ? 8 : 0;
        const o = s.startsWith("Fd%1->") ||s.startsWith("Ld%1->") || s.startsWith("Fn%1->") ? 3 : s.startsWith("Fn%1") ? 1 : 0;
        const prefixD = n.includes("四氢") ? "四氢" : n.includes("八氢") ? "八氢" : "";
        if ((!s.startsWith("Fd%1->") && !s.startsWith("Ld%1->") && !s.startsWith("Fn%1->")) || hasD) database.unshift([r, s.replace(/C/g, "Tk"), prefixD + "𥓬环" + n.replace(/.氢/, "")]);
        database.unshift([r, s.replace(/C/g, "Qc"), prefixD + "砠环" + n.replace(/.氢/, "")]);
        if (hasD) {
            if ((!s.startsWith("Fd%1->") &&!s.startsWith("Ld%1->") && !s.startsWith("Fn%1->")) || hasD > 4) database.unshift([r, s.replace(/C([<]?[-]?[>]?\%[0-9])/g, "E$1(->H)2").replace(/C/g, "E(->H)2"), prefixD + "硝环" + n.replace(/.氢/, "")]);
            database.unshift([r, s.replace(/C/g, "Q"), prefixD + "磻环" + n.replace(/.氢/, "")]);
            if (hasD > 4) database.unshift([r, s.replace(/C/g, "Qb"), prefixD + "矻环" + n.replace(/.氢/, "")]);
        }
        if (s[3 + o] === "C") {
            if (o < 3) {
                database.unshift([r + 1, s.slice(0, 4 + o) + "(C)" + s.slice(4 + o), "2-甲基" + n]);
                database.unshift([r + 1, s.slice(0, 4 + o) + "(E$>>C)" + s.slice(4 + o), "2-异肿基" + n]);
                database.unshift([r + 1, s.slice(0, 4 + o) + "(CCC(->Fn)(<=Fn))" + s.slice(4 + o), "2-丙砏基" + n]);
                database.unshift([r + 1, s.slice(0, 4 + o) + "(Ld)" + s.slice(4 + o), "2-㲶" + n]);
                database.unshift([r + 1, s.slice(0, 4 + o) + "(Fd)" + s.slice(4 + o), "2-氲" + n]);
                database.unshift([r + 2, s.slice(0, 4 + o) + "(C#E)" + s.slice(4 + o), n + "-2-" + "甲䃔"]);
                database.unshift([r + 3, s.slice(0, 4 + o) + "(E#>>C)" + s.slice(4 + o), n + "-2-" + "甲异䃔"]);
                database.unshift([r + 2, s.slice(0, 4 + o) + "(C#Tk<-T)" + s.slice(4 + o), n + "-2-" + "甲𥓬䃔"]);
                database.unshift([r + 3, s.slice(0, 4 + o) + "(Tk#>C<-T)" + s.slice(4 + o), n + "-2-" + "甲异𥓬䃔"]);
                database.unshift([r + 2, s.slice(0, 4 + o) + "(C#Tn)" + s.slice(4 + o), n + "-2-" + "甲磴䃔"]);
            }
            if (hasD) {
                database.unshift([r, s.slice(0, 4 + o) + "(->Bc)" + s.slice(4 + o), "2-磐烷基" + n]);
                database.unshift([r, s.slice(0, 4 + o) + "(->B)" + s.slice(4 + o), "2-硼烷基" + n]);
                database.unshift([r, s.slice(0, 4 + o) + "(->Q)" + s.slice(4 + o), "2-磻烷基" + n]);
                database.unshift([r, s.slice(0, 4 + o) + "(->Fn)" + s.slice(4 + o), "2-氛" + n]);
                database.unshift([r, s.slice(0, 4 + o) + "(->Lp)" + s.slice(4 + o), "2-硠" + n]);
                database.unshift([r, s.slice(0, 4 + o) + "(->Qc#Qc)" + s.slice(4 + o), "2-一氚乙砠烯基" + n]);

                if (o < 3) {
                    database.unshift([r, s.slice(0, 4 + o) + "(<-T)" + s.slice(4 + o), "2-氚" + n]);
                    database.unshift([r, s.slice(0, 4 + o) + "(<-Cl)" + s.slice(4 + o), "2-氯" + n]);
                    database.unshift([r, s.slice(0, 4 + o) + "(<-F)" + s.slice(4 + o), "2-氟" + n]);
                    database.unshift([r, s.slice(0, 4 + o) + "(<-E#E)" + s.slice(4 + o), "2-硝烯䃔基" + n]);
                }
            }
        }
        if (s[5 + 0] === "C") {
            database.unshift([r + 1, s.slice(0, 6 + o) + "(C)" + s.slice(6 + o), "3-甲基" + n]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(Ld)" + s.slice(6 + o), "3-㲶" + n]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(Fd)" + s.slice(6 + o), "3-氲" + n]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(N)" + s.slice(6 + o), "3-氨基" + n]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(E)" + s.slice(6 + o), "3-氠基" + n]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(C$E)" + s.slice(6 + o), "3-肿基" + n]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(E$>>C)" + s.slice(6 + o), "3-异肿基" + n]);

            database.unshift([r + 2, s.slice(0, 6 + o) + "(C#Tk<-T)" + s.slice(6 + o), n + "-3-" + "甲𥓬䃔"]);
            database.unshift([r + 2, s.slice(0, 6 + o) + "(C#E)" + s.slice(6 + o), n + "-3-" + "甲䃔"]);
            database.unshift([r + 2, s.slice(0, 6 + o) + "(CC#E)" + s.slice(6 + o), n + "-3-" + "乙䃔"]);
            database.unshift([r + 2, s.slice(0, 6 + o) + "(C#Tn)" + s.slice(6 + o), n + "-3-" + "甲磴䃔"]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(CC(=O)(OD))" + s.slice(6 + o), n + "-3-" + "乙酸"]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(C(=O)(OD)2)" + s.slice(6 + o), n + "-3-" + "泎酸"]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(C(=O)2)" + s.slice(6 + o), n + "-3-" + "酢"]);
            database.unshift([r + 1, s.slice(0, 6 + o) + "(C(<=Fn)(->Fn)Fn->H)" + s.slice(6 + o), n + "-3-" + "玢酸"]);
            if (hasD) {
                database.unshift([r, s.slice(0, 6 + o) + "(<-T)" + s.slice(6 + o), "3-氚" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(->B)" + s.slice(6 + o), "3-硼烷基" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(->Q)" + s.slice(6 + o), "3-磻烷基" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(->NyD)" + s.slice(6 + o), "3-䂩基" + n]);

                database.unshift([r, s.slice(0, 6 + o) + "(<-F)" + s.slice(6 + o), "3-氟" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(<-Cl)" + s.slice(6 + o), "3-氯" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(->Lp)" + s.slice(6 + o), "3-硠" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(->Fn)" + s.slice(6 + o), "3-氛" + n]);
                database.unshift([r, s.slice(0, 6 + o) + "(->Bc)" + s.slice(6 + o), "3-磐烷基" + n]);
            }
        }

        if (s[7 + o] === "C" && (n.endsWith("啶") || n.endsWith("喃") || n.endsWith("䓬"))) {
            if (hasD) {
                database.unshift([r, s.slice(0, 8 + o) + "(<-T)" + s.slice(8 + o), "4-氚" + n]);
                database.unshift([r, s.slice(0, 8 + o) + "(<-F)" + s.slice(8 + o), "4-氟" + n]);
                database.unshift([r, s.slice(0, 8 + o) + "(->Fn)" + s.slice(8 + o), "4-氛" + n]);
                database.unshift([r+1, s.slice(0, 8 + o) + "(->Bc)" + s.slice(8 + o), "4-磐烷基" + n]);
                database.unshift([r+1, s.slice(0, 8 + o) + "(->B)" + s.slice(8 + o), "4-硼烷基" + n]);
                database.unshift([r+1, s.slice(0, 8 + o) + "(->Q)" + s.slice(8 + o), "4-磻烷基" + n]);
            }

            database.unshift([r + 1, s.slice(0, 8 + o) + "(C)" + s.slice(8 + o), "4-甲基" + n]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(Ld)" + s.slice(8 + o), "4-㲶" + n]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(Fd)" + s.slice(8 + o), "4-氲" + n]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(N)" + s.slice(8 + o), "4-氨基" + n]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(E)" + s.slice(8 + o), "4-氠基" + n]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(C$E)" + s.slice(8 + o), "4-肿基" + n]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(E$>>C)" + s.slice(8 + o), "4-异肿基" + n]);
            database.unshift([r + 2, s.slice(0, 8 + o) + "(C#N)" + s.slice(8 + o), n + "-4-甲腈"]);
            database.unshift([r + 2, s.slice(0, 8 + o) + "(C#Tk<-T)" + s.slice(8 + o), n + "-4-" + "甲𥓬䃔"]);
            database.unshift([r + 2, s.slice(0, 8 + o) + "(C#Tn)" + s.slice(8 + o), n + "-4-" + "甲磴䃔"]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(C(=O)(OD))" + s.slice(8 + o), n + "-4-" + "甲酸"]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(C(=O)(OD)2)" + s.slice(8 + o), n + "-4-" + "泎酸"]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(C(<=Fn)(->Fn)Fn->H)" + s.slice(8 + o), n + "-4-" + "玢酸"]);
            database.unshift([r + 1, s.slice(0, 8 + o) + "(C(=O)2)" + s.slice(8 + o), n + "-4-酢"]);
            database.unshift([r + 2, s.slice(0, 8 + o) + "(C#E)" + s.slice(8 + o), n + "-4-甲䃔"]);
        }
    }
    if (s.endsWith("肟")) {
        database.unshift([r + 1, s.replace("=NO", "=NFn"), n.replace("肟", "馚肟")]);
        database.unshift([r + 1, s.replace("=NO", "=Ny->O"), n.replace("肟", "氤肟")]);
        database.unshift([r + 1, s.replace("=NO", "=Tn<-O<-T"), n.replace("肟", "磴肟")]);
        database.unshift([r + 1, s.replace("=NO", "=Tn<-Fd"), n.replace("肟", "馧肟")]);
        database.unshift([r + 1, s.replace("=NO", "=Tn<-Fn"), n.replace("肟", "磴馚肟")]);
        database.unshift([r + 1, s.replace("=NO", "=Tn<-Fn(->H)2"), n.replace("肟", "磴𣸣肟")]);
        database.unshift([r + 1, s.replace("=NO", "=Tn<-O(->H)3"), n.replace("肟", "酩肟")]);
        database.unshift([r + 1, s.replace("=NO", "=NO->H"), n.replace("肟", "醅肟")]);
    }
}
export const mdata = database.filter(e => e[1]).sort((a, b) => ((b[0] as number) - (a[0] as number) + Math.random() * 0.1 - 0.05));
console.log("molecule database size: ", mdata.length);