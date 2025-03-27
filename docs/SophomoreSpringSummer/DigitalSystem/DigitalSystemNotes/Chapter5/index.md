# 触发器

## 概述

### 触发器的基本特点和作用

Flip-Flop，简写为FF，又称双稳态触发器

#### 基本特点

* 具有两个能自保持的稳定状态（稳态）
	* 通常用输出端Q的状态来表示触发器的状态。如$Q=0$、$\overline Q=1$时，表示**0状态**；$Q=1$，$\overline Q=0$时，表示 **1 状态**

* 在输入信号作用下，触发器的两个稳定状态可相互转换（状态的翻转）
	* 输入信号消失后，新状态可长期保持下来，具有记忆功能，可存储二进制信息

#### 触发器的作用

* 触发器和门电路是构成数字电路的基本单元
* 触发器具有**记忆功能**
	* 由它构成的电路在某时刻的输出不仅取决于该时刻的输入，还与电路原来状态有关（时序逻辑电路）
	* 而门电路无记忆功能，由它构成的电路在某时刻的输出完全取决于该时刻得到输入，与电路原来状态无关（组合逻辑电路）

### 触发器的类型

#### 按逻辑功能分

* RS触发器
* D触发器
* JK触发器
* T触发器
* ${T}'$触发器

#### 按触发方式

* 电平触发器
* 边沿触发器
* 主从触发器

#### 按电路结构分

* 基本RS触发器
* 同步触发器
* 主从触发器
* 边沿触发器

### 触发器逻辑功能的描述方法

主要有特性表、特性方程、激励表（驱动表）、状态转换图和波形图（时序图）等

---

## 基本触发器

### 由与非门组成的基本RS触发器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022106243.png" style="zoom:67%;" />

#### 逻辑功能

由于是与非门，所以是0的优先级更高，因为有0出 1

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022110874.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022113288.png" style="zoom:67%;" />

$\overline {S_D}$和$\overline {R_D}$是不能同时为0的，但有时候难免操作失误让这两个信号同时为0了，就得要进行信号的撤销，让信号同时由0变为 1 ，但是由于输出的延时，故无法确定它的状态是0状态还是1状态

#### 特性表

触发器次态$Q^{n+1}$与输入信号$\overline {R_D}$、$\overline {S_D}$和电路原有状态（现态$Q^n$）之间关系的真值表

**现态$Q^n$**：触发器接收输入信号之前的状态

**次态$Q^{n+1}$**：触发器接收输入信号之后的状态

现态和次态是两个相邻时间里**触发器输出端的状态**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022126714.png" style="zoom:67%;" />

!!! tip "如何理解"
	* 由于都是非，所以要低电平才会起作用
	* $\overline {R_D}$的含义是Reset，所以$\overline {R_D}=0$时起的作用是**置0**
	* $\overline {S_D}$的含义是Set，所以$\overline {S_D}=0$时起的作用是**置 1**
	* 两个都是高电平不起作用，则触发器**保持原状态不变**

**约束条件**：$\overline {R_D}+\overline {S_D}=1$

#### 特性方程

触发器次态$Q^{n+1}$与输入信号$\overline {R_D}$、$\overline {S_D}$及现态$Q^n$之间的逻辑关系表达式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022133800.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022137591.png" style="zoom:67%;" />

#### 状态转换图

表示触发器从一种状态转换到另一种状态（或保持状态不变时），对输入信号的要求

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022141034.png" style="zoom:67%;" />

#### 驱动表

根据触发器次态$Q^{n+1}$和现态$Q^n$的值来确定输入信号取值的关系表，又称激励表

 <img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022147538.png" style="zoom:67%;" />

上面这个“X”并不是说约束项，而是意味着任取0或 1 都可以

在分析包含触发器的逻辑电路时，应熟练运用特性表，特性方程和状态转换图，而在设计含有触发器的逻辑电路，则运用触发器的驱动表

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022152284.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022201586.png" style="zoom:67%;" />

一般画RS触发器都是$Q$与$\overline Q$同时画的，因为会有涉及到输出违反约束条件同时为 1 的情况

---

### 由或非门组成的基本RS触发器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022204238.png" style="zoom:67%;" />

#### 逻辑功能

由于是或非门，则 1 的优先级更高，因为有 1 出 0

 <img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022208894.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022211150.png" style="zoom:67%;" />

#### 特性表

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022214351.png" style="zoom:67%;" />

#### 特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022215455.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022217444.png" style="zoom:67%;" />

 <img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022221611.png" style="zoom:67%;" />

### 基本RS触发器的两种形式比较

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022222463.png" style="zoom:67%;" />

### 基本RS触发器的优缺点

#### 优点

电路简单，具有置0、置 1 和保持功能，是构成各种触发器的基础，可用作数据寄存、消抖开关、脉冲变换

#### 缺点

* 输入电平直接控制输出状态，使用不便，抗干扰能力差
* 输入有约束条件

---

### 集成基本触发器

#### CMOS集成基本触发器：CC4044

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022228816.png" style="zoom:67%;" />

#### TTL集成基本触发器：74LS279

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022232463.png" style="zoom:67%;" />

---

## 同步触发器

同步触发器（Synchronous Flip-Flop）：在数字系统中，为了协调各部分有节拍地工作，通常要求一些触发器在同一时刻工作。为此，必须采用同步脉冲，使这些触发器在同步脉冲作用下根据输入信号同时改变状态，而在没有同步脉冲输入时，触发器保持原状态不变，这个同步脉冲称为**时钟脉冲CP（Clock Pulse）**

具有时钟脉冲控制的触发器称为时钟触发器，又称钟控触发器

### 同步RS触发器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031120792.png" style="zoom:67%;" />

#### 逻辑功能

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031123890.png" style="zoom:67%;" />

发现和由或非门组成的基本RS触发器特性表是一样的，**R、S信号都是高电平有效**

#### 包含了异步端的同步RS触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502040102474.png" style="zoom:67%;" />

R、S称为**同步输入端**，因为加在R、S端的输入信号能否进入触发器而被吸收，是==受时钟脉冲CP同步控制的==

$\overline S_D$、$\overline R_D$称为**异步输入端**，也称直接置位和复位端

* 当$\overline S_D=0$时，触发器被置位到 1 状态
* 当$\overline R_D=0$时，触发器被复位到0状态
* 其作用与CP无关

异步输入端是用来**预置触发器的初始状态**，或**在工作中强行置位和复位触发器**，平时不工作时，$\overline S_D=\overline R_D=1$

#### 特性表&特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031137034.png" style="zoom:67%;" />

注：上面是$CP=1$期间有效，若$CP=0$则$Q^{n+1}=Q^n$

#### 状态转换图

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031140232.png" style="zoom:67%;" />

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031147198.png" style="zoom:67%;" />

注：最后一个区间$CP$撤销，**状态不定**，因为$CP$撤销和$RS$撤销效果一样的

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031150887.png" style="zoom:67%;" />

### 同步RS触发器的优缺点

#### 优点

时钟电平控制：在$CP=1$期间触发器接受输入信号，$CP=0$时保持状态不变，多个触发器可以在同一时钟脉冲控制下同步工作，给用户的使用带来了方便，其**抗干扰能力**也比基本RS触发器强得多

#### 缺点

* 存在不定状态，R、S之间仍有约束
* 存在空翻现象：在$CP=1$期间，输入信号的多次变化，使触发器的状态也随之多次变化，只能用于数据锁存，而不能用于计数器、寄存器和存储器中

---

### 同步D触发器

就是在原先的同步RS触发器的R和S之间增加了一个非门

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031159707.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031200500.png" style="zoom:67%;" />

#### 逻辑功能

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031203213.png" style="zoom:67%;" />

#### 特性表&特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031205183.png" style="zoom:67%;" />

没有约束条件，那么画输出图像的时候就不需要$Q$和$\overline Q$同时画了，可以直接画完$Q$之后取反

#### 状态转移图

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031206498.png" style="zoom:67%;" />

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031209592.png" style="zoom:67%;" />

注：空翻现象就是中间标注0和 1 的那一段，输入信号的多次变化，使触发器的状态也随之多次变化

#### 同步D触发器的特点

* 时钟电平控制，输入无约束问题，优于同步RS触发器
* $CP=1$时跟随，下降沿到来时才锁存
* 仍然存在空翻现象，限制了同步触发器的应用

#### 集成同步D触发器：74LS375

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031213863.png" style="zoom:67%;" />

内部结构也和我们上面学过的略有不同（因为上面$G_1$、$G_2$用的是或非门$G_3$、$G_4$用的是与门）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031217442.png" style="zoom:67%;" />

---

## 边沿触发器

边沿触发器（Edge-Triggered Flip Flop）：只在时钟脉冲CP的**上升沿或下降沿**接收输入信号，而在$CP=1$及$CP=0$期间以及CP非约定边沿，触发器不接收数据，保持状态不变

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031225508.png" style="zoom:67%;" />

相对于同步（电平）触发器在$CP=1$期间接收输入信号，边沿触发器提高了工作的可靠性和抗干扰能力，且没有空翻现象

### 边沿D触发器

#### 电路组成

把两个同步D触发器放到一起，再通过一个非门把两个$CP$端连到一起，就得到了边沿D触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031232845.png" style="zoom:67%;" />

可以把主触发器和从触发器的CP想象成两个阀门的开关，就好理解了

下图所示电路图为**下降沿有效**的边沿D触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031235176.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031237238.png" style="zoom:67%;" />

#### 特性表&特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031238304.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031241477.png" style="zoom:67%;" />

**边沿D触发器已无“空翻现象”**

#### 包含了异步端的边沿D触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502040108428.png" style="zoom:67%;" />

#### 集成边沿D触发器：74LS74

这块芯片是**上升沿有效**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031246749.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031249189.png" style="zoom:67%;" />

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031253792.png" style="zoom:67%;" />

#### 边沿D触发器的特点

* CP的**上升沿（正边沿）**或**下降沿（负边沿）**触发
* **抗干扰能力极强**，解决了同步触发器的“空翻现象”
* 功能太少，只有置 1 、置0功能

---

### 边沿JK触发器

#### 电路组成

边沿JK触发器可以有多种结构，为了更好的延续性（由上述边沿D触发器扩展而来），所以呈现该下降沿边沿JK触发器 

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031258989.png" style="zoom:67%;" />

#### 工作原理

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031302961.png" style="zoom:67%;" />

#### 特性表

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031306205.png" style="zoom:67%;" />

可见功能更为丰富了

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031308498.png" style="zoom:67%;" />

#### 集成边沿JK触发器：74LS112

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031311593.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031416493.png" style="zoom:67%;" />

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031421493.png" style="zoom:67%;" />

#### 边沿JK触发器的特点

* CP的**上升沿**或**下降沿**触发
* 抗干扰能力极强，工作速度很高，在触发沿瞬间，按$Q^{n+1}=J\overline {Q^n}+\overline KQ^n$的规定更新状态
* 功能齐全，有保持、置0、置 1 、翻转功能，使用方便

---

### $T$触发器和${T}'$触发器

由JK触发器或D触发器构成，主要是用来简化集成计数器的逻辑电路

### T触发器

T触发器是根据T端输入信号的不同，在时钟脉冲CP作用下具有**翻转**和**保持**功能的电路

#### 逻辑符号

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031427189.png" style="zoom:67%;" />

#### 特性表&特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031429694.png" style="zoom:67%;" />

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031431461.png" style="zoom:67%;" />

### ${T}'$触发器

${T}'$触发器是指每输入一个时钟脉冲CP时，状态变化一次的电路。它**实际上是T触发器的翻转功能**，即**令$T=1$**

#### 逻辑符号&特性表&特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031434021.png" style="zoom:67%;" />

#### 典型例题

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031436937.png" style="zoom:67%;" />

---

### 触发器之间的转换

由于实际生产的集成边沿触发器只有D型和JK型，只介绍如何将这两种触发器转换成$T$和${T}'$触发器，及它们之间的转换

#### 转换步骤

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031439744.png" style="zoom:67%;" />

* 写出已有触发器和待求触发器的特性方程
* 变换待求触发器的特性方程，使之形式与已有触发器的特性方程一致
* 比较两特性方程，求出转换逻辑
* 画电路图

#### JK触发器$\longrightarrow$D触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031444624.png" style="zoom:67%;" />

方法二：使用驱动表（只作介绍，感觉求解过程更为复杂了）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031447252.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031449341.png" style="zoom:67%;" />

#### JK触发器$\longrightarrow$T触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031451608.png" style="zoom:67%;" />

####  JK触发器$\longrightarrow$${T}'$触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031453731.png" style="zoom:67%;" />

---

#### D触发器$\longrightarrow$JK触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031455602.png" style="zoom:67%;" />

####  D触发器$\longrightarrow$T触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031457787.png" style="zoom:67%;" />

#### D触发器$\longrightarrow$${T}'$触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031458042.png" style="zoom:67%;" />

---

## 主从触发器（脉冲触发器）

### 主从RS触发器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031606119.png" style="zoom:67%;" />

#### 工作原理

##### $CP=0$或$CP=1$时

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031608549.png" style="zoom:67%;" />

##### 上升沿

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031611294.png" style="zoom:67%;" />

##### 下降沿

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031612710.png" style="zoom:67%;" />

**$Q=Q_M$（跟随）**，主从触发器状态改变的时刻只在下降沿，但是注意主从触发器和D触发器的区别，S、R与$Q_M$是不跟随的

##### S和R的四种情况

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031622484.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031622890.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031623464.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031623489.png" style="zoom:67%;" />

#### 特性表和特性方程

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031626820.png" style="zoom:67%;" />

#### 逻辑符号

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031627528.png" style="zoom:67%;" />

#### 主从触发器的翻转问题

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031632276.png" style="zoom:67%;" />

所以在主从触发器的题目中，可以同时画出$Q_M$的波形图，通过对比$Q_M$与CP下降沿画出Q的波形

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031640902.png" style="zoom:67%;" />

#### 主从RS触发器的特点

优点

* 主从RS触发器状态的翻转发生在CP脉冲的下降沿，状态最多改变一次，而在$CP=1$期间触发器的状态保持不变，从而解决了空翻现象
* 将主从RS触发器用于时序电路中，不会因不稳定而产生震荡

缺点

* 在$CP=1$期间，主触发器的状态仍然会随着R和S的变化而多次改变。将会导致在CP下降沿到来时，触发器状态的变化与特性表不符
* 信号输入端R和S之间仍然有约束，限制了使用

---

### 主从JK触发器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031647251.png" style="zoom:67%;" />

把S端看作J端，把R端看作K端即得主从JK触发器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031650021.png" style="zoom:67%;" />

#### 工作原理

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031655418.png" style="zoom:67%;" />

**特性方程**：$Q^{n+1}=J\overline Q^n+\overline KQ^n$（和边沿JK触发器一样的）

#### 逻辑符号

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031659422.png" style="zoom:67%;" />

#### 一次变化问题

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031703496.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031705772.png" style="zoom:67%;" />

如果在高电平期间J和K的值发生变化，则需要考虑一次变化问题

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031711762.png" style="zoom:67%;" />

${Q}'$为没有尖峰干扰信号的情况

#### 主从JK触发器的特点

* 功能齐全，有保持、置0、置 1 、翻转功能，使用方便
* 信号输入端无约束
* 在$CP=1$期间，触发器J、K端接收输入信号，并且要求输入状态保持稳定。若在$CP=1$期间输入端出现干扰信号，可能会使触发器的状态出错

所以其实在后续的使用中都是以边沿触发器为主

---

## 触发器例题

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031725957.png" style="zoom:67%;" />

分析：触发器$FF_0$、$FF_1$的脉冲端接在同一个CP，属同步时序逻辑电路（后面会讲）

* 触发器$FF_0$：$J=K=1$，是将JK触发器转换为${T}'$触发器
* 触发器$FF_1$：$J=K=T= Q_0$，是将JK触发器转换为$T$触发器

在下降沿同时也变化，到底是看作0还是看作 1 ？从工作原理出发，由于是锁存前一时刻的值送到输出，所以是看下降沿前一时刻的值来决定$Q_1$的变化

---

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502031731557.png" style="zoom:67%;" />

分析：触发器$FF_0$接到CP、$FF_1$接到$\overline Q_0$，属异步时序逻辑电路（后面会讲）

触发器$FF_0$、$FF_1$都是将触发器的$\overline Q_0$端引回输入端D，即$Q^{n+1}=D=\overline Q^n$，是将JK触发器转换为${T}'$触发器，但触发脉冲不一样

---

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502040046667.png" style="zoom:67%;" />

---

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502040051000.png" style="zoom:67%;" />

---

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502040056586.png" style="zoom:67%;" />
