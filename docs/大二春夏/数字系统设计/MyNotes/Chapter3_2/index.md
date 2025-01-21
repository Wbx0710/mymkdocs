# 组合逻辑电路_编码器&译码器
!!! note "内容总览"
	* 编码器和译码器
	* 数据选择器和分配器
	* 用MSI实现组合逻辑函数

---

## 编码器

编码：用文字、符号或数字表示特定对象的过程。在数字电路中，采用二进制进行编码

编码器（Encoder）：实现编码功能的电路

被编信号$\rightarrow$编码器$\rightarrow$二进制代码

分类

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