# 组合逻辑电路_加法器

## 概述

### 组合逻辑电路的概念

数字电路根据逻辑功能特点分为

* 组合逻辑电路：任一时刻的输出只取决于该时刻的输入信号，而与电路原有的状态无关的电路
* 时序逻辑电路：任一时刻的输出不仅取决于该时刻的输入信号，而且与电路原有的状态有关的电路

主要的器件区别就是看电路中是否含有触发器

### 组合逻辑电路的特点与描述方法

组合电路的逻辑功能特点：**没有存储和记忆功能**

组合电路的组成特点：由门电路组成，不含记忆单元，只存在从输入到输出的通路，没有反馈回路

组合电路的描述方法：逻辑表达式、真值表、卡诺图和逻辑图等

## 组合电路的分析和设计

### 组合逻辑电路的分析

**分析思路**：根据给定的逻辑电路，找出输入与输出之间的逻辑关系，从而确定电路的逻辑功能

**基本步骤**

* **逻辑图$\rightarrow$逻辑表达式$\rightarrow$化简/变换$\rightarrow$真值表$\rightarrow$功能说明**

#### 例题分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191515458.png" alt="屏幕截图 2025-01-19 151450" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191519749.png" alt="屏幕截图 2025-01-19 151906" style="zoom:67%;" />

遇到较为复杂的组合电路不要慌，不要一上来就写，去分析电路的结构，找到电路的特点，以下题为例

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191525278.png" alt="屏幕截图 2025-01-19 152510" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191527598.png" alt="屏幕截图 2025-01-19 152714" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191532064.png" alt="屏幕截图 2025-01-19 153110" style="zoom:67%;" />

### 组合逻辑电路的设计

**设计思路**：分析给定逻辑要求，设计出能实现该功能的组合逻辑电路

**基本步骤**

* **设计要求$\rightarrow$逻辑抽象$\rightarrow$列出真值表$\rightarrow$求最简输出逻辑式$\rightarrow$画逻辑图**

!!! note "逻辑抽象"
	* 什么叫逻辑抽象？
	* 首先分析给定问题，确定输入变量和输出变量，并进行状态赋值（即何时取值0何时取值1）。然后分析输出变量和输入变量间的逻辑关系，列出真值表
	* 之后根据真值表用代数法或卡诺图法求最简与或表达式，然后根据题中对门电路类型的要求，将最简与或式变换为要求门类型对应的最简式

#### 例题分析

求最简输出逻辑式推荐用卡诺图，毕竟卡诺图就是一个变相的真值表

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191557522.png" alt="屏幕截图 2025-01-19 155714" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191605728.png" alt="屏幕截图 2025-01-19 160520" style="zoom:67%;" />

**与或表达式变成与非表达式——二次取反**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191608644.png" alt="屏幕截图 2025-01-19 160732" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191612654.png" alt="屏幕截图 2025-01-19 161246" style="zoom:67%;" />

使用公式：如果$B_{i+1}$不存在的话，就是直接默认为0

使用卡诺图：其实就是用空白卡诺图，然后按照顺序写下来就是格雷码

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191618294.png" alt="屏幕截图 2025-01-19 161834" style="zoom:67%;" />

多输出求解：就是屏蔽掉别的输出，只看当前的输出和输入之间的关系，画卡诺图求解

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191623767.png" alt="屏幕截图 2025-01-19 162317" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191627137.png" alt="屏幕截图 2025-01-19 162729" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501191630891.png" alt="屏幕截图 2025-01-19 162959" style="zoom:67%;" />

---

## 加法器

数字系统中除进行逻辑运算外，还经常进行数值的算术运算，而在数字系统中**加、减、乘、除均是利用加法来进行的**，所以加法器便称为数字系统中最基本的运算单元

### 半加器

两个 1 位二进制数相加，**不考虑低位进位的加法**。实现半加功能的电路称为半加器(Half Adder: HA)

**半加规则**：两个 1 位二进制数相加，结果有 2 个输出，半加和S（本位和）、半加进位C

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501202118308.png" alt="屏幕截图 2025-01-20 211800" style="zoom:67%;" />

### 全加器

将本位的 2 个二进制数和相邻低位来的进位数进行相加的加法。实现全加功能的电路称为全加器（Full Adder: FA）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211350360.png" alt="屏幕截图 2025-01-21 135008" style="zoom:67%;" />

### 集成全加器

#### 双全加器

* TTL：74LS183
* CMOS：C661

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211353087.png" alt="屏幕截图 2025-01-21 135329" style="zoom:67%;" />

空了2个管脚凑成14管脚是为了让芯片更通用（通用芯片没有12管脚的）

---

用全加器实现**二进制乘法**（可类比正常十进制乘法）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211404704.png" alt="屏幕截图 2025-01-21 140316" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211408293.png" alt="屏幕截图 2025-01-21 140843" style="zoom:67%;" />

---

### 加法器

实现多位二进制数加法运算的电路，进位方式有逐位进位（串行进位）和超前进位（并行进位）两种

串行进位加法器

* 低位进位输出端依次连至相邻高位的进位输入端，最低位进位输入端接地。因此，高位数的相加必须等到低位运算完成后才能进行，运算速度较慢

超前进位加法器

* 进位数直接由加数、被加数和最低位进位数形成。各位运算并行进行，运算速度快

### 串行进位加法器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211419648.png" alt="屏幕截图 2025-01-21 141914" style="zoom:67%;" />

* $t_{pd}$：1 位全加器的平均传输延迟时间

### 超前进位加法器：74LS283

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211421374.png" alt="屏幕截图 2025-01-21 142145" style="zoom:67%;" />

内部电路结构比较复杂

### 用加法器搭建五人表决器

lp上课提到过，曾用作考题

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503071113657.jpg" style="zoom:80%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503071114643.jpg" style="zoom:80%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503071114420.jpg" style="zoom:80%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503071115824.jpg" style="zoom:80%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202503071115091.jpg" style="zoom:80%;" />

---

## 数值比较器

Digital Comparator，又称数字比较器，用以对两个数字的大小或是否相等进行比较的逻辑电路

### 1 位二进制数值比较器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211425624.png" alt="屏幕截图 2025-01-21 142510" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211429146.png" alt="屏幕截图 2025-01-21 142932" style="zoom:67%;" />

### 多位数值比较器

比较原理：从最高位开始逐位向低位进行比较

#### 4位数值比较器74LS85（TTL型）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211439906.png" alt="屏幕截图 2025-01-21 143920" style="zoom:67%;" />

4位数值比较器扩展为8位就需要用到级联输入端（连接更低位的输出）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211440506.png" alt="屏幕截图 2025-01-21 144027" style="zoom:67%;" />

74LS85数值比较器的使用说明：

* 只比较两个 4 位二进制数时，或不使用扩展端时，将扩展端**$I_{(A=B)}$接1**，$I_{(A<B)}$和$I_{(A>B)}$接0

* 当比较两个4位以上8位以下的二进制数时，应先比较两个高4位的二进制数，在高位相等时，才能比较低4位数。只有在两个4位二进制数相等时，输出才由扩展端$I_{(A>B)}$、$I_{(A<B)}$、$I_{(A=B)}$决定

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211451168.png" alt="屏幕截图 2025-01-21 145134" style="zoom:67%;" />

---

