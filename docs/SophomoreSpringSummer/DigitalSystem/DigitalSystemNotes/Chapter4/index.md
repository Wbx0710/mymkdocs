# 组合逻辑电路_编码器&译码器

## 编码器

编码：用文字、符号或数字表示特定对象的过程。在数字电路中，采用二进制进行编码

编码器（Encoder）：实现编码功能的电路

被编信号$\longrightarrow$编码器$\longrightarrow$二进制代码

编码器分类：

* 二进制编码器
* 二-十进制编码器：用二进制数对十进制数进行编码
* 优先编码器：对普通的编码器进行了改良

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211512818.png" alt="屏幕截图 2025-01-21 151222" style="zoom:67%;" />

### 二进制编码器

将$N=2^n$个输入信号转换成n位二进制代码的逻辑电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211529499.png" alt="屏幕截图 2025-01-21 151501" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211534433.png" alt="屏幕截图 2025-01-21 153426" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211538241.png" alt="屏幕截图 2025-01-21 153825" style="zoom:67%;" />

### 二-十进制编码器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211540647.png" alt="屏幕截图 2025-01-21 154017" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501211543627.png" alt="屏幕截图 2025-01-21 154231" style="zoom:67%;" />

### 优先编码器（Priority Encoder）

允许同时输入多个编码信号，并只对其中优先级最高的信号进行编码输出的电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501212008979.png" alt="屏幕截图 2025-01-21 200812" style="zoom:67%;" />

#### 8线-3线优先编码器74LS148

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501212026790.png" alt="屏幕截图 2025-01-21 202643" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501212030196.png" alt="屏幕截图 2025-01-21 203003" style="zoom:67%;" />

#### 两片74LS148组成16线-4线优先编码器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501212102728.png" alt="屏幕截图 2025-01-21 210226" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501212104531.png" alt="屏幕截图 2025-01-21 210433" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502011852880.png" style="zoom:67%;" />

---

## 译码器

译码：将具有特定意义的二进制代码转换成相应信号输出的过程

译码器（Decoder）：实现译码功能的电路

二进制代码$\longrightarrow$译码器$\longrightarrow$被编信号

译码器分类：

* 二进制译码器
* 二-十进制译码器
* 显示译码器：与数码管一起用

### 二进制译码器

将输入二进制代码的各种组合按其原意转换成对应信号输出的逻辑电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502011917322.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502011922454.png" style="zoom:67%;" />

#### 3线-8线译码器74LS138

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012118551.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012122888.png" style="zoom:67%;" />

二进制译码器又称变量译码器，其输出端能提供输入变量的全部最小项

#### 译码器的扩展

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012128960.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012137295.png" style="zoom:67%;" />

### 二-十进制译码器

将输入的10组4位二-十进制代码翻译成0~9十个对应信号输出的逻辑电路

输入端有四个端口，输出端有十个端口，加上两个电源端已经十六个端口了。故此芯片没有控制端口

#### 4线-10线译码器74LS42

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012141116.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012143105.png" style="zoom:67%;" />

---

## 显示译码器

将输入的BCD码译成相应输出信号，以驱动显示器显示出相应数字的电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012150840.png" style="zoom:67%;" />

输入BCD码$\longrightarrow$输出驱动七段数码管显示相应数字

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012154702.png" style="zoom:67%;" />

数字设备中用得较多的是七段数码显示器，又称数码管。常用的有半导体数码显示器（LED）和液晶显示器（LCD）等，它们由七段可发光的字段组合而成。

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012201143.png" style="zoom:67%;" />

### 共阳极接法

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012204110.png" style="zoom:67%;" />

注：0110输出才是6，这0111应该是7，但是我想截6（他PPT翻太快了没办法T-T）

### 共阴极接法

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012207129.png" style="zoom:67%;" />

### 集成译码器

#### 74LS48（输出高电平有效）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012218885.png" style="zoom:67%;" />

 <img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012230085.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012233323.png" style="zoom:67%;" />

#### 多位数码管的动态灭零连接电路

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012240760.png" style="zoom:67%;" />

#### CD4511（输出高电平有效）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012243495.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502012246411.png" style="zoom:67%;" />

大于9的部分会直接**消隐**，而不是像74LS48一样显示乱码

锁存指的是锁住并显示之前的数据

---

## 数据选择器与分配器

数据选择器：根据地址信号的要求，从多路输入数据中选择其中一路输出的逻辑电路。又称多路选择器（Multiplexer，简称MUX）或多路开关

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021125245.png" style="zoom:67%;" />

数据选择器的输入信号个数N与地址码个数n的关系为$N=2^n$常用2 选 1、4 选 1、8 选 1 和16 选 1 等数据选择器

### 4 选 1 数据选择器

使用与或门设计一个4 选 1数据选择器。具有使能控制端，控制信号为 1 时，不工作，控制信号为 0 时，处于工作状态

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021136413.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021137197.png" style="zoom:67%;" />

### 双 4 选 1 数据选择器74LS153

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021140032.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021141545.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021143084.png" style="zoom:67%;" />

### 8 选 1 数据选择器74LS151

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021145834.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021148555.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021150745.png" style="zoom:67%;" />

### 数据选择器的扩展

#### 将双 4 选 1 数据选择器74LS153连接成 8 选 1 数据选择器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021158705.png" style="zoom:67%;" />

#### 将双 8 选 1 数据选择器74LS151连接成 16 选 1 数据选择器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021201962.png" style="zoom:67%;" />

---

## 数据分配器

根据地址信号的要求，将一路输入数据分配到多路输出中的其中一路作为输出的逻辑电路，称为数据分配器（Demultiplexer，简称DMUX）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021204067.png" style="zoom:67%;" />

### 译码器构成数据分配器

用 3 线 - 8 线译码器74LS138可以构成 1 路 - 8 路数据分配器。$A_2$、$A_1$、$A_0$为地址信号输入端，$\bar Y_0$~$\bar Y_7$为数据输出端，三个使能$\bar {ST_A}$、$\bar {ST_B}$、$ST_C$中的任一个都可作为数据D输入端

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021317793.png" style="zoom:67%;" />

---

## 用中规模集成电路实现组合逻辑函数

### 组合逻辑函数的电路实现

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021555360.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021557992.png" style="zoom:67%;" />

说明同样的逻辑函数可以有不同的电路实现

实现电路如果要选用**“二进制译码器”**或**“数据选择器”**，其实就是要确定“二进制译码器”或“数据选择器”输入端与待求函数输入信号A、B、C，输出端与输入信号Y的连接关系，即**待求逻辑**

### 二进制译码器实现组合逻辑函数

由于n位二进制译码器可提供$2^n$个最小项的输出，而任一个逻辑函数都可变换为最小项之和的标准与或式，因此利用译码器和门电路可实现单输出及多输出组合逻辑电路

当译码器输出**低电平有效**时，选用**与非门**（因为低电平有效为$\bar Y$，用与非门才可以用摩根定律二次展开为最小项和的形式）；译码器输出**高电平有效**时，选用**或门**

#### 基本步骤

* 选择集成二进制译码器
* 写出待求函数的标准与非-与非式（两次取反）
* 确定待求函数变量和译码器输入端的关系
* 选择合适的门电路，画连线图

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021619183.png" style="zoom:67%;" />

注：右下角相当于是用卡诺图化简的“逆过程”去找最小项，对于变量数少的情况会比较方便

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021622646.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021625112.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021628814.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021630521.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021634245.png" style="zoom:67%;" />

---

### 数据选择器实现组合逻辑函数

原理：选择器输出为标准与或式，含地址变量的全部最小项

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021701018.png" style="zoom:67%;" />

任何组合逻辑函数都可以表示成为最小项之和的形式，故可用数据选择器实现

#### 基本步骤

* 根据$n=k-1$或$n=k$确定数据选择器的型号（n—选择器地址码，k—函数的变量个数）
* 写出函数的标准与或式和选择器输出信号表达式
* 对照比较，确定选择器各个输入变量的表达式
* 根据采用的数据选择器和求出的表达式画出连线图

#### 典例分析

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021710231.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021712452.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021714699.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021718491.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021736737.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021737113.png" style="zoom:67%;" />

方法二：图形法（降维法）

先画出待求函数的**降维卡诺图**，再画出相应数据选择器输出信号的卡诺图，利用两者相等的关系，求出数据选择器输入变量的表达式

一般将卡诺图的变量数称为该图的维数，如果把某些变量也作为卡诺图中小方格的值，则会减少卡诺图的维数，这种卡诺图称为“降维卡诺图”

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021748423.png" style="zoom:67%;" />

其实就是看当我AB定下来后，C分别取0或者 1 ，去看F的卡诺图中取值是为0还是为 1

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502021750294.png" style="zoom:67%;" />

注：如果变量数较多，比如有4个，上述卡诺图降维的过程也比较复杂，并且也容易出错，可采用**“降维真值表”**来进行快速转换

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022013204.png" style="zoom:67%;" />

变量数多的情况下，用拼凑法很难做出来，所以要用降维法

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022020448.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022020704.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502022022765.png" style="zoom:67%;" />

---

## 组合逻辑电路中的竞争冒险

### 竞争和冒险

* 竞争

当信号通过导线和逻辑门电路时，将产生**时间延迟**。在组合逻辑电路中，不同信号经过不同长度的导线和不同级数的逻辑门电路，**到达另一个门的输入端的时刻会有先有后的现象**

* 冒险

逻辑门因输入端的竞争而导致输出产生不应有的**尖峰干扰脉冲**的现象

冒险的前提是输入端产生了竞争，但并不是是所有的竞争都会产生冒险（即有竞争不一定有冒险，但有冒险就一定存在竞争）

### 冒险的类型

#### 0型冒险

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072015776.png" style="zoom:67%;" />

#### 1 型冒险

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072018143.png" style="zoom:67%;" />

### 竞争冒险的判断方法

#### 代数法

在$n$变量的逻辑函数表达式中，给$n-1$个变量以特定取值（0或 1）后，表达式中仅保留某个具有竞争能力的变量A，若化简以下两种形式，则该组合逻辑电路存在冒险

* 若$Y=A+\bar A$则产生0型冒险
* 若$Y=A\cdot \bar A$则产生 1 型冒险

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072025299.png" style="zoom:67%;" />

#### 卡诺图法

根据函数作出卡诺图，若卡诺图中填“ 1 ”的方格形成的卡诺圈中，存在2个或2个以上相切的卡诺圈，则存在竞争冒险的可能性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072028129.png" style="zoom:67%;" />

上题为什么是0型冒险？因为代入$B=C=1$，$Y=A+\bar A$，为0型冒险

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072031568.png" style="zoom:67%;" />

注：不要忘了上下也可能相切

### 竞争冒险的消除方法

#### 引入封锁脉冲

在输入信号发生变化可能导致出现竞争冒险时，可在门电路输入端引入一封锁脉冲，将该门电路封锁

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072036125.png" style="zoom:67%;" />

#### 引入选通脉冲

选通脉冲仅在输出处于稳定值的期间到来，以保证输出正确的结果

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072038739.png" style="zoom:67%;" />

#### 接入滤波电容

因为竞争冒险产生的干扰脉冲一般很窄，所以可在输出端并接一个不大的滤波电容$C_f$，消除毛刺

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072041731.png" style="zoom:67%;" />

$C_f$取值越大，滤波效果越好，但却会使正常输出信号前后沿变坏。在TTL电路中，$C_f$有几百微法即可

#### 修改逻辑设计，增加冗余项

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072045311.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502072103741.png" style="zoom:67%;" />

#### 4种方法的对比

* 加封锁脉冲或选通脉冲式行之有效的方法，目前许多MSI器件都具备使能（选通控制）端，为加入封锁或选通信号、消除毛刺提供了方便
* 接滤波电容是实验调试阶段常采取的应急措施
* 增加冗余项的方法，若能运用得当，可以收到令人满意的效果，但总体来看，其适用范围有限

---

The End of Chapter 3
