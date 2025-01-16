# 逻辑代数基础_逻辑运算

!!! note "内容总览"
	* 基本逻辑运算和复合逻辑运算
	* 逻辑代数的基本定律及规则

## 基本逻辑运算
### 与运算
决定某一时间的所有条件都具备时，该事件才发生

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151432729.png" alt="屏幕截图 2025-01-15 143220" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151434780.png" alt="屏幕截图 2025-01-15 143433" style="zoom:67%;" />

**逻辑表达式：**$Y=A\cdot B$或$Y=AB$

与运算也叫做逻辑乘运算

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151438784.png" alt="屏幕截图 2025-01-15 143814" style="zoom:67%;" />

### 或运算
决定某一事件的诸多条件中，只要有一个或一个以上具备时，该事件就会发生

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151440211.png" alt="屏幕截图 2025-01-15 143955" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151441142.png" alt="屏幕截图 2025-01-15 144057" style="zoom:67%;" />

**逻辑表达式：**$Y=A+ B$

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151442593.png" alt="屏幕截图 2025-01-15 144219" style="zoom:67%;" />

### 非运算
决定某一事件的条件满足时，事件不发生；反之事件发生

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151444462.png" alt="屏幕截图 2025-01-15 144405" style="zoom:67%;" />

**逻辑表达式：**$Y=\bar A$

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151446313.png" alt="屏幕截图 2025-01-15 144554" style="zoom:67%;" />

## 复合逻辑运算

### 与非运算（NAND）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151449927.png" alt="屏幕截图 2025-01-15 144803" style="zoom:67%;" />

### 或非运算（NOR）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151449022.png" alt="屏幕截图 2025-01-15 144831" style="zoom:67%;" />

### 异或运算（Exclusive-OR）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151510304.png" alt="屏幕截图 2025-01-15 144923" style="zoom:67%;" />

### 同或运算（Exclusive-NOR）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151450199.png" alt="屏幕截图 2025-01-15 145008" style="zoom:67%;" />

### 与或非运算（AND-OR-INVERT）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151452267.png" alt="屏幕截图 2025-01-15 145220" style="zoom:67%;" />

国标和美国标准一定要记下来，曾用标准不用管，考试建议都用国标

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151453349.png" alt="屏幕截图 2025-01-15 145230" style="zoom:67%;" />

## 逻辑代数的基本定律及规则

### 逻辑代数的基本定律

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151544544.png" alt="屏幕截图 2025-01-15 154417" style="zoom:67%;" />

 <img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151550889.png" alt="屏幕截图 2025-01-15 154902" style="zoom:67%;" />

!!! tip "证明等式$A+BC=(A+B)(A+C)$"
	<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151554018.png" alt="屏幕截图 2025-01-15 155345" style="zoom:67%;" />

### 逻辑代数的常用公式
#### 吸收律

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151618066.png" alt="屏幕截图 2025-01-15 161819" style="zoom:67%;" />

#### 冗余律

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151621081.png" alt="屏幕截图 2025-01-15 162146" style="zoom:67%;" />

下述公式的记忆：$A$与$\bar A$不变，剩余的因子各自取反

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151626431.png" alt="屏幕截图 2025-01-15 162528" style="zoom:67%;" />

#### 关于异或运算的一些公式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501151629714.png" alt="屏幕截图 2025-01-15 162841" style="zoom:67%;" />

### 逻辑代数的基本规则
#### 代入规则
将逻辑等式两边的某一变量均用同一个逻辑函数替代，等式仍然成立

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501152031276.png" alt="屏幕截图 2025-01-15 203042" style="zoom:67%;" />

* 利用代入规则能扩展基本定律的应用

#### 反演规则
对任一个逻辑函数式$Y$，将式中所有的“$\cdot$”换成“+”，“+”换成“$\cdot$”，“0”换成“1”，“1”换成“0”，原变量换成反变量，反变量换成原变量，则得到原逻辑函数的反函数$\bar Y$

!!! warning "变换时注意"
	* **不能改变原来的运算顺序**
	* 原变量变成反变量，反变量换成原变量只对单个变量有效，而**对长非号保持不变**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501152041118.png" alt="屏幕截图 2025-01-15 204108" style="zoom:67%;" />

#### 对偶规则
对任一个逻辑函数式$Y$，将式中所有的“$\cdot$”换成"+"，“+”换成“$\cdot$”，“0”换成“1”，“1”换成“0”，则得到原逻辑函数的对偶式$Y‘$

!!! warning "变换时注意"
	* **不能改变原来的运算顺序**
	* **变量上的非号均保持不变**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501152052390.png" alt="屏幕截图 2025-01-15 205145" style="zoom:67%;" />


