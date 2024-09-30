# Chapter 3 复变函数的积分

## 微积分回忆内容

### **与路径无关的第二类曲线积分**

<object data="第二类曲线积分Wbx.pdf" type="application/pdf" width="100%" height="800">
    <embed src="第二类曲线积分Wbx.pdf" type="application/pdf" />
</object>

### **平面第二型曲线积分 $\int_A^BPdx+Qdy$ 与路径无关的充分必要条件**

!!! note "与路径无关的充分必要条件"
    在区域D内任意取定两点A, B。曲线积分 $\int_{\overset{\LARGE{\frown}}{AB}}Pdx+Qdy$ 在区域D内与路径无关的充分必要条件是：

    **对于D内任意一条简单逐段光滑闭曲线C，沿C的曲线积分为零 $\Leftrightarrow \oint_{C^+}Pdx+Qdy=0$**


!!! tip "推论（等价条件）"
    设D是单连通区域，函数P(x,y)与Q(x,y)在D内有一阶连续偏导数，则对D内任意取定的两点A与B，曲线积分$\int_{\overset{\LARGE{\frown}}{AB}}Pdx+Qdy$与路径无关的充分必要条件是：
    * 1.**等式 $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$ 在D内处处成立**
    或
    * 2.**$Pdx+Qdy$ 恰是D内某个函数$u(x,y)$的全微分。$\Leftrightarrow du(x,y)=Pdx+Qdy$**

    其中：

	**1** 的证明可根据格林公式将对闭合曲线的积分换成对其内部的二重积分

	格林公式——当P, Q在有界闭区域$D\in R^2$上连续且具有一阶连续导数时：

	$ \oint_{L^+}Pdx+Qdy=\iint\limits_{D}(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y})dxdy$

	**2** 通过二元函数混合偏导数相等，可以证明

	(==注意==，物理化学Ⅱ中，麦克斯韦方程的证明也是用的该条件；此显然，状态函数的变化量与路径无关）

	复变函数中，证明C-R条件也是用的相同的方法。实际上，在复数中，$P=u+iv， Q=iu-v$



## **第三章基本公式**

若函数$f(Z)$在C上连续，则其可积（积分极限存在），有：

$\int_cf(z)dz=\int_cudx-vdy+i\int_cvdx+udy$

对于参数方程$z(t)=x(t)+iy(t)$,$\int_cf(z)dz=\int_\alpha^\beta f(z(t))z'(t)dt$

### 柯西积分定理

!!! note "柯西积分定理"
	f(z)在D内处处解析，则在D上任一封闭曲线积分为0

	$\oint_cf(z)dz=0$

	==特别的== ：$\oint_c\frac{dz}{z-z_0}=2\pi i$

	==推论== ：if 在单连通域D内解析，$\int_c f(z)dz$与路径无关，只与起点和终点有关

### 闭路变形原理/形变定理

!!! example "形变定理"
	设双连域D的边界$C=\overline{C_1}+\overline{C_2}$。函数$f(Z)$在D内解析，在C上连续。有：
    $$
    \oint_{C_1}f(z)dz=\oint_{C_2}f(z)dz
    $$

	应用：

	可以变形成绕不解析点的环路积分（$D(z_0,R),R<\delta$）

### 原函数定理

!!! tip "原函数定理"
	若$f(z)$解析，则其原函数 $F(z)=\int_{z_o}^zf(t)dt$ 解析，且 $F(z)'=f(z)$

### Morera定理

!!! note "Morera定理"
	若$f(z)$在单连通区域D内连续，且对于D内任意闭曲线C，有$\oint_cf(z)dz=0$ ，则$f(z)$在D内解析

	（证明：定义原函数，证明构造良好，应用无穷可微性）

## 柯西积分公式及其推论

### **柯西积分公式**

$$
\Large f(z_0)=\frac{1}{2\pi i}\oint_c\frac{f(z)}{z-z_0}dz
$$

### **积分平均值定理**：

**一个解析函数在圆心的值- 等于它在圆周上的平均值**
$$
f(z_0)=\frac{1}{2\pi}\oint_0^{2\pi} f(z)d\theta\\
 z=z_0+Re^{i\theta}
$$

### **高阶导数的柯西积分公式**

$$
f^{(n)}(z_0)=\frac{n!}{2\pi i }\oint_c\frac{f(z)}{(z-z_0)^{n+1}}dz
$$

### Cauchy 不等式

$$
|f^{(n)}(z_0)|\leq \frac{n!}{R^n}M，(M=max_{n \in |z-z_0|=R}|f(z)|)
$$

### **Liouville's Raw**

!!! quote "Liouville's Raw"
    <center> **有界整函数（全平面的有界解析函数）必为常数** </center>

??? example "证明"
	利用n=1，R=∞的Cauchy不等式

	只要在区域{ $z\Big| |z|>R$ }（$|z| \rightarrow \infty$）上有界，即可证明全平面上有界

	由柳维尔定理或柯西不等式，当函数$f(z)$为整函数且满足以下条件之一时：

    > 1 $|f(z)|\geq c$  $\Rightarrow$  ①构造$g(z)=\frac{1}{f(z)}$（$|g(z)|\leq \frac{1}{c}$）
    >
    > 2 $Re f(z) \leq c$  $\Rightarrow$  ①构造$g(z)=e^{f(z)}$（$|g(z)|\leq e^{c}$）
    >
    > 	$Im f(z) \leq c$  $\Rightarrow$  ①构造$g(z)=e^{-if(z)}$（$|g(z)|\leq e^{c}$）
    >
    > 3 $Re f(z) \geq c$  $\Rightarrow$  ①构造$g(z)=e^{-f(z)}$（$|g(z)|\leq e^{-c}$）
    >
    > 	$Im f(z) \geq c$  $\Rightarrow$  ①构造$g(z)=e^{if(z)}$（$|g(z)|\leq e^{-c}$）
    >
    > 4 $argf(z)\equiv c$ $\Rightarrow $  ①构造$g(z)=e^{-ic}f(z)$（$arg\ g(z)\equiv 0$）；②$g(z)\in R,\ g(z)\gt 0$ $\Rightarrow $ $Img(z)\equiv0$；③结合C-R条件
    >
    > 5 $f(z)=\sum\limits_{0}^{n}a_iz^i$，且$a_n \neq 0$  $\Rightarrow$  $g(z)=\frac{1}{f(z)}$（$|g(z)|\leq M$）（代数学基本定理）

	而后，证明 $g(z)$ 为常数，$g'(z)\equiv 0$；即可证明$f(z) \equiv C$

#### 最大值定理

!!! note "Liouville's Raw"
    $$
    若f(z)在\overline{D}内解析，且 \exists z_0使得|f(z_0)|=max_{z \in \overline{D}} |f(z)|，则 f(z)\equiv 0
    $$

证明可参考积分平均值定理+不等式，或零点孤立性定理（见Chapter 4）

!!! tip "推论"
	设函数$f(z)$在有界区域D内解析，在闭域$\bar{D}=D+C上$连续；$|f(z)| \leq M\quad(z\in\bar{D})$，则除$f(z)$为常数外，$|f(z)|<M\quad(z\in D)$

	即除非$f(z) \equiv C$，否则最大值不可能在$\overline{D}$上取到 