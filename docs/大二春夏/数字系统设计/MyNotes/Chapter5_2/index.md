# 时序逻辑电路_计数器&寄存器

!!! note "内容总览"
	* 计数器
	* 寄存器
	* 顺序脉冲发生器

---

## 计数器

### 计数器的作用与分类

#### 计数器（Counter）的作用

用于累计输入时钟脉冲（CP）的个数，还常用于分频、定时、产生脉冲序列和进行数字运算，是一种Moore型时序电路

#### 计数器的分类

按数的进制分

* 二进制计数器
* 十进制计数器
* N进制计数器

按计数方式分

* 加法计数器
* 减法计数器
* 可逆计数器

按时钟控制分

* 同步计数器
* 异步计数器

#### 计数器的计数规律

* 二进制**加法**计数器&二进制**减法**器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502062217416.png" style="zoom:67%;" />

* **8421码**十进制加法计数器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502062219856.png" style="zoom:67%;" />

* **N进制**计数器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502062220210.png" style="zoom:67%;" />

$n$个触发器有$2^n$种输出，最多可实现模$2^n$计数

---

### 二进制计数器

#### 二进制同步加法计数器

* 设计方法一：按前述同步时序电路的设计步骤进行

* 设计方法二：按计数规律进行级联（只适用于二进制计数器）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071338066.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071341598.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071344800.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071345552.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071348992.png" style="zoom:67%;" />

$n$位二进制同步加法计数器级联规律：
$$
T_i=Q^n_{i-1}\cdot Q^n_{i-2}\cdot \cdot \ \cdot Q^n_{1}\cdot Q^n_{0}=\prod_{j=0}^{i-1} Q^n_{j}
$$
如果把触发器$FF_i$换成**${T}'$触发器**，把上式归入$FF_i$的时钟条件，即将$FF_i$的时钟方程改为：
$$
CP_i=CP\cdot \prod_{j=0}^{i-1}Q^n_{j}
$$
便可**用${T}'$触发器构成$n$位二进制同步加法计数器**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071401347.png" style="zoom:67%;" />

---

#### 二进制同步减法计数器

* 设计方法一：按前述同步时序电路的设计步骤进行

* 设计方法二：按计数规律进行级联（只适用于二进制计数器）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071404103.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071406517.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071408670.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071409601.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071410158.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071411655.png" style="zoom:67%;" />

$n$位二进制同步减法计数器级联规律：
$$
T_i=\bar Q^n_{i-1}\cdot \bar Q^n_{i-2}\cdot \cdot \ \cdot \bar Q^n_{1}\cdot \bar Q^n_{0}=\prod_{j=0}^{i-1} \bar Q^n_{j}
$$
如果把触发器$FF_i$换成**${T}'$触发器**，把上式归入$FF_i$的时钟条件，即将$FF_i$的时钟方程改为：
$$
CP_i=CP\cdot \prod_{j=0}^{i-1} \bar Q^n_{j}
$$
便可**用${T}'$触发器构成$n$位二进制同步减法计数器**

---

#### 二进制同步可逆计数器

在**加减**控制信号管理下，把二进制同步加法计数器和减法计数器组合起来，便可获得二进制同步可逆计数器

* 单时钟输入二进制同步可逆计数器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071418572.png" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071420658.png" style="zoom:67%;" />

这里的$\bar U/D$的意思其实就是$Up/Down$，故可以记忆：$\bar U$为低电平有效，$D$为高电平有效，则输入为0时则为加计数，输入为 1 时则为减计数

* 双时钟输入二进制同步可逆计数器

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071424744.png" style="zoom:67%;" />

加计数：

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071425597.png" style="zoom:67%;" />

减计数：

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502071426472.png" style="zoom:67%;" />

---

#### 集成二进制同步计数器

