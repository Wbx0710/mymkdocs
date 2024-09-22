# Chapter 1 预备知识



## 复数基本知识

复数的三种**表示方法**：

$z=x+iy=re^{i\theta}$

复数**相等**: 

实部和虚部都相等

**模** 

$r=\sqrt{x^2+y^2}=|z|$

**幅角**

$\ \theta=Arg\ z = arg\ z +2k\pi$，是一个集合，每个元素相差 $2\pi$

其中在$(-\pi,\pi]$的$\theta _{0} \ =\ arg \ z$称为辐角主值。

1. $\theta _{0} \ =\ arg \ z \in(-\pi,\pi]$

2. $arg\ 0,arg\ \infty$ 无意义

3. 辐角主值可以直接看成平面上的点的对应角，而$arctan\ \frac{y}{x}$∈$(-\frac{\pi}{2},\frac{\pi}{2})$不行。所以二者有一个类似于分段函数的对应关系式。

**欧拉公式**：

$e^{i\theta}=\cos\theta+i\sin\theta$

![](https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/2024/09/20/17268447078195.jpg)

---

## 复数的运算

复数的**加减法**——向量的加减法

**乘法**：

$|z_1z_2|=r_1r_2=|z_1||z_2|$

$Arg\ z_1z_2=Arg \ z_1+Arg \ z_2$

**除法**：

$\left |\frac{z_{1} }{z_{2} }  \right |\ =\ \frac{\left |z_{1}   \right | }{\left |z_{2}   \right |} $

$Arg\frac{z_1}{z_2} =Arg \ z_1-Arg \ z_2$

**$de Moivre$公式**：

$\left ( \cos\theta + i\sin \theta   \right ) ^{n} \ = \ \cos n\theta + i\sin n \theta$

**乘方**：

$z^n=r^n(\cos n\theta+i\sin n\theta)\ =\ r^{n}e^{in\theta }  $

**开方**：

$^n\sqrt{z}=^n\sqrt{|z|}e^{i\frac{argz+2k\pi}{n}},k=0,1,\cdots,n-1$
k只取0到n-1的n个值，这是因为k取其他整数时，得到的值必是上述n个值的重复出现

---