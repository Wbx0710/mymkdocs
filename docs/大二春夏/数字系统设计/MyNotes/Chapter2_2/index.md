# 门电路_TTL&CMOS

!!! note "内容总览"
	* TTL集成门电路
	* CMOS集成门电路
	* 集成门电路的接口

---

## TTL集成门电路
* 集成电路：Integrated Circuit(IC)
* TTL电路是晶体管-晶体管逻辑电路（Transistor-Transistor-Logic），TTL电路是数字集成电路的一大门类。它采用双极型工艺制造，具有高速度低功耗和品种多等特点

### TTL与非门
#### TTL与非门的结构
* 输入极
* $T_1$其实就可以看作两个三极管，基极和集电极都接到一起了，发射极分别接出

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171536489.png" alt="屏幕截图 2025-01-17 153637" style="zoom:80%;" />

* 中间极和输出极

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171540469.png" alt="屏幕截图 2025-01-17 154029" style="zoom:67%;" />

### TTL与非门的工作原理

* 规定：输入低电平取0.3V，高电平取3.6V，二极管导通电压0.7V，三极管导通发射结电压0.7V，饱和导通三极管电压$U_{CE}$为0.3V
* 三极管的**深度饱和**状态：饱和后，集电极电流和基极电流不再成$\beta$的关系，基极电流很大（有时比集电极电流还大），就会进入深度饱和状态，**进入深度饱和状态后，$U_{CE}$就不再认为是0.3V而是0.1V**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171553394.png" alt="屏幕截图 2025-01-17 155337" style="zoom:67%;" />

* 注：关于判断深度饱和，先得出$u_{B1}$为1V，得到$I_{R1}$为$1mA$，这个电压其实是算比较大了，故可认定该三极管工作在了深度饱和状态下，则可以得到$u_{C1}=0.3+0.1=0.4V$，达不到$T_2$管的导通所需基极电压(0.7V)，而$T_4$是由$T_2$来控制的，故可认定$T_2$和$T_4$截止，也就是断开

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171610894.png" alt="屏幕截图 2025-01-17 160948" style="zoom:67%;" />

* 注：为什么$T_3$基极是5V？因为$T_3$是饱和导通的，则$T_3$发射极会有电流向下流，但是$T_4$是截止的，只能有一点点的电流(即穿透电流)通过$T_4$，故而上图中说$V_{CC}$经$R_2$有电流流向$T_3$的基极，但是很小，所以**认为$R_2$两端压降是0V**

* 外接负载$R_L$时，有电流从输出端流入，称为输出高电平电流$I_{OH}$，也称为**拉电流**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171618133.png" alt="屏幕截图 2025-01-17 161459" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171618885.png" alt="屏幕截图 2025-01-17 161755" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171624285.png" alt="屏幕截图 2025-01-17 162347" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171626847.png" alt="屏幕截图 2025-01-17 162546" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171628426.png" alt="屏幕截图 2025-01-17 162838" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171630555.png" alt="屏幕截图 2025-01-17 163032" style="zoom:67%;" />

* 倒置放大的$\beta$是很小的，一般只有0.01或者0.02的样子

* 若无D，此时$T_3$是可以导通的，电路将不能实现正常的逻辑运算

---

### TTL与非门的电气特性

#### 输入伏安特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171641026.png" alt="屏幕截图 2025-01-17 164130" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171643486.png" alt="屏幕截图 2025-01-17 164348" style="zoom:67%;" />

#### 输入端负载特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171647568.png" alt="屏幕截图 2025-01-17 164625" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171651694.png" alt="屏幕截图 2025-01-17 165126" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171653861.png" alt="屏幕截图 2025-01-17 165327" style="zoom:67%;" />

* 说明TTL与非门有输入端不用时，需要进行处理，不然就相当于悬空接入了一个高电平

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171656914.png" alt="屏幕截图 2025-01-17 165557" style="zoom:67%;" />

* 注：他这里关门电平$U_{off}$是按0.8V来算的（实际上应该差不多都可以）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171700229.png" alt="屏幕截图 2025-01-17 170015" style="zoom:67%;" />

* 注：他这里开门电平$U_{ON}$是按照2V来算的，留了一些裕量

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171803967.png" alt="屏幕截图 2025-01-17 180311" style="zoom:67%;" />

* 其实主要就是要明白关门电阻和开门电阻的含义
	* 接入的$R_i$小于$R_{OFF}$，则输入为逻辑0
	* 接入的$R_i$大于$R_{ON}$，则输入为逻辑 1
	* 什么都不接，悬空的，也为逻辑 1

#### 输出特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171809029.png" alt="屏幕截图 2025-01-17 180859" style="zoom:67%;" />

* 注意：输出短路电流$I_{OS}$可达$-33mA$，将造成器件过热烧毁，故**门电路输出端不能接地**

#### 灌电流负载

外接负载电流流入与非门的输入端的负载。与非门输出低电平$U_{OL}$时，带灌电流负载

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171815800.png" alt="屏幕截图 2025-01-17 181508" style="zoom:67%;" />

#### 拉电流负载

负载电流从与非门的输出端流向外接负载门的负载。与非门输出高电平$U_{OH}$时，带拉电流负载

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171817481.png" alt="屏幕截图 2025-01-17 181739" style="zoom:67%;" />

#### 电压传输特性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171833394.png" alt="屏幕截图 2025-01-17 183339" style="zoom:67%;" />

* AB段（截止区）：
	* $u_I<0.5V$，$u_{B1}<1.2V$
	* $T_{2}$、$T_4$截止，$T_3$、$D$导通
	* $u_O=U_{OH}=3.6V$
* BC段（线性区）：
	* $u_I>0.6V\Rightarrow u_{B1}\uparrow$
	* $T_{2}$开始导通（放大区），$T_4$仍截止
	* $u_{I}\uparrow \Rightarrow u_O \downarrow$（线性）
* CD段（转折区）：
	* $u_I \uparrow \rightarrow 1.4V \Rightarrow T_4$开始导通$\Rightarrow u_O \downarrow \downarrow$
	* 输出电压会急剧下降为低电平0.3V
	* 与非门的阈值电压（或门槛电压）$U_{TH}=1.4V$
* DE段（饱和区）：
	* $u_I>1.4V$
	* $T_2$、$T_4$饱和导通，$T_3$、$D$截止
	* $u_O=U_{OL} \le 0.3V$

#### 输入端噪声容限

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501171837394.png" alt="屏幕截图 2025-01-17 183659" style="zoom:67%;" />

* $G_2$输入高电平时的噪声容限：
	* $U_{NH}$——允许叠加的负向噪声电压的最大值
	* $U_{NH}=U_{OH.min}-U_{IH.min}=0.4V$

* $G_2$输入低电平时的噪声容限：
	* $U_{NL}$——允许叠加的正向噪声电压的最大值
	* $U_{NL}=U_{IL.max}-U_{OL.max}=0.4V$

---

## 其他类型的TTL门电路