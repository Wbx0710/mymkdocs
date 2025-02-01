# 组合逻辑电路_编码器&译码器
!!! note "内容总览"
	* 编码器和译码器
	* 数据选择器和分配器
	* 用MSI实现组合逻辑函数

---

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

