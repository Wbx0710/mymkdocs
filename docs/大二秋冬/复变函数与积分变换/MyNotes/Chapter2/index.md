# Chapter 2 解析函数

复变函数：$w=f(z)=f(x+iy)=u(x,y)+iv(x,y)$

**极限**：$\lim\limits_{z\rightarrow z_0}f(z)=A\ \Leftrightarrow$ $\lim\limits_{x\rightarrow x_0,y\rightarrow y_0}u(x,y)=u_0,\lim\limits_{x\rightarrow x_0,y\rightarrow y_0}v(x,y)=v_0$

**连续**：$\lim\limits_{z\rightarrow z_0}f(z)=f(z_0)\ $  $\Leftrightarrow \forall \epsilon > 0 $,$~\exists~δ(ε)>0$，当$0<|z-z_0|<δ时，|f(z)-f(z_0)|<ε$

 $\Leftrightarrow $对应的实函数u,v分别连续（左极限=右极限=$f(z_0)$）

> 在闭区域$\overline G$中连续的函数有两个重要性质：
>
> 1. **$|f(z)|$在$\overline G$中有界，并达到它的上下界。**
>
> 2. $f(z)$在$\overline G$中一致连续，即对于任意 ε>0，存在与z无关的$δ(ε)>0$，在$\overline G$中的任何两点$z_1,z_2$,只要满足$|z_1-z_2|<δ$,就有$|f(z_1)-f(z_2)|<ε$.

若两函数在$z_0$连续，则其$+,-\times,\div$(分母$\ne 0)$，复合运算后，在点$z_0$仍连续。

**求导**：$f'(z_0)=\lim\limits_{\Delta z\rightarrow 0}\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}$



### 微积分回忆内容

**连续 可导和可微**

![image-20231203151558169](https://2023zju-1322583061.cos.ap-shanghai.myqcloud.com/mdimage/image-20231203151558169.png)

1、偏导数存在且偏导数连续，一定可微。

2、可微一定可导，可导不一定可微。

3、一般看不可导：**沿着两条不同方向线趋近某点，不一样推出矛盾**



### 解析性

定义：

> 	$f(z)$在$z_0$的某个邻域内的**每一点可导** $\Leftrightarrow$ $f(z)$在$z_0$点解析/正则
> 				
> 	$f(z)$在区域D内的每一点可导 $\Leftrightarrow$ $f(z)$在区域D内解析/正则 
> 				
> 	$\Leftrightarrow$ $f(z)$在D内的任意点$z_0$（存在$z_0$的一个邻域）处均可展开为收敛的幂级数
> 				
> 	奇点：不解析的点。
> 				
> 	孤立奇点：$D(z_0,\delta)$内的唯一奇点。

判别法：

* 同时满足：

	①$u(x,y),v(x,y)$在$(x,y)$点的邻域内（或D内）可微 

	②Cauchy-Riemann条件（**C-R条件**）
$$
\left \{
\begin{array}{}
\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\\
\frac{\partial u }{\partial y}=-\frac{\partial v}{\partial x}
\end{array}
\right.
$$

注意：如果满足条件的是孤立的点，那么只能说$f(z)$在该点上可导，而不解析。

* 解析函数的复合函数（加、减、乘、除等解析函数）仍为解析函数；

* 反函数解析法则：设$w=f(z)$在区域D内单叶解析，$(f^{-1}(w))^{\prime}=\frac{1}
  {f^{\prime}(z)}=\frac{1}{f^{\prime}[f^{-1}(w)]}$

  > 单叶函数：在区域D上解析的单值复变函数$f(z)$，若对D中任意不同的两点$z_1,z_2$，有：
  > $f(z_1)\neq f(z_2)$，则说f(z)为D上的单叶函数。 

* $f(z)=\bar{z}$ 处处不可微，处处不解析

**解析函数 $f(z)$ 退化为常数的充分条件**：

* 若$f(z)$在D上解析，且满足以下条件之一：

> 1. 导数恒为0 （？）
> 2. 解析函数的实部、虚部、幅角、模中有1恒为常数
> 3. $\overline{f(z)}$ 在D上解析

则$f(z)$在D内恒为常数。

* 另若$f(z)$在整个复平面解析，见柳维尔定理解析性。



小结：函数 f(x) 在区域D解析的等价条件有：

> 1. 函数 f(x) 在区域 D内可导； 
> 2. Re(f),Im(f)在区域D内可微且满足Cauchy-Riemann条件；
> 3. 函数 f(x) 在区域 D内连续且积分与路径无关；
> 4. 函数 f(x) 在区域 D内可展开为幂级数。



**调和函数**
定义：如果**实函数**$U\left ( x,y \right ) $在区域$D$内有二阶连续偏导数并满足拉普拉斯方程$\Delta U=\frac{\partial^{2}  U}{\partial x^{2}  }+ \frac{\partial^{2}  U}{\partial y^{2}  }=0,inD$,则称$U\left (x,y \right )$为D内的调和函数
定理：$f(z)=u(x,y)+iv(x,y)$是区域$D$内的解析函数则$u(x,y)，v(x,y)$在$D$内均为调和函数




### 常见初等函数

全部初等函数（多项式函数、指数函数、三角函数、对数函数、幂函数……）在相应的定义域上都是解析的。

**指数函数**：$w=e^z=e^{x+iy}=e^x(\cos y+i\sin y)$

**求导等同实指数函数**: $\left ( e^{z} \right )^{\prime}=e^{z}$ （$dz = d(x+iy$））

在整个复平面上处处解析。

$e^{z} $为指数函数，则
1.$e^{z+w}=e^{z}\cdot e^{w}$对所有$z,w\in \mathfrak{C} $成立，所以$\left (  e^{z} \right ) ^{n} =e^{zn} $
2.$e^{z}\ne  0$如果z=x为实数，当$x> 0，e^{z}>1 ,x< 0，e^{z}<1 $
3.$e^{z}$是周期函数，其周期$T = 2n\pi i$(n为整数，$n \ne  0$)
4.$e^{\frac{\pi}{2}i} =i,e^{\pi i} =-1,e^{\frac{3\pi}{2}i} =-i,e^{2\pi i} =1$
5.$e^{z}=1$的充分必要条件是$z = 2n\pi i$(n为整数)

**对数函数**：$w=Ln z=lnz+i2k\pi=ln|z| + i Arg z=(ln|z|+iargz) +2ki\pi=ln|z|+i(argz +2k\pi)$

对数函数$Ln z$是多值函数，有无穷多个分支，k=0时的分支称为对数函数的主支，记：
$Lnz=ln|z|+iargz$ ——对数函数主支
显然，$Lnz=lnz+i2k\pi$

**基本性质**：
$Ln(z_1z_2)=Lnz_1+Lnz_2$
$Ln(\frac{z_1}{z_2})=Lnz_1-Lnz_2(z_2\neq0)$
在原点和负实轴上不解析。
$Ln(z)^{\prime}=\frac{1}{z}$

![](https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/2024/09/19/17267069024904.jpg)


**幂函数**：$w=z^\mu=e^{\mu Ln\ z}=e^{\mu ln\ z}·e^{2k\pi \mu i},\mu \in C$

幂函数的求导公式：$(z^\mu)^\prime=\mu z^{\mu-1}$


$w=z^a$ 的多值性：	

> 1. $a$ 为整数——单值函数（左因式为主值，右因式为定值1）
>
> 2. $a$ 为 $p/q$——有限值函数；特别地，$a$ 为 $1/n$ —— $n$ 值函数
>
> 3. $a$ 为无理数/虚部不为0的复数——无穷多值

在原点和负实轴上不解析。（可以看作指数函数和对数函数的复合函数。）

**三角函数和双曲函数**：
$$
\sin z =\frac{e^{iz}-e^{-iz}}{2i}\\
\cos z =\frac{e^{iz}+e^{-iz}}{2}\\
sh z=\frac{e^z-e^{-z}}{2}\\
ch z=\frac{e^z+e^{-z}}{2}
$$

在整个复平面上处处解析。（可以看作指数函数的复合函数。）


和角公式：
$ch(a+b)=cha\ chb+sha\ shb$
$sh(a+b)=sha\ chb+cha\ shb$


性质：
1.$\sin z,\cos z$是以$2\pi$为周期的周期函数；$sh z,ch z$是以$2\pi i$为周期的周期函数
2.$\sin z,sh z$为奇函数；$\cos z,ch z$为偶函数
3.一些恒等式仍然成立：
具体需要额外注意的是：
$ch^{2}z - sh^{z} = 1, sh z + ch z = e^{z}$
$sh(z_{1} +z_{2})=sh z_{1}ch z_{2}+ ch z_{1}sh z_{2}$
$ch(z_{1} +z_{2})=ch z_{1}ch z_{2}+ sh z_{1}sh z_{2}$

4.与三角函数的关系：
$$
sh\ iz=isinz;\ ch\ iz=cosz\\sin\ iz=ish\ z;\ cos\ iz=chz
$$
5.$|\sin z|,|\cos z|$不是有界函数