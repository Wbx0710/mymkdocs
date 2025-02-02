# 触发器

!!! note "内容总览"
	* 基本触发器
	* 同步触发器
	* 边沿触发器

---

## 概述

### 触发器的基本特点和作用

Flip-Flop，简写为FF，又称双稳态触发器

#### 基本特点

* 具有两个能自保持的稳定状态（稳态）
	* 通常用输出端Q的状态来表示触发器的状态。如$Q=0$、$\bar Q=1$时，表示**0状态**；$Q=1$，$\bar Q=0$时，表示 **1 状态**

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

由于是与非门，所以是0的优先级更高，因为有0出0

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022110874.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022113288.png" style="zoom:67%;" />

$\bar {S_D}$和$\bar {R_D}$是不能同时为0的，但有时候难免操作失误让这两个信号同时为0了，就得要进行信号的撤销，让信号同时由0变为 1 ，但是由于输出的延时，故无法确定它的状态是0状态还是1状态

#### 特性表

触发器次态$Q^{n+1}$与输入信号$\bar {R_D}$、$\bar {S_D}$和电路原有状态（现态$Q^n$）之间关系的真值表

**现态$Q^n$**：触发器接收输入信号之前的状态

**次态$Q^{n+1}$**：触发器接收输入信号之后的状态

现态和次态是两个相邻时间里**触发器输出端的状态**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022126714.png" style="zoom:67%;" />

!!! tip "如何理解"
	* 由于都是非，所以要低电平才会起作用
	* $\bar {R_D}$的含义是Reset，所以$\bar {R_D}=0$时起的作用是**置0**
	* $\bar {S_D}$的含义是Set，所以$\bar {S_D}=0$时起的作用是**置 1**
	* 两个都是高电平不起作用，则触发器**保持原状态不变**

**约束条件**：$\bar {R_D}+\bar {S_D}=1$

#### 特性方程

触发器次态$Q^{n+1}$与输入信号$\bar {R_D}$、$\bar {S_D}$及现态$Q^n$之间的逻辑关系表达式

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

一般画RS触发器都是$Q$与$\bar Q$同时画的，因为会有涉及到输出违反约束条件同时为 1 的情况

---

### 由或非门组成的基本RS触发器

#### 电路组成

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022204238.png" style="zoom:67%;" />

#### 逻辑功能

由于是或非门，则 1 的优先级更高，因为有 1 出 1 

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

### 消抖开关

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022251827.png" style="zoom:67%;" />

**按键消抖**：按键的抖动时间由其机械特性决定，一般为**$5ms\sim 20ms$**，在做按键检测时都要加一个消抖的处理

可以分为：

* **硬件消抖**：在按键较少可用硬件方法消除键抖动
* **软件消抖**：检测出键闭合后执行一个$5ms\sim 20ms$的延时，让前沿抖动消失后再一次检测键的状态，如果仍保持闭合状态电平，则确认为真正有键按下；按键释放也要做同样的延时处理（单片机、嵌入式会用到）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022301018.png" style="zoom:67%;" />---

---

## 同步触发器

