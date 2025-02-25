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

$\bar{EN}=0$时，$G_1$使能，$G_2$禁止，$Y=\bar {A_1}$

$\bar{EN}=1$时，$G_2$使能，$G_1$禁止，$Y=\bar {A_2}$

* 用于信号双向传输

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181149623.png" alt="屏幕截图 2025-01-18 114904" style="zoom:67%;" />

$\bar{EN}=0$时，$G_1$使能，$G_2$禁止，则信号从$A_1$取反后传递到$A_2$

$\bar{EN}=1$时，$G_2$使能，$G_1$禁止，则信号从$A_2$取反后传递到$A_1$

* 构成数据总线（Data Bus）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501181154256.png" alt="屏幕截图 2025-01-18 115243" style="zoom:67%;" />

当使能端$\bar{EN_1}=0$其他都为 1 时，就能让$A_1$取反后送到数据线传输

其他也是同理，但是注意：前提是任何时刻，只允许某一个三态门使能，其他三态门都为高阻状态

---

