# 概念

由$m \times n$个数$a_{ij}(i=1,2,\cdots,m;j=1,2,\cdots,n)$排成m行n列的数表称为m行n列的矩阵，简称$m \times n$矩阵，记作：

$$
A=\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{1n}\\\ 
  a_{21} & a_{22} & \cdots & a_{2n}\\\ 
  \vdots & \vdots & \quad & \vdots \\\
  a_{m1} & a_{m2} & \cdots & a_{mn}\\\ 
\end{matrix}\right]
\end{equation}
$$
常用大写字母表示，记作 $A、A_{m \times n}$或者$(a_{ij})_{m \times n}$

其中$a_{ij}$为矩阵第i行，第j列的元素

## 几种特殊形式的矩阵

### 行矩阵(行向量)

只有一行的矩阵。

$$
[1\quad2] \quad [1 \quad 2 \quad -4] \quad [a_1 \quad a_2 \quad \cdots a_n] 
$$

### 列矩阵（列向量）

只有一列的矩阵。


$$
\begin{equation}
\left[\begin{matrix}
  1\\\ 
  -1\\\ 
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  2\\\ 
  0\\\
  9 
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  a_1 \\\ 
  a_2 \\\
  \vdots \\\
  a_n
\end{matrix}\right]
\end{equation}
$$

### 方阵

行数与列数都等于n的矩阵，称为n阶方阵。记作$A_n$

$$
A=\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12}\\\ 
  a_{21} & a_{22}\\\ 
\end{matrix}\right]
\end{equation}
B=\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} & a_{13}\\\ 
  a_{21} & a_{22} & a_{23}\\\
  a_{31} & a_{32} & a_{33}
\end{matrix}\right]
\end{equation}
N=\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{1n}\\\ 
  a_{21} & a_{22} & \cdots & a_{2n}\\\ 
  \vdots & \vdots & \quad & \vdots \\\
  a_{n1} & a_{n2} & \cdots & a_{nn}\\\ 
\end{matrix}\right]
\end{equation}
$$
其中A为二阶矩阵，B为三阶矩阵 N为n阶矩阵

### 零矩阵

元素全为0的矩阵称为零矩阵，记作0或者$0_{m \times n}$

### 对角矩阵(对角形矩阵)

设A是n阶矩阵，当$i \neq j$时，$a_{ij} = 0$。或者

$$
A=\begin{equation}
\left[\begin{matrix}
  a_1 & 0 & 0 & 0\\\ 
  0 & a_2 & 0 & 0\\\ 
  0 & 0 & \ddots & 0 \\\
  0 & 0 & 0 & a_n
\end{matrix}\right]
\end{equation}
$$

称为A为n阶对角矩阵，简称对角阵。也可记作：

$$
A = diag(a_1,a_2,\cdots,a_n) OR A = diag(\lambda_1,\lambda_2,\cdots,\lambda_n)
$$

<font color="red">主对角线上的元素不全为零，其他的元素都为0的方阵</font>

### 单位矩阵

主对角线上的元素都是1的对角形矩阵，即

当i = j时，$a_{ij} = 1$;当$i \neq j$时，$a_{ij} = 0$,或者

$$
A=\begin{equation}
\left[\begin{matrix}
  1 & 0 & 0\\\ 
  0 & \ddots & 0 \\\ 
  0 & 0 & 1 \\\
\end{matrix}\right]
\end{equation}
$$
称为n阶单位矩阵，记作$I_n$或者$E_n$,n个1所在位置$a_{ij}$称为对角线

$$
E_2=\begin{equation}
\left[\begin{matrix}
  1 & 0\\\ 
  0 & 1 \\\
\end{matrix}\right]
\end{equation}
E_3=\begin{equation}
\left[\begin{matrix}
  1 & 0 & 0 \\\ 
  0 & 1 & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
E_n=\begin{equation}
\left[\begin{matrix}
  1 & 0 & \cdots & 0 \\\ 
  0 & 1 & \cdots & 0 \\\
  \vdots & \vdots & \ddots & 0 \\\
  0 & 0 & \cdots & 1 \\\
\end{matrix}\right]
\end{equation}
$$

### 三角矩阵

当i > (<) j时，$a_{ij} = 0$,则称为A为上（下）三角矩阵。

$$
A=\begin{equation}
\left[\begin{matrix}
  \* & \*\\\ 
  0 & \* \\\
\end{matrix}\right]
\end{equation}
(A=\begin{equation}
\left[\begin{matrix}
  \* & 0\\\ 
  \* & \* \\\
\end{matrix}\right]
\end{equation})
$$

#### 上三角型矩阵

主对角线下方元素全为零、上方的元素不全为0的**方阵**。如：

$$
\begin{equation}
\left[\begin{matrix}
  2 & 1 & 2\\\ 
  0 & 1 & 0\\\ 
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{an}\\\ 
  0 & a_{22} & \cdots & a_{2n} \\\ 
  \vdots & \vdots & \ddots & \vdots \\\ 
  0 & 0 & \cdots & a_{nn} \\\ 
\end{matrix}\right]
\end{equation}
$$
#### 下三角形矩阵
主对角线上方元素全为零、下方的元素不全为0的**方阵**。如：
$$
\begin{equation}
\left[\begin{matrix}
  2 & 0 & 0\\\ 
  4 & 1 & 0\\\ 
  5 & 3 & 7
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  a_{11} & 0 & \cdots & 0\\\ 
  a_{21} & a_{22} & \cdots & 0 \\\ 
  \vdots & \vdots & \ddots & \vdots \\\ 
  a_{n1} & a_{n2} & \cdots & a_{nn} \\\ 
\end{matrix}\right]
\end{equation}
$$

#### 同型矩阵

有相同的行数和相同的列数的两个矩阵，称为**同型矩阵**

#### 相等矩阵

若$A,B$两个矩阵同型，且对应位置上的元素相等，则成$A,B$相等，记作$A = B$.

<font color="red">同型是相等的必要条件。</font>如：

$$
\begin{equation}
\left[\begin{matrix}
  2 & 0 & 0\\\ 
  0 & 2 & 0\\\ 
  0 & 0 & 2
\end{matrix}\right]
\end{equation}
\neq
\begin{equation}
\left[\begin{matrix}
  2 & 0 \\\ 
  0 & 2 \\\ 
\end{matrix}\right]
\end{equation}
\quad
\begin{equation}
\left[\begin{matrix}
  0 & 0 & 0\\\ 
  0 & 0 & 0\\\ 
  0 & 0 & 0
\end{matrix}\right]
\end{equation}
\neq
\begin{equation}
\left[\begin{matrix}
  0 & 0 \\\ 
  0 & 0 \\\ 
\end{matrix}\right]
\end{equation}
\quad
\begin{equation}
\left[\begin{matrix}
  1 & 1 
\end{matrix}\right]
\end{equation}
\neq
\begin{equation}
\left[\begin{matrix}
  1 \\\ 
  1 \\\ 
\end{matrix}\right]
\end{equation}
$$

# 运算

## 加（减法）法

设A=$(a_{ij})_{m \times n}$，

设B=$(b_{ij})_{m \times n}$


$$
C_{ij} = a_ij + b_ij(i=1,2,\cdots,m,j=1,2,\cdots,n)
$$

称矩阵$C=(C_{ij})_{m \times n}$为矩阵A与矩阵B的和，记为：

$$
C = A + B
$$

**规定为：**

$$
A+B=
\begin{equation}
\left[\begin{matrix}
  a_{11}+b_{11} & a_{12}+b_{12} & \cdots & a_{1n} + b_{1n}\\\ 
  a_{21}+b_{21} & a_{22}+b_{22} & \cdots & a_{21} + b_{2n}\\\ 
  \vdots & \vdots & \ddots & \vdots \\\ 
  a_{m1} + b_{m1} & a_{m2} + b_{m2} & \cdots & a_{mn} + b_{mn}
\end{matrix}\right]
\end{equation}
$$

**注意：**

1. 相加的矩阵必须有相同的行数和列数；
2. 矩阵的加法是两个同型矩阵对应位置上的元素相加；

### 负矩阵
设$A=(a_{ij})$,记$-A = -(a_{ij})$为A的负矩阵。

减法：
$$
A - B = A+ (-B)
$$

### 运算规律

1. 结合律

$$
A \pm (B \pm C) = (A \pm B ) \pm C
$$

2. 交换律

$$
A \pm B  = B \pm A
$$

3.零矩阵的运算

$$
A + 0 = A \\\
A + (-A) = 0
$$

## 实数与矩阵的乘法（数乘）

设$\lambda$为数，$A = (a_{ij})$为矩阵，称矩阵$(\lambda a_{ij})$为数与矩阵的乘积，简称数乘运算，记为$\lambda A = (\lambda a_{ij})$

实数$\lambda$与矩阵$A=(a_{ij})_{m \times n}$的乘积记为$\lambda A$或$A\lambda$,规定为

$$
\lambda A =
\begin{equation}
\left[\begin{matrix}
  \lambda a_{11} &\lambda a_{12} & \cdots &  \lambda a_{1n} \\\
  \lambda a_{21} &\lambda a_{22} & \cdots &  \lambda a_{2n} \\\
  \vdots &\vdots & \ddots & \vdots \\\
  \lambda a_{m1} &\lambda a_{m2} & \cdots &  \lambda a_{mn} \\\
\end{matrix}\right]
\end{equation}
$$

### 运算规律

1. $1A = A$
2. $\lambda (\mu A) = (\lambda \mu)A $
3. $(\lambda + \mu)A = \lambda A + \mu A$
4. $\lambda(A + B) = \lambda A + \lambda B$

其中$\lambda,\mu$为数，A、B为矩阵

## 矩阵与矩阵的乘法

设$A=(a_{ij})$是一个m x <font color="red">s</font>矩阵，$B=(b_{ij})$是一个<font color="red">s</font> X n矩阵，规定A与B的乘积为一个m X n矩阵 $C=(c_{ij})$，其中

$$
c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{is}b_{sj} = \sum_{k=1}^s a_{ik}b_{ki}
(i = 1,2,\cdots, \quad j = 1,2,\cdots,n),
$$
称为A与B的<font color="red">乘积(A左乘B或者B右乘A)</font>记为：$C = AB$

$$
\begin{array}{cccc}
A & B & = & AB \\\
m \times s & s \times n & & m \times n
\end{array}
$$

**<font color="red">注意：</font>**

1. 只有当一个矩阵（左矩阵）的列数等于第二个矩阵（右矩阵）的行数时，两个矩阵才能相乘$C_{m \times n} = A_{m \times s}B_{s \times n}$
2. 乘积矩阵的第i行第j列的元素等于左矩阵的第i行向量与右矩阵的第j列向量做内积

$$
i\text{行}\to
\begin{equation}
\left[\begin{matrix}
  a_{i1} & a_{i2} & \cdots \ a_{is}
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  b_{1j} \\\
  b_{2j} \\\
  \vdots \\\
  b_{sj} \\\
\end{matrix}\right]
\end{equation}
=
\begin{equation}
\left[\begin{matrix}
  c_{ij}
\end{matrix}\right]
\end{equation}
$$

**<font color="red">例子1：</font>**
设：
$$
A=\begin{equation}
\left[\begin{matrix}
  1 & 2 & 3\\\
  4 & 5 & 6\\\
\end{matrix}\right]
\end{equation}
_{2 \times 3}
B=
\begin{equation}
\left[\begin{matrix}
  7 & 10 & 0 \\\
  8 & 11 & 1 \\\
  9 & 12 & 0 \\\
\end{matrix}\right]
\end{equation}
_{3 \times 3}
$$

求AB

$$
AB = \begin{equation}
\left[\begin{matrix}
  1 \times 7 + 2 \times 8 + 3 \times 9 &
  1 \times 10 + 2 \times 11 + 3 \times 12 & 
  1 \times 0 + 2 \times 1 + 3 \times 0 \\\
  4 \times 7 + 5 \times 8 + 6 \times 9 &
  4 \times 10 + 5 \times 11 + 6 \times 12 &
  4 \times 0 + 5 \times 1 + 6 \times 0
\end{matrix}\right]
\end{equation}
=\begin{equation}
\left[\begin{matrix}
  50 & 68 & 2 \\\
  122 & 167 & 5 
\end{matrix}\right]
\end{equation}
_{3 \times 3}
$$

**<font color="red">例子2：</font>**

$$
\begin{equation}
\left[\begin{matrix}
  a_1 \\\
  a_2 \\\
  a_3 
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  b_1 & b_2 & b_3
\end{matrix}\right]
\end{equation}
=
\begin{equation}
\left[\begin{matrix}
  a_1b_1 & a_1b_2 & a_1b_3 \\\
  a_2b_1 & a_2b_2 & a_2b_3 \\\
  a_3b_1 & a_3b_2 & a_3b_3 \\\
\end{matrix}\right]
\end{equation}
$$

**<font color="red">例子3：</font>**
$$
\begin{equation}
\left[\begin{matrix}
  b_1 & b_2 & b_3
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  a_1 \\\
  a_2 \\\
  a_3 
\end{matrix}\right]
\end{equation}
= b_1a_1 + b_2a_2 + b_3a_3
$$

**<font color="red">例子4：</font>**
$$
\begin{equation}
\left[\begin{matrix}
  1 & 0 & 0 \\\
  0 & 1 & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} \\\
  a_{21} & a_{12} \\\
  a_{31} & a_{32}
\end{matrix}\right]
\end{equation}
= \begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} \\\
  a_{21} & a_{12} \\\
  a_{31} & a_{32}
\end{matrix}\right]
\end{equation}
$$
**<font color="red">例子5：</font>**
$$
\begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} \\\
  a_{21} & a_{12} \\\
  a_{31} & a_{32}
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  1 & 0  \\\
  0 & 1 
\end{matrix}\right]
\end{equation}
= \begin{equation}
\left[\begin{matrix}
  a_{11} & a_{12} \\\
  a_{21} & a_{12} \\\
  a_{31} & a_{32}
\end{matrix}\right]
\end{equation}
$$

### 运算规律

1. 矩阵的乘法运算不满足交换律：AB 不一定等于BA

  AB有定义，BA不一定有定义。如例子1当中，矩阵A和B，AB有定义，但是BA就没有定义。
  
  即时AB与BA都有定义，他们也不一定相等。

  在作乘法时，应指明他们相乘的次序。如AB读作：“A左乘B”或“B右乘A”

2. 两个非零的矩阵乘积可能是零矩阵

$$
A=\begin{equation}
\left[\begin{matrix}
  -2 & 4  \\\
  1 & -2 
\end{matrix}\right]
\end{equation}
B=\begin{equation}
\left[\begin{matrix}
  2 & 4  \\\
  -3 & -6 
\end{matrix}\right]
\end{equation}
\quad
A \neq 0
\quad
B \neq 0
\text{但}BA=0
$$

3. 单位矩阵满足交换律

$$
I_nA_n = A_nI_n = A_n
$$

4. 对角矩阵

两个对角矩阵的和是对角矩阵

两个对角矩阵的乘积也是对角矩阵

### 应用


**规律**

1. 结合律 $(AB)C = A(BC)$
2. 分配率 $A(B+C) = AB + AC OR \quad (B+C)A = BA + CA$
3. $\lambda (AB) = (\lambda A)B$

## 参考网站

[https://baike.baidu.com/item/矩阵行列式/18882017?fr=aladdin](https://baike.baidu.com/item/矩阵行列式/18882017?fr=aladdin)
[https://lsvih.com/2019/06/26/javascript-linear-algebra-basic-matrix-operations/](https://lsvih.com/2019/06/26/javascript-linear-algebra-basic-matrix-operations/)
[https://www.docin.com/p-685542032.html](https://www.docin.com/p-685542032.html)

# 矩阵转置

设矩阵A，B，如下：

$$
A=\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n}\\\
  a_{21} & a_{22} & \cdots & a_{2n}\\\
  \vdots & \vdots & \ddots & \vdots \\\
  a_{s1} & a_{s2} & \cdots & a_{sn}\\\
\end{vmatrix}_{s \times n}
$$

$$
B=\begin{vmatrix}
  a_{11} & a_{21} & \cdots & a_{s1}\\\
  a_{12} & a_{22} & \cdots & a_{s2}\\\
  \vdots & \vdots & \ddots & \vdots \\\
  a_{1n} & a_{2n} & \cdots & a_{sn}\\\
\end{vmatrix}_{n \times s}
$$

矩阵B为矩阵A的转置，记作$A^T,(a_{ij}^T = a_{ji})$

## 运算规律

$$
(A^T)^T = A\\\
(A+B)^T = A^T + B^T \\\
(\lambda A)^T = \lambda A^T\\\
\color{red}{(AB)^T = B^TA^T}
$$

# 矩阵的行列式

一个$n \times n$的**方阵A**的行列式记为$det(A)$或者$|A|$

一个2x2的矩阵的行列式表示如下：

$$
det\begin{pmatrix}
  a & b  \\\
  c & d 
\end{pmatrix}
=
ad - bc
$$

一个3x3的矩阵行列式表示如下：
$$
det\begin{pmatrix}
  a & b & c  \\\
  d & e & f \\\
  g & h & i
\end{pmatrix}
=
a \bullet det\begin{pmatrix}
  e & f \\\
  h & i
\end{pmatrix}
-
b \bullet det\begin{pmatrix}
  d & f \\\
  g & i
\end{pmatrix}
+
c \bullet det \begin{pmatrix}
  d & e \\\
  g & h
\end{pmatrix} \\\
= a(ei -fh) - b(di-gf) + c(dh-eg)
$$

把一个n阶行列式中的元素$a_{ij}$所在的第i行和第j列划去后，留下来的n-1阶行列式叫做元素$a_{ij}$的余子式，记作$M_{ij}$。计$A_{ij}=(-1)^{i+j}M_{ij}$，叫做元素$a_{ij}$
的代数余子式。例如：

$$
D=\begin{vmatrix}
  a_{11} & a_{12} & a_{13} & a_{14} \\\
  a_{21} & a_{22} & a_{23} & a_{24} \\\
  a_{31} & a_{32} & a_{33} & a_{34} \\\
  a_{41} & a_{42} & a_{43} & a_{44} 
\end{vmatrix},
M = \begin{vmatrix}
  a_{11} & a_{12} & a_{14} \\\
  a_{31} & a_{32}  & a_{34} \\\
  a_{41} & a_{42} & a_{44} 
\end{vmatrix}, \\\
A_{23} = (-1)^{2+3}M_{23} = -M_{23}
$$

一个nxn矩阵的行列式等于其任意行（或列）的元素对应的代数余子式乘积之和，即：

$$
det(A) =a_{i1}A_{i1} + \cdots + a_{in}A_{in} = \sum_{j=1}^na_{ij}(-1)^{i+j}M_{ij}
$$

## 性质

1. 只有方阵才可以定义行列式
2. 如果A是对角矩阵或者三角矩阵，|A|为对角线乘积。比如$|I_n|=1$
3. $|\lambda A_n|=\lambda^n|A_n|$
4. AB和BA不一定相等，但是$|AB|=|BA| = |A||B|$
5. 
## 例子

1. 例子1
$$
det\begin{pmatrix}
  1 & 2 \\\
  4 & 5 
\end{pmatrix}
_{2 \times 2}
= 1 \times 5 - 4 \times 2 
= -3
$$

2. 例子2

$$
det\begin{pmatrix}
  7 & 10 & 0 \\\
  8 & 11 & 1 \\\
  9 & 12 & 0 \\\ 
\end{pmatrix}
_{3 \times 3} \\\
= 7 \times (11 \times 0 - 1 \times 12) - 10 \times (8 \times 0 - 1 \times 9) + 0 \times (8 \times 12 - 11 \times 9) \\\
= - 84 - (-90) + 0
= 6
$$

3. 例子3

$$
det\begin{pmatrix}
  a_{11} & a_{12} & a_{13}  \\\
  0 & a_{22} & a_{23} \\\
  0 & 0 & a_{33}
\end{pmatrix} \\\
=a_{11} \times (a_{22} \times a_{33} - a_{23} \times 0 ) - a_{12} \times (0 \times a_{a33} - a_{23} \times 0 ) + a_{13} \times ( 0 \times 0 - a_{22} \times 0 ) \\\
= a_{11} \times a_{22} \times a_{33}
$$

## 应用：克莱默（Cramer）法则

如果线性方程组：

$$\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b1 \\\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b2 \\\
\vdots \\\
a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n = bn
\end{cases}
(1)
$$
的系数行列式不等于零，即

$$
D=\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\\
  a_{21} & a_{22} & \cdots & a_{2n} \\\
  \vdots & \vdots & \ddots & \vdots \\\
  a_{n1} & a_{n2} & \cdots & a_{nn} \\\
\end{vmatrix}
\neq 0
$$

则线性方程组（1）有唯一解,$x_1 = \frac{D_1}{D},x_2 = \frac{D_2}{d},\cdots,x_n = \frac{D_n}{D}$

其中$D_j$是把系数行列式D中的第j列的元素用方程组右端的常数项代替后所得的n阶行列式，即

$$
D_j = \begin{vmatrix}
  a_{11} & \cdots a_{1,j-1} & b1 & a_{1,j+1} & \cdots & a_{1n} \\\
  \cdots & \cdots & \cdots & \cdots & \ddots & \cdots \\\
  a_{n1} & \cdots a_{n,j-1} & b1 & a_{n,j+1} & \cdots & a_{nn} \\\
\end{vmatrix}
$$

### 三元一次方程组的行列式解法：

$$
\begin{cases}
a_1x+b_1y+c_1z = d1 \\\
a_2x+b_2y+c_2z = d2 \\\
a_3x+b_3y+c_3z = d3 \\\
\end{cases},\\\
D=\begin{vmatrix}
  a_1 & b_1 & c_1 \\\
  a_2 & b_2 & c_2 \\\
  a_3 & b_3 & c_3
\end{vmatrix},
D_x=\begin{vmatrix}
  d_1 & b_1 & c_1 \\\
  d_2 & b_2 & c_2 \\\
  d_3 & b_3 & c_3
\end{vmatrix},
D_y=\begin{vmatrix}
  a_1 & d_1 & c_1 \\\
  a_2 & d_2 & c_2 \\\
  a_3 & d_3 & c_3
\end{vmatrix},
D_z=\begin{vmatrix}
  a_1 & b_1 & d_1 \\\
  a_2 & b_2 & d_2 \\\
  a_3 & b_3 & d_3
\end{vmatrix}
\begin{cases}
x = \frac{D_x}{D} \\\
y = \frac{D_y}{D} \\\
z = \frac{D_z}{D}
\end{cases}
$$

<font color="red">1. 当$D \neq 0$时，方程组有唯一解</font>
<font color="red">2. 当$D = 0$时 </font>
1. $D_x、D_y、D_z$至少有一个不为零，则方程组无解；
2. 当$D_x=D_y=D_z=0$时，方程组有无穷多解或无解


$$
（1）\begin{cases}
x + y + z = 1 \\\
x + y + z = 2 \\\
x + y + z = 3 \\\
\end{cases},\color{red}{方程组无解}\\\
（2）\begin{cases}
x + y + z = 1 \\\
2x + 2y + 2z = 2 \\\
3x + 3y + 3z = 3 \\\
\end{cases},\color{red}{方程组有无穷多解}\\\
（3）\begin{cases}
x + y + z = 1 \\\
x + 2y + z = 3 \\\
2x + 3y + 2z = 4 \\\
\end{cases},\color{red}{方程组有无穷多解}
$$


### 例子

用行列式接下列方程

$$
\begin{cases}
x + y - z = 3 \\\
2x + y + z = 6 \\\
2x - y + z = 0
\end{cases}
$$

解法；

$$
D=\begin{vmatrix}
  1 & 1 & -1 \\\
  2 & 1 & 1 \\\
  2 & -1 & 1 \\\
\end{vmatrix} = 6,
D_x=\begin{vmatrix}
  3 & 1 & -1 \\\
  6 & 1 & 1 \\\
  0 & -1 & 1 \\\
\end{vmatrix} = 6,\\\
D_y=\begin{vmatrix}
  1 & 3 & -1 \\\
  2 & 6 & 1 \\\
  2 & 0 & 1 \\\
\end{vmatrix} = 18,
D_z=\begin{vmatrix}
  1 & 1 & 3 \\\
  2 & 1 & 6 \\\
  2 & -1 & 0 \\\
\end{vmatrix} = 6,
\begin{cases}
x = \frac{D_x}{D} = 1 \\\
y = \frac{D_y}{D} = 3 \\\
z = \frac{D_z}{D} = 1 \\\
\end{cases}
$$




参考网站：

[http://www.zeroyx.com/index.php?r=site/art&id=13&title_id=78](http://www.zeroyx.com/index.php?r=site/art&id=13&title_id=78)

[https://max.book118.com/html/2019/0617/6022225211002040.shtm](https://max.book118.com/html/2019/0617/6022225211002040.shtm)

[http://dec3.jlu.edu.cn/webcourse/t000022/teach/chapter2/2_1.htm](http://dec3.jlu.edu.cn/webcourse/t000022/teach/chapter2/2_1.htm)

[https://wenku.baidu.com/view/63d7c766700abb68a882fb75?bfetype=new](https://wenku.baidu.com/view/63d7c766700abb68a882fb75?bfetype=new)


