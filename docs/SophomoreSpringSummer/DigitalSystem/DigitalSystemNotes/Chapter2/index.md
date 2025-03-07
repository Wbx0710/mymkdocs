# TTL&CMOS

## 晶体管的开关特性

复习一下模电

### 三极管的结构及符号

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171040148.png" alt="屏幕截图 2025-01-17 103959" style="zoom:67%;" />

### 三极管内部载流子的运动

三极管根据两个PN结所施加的电压不同，有四种不同的工作状态

* 放大状态：发射结**正**偏、集电结**反**偏
* 截止状态：发射结**反**偏、集电结**反**偏
* 饱和状态：发射结**正**偏、集电结**正**偏
* ==倒置状态：发射结**反**偏、集电结**正**偏==

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171049010.png" alt="屏幕截图 2025-01-17 104910" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171054619.png" alt="屏幕截图 2025-01-17 105406" style="zoom:67%;" />

这部分是咱电基没怎么细讲的部分，如果想知道可以去看郑益慧老师的前几节课，很通俗易懂

### 三极管各工作状态电流之间的关系

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171100907.png" alt="屏幕截图 2025-01-17 110012" style="zoom:67%;" />

注：$I_{BS}$饱和电流（后面会介绍）

### 三极管的静态开关特性

#### 三极管截止状态等效电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171106765.png" alt="屏幕截图 2025-01-17 110601" style="zoom:67%;" />

#### 三极管饱和状态等效电路

$u_{I}$增大使$u_{BE}>U_{th}$时，三极管开始导通，$i_B>0$，三极管工作于放大导通状态

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171111065.png" alt="屏幕截图 2025-01-17 110940" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171112182.png" alt="屏幕截图 2025-01-17 111215" style="zoom:67%;" />

$u_{BE}$约等于$0.7V$，$U_{CES}$约等于0，很多情况下就相当于一根**导线**，也就是导通了

三极管工作在饱和状态的条件是$i_{B}>I_{BS}$

### 开关工作的条件

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171116608.png" alt="屏幕截图 2025-01-17 111617" style="zoom:67%;" />

---

## TTL集成门电路

TTL电路是晶体管-晶体管逻辑电路（Transistor-Transistor-Logic），TTL电路是数字集成电路的一大门类。它采用双极型工艺制造，具有高速度低功耗和品种多等特点

课内讲的是反相器，但是与非门会了反相器肯定没问题

### TTL与非门

#### TTL与非门的结构

* 输入极

$T_1$其实就可以看作两个三极管，基极和集电极都接到一起了，发射极分别接出

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171536489.png" alt="屏幕截图 2025-01-17 153637" style="zoom:80%;" />

* 中间极和输出极

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171540469.png" alt="屏幕截图 2025-01-17 154029" style="zoom:67%;" />

### TTL与非门的工作原理

规定：输入低电平取0.3V，高电平取3.6V，二极管导通电压0.7V，三极管导通发射结电压0.7V，**饱和导通三极管电压（即饱和导通后的$CE$两端的电压）**$U_{CE}$为0.3V

三极管的==深度饱和==状态：饱和后，集电极电流和基极电流不再成$\beta$的关系，**基极电流很大**（有时比集电极电流还大），就会进入深度饱和状态，**进入深度饱和状态后，$U_{CE}$就不再认为是0.3V而是0.1V**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171553394.png" alt="屏幕截图 2025-01-17 155337" style="zoom:67%;" />

!!! tip "判断深度饱和"
	关于判断深度饱和，先得出$u_{B1}$(即$T_1$管的基极电压，后面的表述同理)为1V，得到$I_{R1}=\frac{5V-4V}{4k\Omega}$为$1mA$，这个电流是算比较大了，故可认定该三极管工作在了深度饱和状态下，则可以得到$u_{C1}=0.3V+0.1V=0.4V$，达不到$T_2$管的导通所需基极电压(0.7V)，而$T_4$是由$T_2$来控制的，故可认定$T_2$和$T_4$截止，也就是断开

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171610894.png" alt="屏幕截图 2025-01-17 160948" style="zoom:67%;" />

!!! note "为什么$T_3$基极是5V？"
	因为$T_3$是饱和导通的，则$T_3$发射极会有电流向下流，但是$T_4$是截止的，只能有一点点的电流(即穿透电流)通过$T_4$，故而上图中说$V_{CC}$经$R_2$有电流流向$T_3$的基极，但是很小，所以**认为$R_2$两端压降是0V**

外接负载$R_L$时，有电流从输出端流出，称为输出高电平电流$I_{OH}$，也称为**拉电流**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171618133.png" alt="屏幕截图 2025-01-17 161459" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171618885.png" alt="屏幕截图 2025-01-17 161755" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171624285.png" alt="屏幕截图 2025-01-17 162347" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171626847.png" alt="屏幕截图 2025-01-17 162546" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171628426.png" alt="屏幕截图 2025-01-17 162838" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171630555.png" alt="屏幕截图 2025-01-17 163032" style="zoom:67%;" />

倒置放大的$\beta$是很小的，一般只有0.01或者0.02的样子

若无D，此时$T_3$是可以导通的，电路将不能实现正常的逻辑运算

---

### TTL与非门的电气特性

#### 输入伏安特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171641026.png" alt="屏幕截图 2025-01-17 164130" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171643486.png" alt="屏幕截图 2025-01-17 164348" style="zoom:67%;" />

#### 输入端负载特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171647568.png" alt="屏幕截图 2025-01-17 164625" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171651694.png" alt="屏幕截图 2025-01-17 165126" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171653861.png" alt="屏幕截图 2025-01-17 165327" style="zoom:67%;" />

说明TTL与非门有输入端不用时，需要进行处理，不然就相当于悬空接入了一个高电平

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171656914.png" alt="屏幕截图 2025-01-17 165557" style="zoom:67%;" />

注：他这里关门电平$U_{off}$是按0.8V来算的（实际上应该差不多都可以）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171700229.png" alt="屏幕截图 2025-01-17 170015" style="zoom:67%;" />

注：他这里开门电平$U_{ON}$是按照2V来算的，留了一些裕量

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171803967.png" alt="屏幕截图 2025-01-17 180311" style="zoom:67%;" />

其实主要就是要明白关门电阻和开门电阻的含义

* 接入的$R_i$小于$R_{OFF}$，则输入为逻辑0
* 接入的$R_i$大于$R_{ON}$，则输入为逻辑 1
* 什么都不接，悬空的，也为逻辑 1

#### 输出特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171809029.png" alt="屏幕截图 2025-01-17 180859" style="zoom:67%;" />

注意：输出短路电流$I_{OS}$可达$-33mA$，将造成器件过热烧毁，故**门电路输出端不能接地**

#### 灌电流负载

外接负载电流流入与非门的输入端的负载。与非门输出低电平$U_{OL}$时，带灌电流负载

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171815800.png" alt="屏幕截图 2025-01-17 181508" style="zoom:67%;" />

#### 拉电流负载

负载电流从与非门的输出端流向外接负载门的负载。与非门输出高电平$U_{OH}$时，带拉电流负载

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171817481.png" alt="屏幕截图 2025-01-17 181739" style="zoom:67%;" />

#### 电压传输特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171833394.png" alt="屏幕截图 2025-01-17 183339" style="zoom:67%;" />

AB段（截止区）：

* $u_I<0.5V$，$u_{B1}<1.2V$
* $T_{2}$、$T_4$截止，$T_3$、$D$导通
* $u_O=U_{OH}=3.6V$

BC段（线性区）：
	

* $u_I>0.6V\Rightarrow u_{B1}\uparrow$
* $T_{2}$开始导通（放大区），$T_4$仍截止
* $u_{I}\uparrow \Rightarrow u_O \downarrow$（线性）

CD段（转折区）：

* $u_I \uparrow \rightarrow 1.4V \Rightarrow T_4$开始导通$\Rightarrow u_O \downarrow \downarrow$
* 输出电压会急剧下降为低电平0.3V
* 与非门的阈值电压（或门槛电压）$U_{TH}=1.4V$

DE段（饱和区）：

* $u_I>1.4V$
* $T_2$、$T_4$饱和导通，$T_3$、$D$截止
* $u_O=U_{OL} \le 0.3V$

#### 输入端噪声容限

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171837394.png" alt="屏幕截图 2025-01-17 183659" style="zoom:67%;" />

$G_2$输入高电平时的噪声容限：

* $U_{NH}$——允许叠加的负向噪声电压的最大值
* $U_{NH}=U_{OH.min}-U_{IH.min}=0.4V$

$G_2$输入低电平时的噪声容限：

* $U_{NL}$——允许叠加的正向噪声电压的最大值
* $U_{NL}=U_{IL.max}-U_{OL.max}=0.4V$

---

## 其他类型的TTL门电路

### 集电极开路与非门（OC门）

即 Open Collector Gate 简称OC门

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181050881.png" alt="屏幕截图 2025-01-18 105016" style="zoom:67%;" />

注：为什么要上拉电阻和电源？因为和原本普通的TTL门电路不同，当A和B至少有一个0时，$T_4$断开，但是输出要为 1，原先TTL门电路是可以由上方的$V_{CC}$供电，但是OC门不行，故需要外接电流和上拉电阻

#### OC门的应用

* 实现“线与”逻辑

两个或多个OC门的输出端直接相连，相当于将这些输出信号相与，称为线与

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181059378.png" alt="屏幕截图 2025-01-18 105853" style="zoom:67%;" />

注：普通的TTL门电路这样接相当于把输出端短路，电流很大足以烧坏门电路；故普通的TTL与非门是不能把输出端接在一起实现“线与”的功能的

这两个OC门的局部等效电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181104305.png" alt="屏幕截图 2025-01-18 110355" style="zoom:67%;" />

主要就是因为OC门的高电平是由上拉电阻和电源提供的，所以不会出现普通的TTL门电路那种短路烧坏的情况

* 驱动发光二极管

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181110162.png" alt="屏幕截图 2025-01-18 110950" style="zoom:67%;" />

对于普通的TTL门电路，只能采用“灌电流”的方式驱动发光二极管，因为如果采用“拉电流”的方式驱动，则电流是不够大的（只有$400\mu A$，达不到10mA，忘了回前面看看）

* 实现电平转换

TTL与非门有时需要驱动其他种类门电路，而不同种类门电路的高低电平标准不一样（一般的TTL门电路，工作电压在5V左右；而CMOS门电路的工作电压比较高一些3-15V，一般门电路是无法高过输出电压的，但假如驱动的门电路要求电压为12V，就没办法了）

应用OC门就可以适应负载门对电平的要求（OC门输出的高低电平是由**外接的电源$V_{DD}$以及上拉电阻$R_L$决定的**）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181118594.png" alt="屏幕截图 2025-01-18 111805" style="zoom:67%;" />

---

### 三态门（TSL门）

即 Three-State Logic 门，简称TSL门

#### 电路结构

其实把标红色的部分拿掉，就和前面学过的TTL门电路是一样的

* 使能端低电平有效

使能端$EN$有非号即代表低电平有效，无非号则为高电平有效

而EN其实就是Enable的意思，作用即让门电路处于工作状态or静止状态

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181126072.png" alt="屏幕截图 2025-01-18 112626" style="zoom:67%;" />

* 使能端高电平有效

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181127535.png" alt="屏幕截图 2025-01-18 112715" style="zoom:67%;" />

#### 工作原理

* 正常的与非门状态

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181134002.png" alt="屏幕截图 2025-01-18 113046" style="zoom:67%;" />

* 高阻状态

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181135144.png" alt="屏幕截图 2025-01-18 113337" style="zoom:67%;" />

其实就是因为P等于0电位了，加上二极管$D_3$的存在，导致了Q点的电位被“钳制”在了$0.7V$，不能和正常一样让$T_3$导通了，此时Y既不能和“地”相连，也不能和$V_{CC}$相连，故将这种状态称为“高阻状态”

#### 三态门的应用

* 用作多路开关

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181145247.png" alt="屏幕截图 2025-01-18 114526" style="zoom:67%;" />

注：写了“1”而没有用“&”符号说明三态门只有一个输出

$\overline{EN}=0$时，$G_1$使能，$G_2$禁止，$Y=\overline {A_1}$

$\overline{EN}=1$时，$G_2$使能，$G_1$禁止，$Y=\overline {A_2}$

* 用于信号双向传输

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181149623.png" alt="屏幕截图 2025-01-18 114904" style="zoom:67%;" />

$\overline{EN}=0$时，$G_1$使能，$G_2$禁止，则信号从$A_1$取反后传递到$A_2$

$\overline{EN}=1$时，$G_2$使能，$G_1$禁止，则信号从$A_2$取反后传递到$A_1$

* 构成数据总线（Data Bus）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181154256.png" alt="屏幕截图 2025-01-18 115243" style="zoom:67%;" />

当使能端$\bar{EN_1}=0$其他都为 1 时，就能让$A_1$取反后送到数据线传输

其他也是同理，但是注意：前提是任何时刻，只允许某一个三态门使能，其他三态门都为高阻状态

---

## MOS管的开关特性

复习一下模电

### MOS管的结构

绝缘栅型场效应管中，有N沟道和P沟道两类，而每一类又分为增强型和耗尽型两种。增强型就是$U_{GS}=0$时，漏源（D和S）之间没有导电沟道，即使在漏源之间加上一定范围的电压，也没有漏极电流；反之，在$U_{GS}=0$时，漏源（D和S）之间有导电沟道的称为耗尽型

#### N沟道增强型MOS管

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171129292.png" alt="屏幕截图 2025-01-17 112926" style="zoom:67%;" />

栅极电流很小（因为输入电阻很大，基本就是绝缘嘛），所以MOS管的抗干扰性很高

### MOS管的工作原理

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171137665.png" alt="屏幕截图 2025-01-17 113436" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171137214.png" alt="屏幕截图 2025-01-17 113653" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171140818.png" alt="屏幕截图 2025-01-17 114039" style="zoom:67%;" />

### MOS管的符号

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171141115.png" alt="屏幕截图 2025-01-17 114142" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171143965.png" alt="屏幕截图 2025-01-17 114324" style="zoom:67%;" />

### MOS管的静态开关特性

#### N沟道增强型MOS管

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171146057.png" alt="屏幕截图 2025-01-17 114617" style="zoom:67%;" />

#### P沟道增强型MOS管

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171148439.png" alt="屏幕截图 2025-01-17 114757" style="zoom:67%;" />

## CMOS集成门电路

### CMOS反相器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181457517.png" alt="屏幕截图 2025-01-18 145730" style="zoom:67%;" />

NMOS管的衬底接电路最低电位，PMOS管的衬底接最高电位，从而保证衬底与漏源间的PN结始终反偏

输入低电平：$U_{IL}=0V$；输入高电平$U_{IH}=V_{DD}$

要求$V_{DD}>U_{GS(th)N}+|U_{GS(th)P}|$且$U_{GS(th)N}=|U_{GS(th)P}|$

#### 工作原理

输入为低电平，$U_{IL}=0V$时

* $u_{GSN}<U_{GS(th)N}$，$V_N$截止
* $|u_{GSP}|=|u_{GP}-u_{SP}|=|0V-V_{DD}|>|U_{GS(th)P}|$，$V_P$导通
* $u_O \approx V_{DD}$，为高电平

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181509038.png" alt="屏幕截图 2025-01-18 150930" style="zoom:67%;" />

输入为高电平，$U_{IH}=V_{DD}$时

* $u_{GSN}=V_{DD}>U_{GS(th)N}$，$V_N$导通
* $|u_{GSP}|=|V_{DD}-V_{DD}|=0V<|U_{GS(th)P}|$，$V_P$截止
* $u_O \approx 0V$，为低电平

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181513744.png" alt="屏幕截图 2025-01-18 151320" style="zoom:67%;" />

故电路**构成了CMOS非门**，又称CMOS反相器

无论输入电平高低，$V_N$、$V_P$中总有一管截止，使静态漏极电流$i_D \approx 0$。因此CMOS反相器静态功耗极微小

---

### 其他CMOS门电路

#### 漏极开路的CMOS门（OD门）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181535364.png" alt="屏幕截图 2025-01-18 153438" style="zoom:67%;" />

常用作驱动器、电平转换器和实现“线与“等

#### CMOS传输门

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181541429.png" alt="屏幕截图 2025-01-18 153750" style="zoom:67%;" />

上方$\overline C$代表低电平有效，下方C代表高电平有效

工作原理

* 当$C=V_{DD}$，$u_{I}=0\sim V_{DD}$时，$V_N$、$V_P$中至少有一管导通，输出与输入之间呈现低电阻，相当于开关闭合

即$u_O=u_I$，称传输门开通

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181544319.png" alt="屏幕截图 2025-01-18 154358" style="zoom:80%;" />

* 反过来，当$C=0$，$\overline C=V_{DD}$，$u_{I}=0\sim V_{DD}$时，$V_N$、$V_P$均截止，输出与输入之间呈现高电阻，相当于开关断开

即$u_I$不能传输到输出端，传输门关闭

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181547247.png" alt="屏幕截图 2025-01-18 154637" style="zoom:80%;" />

!!! tip "总结"
	* $C=1$，$\overline C=0$时，传输门开通，$u_O=u_I$
	* $C=0$，$\overline C=1$时，传输门关闭，信号不能传输

符号为TG（Transmission Gate）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181550162.png" alt="屏幕截图 2025-01-18 154930" style="zoom:67%;" />

传输门是一个理想的**双向开关，可传输模拟信号**，也可传输**数字信号**

#### CMOS三态门

在反相器基础上串接了PMOS管$V_{P2}$和NMOS管$V_{N2}$，它们的栅极分别受$\overline{EN}$和$EN$控制

工作原理

* $\overline{EN}=0$时，$V_{P2}$和$V_{N2}$导通，呈现低电阻，不影响CMOS反相器工作，$Y=\overline A$

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181558575.png" alt="屏幕截图 2025-01-18 155704" style="zoom: 50%;" />

* $\overline{EN}=1$时，$V_{P2}$和$V_{N2}$均截止，输出端Y呈现高阻态（Z）

因此构成使能端低电平有效的三态门

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181601046.png" alt="屏幕截图 2025-01-18 160051" style="zoom:67%;" />

---

### CMOS集成门电路的使用注意事项

#### 电源电压

注意不同系列CMOS电路允许的电源电压范围不同，一般多用$+5V$。电源电压越高，抗干扰能力也越强

CMOS电路的电源电压极性不能接反，否则可能会造成电路永久性失效

在进行CMOS电路实验，或对CMOS数字系统进行调试、测量时，应先接入直流电源，后接入信号源；使用结束时，应先关信号源，后关直流电源

#### 闲置输入端的处理

**闲置输入端不允许悬空**（悬空使得电位不定，破坏正常的逻辑关系）

* 与门和与非门

闲置输入端应接**正电源或高电平**

* 或门和或非门

闲置输入端应接**地或者低电平**

闲置输入端**不宜与使用输入端并联使用**，因为这样会增大输入电容，从而使电路的工作速度下降。但在工作速度很低的情况下，允许输入端并联使用

#### 输出端的连接

输出端不允许直接与电源$V_{DD}$或地（$V_{SS}$）相连

为提高电路的驱动能力，可将同一集成芯片上相同门电路的输入端、输出端并联使用

当CMOS电路输出端接大容量的负载电容时，为保证流过管子的电流不超过允许值，需在输出端和电容之间串接一个限流电阻

---

## 集成门电路的接口

### 连接原则

前级驱动门必须能为后级负载门提供复合要求的高、低电平和足够的输入电流，即**“电平匹配，电流足够”**

| 条件  | 前级驱动门&后级负载门之间的关系 | 说明               |
| ----- | ------------------------------- | ------------------ |
| 条件1 | $U_{OH.min}\ge U_{IH.min}$      | 满足电平要求       |
| 条件2 | $U_{OL.max}\le U_{IL.max}$      | 满足电平要求       |
| 条件3 | $I_{OH.max}\ge nI_{IH.max}$     | 允许拉出足够的电流 |
| 条件4 | $I_{OL.max}\ge mI_{IL.max}$     | 允许灌入足够的电流 |

n和m均代表负载门的个数

### TTL电路驱动CMOS门电路

#### TTL电路驱动CMOS4000电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181638899.png" alt="屏幕截图 2025-01-18 163730" style="zoom:67%;" />

提高TTL电路输出高电平下限值的方法

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181639460.png" alt="屏幕截图 2025-01-18 163952" style="zoom:67%;" />

#### TTL电路驱动74HCT高速CMOS电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181641797.png" alt="屏幕截图 2025-01-18 164124" style="zoom:67%;" />

### CMOS电路驱动TTL电路

#### CMOS4000系列驱动TTL电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181643767.png" alt="屏幕截图 2025-01-18 164346" style="zoom:67%;" />

提高CMOS4000系列电路输出低电平电流能力的方法

* 左边电路：将同一芯片上的多个CMOS并联作驱动门
* 右边电路：在CMOS电路输出端和TTL电路输入端之间接入CMOS驱动器
* 还可以用一个三极管实现电流放大

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181646382.png" alt="屏幕截图 2025-01-18 164647" style="zoom:67%;" />

#### 高速CMOS电路驱动TTL电路

高速CMOS电路的电源电压$V_{DD}=V_{CC}=5V$时，CC74HC和CC74HCT系列电路的输出端和TTL电路的输入端**可直接相连**

所以选择两种不同类型的芯片，**最好就选择高速型的CMOS电路和TTL电路**

---

## 关于上拉电阻与下拉电阻

### 对于TTL门电路

* 若是**高电平接电阻**，无论电阻多大都**不影响**，还是**高电平**（电阻无穷大即相当于悬空，也是高电平）

* 若是**低电平接电阻**，要电阻达到某一临界值（对于74系列，是2k左右）大于这个值就可以起到**拉高电平作用**，相当于高电平，低于这个临界值还是低电平

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503061107482.png" style="zoom:67%;" />

### 对于CMOS
* 输入端**不允许悬空**
* 输入端接地时由于**没有电流流过**，外加电阻也是**低电平**状态
* 输入**低电平就是低电平**，输入**高电平就是高电平**，不需要考虑外接电阻的情况

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503061111954.png" style="zoom:67%;" />


lp上课给的分析例子

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503071112589.jpg" style="zoom:80%;" />


---

## 门电路的计算

可以看看这部分的习题指导

<object data="门电路习题指导.pdf" type="application/pdf" width="100%" height="800">
    <embed src="门电路习题指导.pdf" type="application/pdf" />
</object>
