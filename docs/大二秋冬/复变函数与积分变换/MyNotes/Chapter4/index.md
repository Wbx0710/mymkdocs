# Chapter 4 级数

## 判断敛散性
!!! note "Abel定理"
	$\sum_{n=0}\limits^{\infty} C_nz^n$在$z=z_0$收敛，则在$z<z_0$绝对收敛；在$z=z_0$发散，则在$z>z_0$绝对收敛

	幂级数收敛半径R：
	
	* $\lim\limits_{n\rightarrow\infty}|\frac{C_n}{C_{n+1}}|=R$
	* $\lim\limits_{n\rightarrow\infty}|\frac{1}{^n\sqrt{|C_n|}}|=R$


## 幂级数和函数的解析性

定理 设幂级数$\sum\limits _{n= 0}^{\infty }C_nz^n$的收敛半径为$R$,

且$\sum\limits _{n= 0}^{\infty}C_nz^n= f( z)$, $\left ( \mid z\mid < R\right )$

则：(i) $f( z) \textbf{ 在 }\mid z\mid < R$ 内解析

(ii)上式两边可**任意阶逐项求导**

(iii)上式两边可**逐项积分**，即

$$
\int\limits_Cf(z)dz=\sum\limits_{n=0}^\infty C_n\int\limits_Cz^ndz
$$

其中$C\subset B_R. \textbf{ 特 别 , }C\textbf{起 点 原 点 , 终 点  }z\in B_R$,

则

$$\int_Cz^ndz=\frac{z^{n+1}}{n+1}.$$



### 台劳定理

台劳级数：

$f(z)$在区域$D=\{z;|z-z_0|<R\}$解析，则：

$$
f(z)=\sum\limits_{n=0}^\infty \frac{f^{(n)}(z_0)}{n!}(z-z_0)^n
$$

其中$C_n=\frac{f^{(n)}(z_0)}{n!}=\frac{1}{2\pi i }\oint_c\frac{f(z)}{(z-z_0)^{n+1}}dz$

特别：当$z_{0}=0$时，

$f\left ( z \right ) =\sum_{n=0}^{\infty}\frac{f ^{\left ( n \right ) }\left ( 0 \right ) }{n!}z^{n},|z|<R  $称为麦克劳林级数

**重要的麦克劳林展开**：

$$
e^z=\sum\limits_{n=0}^\infty \frac{z^n}{n!}
$$

$$
cosz=\sum\limits_{n=0}^\infty \frac{(-1)^nz^{2n}}{(2n)!}=1-\frac{z^2}{2!}+\frac{z^4}{4!}+\cdots 
$$

$$
sinz=\sum\limits_{n=0}^\infty \frac{(-1)^nz^{2n+1}}{(2n+1)!}=\frac{z^1}{1!}-\frac{z^3}{3!}+\cdots 
$$

$$
\frac{1}{1-z}=\sum\limits_{n=0}^\infty z^n\ (|z|<1)
$$

$$
\frac{1}{1+z}=\sum\limits_{n=0}^\infty (-1)^nz^n\ (|z|<1)
$$

推论：$f(z)$在区域$D$内解析$\Longleftrightarrow $ $f(z)$在$D$内任意一点$z_{0}$处均可展开成幂级数

一些初等函数的台劳展开式

$$
e^z=\sum_{n=0}^\infty\frac{f^{(n)}(0)}{n!}z^n=\sum_{n=0}^\infty\frac{z^n}{n!}=1+z+\frac{z^2}{2!}+\cdots+\frac{z^n}{n!}+\cdots(\mid z\mid<+\infty) 
$$

$$
\quad\cos z=\frac{e^{iz}+e^{-iz}}2=\frac12\sum_{n=0}^{\infty}\frac{\left(iz\right)^{n}+\left(-iz\right)^{n}}{n!} 
$$

$$
\cos z=\sum_{n=0}^\infty\frac{\left(-1\right)^nz^{2n}}{\left(2n\right)!}=1-\frac{z^2}{2!}+\frac{z^4}{4!}+\cdots+\left(-1\right)^n\frac{z^{2n}}{\left(2n\right)!}+\cdots 
$$

$$
\begin{gathered}
\sin z=\sum_{n=0}^\infty\frac{\left(-1\right)^nz^{2n+1}}{\left(2n+1\right)!}=z-\frac{z^3}{3!}+\frac{z^5}{5!}+\cdots+\left(-1\right)^n\frac{z^{2n+1}}{\left(2n+1\right)!}+\cdots \\
\begin{aligned}shz=\sum_{n=0}^\infty\frac{z^{2n+1}}{(2n+1)!}=z+\frac{z^3}{3!}+\frac{z^5}{5!}+\cdots+\frac{z^{2n+1}}{(2n+1)!}+\cdots\quad(\mid z\mid<+\infty)\end{aligned} \\
chz=\sum_{n=0}^\infty\frac{z^{2n}}{(2n )!}=1+\frac{z^2}{2!}+\frac{z^4}{4!}+\cdots+\frac{z^{2n}}{(2n)!}+\cdots\quad(\mid z\mid<+\infty) \\
\frac1{1-z}=\sum_{n=0}^\infty z^n=1+z+z^2+\cdots+z^n+\cdots\quad(\mid z\mid<1) 
\end{gathered}
$$


### 罗朗定理

若函数在以$z_0$为中心的圆环上解析，则复函数$f(Z)$在圆环内可以展开为罗朗级数：

$$
f(z)=\sum\limits_{n=-\infty}^{\infty}C_n(z-z_0)^n=I_n+I_p\\
$$

其中：$C_n=\frac{1}{2\pi i}\oint_{C_R}\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}d\zeta， R_1<R<R_2$。因为$z_0$不在解析域（圆环）内，故$C_n$不能用高阶柯西积分公式化简。

注意：这是最完整的形式；不排除部分项不存在的情况。

应用领域：

计算积分$C_{-1}=\frac{1}{2\pi i}\oint_Cf(z)dz$