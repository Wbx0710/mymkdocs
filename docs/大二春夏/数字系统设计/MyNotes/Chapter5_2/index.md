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

集成4位同步二进制加法计数器74LS161和74LS163

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502101712580.png" style="zoom:67%;" />

* $CT_T$、$CT_P$：计数器工作控制端，高电平有效
* $CP$：计数脉冲输入端，上升沿触发
* $\bar {CR}$：就是CleaR的首尾字母缩写，清零端，把**输出端$Q_0$、$Q_1$、$Q_2$、$Q_3$**端清零，低电平有效；161为**异步**清零，163为**同步**清零
* $D_0 \sim D_3$：并行数据输入端，与$\bar {LD}$配合使用
* $\bar {LD}$：就是LoaD的首位字母缩写，**同步**置数控制端，低电平有效
* $CO$：进位信号输出端
* $Q_0\sim Q_3$：计数状态输出端

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502101731078.png" style="zoom:67%;" />

$\bar{CR}=0$时，不论有无CP和其他信号输入，计数器被**异步置0**，$\bar {CR}$的优先级是最高的

当$\bar {CR}=1$、$\bar {LD}=0$，在**CP上升沿**到来时（有等待这个过程，所以被叫做同步置数端），并行输入的数据$d_3\sim d_0$被置入计数器，使$Q^n_3Q^n_2Q^n_1Q^n_0=d_3d_2d_1d_0$

当$\bar {CR}=\bar {LD}=CT_T=CT_P=1$时，在计数脉冲的上升沿进行4位二进制加法计数。CO在计数至“1111”时出高电平，在产生进位时输出下降沿

当$\bar {CR}=\bar {LD}=1$，且$CT_T$和$CT_P$中有0时，状态保持不变

74LS161的主要功能

* **异步置0**功能（$\bar {CR}$低电平有效）
* **同步置数**功能（$\bar {LD}$低电平有效）
* **计数**功能（$\bar {CR}=\bar {LD}=CT_T=CT_P=1$）
* **保持**功能（$\bar {CR}=\bar {LD}=1$，且$CT_T$和$CT_P$中有0）

74LS161与74LS163功能比较

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502102044104.png" style="zoom:67%;" />

---

集成4位同步二进制可逆计数器74LS191（**单时钟**）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502102049597.png" style="zoom:67%;" />

* $\bar {CT}$：计数器控制端，低电平有效
* $\bar U/D$：加/减计数控制端
* $CP$：计数脉冲输入端，上升沿触发
* $D_0\sim D_3$：并行数据输入端
* $\bar {LD}$：**异步**置数控制端，低电平有效
* $CO/BO$：进位/借位信号输出端
* $\bar {RC}$：级间串行进位输出端
* $Q_0\sim Q_3$：计数状态输出端

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502102056652.png" style="zoom:67%;" />

$\bar{LD}=0$时，不论有无CP和其他信号输入，并行输入的数据**$d_3\sim d_0$被置入**计数器相应的触发器中

当$\bar{LD}=1$、$\bar{CT}=0$，当$\bar U/D=0$时，在**CP上升沿**作用下，进行二进制**加法**计数

当$\bar{LD}=1$、$\bar{CT}=0$，当$\bar U/D=1$时，在**CP上升沿**作用下，进行二进制**减法**计数

当$\bar {CT}=\bar {LD}=1$，计数器的**状态保持**不变

$\bar {RC}$的作用：多个可逆计数器级联时使用

$$
\bar {RC}=\overline{\bar{CP}\cdot CO/BO\cdot CT}
$$

当$\bar{CT}=0$即$CT=1$、$CO/BO=1$时，$\bar {RC}=CP$，由$\bar {RC}$端产生的输出进位脉冲波形与输入计数脉冲CP的波形相同

74LS191的主要功能

* **异步置数**功能（$\bar {LD}$低电平有效）
* **加计数**功能（$\bar{LD}=1$、$\bar{CT}=0$，当$\bar U/D=0$）
* **减计数**功能（$\bar{LD}=1$、$\bar{CT}=0$，当$\bar U/D=1$）
* **保持**功能（$\bar {CT}=\bar {LD}=1$）

---

集成4位同步二进制可逆计数器74LS193（**双时钟**）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502102111594.png" style="zoom:67%;" />

* $CR$：**异步**清零端，**高**电平有效
* $CP_U$：**加法**计数脉冲输入端
* $CP_D$：**减法**计数脉冲输入端
* $D_0\sim D_3$：并行数据输入端
* $\bar{LD}$：**异步**置数控制端，低电平有效
* $\bar {CO}$：进位信号输出端
* $\bar {BO}$：借位信号输出端
* $Q_0\sim Q_3$：计数状态输出端

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202502111400682.png" style="zoom:67%;" />

$CR=1$时，不论有无CP和其他信号输入，计数器被**异步置0**，CR的优先级是最高的

当$CR=0$、$\bar {LD}=0$时，并行输入的数据$d_3 \sim d_0$被**异步置入**计数器，使$Q^n_3Q^n_2Q^n_1Q^n_0=d_3d_2d_1d_0$

当$CR=0$、$\bar {LD}=1$、$CP_D=1$时，在**$CP_U$上升沿**作用下，进行二进制**加法**计数

当$CR=0$、$\bar {LD}=1$、$CP_U=1$时，在**$CP_D$上升沿**作用下，进行二进制**减法**计数

当$CR=0$、$\bar {LD}=1$、$CP_U= CP_D=1$时，计数器的状态保持不变

多个双时钟可逆计数器级联时使用$\bar{CO}$、$\bar {BO}$，当$Q_3Q_2Q_1Q_0=1$时，$\bar{CO}=CP_U$，其波形与加法计数器脉冲相同

当$\bar Q_3\bar Q_2\bar Q_1\bar Q_0=1$时，$\bar {BO}=CP_D$，其波形与减法计数脉冲相同

多个74LS193级联时，只需将低位的$\bar {CO}$端、$\bar{BO}$端分别与高位的$CP_U$端、$CP_D$端连接起来，$CR$端、$\bar{LD}$端连接起来

由于数字系统课内没有很多计数器相关内容（故先暂且略过）

---

## 寄存器

### 寄存器（Register）的概念

**寄存**：把二进制数据或代码暂时存储起来

**寄存器**：具有寄存功能的电路

### 寄存器的特点

* 主要由触发器构成，一般不对存储内容进行处理
* 每个触发器只能记忆一位二进制信息，如果存放n位二进制信息，则需要n个触发器

### 寄存器的分类

#### 按功能分

* 基本寄存器：并入并出
* 移位寄存器：并入并出、并入串出、串入并出、串入串出

#### 按开关元件分

* TTL寄存器
* CMOS寄存器

### 基本寄存器

#### 4边沿D触发器

