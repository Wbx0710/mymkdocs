# 逻辑代数基础_逻辑函数

!!! note "内容总览"
	* 逻辑函数的表示方法及其转换
	* 逻辑函数的化简

---
## 逻辑函数的表示方法及其转换
### 逻辑函数的建立

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161030359.png" alt="屏幕截图 2025-01-16 103022" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161033565.png" alt="屏幕截图 2025-01-16 103256" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161036772.png" alt="屏幕截图 2025-01-16 103555" style="zoom:67%;" />

* 设计逻辑电路的基本原则是使电路最简，故这题应选择右边的电路（或者用同或门）

### 逻辑函数的表示
逻辑函数是用以**描述数字逻辑系统输出与输入变量之间逻辑关系**的表达式

!!! note "$Y=F(A,B,C...)$"
	* A、B、C代表输入量，Y代表输出量，F代表逻辑关系
	* 逻辑函数由与、或、非3种基本逻辑运算构成
	* 逻辑函数常采用逻辑表达式、真值表、卡诺图、逻辑图和波形图来表示

### 逻辑表达式

表示输出函数和输入变量逻辑关系的表达式，称逻辑表达式，简称逻辑式

逻辑表达式一般根据真值表、卡诺图或逻辑图写出

#### 常见表示形式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161046709.png" alt="屏幕截图 2025-01-16 104604" style="zoom:67%;" />

#### 转换方式：

##### 与-或转换为与非-与非式

* 两次取反

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161048512.png" alt="屏幕截图 2025-01-16 104833" style="zoom:67%;" />

### 逻辑函数的标准表达式

#### 最小项

定义：在逻辑函数中，如果一个**与**项（乘积项）包含该逻辑函数的**全部变量**，且每个变量以原变量或反变量形式**只出现一次**，则称该**与**项为最小项。==对于n个变量的逻辑函数共有$2^n$个最小项==

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161053772.png" alt="屏幕截图 2025-01-16 105225" style="zoom:67%;" />

!!! note "性质"
	* 对于变量的任一组取值，只有一个最小项的值为 1
	* 不同的最小项，使其值为 1 的那组变量取值也不同
	* 对于变量的同一组取值，任意两个最小项**与**的结果为 0
	* 对于变量的同一组取值，全部最小项逻辑**或**的结果为 1

#### 最小项编号

最小项用$m_i$表示，通常用十进制数作最小项的下标编号$i$

!!! tip "编号方法"
	* 将最小项中的原变量当作 1，反变量当作 0，则得一组**二进制数**
	* 其对应的十进制数便为最小项的编号$i$
	* eg： $\bar ABC$即为 **011**，对应十进制为 **3**，编号为$m_3$
	* 反过来看：$m_5$即为 **5**，对应二进制为 **101**，即为$A\bar BC$

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161106014.png" alt="屏幕截图 2025-01-16 110609" style="zoom:67%;" />

#### 最小项表达式

也称**标准与或表达式**

任何逻辑函数都是由其变量的若干个最小项构成，都可以表示成为最小项之和的形式

在与或表达式中，有时与项并不是最小项，可利用$\bar A+A=1$的形式补充**缺少的变量**，将逻辑函数变成最小项之和的形式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161113974.png" alt="屏幕截图 2025-01-16 111341" style="zoom:67%;" />

---
### 真值表

**列出输入变量的各种取值组合及其对应输出逻辑函数值的表格**称为真值表

真值表能直观反映输出、输入变量的逻辑关系，在分析和设计数字电路时都要列写真值表

#### 列真值表的方法

!!! tip "列真值表的方法"
	* 按n位二进制数递增的方式列出输入变量的各种取值组合
	* 分别求出各种组合对应的输出逻辑值填入表格

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161121956.png" alt="屏幕截图 2025-01-16 112110" style="zoom:67%;" />

#### 真值表反求逻辑表达式的方法

!!! tip "真值表反求逻辑表达式的方法"
	* 找出 **函数值为 1** 的项
	* 将输入变量**取值为 1 的用原变量代替**，**取值为 0 的用反变量代替**，即得到一系列与项
	* 将这些与项相加即得逻辑表达式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161125296.png" alt="屏幕截图 2025-01-16 112507" style="zoom:67%;" />

### 逻辑图

由**逻辑符号及相应连线构成**的电路图

逻辑图一般根据逻辑式画出，将各级逻辑运算用相应的门电路实现

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161129369.png" alt="屏幕截图 2025-01-16 112854" style="zoom:67%;" />

### 波形图

**输入变量和对应的输出变量随时间变化的波形**

画波形图时需要注意，横坐标是时间轴，纵坐标是变量取值，由于变量取值只有 0 和 1 ，一般在途中不用标出坐标轴，但输入、输出变量要对应画出

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161137511.png" alt="屏幕截图 2025-01-16 113709" style="zoom:67%;" />

#### 从逻辑表达式画出波形图

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161141990.png" alt="屏幕截图 2025-01-16 114133" style="zoom:67%;" />

### 逻辑函数的化简
#### 逻辑函数化简的意义与标准

意义：使逻辑式最简，以便设计出最简的逻辑电路，从而节省元件、优化生产工艺、降低成本和提高系统可靠性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161344174.png" alt="屏幕截图 2025-01-16 134403" style="zoom:67%;" />

不同形式逻辑式有不同的最简式，一般先求取最简与或式，然后通过变换得到所需最简式

#### 最简与或式
乘积项（即与项）的个数最少，使**与门个数最少**

每个乘积项中的变量数最少，使与门的输入端数最少

#### 最简与非-与非式
和最简与或式之间的转换：两次取反，拆掉下面一个非号

* **非号个数最少**，使与非门个数最少
* **每个非号中的变量数最少**，使与非门的输入端数最少

---
### 逻辑函数的公式化简法

运用逻辑代数的基本定律和公式对逻辑表达式进行化简

#### 并项法
运用$AB+A\bar B=A(B+\bar B)=A$，将两项合并为一项，并消去一个变量

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161357166.png" alt="屏幕截图 2025-01-16 135733" style="zoom:67%;" />

#### 吸收法

运用$A+AB=A(1+B)=A$和$AB+\bar AC+BC=AB+\bar AC$，消去多余的与项

* 运用$A+AB=A(1+B)=A$

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161427695.png" alt="屏幕截图 2025-01-16 142643" style="zoom: 67%;" />

* 运用$AB+\bar AC+BC=AB+\bar AC$（消消乐）

一个与项里面有原变量，另一个与项里面有反变量，剩余的因子构成了冗余项

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161428993.png" alt="屏幕截图 2025-01-16 142736" style="zoom:67%;" />

第一项和第二项里面有$A$和$\bar A$，剩余的因子构成了$BC$项也就是第六项，故第六项为冗余项

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161431579.png" alt="屏幕截图 2025-01-16 142948" style="zoom:67%;" />

第二项和第三项里面有$C$和$\bar C$，剩余的因子构成了$A\bar B$项也就是第四项，故第四项为冗余项

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161433647.png" alt="屏幕截图 2025-01-16 143148" style="zoom:67%;" />

第一项和第三项里面有$B$和$\bar B$，则$\bar A \bar C$同样是多余的，可以去掉

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161435018.png" alt="屏幕截图 2025-01-16 143401" style="zoom:67%;" />

当然也可以从后面几项消前面几项，一样的道理，但是结果是下面那个

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161437732.png" alt="屏幕截图 2025-01-16 143731" style="zoom:67%;" />

逻辑函数的化简结果不唯一，可通过真值表说明二者是否一致

#### 消去法

运用$A+\bar AB=A+B$或$\bar A+AB=\bar A+B$，消去多余因子

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161444397.png" alt="屏幕截图 2025-01-16 144450" style="zoom:67%;" />

没有头绪时记得多用摩根定律进行合并与拆项

#### 配项法

在函数某一项乘以$A+\bar A=1$，将一项展开两项，或利用$AB+\bar AC=AB+\bar AC+BC$，增加冗余项$BC$

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161452281.png" alt="屏幕截图 2025-01-16 145214" style="zoom:67%;" />

用公式法自然会有这样的问题，直观性不强。后面用卡诺图化简就有更强的直观性了，甚至能直接看出是否化为最简。不急，我们先来看看$Y_2$的法2：

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161453275.png" alt="屏幕截图 2025-01-16 145316" style="zoom:67%;" />

化简结果也不唯一！

!!! tip "化简思路"
	* 最开始先看能不能找到公共部分
		* 找到公共部分后，能否一个是原变量一个是反变量相或，或者剩下部分有个 1 的
	* 如果没有公共部分不能和？能不能拆！用摩根定律拆掉
	* 又不能和又不能拆？添加冗余项！

#### 综合应用，再来点例子

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161500699.png" alt="屏幕截图 2025-01-16 145958" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161506929.png" alt="屏幕截图 2025-01-16 150545" style="zoom:67%;" />

**多用冗余项这一“工具人”**

但是确实反映出一个问题，就是使用公式法化简有时很难判定结果是否为最简，不够直观，且看卡诺图

---
### 逻辑函数的卡诺图化简

#### 最小项卡诺图的组成

1. 相邻最小项
	* 两个最小项中只有一个变量互为反变量，其余变量均相同，称为相邻最小项，简称相邻项。
	* 相邻最小项的特点：
		* 两个相邻最小项相加可合并为一项，消去互反变量；
		* 比如：$ABC+AB\bar C=AB(C+\bar C)=AB$

2. 卡诺图的组成
	* n个变量，有$2^n$个最小项，每个最小项都要用 1 个小方格表示
	* 按循环码(也就是Gray码)的编码顺序排列，这是关键，使**相邻最小项在几何位置上也相邻且循环相邻**

#### 二变量卡诺图
顺时针就是按照循环码的顺序来写的

构造循环码的方法——假想有一个平面镜，对称后上方补 0 下方补 1 

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161540684.png" alt="屏幕截图 2025-01-16 154040" style="zoom:67%;" />

#### 三变量卡诺图

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161547667.png" alt="屏幕截图 2025-01-16 154731" style="zoom:67%;" />

#### 四变量卡诺图

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161553826.png" alt="屏幕截图 2025-01-16 155200" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161553121.png" alt="屏幕截图 2025-01-16 155257" style="zoom:67%;" />

卡诺图中的相邻项（几何相邻）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161556170.png" alt="屏幕截图 2025-01-16 155553" style="zoom:67%;" />

已知最小项如何找相应小方格？如何写出卡诺图方格对应的最小项

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161600895.png" alt="屏幕截图 2025-01-16 155913" style="zoom:67%;" />

### 用卡诺图表示逻辑函数

!!! note "基本步骤"
	* 求逻辑函数的真值表、标准或一般与或式
	* 根据变量的个数画出变量卡诺图
	* 根据真值表、标准或一般与或式填卡诺图

#### 已知真值表画卡诺图

较为简单，毕竟卡诺图就是一个变相的真值表

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161615696.png" alt="屏幕截图 2025-01-16 161449" style="zoom:67%;" />

#### 已知逻辑函数画卡诺图（标准与或式）

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161618646.png" alt="屏幕截图 2025-01-16 161823" style="zoom:67%;" />

#### 一般的与或式画卡诺图

非标准与或式——**找交集**

一项一项来找，填上 1 ，如果填过 1 了就不用再填了

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161625379.png" alt="屏幕截图 2025-01-16 162535" style="zoom:67%;" />

---
### 用卡诺图化简逻辑函数

1. 公式化简法
    * 优点：对变量个数没有限制
    * 缺点：需要技巧，且不容易判断是否为最简式
2. 卡诺图法
    * 优点：简单、直观，且有一定的步骤和方法，容易判断结果为最简式
    * 缺点：适合变量个数较少的情况，一般用于四变量及四变量以下函数的化简

#### 化简依据

原理即是卡诺图的**相邻性**，对相邻最小项进行合并，**消去互反变量**，以达到化简的目的

#### 化简规律

* 2个小方块相邻（包括**处于同一行或同一列的两端**）有 1 个变量相异，相加可以消去这 1 个变量，合并成一项

“背靠背”式的相邻

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161638780.png" alt="屏幕截图 2025-01-16 163826" style="zoom:67%;" />

!!! tip "消异存同"
	* 其实就是一种更快判断，不用写出最小项相加的方法
	* 在上述例子中，$ABC$取值分别为000与001
		* A的取值**相同且为0**，保留为反变量$\bar A$
		* B的取值**相同且为0**，也保留为反变量$\bar B$
		* C的**取值不同，那么直接消去**
		* 则结果为$\bar A \bar B$

处于同一行或同一列的相邻

主要就是要注意一下卡诺圈怎么画，和“背靠背”式的相邻一样的

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161647660.png" alt="屏幕截图 2025-01-16 164720" style="zoom:67%;" />

* 4个小方块组成一个大方块，或组成同一行/列，或组成两行/列的两端，或处于四角，可以合并，消去**2个变量**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161655620.png" alt="屏幕截图 2025-01-16 165506" style="zoom:67%;" />

* 8个小方块组成两行/列，或组成两边的两行/列，可以合并，**消去3个变量**

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161659797.png" alt="屏幕截图 2025-01-16 165915" style="zoom:67%;" />

#### 卡诺图化简法的步骤

!!! tip "卡诺图化简法的步骤"
	* 画出函数的卡诺图，并填入
	* 画卡诺圈，将相邻(上述3种化简规律都是相邻的)的“1”方格按$2^n$(一般就是1、2、4、8)圈为一组，直到所有的“1”被圈完
		* 一般就是从大到小来化简
		* 先看有没有8个1的？然后看4个1的，再看2个1的，最后再把孤立的1圈出来
	* 将各卡诺圈分别化简
	* 再把这化简的结果逻辑加

标准的逻辑函数

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161803667.png" alt="屏幕截图 2025-01-16 180301" style="zoom:67%;" />

非标准的逻辑函数

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161716013.png" alt="屏幕截图 2025-01-16 171637" style="zoom:67%;" />

!!! warning "注意"
	* 在这题中，最大一个圈(4个1的)，所有1都被小的圈圈完了，并没有未被其他圈圈过的1，所以**该大圈是不成立的**，要抹掉
	* 即 ==一个圈中的小方格至少有一个小方格不为其他圈所圈==

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161720846.png" alt="屏幕截图 2025-01-16 172036" style="zoom:67%;" />

#### 画卡诺圈的规则

!!! note "画卡诺圈的规则"
	* 每个圈中所包含“1”的小方块数只能为$2^n$个，如1、2、4、8（不会有16的，这么大的卡诺图你卡诺图画完我用公式法老早化简完了）
	* 画圈时，应将圈画得尽量大（也就代表消去的变量数多），圈数最少（就代表与项少）
	* 有些为“1”的小方块**可以被圈一次以上**，但**在新圈定的圈内至少要包含一个在原有圈内从未被圈过的“1”的方块**，所以**画完圈后要检查是否满足要求**
	* 所有“1”的方格都要圈完，孤立的“1”方格也不能漏掉

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161751764.png" alt="屏幕截图 2025-01-16 175136" style="zoom:67%;" />

#### 特殊情况

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161756600.png" alt="屏幕截图 2025-01-16 175616" style="zoom:67%;" />

逻辑函数的化简结果不具备唯一性

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161800648.png" alt="屏幕截图 2025-01-16 180017" style="zoom:67%;" />

---
### 具有约束的逻辑函数化简

#### 约束项和约束条件

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161922670.png" alt="屏幕截图 2025-01-16 192219" style="zoom:67%;" />

**约束项**：上例中011、101、110、111不会出现的变量组合对应的最小项：$\bar ABC$、$A\bar BC$、$AB\bar C$、$ABC$

* 比如：8421BCD码中，1010~1111这6种代码是不允许出现的，对应的最小项也是约束项

**约束条件**：由约束项加起来构成的值为0的逻辑表达式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161929315.png" alt="屏幕截图 2025-01-16 192948" style="zoom:67%;" />

由于约束项的值恒为0，将这些为0的最小项加入到逻辑函数与或式中，或者不加进去，都不会影响函数的值。

**化简时应视需要将约束项方格看作1或0**，使圈最少且最大，从而使结果最简

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161938639.png" alt="屏幕截图 2025-01-16 193807" style="zoom:67%;" />

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161940635.png" alt="屏幕截图 2025-01-16 194044" style="zoom:67%;" />

如果把约束项看作1，则会多出一个卡诺圈即多出一个与项相加，导致结果更为复杂，故约束项看作0，不用圈

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161948429.png" alt="屏幕截图 2025-01-16 194827" style="zoom:67%;" />

!!! warning "注意"
	* 一个卡诺圈里还是和之前要求一致，必须有一个独占的“1”存在（注意不是独占的“X”）
	* 结果直接把约束条件照抄到最简式后即可
	* 若要求约束项的最简式，直接再画出单独一个卡诺图单独求解约束项的最简式

<img src="https://wbx-1328220477.cos.ap-shanghai.myqcloud.com/202501161956196.png" alt="屏幕截图 2025-01-16 195600" style="zoom:67%;" />

---
The End of Chapter 1