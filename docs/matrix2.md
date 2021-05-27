# 伴随矩阵

## 定义

设矩阵$A = (a_{ij})\_{n\times n}$, 将矩阵A的元素$a_{ij}$所在的第i行第j列元素划去后，剩余元素按照原来的排列顺序组成n-1阶矩阵所确定的行列式称为元素$a_ij$的余子式，记为$M_{ij}$，称$A_{ij} = (-1)^{i+j}M_{ij}$为元素$a_{ij}$的**代数余子式**

方阵$A=(a\_{ij})\_{n \times n}$的各个元素的代数余子式A，所构成的如下矩阵A：

$$
\begin{bmatrix}
A_{11} & A_{21} & \cdots & A_{n1} \\\
A_{12} & A_{22} & \cdots & A_{n2} \\\
\vdots & \vdots & & \vdots \\\
A_{1n} & A_{2n} & \cdots & A_{nn} \\\
\end{bmatrix}
$$

该矩阵$A^*$称为A的伴随矩阵。

## 性质

1. $AA^\* = A^\*A = |A|I_n(|A|E)$
2. 若$|A| \neq 0$,则$A^{-1} = \frac{1}{|A|}A^\*,A^\* = |A|A^{-1}$
3. $|A^\*| = |A|^{n-1}$

<font color="red">注：求伴随矩阵时，首先先对每个元素求出代数余子式，然后再转置；求代数余子式时，得带上 -1 的 i + j 次方；</font>

## 例子

1. 例子1

$$
A=\begin{bmatrix}
3 & 2 & 7 \\\
4 & -3 & 5 \\\
1 & 0 & -1 
\end{bmatrix}
\Rightarrow\begin{bmatrix}
-3 \times -1 - 5 \times 0 & 4 \times -1 - 5 \times 1 & 4 \times 0 - (-3) \times 1 \\\
2 \times -1 - 7 \times 0 & 3 \times -1 - 7 \times 1 & 3 \times0 - 2 \times 1 \\\
2 \times 5 - 7 \times -3 & 3 \times 5 - 7 \times 4 & 3 \times -3 - 2 \times 4
\end{bmatrix}
\Rightarrow\\\
\begin{bmatrix}
-4 & -9 & 3 \\\
-9 & -10 & -2 \\\
22 & -13 & -17
\end{bmatrix}
\Rightarrow
A^\* = \begin{bmatrix}
-4 & -9 & 22 \\\
-9 & -10 & -13 \\\
3 & -2 & -17
\end{bmatrix}
$$


## 参考网站

[http://www.zeroyx.com/index.php?r=site/art&id=13&title_id=49](http://www.zeroyx.com/index.php?r=site/art&id=13&title_id=49)
[https://baike.baidu.com/item/伴随矩阵](https://baike.baidu.com/item/伴随矩阵)

# 矩阵的逆

在数学运算中，当数$a \neq 0$时，有$ax=b\Rightarrow x=a^{-1}b(x=\frac{b}{a})$

$$
1 \bullet x = x \bullet 1\quad \text{数字“1”称为乘法运算的单位元} \\\
a \bullet a^{-1} = a^{-1}a = 1 \text{a^{-1}称为a关于单位元的逆元}
$$

在矩阵乘法运算中，<font color="red">单位阵$I_n$是矩阵乘法运算的单位元，</font>因为对于任何矩阵A，都有$AI_n=I_nA=A$。那么，对于矩阵A，如果存在有一个矩阵B，使得
$AB=BA=I_n$,此时，矩阵A关于矩阵乘法运算存在逆元B。

## 定义

设A为n阶方阵，如有n阶方阵B，使得$AB=BA=I_n$,则称A为可逆矩阵，B为A的逆阵，记作$B=A^{-1}$


## 规律

1. $(A^{-1}) = A$
2. $(\lambda A)^{-1} = \frac{1}{k}A^{-1}(k\neq 0)$
3. A、B为同阶可逆矩阵，则$\color{red}{(AB)^{-1}=B^{-1}A^{-1}}$
4. 转置和逆可交换，即$(A^{-1})^T=(A^T)^{-1}$

## 解法

### 待定系数法

$$
\begin{bmatrix}
1 & 2 \\\
-1 & -3 
\end{bmatrix}
\begin{bmatrix}
a & b \\\
c & d 
\end{bmatrix}
=
\begin{bmatrix}
a+2c & b+2d \\\
-a-3c & -b-3d
\end{bmatrix}
=
\begin{bmatrix}
1 & 0 \\\
0 & 1
\end{bmatrix}
$$

得到方程组

$$\begin{cases}
a+2c = 1 \\\
b+2d = 0 \\\
-a-3c = 0 \\\
-b-3d = 1
\end{cases}
\Rightarrow
\begin{cases}
a=3  \\\
b=2  \\\
c=-1 \\\
d=-1 \\\
\end{cases}
$$

得到

$$
A^{-1}=\begin{bmatrix}
3 & 2 \\\
-1 & -1 
\end{bmatrix}
$$

### 伴随矩阵法

如果矩阵A可逆，则$A^{-1} = \frac{A*}{|A|}$

A的伴随矩阵为$A*=\begin{bmatrix}
A_{11} & A_{21} & \cdots & A_{n1} \\\
A_{12} & A_{22} & \cdots & A_{n2} \\\
\vdots & \vdots & & \vdots \\\
A_{1n} & A_{2n} & \cdots & A_{nn} \\\
\end{bmatrix}$

例子

$$
\begin{bmatrix}
-3 & 1 \\\
-2 & 1 
\end{bmatrix}
\Rightarrow^{转置}
\begin{bmatrix}
-3 & -2 \\\
1 & 1 
\end{bmatrix}\\\
|A| = -3 \times 1 - 1 \times -2 = -1 \\\
带入得\\\
\begin{bmatrix}
3 & 2 \\\
-1 & -1 
\end{bmatrix}
$$


参考网站


[http://www.zeroyx.com/index.php?r=site/art&id=13&title_id=78](http://www.zeroyx.com/index.php?r=site/art&id=13&title_id=78)
[https://jingyan.baidu.com/article/1709ad8095e1924634c4f03a.html](https://jingyan.baidu.com/article/1709ad8095e1924634c4f03a.html)
[https://www.zhihu.com/question/345971704/answer/823964140](https://www.zhihu.com/question/345971704/answer/823964140)