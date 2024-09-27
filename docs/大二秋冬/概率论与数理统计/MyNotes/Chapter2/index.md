# Chapter2变量及其概率分布

!!! tip "省流"
    * 两点分布：$X\sim B(1,p)$ 或者 $X\sim 0-1(p)$
    * 二项分布：$X\sim B(n,p)$
    * 泊松分布：$X\sim P(\lambda)$
    * 超几何分布：$X\sim H(n,a,N)$
    * 帕斯卡分布：$X\sim NB(r,p)$
    * 均匀分布：$X\sim U(a,b)$
    * 指数分布：$X\sim E(\lambda)$
    * 正态分布：$X\sim N(\mu,\sigma^2)$

**随机变量**是定义在样本空间$S$上的实值单值函数。常用大写字母$X,Y,Z$来表示**随机变量**，用小写字母$x,y,z$表示其**取值**

---

## 离散型随机变量

**离散型随机变量(discrete random variable)**：

如果随机变量取有限个或可列个值，则此随机变量为**离散型随机变量**，而若其可能取值为$\{x_i\}$，则称$P\{X=x_k\}=p_k\;,\;k=1,2,...$为$X$的**概率分布律(probability mass function)**，也可以用列表的方式表达


![](https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/2024/09/27/17274071010152.jpg)


因为样本空间$S=\{X=x_1,X=x_2,\,...\,,X=x_n\,...\,\}$中各样本点两两不相容，所以：

$$1=P(S)=\sum\limits_{i=1}^{+\infty}P\{X=x_i\}=\sum\limits_{i=1}^{+\infty}{p_i}$$

---

## 两点分布

如果随机变量$X$的概率分布律为：

![](https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/2024/09/27/17274077163080.jpg)


$$
P\{X=k\}=p^k(1-p)^{1-k}\;,\;\;\;k=0\;or\;1
$$

则称 $X$ 为服从**参数为** $p$ **的** $0-1$ **分布**，也称为**两点分布**，并记为 $X\sim B(1,p)$ 或者 $X\sim 0-1(p)$

---

## 二项分布

!!! example "伯努利试验"
    在 **$n$次独立重复试验** 中，每次只有 $A$ 和 $\overline A$ 两种结果，且概率不变，则这一系列试验为伯努利试验

!!! tip "注意"
    如果样本数量足够多，无放回实验可以近似当作有放回实验来处理


若随机变量$X$表示 **$n$重伯努利实验中事件A发生的次数**，其概率分布律为：

$$
P\{X=k\}={\rm C}_n^kp^k(1-p)^{n-k}\;,\;\;k=0,1,2,...,n
$$

注：
$$
1=\left ( p + q \right )^{n}  =\sum_{k=0}^{n} C_{n}^{k}p^{k}q^{n-k}  
$$

则称$X$为服从**参数为**$(n,p)$**的二项分布(binomial distribution)**，并记为$X\sim B(n,p)$（或$X\sim b(n,p)$）

根据二项式定理，二项分布有如下性质：

$$
\sum\limits_{k=0}^n{\rm C}_n^kp^k(1-p)^{n-k}=1
$$

* 如果遇到来自于**两点分布**的总体的，容量为$n$的样本的均值$\overline X$，则有$n·\overline X=\sum\limits_{i=1}^n X_i \sim B(n,p)$

---

## 泊松分布

如果随机变量$X$的概率分布律为：

$$
P\{X=k\}=\frac{e^{-\lambda}\lambda^k}{k!}\;,\;\;\;k=0,1,2,...
$$

其中$\lambda > 0$，则称$X$服从**参数为$\lambda$的泊松分布(Poisson distribution)**，记做$X \sim P(\lambda)$（或$X \sim \pi(\lambda)$、$X \sim Poi(\lambda)$）

!!! example "二项分布于泊松分布的近似关系"
    当$n$足够大，$p$充分小(一般要求$n>10，p<0.1$)，且$np$保持适当大小时，**参数为$(n,p)$的二项分布**可以**用泊松分布近似描述**，其中$\lambda = np$，即：
    
    $$
    {\rm C}_n^kp^k(1-p)^{n-k} \sim \frac{e^{-\lambda}\lambda^k}{k!}\;\;\;\;\;(n\rightarrow\infty,p<\varepsilon,\lambda=np)
    $$

	事实上：

    $$
    \begin{gathered}
    C_n^kp^k\left(1-p\right)^{n-k}=\frac{n!}{k!(n-k)!}\left(\frac\lambda n\right)^k\left(1-\frac\lambda n\right)^{n-k} \\
    =\frac{\lambda^k}{k!}\frac{n(n-1)...(n-k+1)}{n^k}\left[\left(1-\frac\lambda n\right)^{-n/\lambda}\right]^{-\lambda}/\left(1-\frac\lambda n\right)^k \\
    \approx\frac{e^{-\lambda}\lambda^k}{k!} \\
    \end{gathered}
    $$

    因为当n充分大和适当的$\lambda$时 
    
    $$
    \begin{gathered}
    \frac{n(n-1)...(n-k+1)}{n^k}\approx1,\left(1-\frac\lambda n\right)^k\approx1,\left[\left(1-\frac\lambda n\right)^{-n/\lambda}\right]^{-\lambda}\approx e^{-\lambda} 
    \end{gathered}
    $$

---
