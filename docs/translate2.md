# 二维变化

## 平移变换（tanslation tranfromation）


将点P(x,y)在x轴方向、y轴方向分别平移距离tx,ty,的点P'(x',y'),则有

$$\begin{cases}
x' = x + t_x \\\
y' = y + t_y
\end{cases}
$$

<img src="../img/translate2/1.jpg" width="200" />

矩阵表示：$P' = P + T$

$$
P'=\begin{equation}
\left[\begin{matrix}
  x' \\\ y'
\end{matrix}\right]
\end{equation}
\quad 
P=\begin{equation}
\left[\begin{matrix}
  x \\\ y
\end{matrix}\right]
\end{equation}
\quad 
T=\begin{equation}
\left[\begin{matrix}
  t_x \\\ t_y
\end{matrix}\right]
\end{equation}
$$

记为：$T(t_x,t_y)$

## 旋转变化 (rotation transformation)

![2.jpg](../img/translate2/2.jpg)

点P(x,y)的极坐标表示(r为P点到原点的距离)

$$\begin{cases}
x = rcos(\phi)\\\
y = rsin(\phi)
\end{cases}
$$

绕坐标原点(参照点，基准点)旋转$\theta$(逆时针为正，顺时针为负)

$$\begin{cases}
x' = rcos(\theta + \phi)\\\
y' = rsin(\theta + \phi)
\end{cases}
$$

### 矩阵推导

$$\begin{cases}
x' = rcos(\theta + \phi)\\\
y' = rsin(\theta + \phi)
\end{cases}
\to
\begin{cases}
x' = rcos(\theta)cos(\phi) - rsin(\theta)sin(\phi)\\\
y' = rsin(\theta)cos(\phi) + rcos(\theta)sin(\phi)
\end{cases}
\to
\begin{cases}
x' = xcos(\theta) - ysin(\phi) \\\
y' = xsin(\theta) + y cos(\phi)
\end{cases}
$$

矩阵表示为：$P' = R*P$

$$
R=\begin{equation}
\left[\begin{matrix}
  cos(\theta) & -sin(\theta) \\\
  sin(\theta) & cos(\theta)
\end{matrix}\right]
\end{equation}
\quad
P=
\begin{equation}
\left[\begin{matrix}
  x\\\ y
\end{matrix}\right]
\end{equation}
$$

记为$R(\theta)$

### 放缩变换(scaling transformation)

![3.jpg](../img/translate2/3.jpg)

将点P(x,y)在x方向，y方向分别缩放$s_x$和$s_y$倍，得到点P'(x',y')

$$\begin{cases}
x' = s_x x\\\
y' = s_y y
\end{cases}
$$

矩阵表示 $P' = S \times P$

$$
S = \begin{equation}
\left[\begin{matrix}
  s_x & 0 \\\
  0 & s_y
\end{matrix}\right]
\end{equation}
$$

记为：$S(s_x,s_y)$

以坐标原点为缩放参照（基准点）

不仅改变了物体的大小和形状，也改变了它离原点的距离


### 总结

利用矩阵计算变换后的坐标时，平移、旋转和放缩变换分为为：

$$
平移变换：P' = P + T(t_x,t_y) \\\
旋转变换：P' = R(\theta) \bullet P \\\
放缩变换：P' = S(s_x,s_y) \bullet P
$$

**运算不统一，如何统一运算**

# 齐次坐标

## 为什么要用到其次坐标
1. 对多个点计算多次不同的变换时，分别利用矩阵计算各个变换导致计算量大
2. 运算表示形式不统一
  
  平移为 “+”
  旋转和放缩为 “x”

3. 统一运算形式后，可以先合成变换运算的矩阵，再作用于图形对象

## 定义

(x,y)点对应的齐次坐标定义为

$$
(x_h,y_h,h) \quad x_h = hx,y_h = hy,h \neq 0
$$

(x,y)点对应的齐次坐标为三维空间的一条直线

$$\begin{cases}
x_h = hx \\\
y_h = hy \\\
z_h = h
\end{cases}
$$

标准的齐次坐标为(x,y,1)

h=0表示无穷远点

## 二维变换的其次坐标

1. 平移变换

$$
\begin{equation}
\left[\begin{matrix}
  x' \\\
  y' \\\
  1
\end{matrix}\right]
\end{equation} 
=
\begin{equation}
\left[\begin{matrix}
  1 & 0 & t_x \\\
  0 & 1 & t_y \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
=^{记为}
T(t_x,t_y)
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
$$

2. 旋转变换

$$
\begin{equation}
\left[\begin{matrix}
  x' \\\
  y' \\\
  1
\end{matrix}\right]
\end{equation} 
=
\begin{equation}
\left[\begin{matrix}
  cos\theta & -sin\theta & 0 \\\
  sin\theta & cos\theta & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
=^{记为}
R(\theta)
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
$$

3. 放缩变换

$$
\begin{equation}
\left[\begin{matrix}
  x' \\\
  y' \\\
  1
\end{matrix}\right]
\end{equation} 
=
\begin{equation}
\left[\begin{matrix}
  s_x & 0 & 0 \\\
  0 & s_y & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
=^{记为}
S(s_x,s_y)
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
$$

### 优点

1. 便于合成
  连续变换时，可以先得到变换的矩阵
2. 便于硬件实现

## 变换的性质

1. 平移和旋转变换具有可加性

$$
T(t_{x2},t_{y2}) \bullet T(t_{x1},t_{y1}) = T(t_{x1} + {t_x2},t_{y1} + t_{y2}) \\\
R(\theta_2) \bullet R(\theta_1) = R(\theta_1 + \theta_2)
$$

2. 放缩变换具有可乘性

$$
S(s_{x2},s_{y2}) \bullet S(s_{x1},s_{y1}) = S(s_{x1}s_{x2},s_{y1}s_{y2})
$$


## 逆变换

1. 平移的逆变换

$$
T =\begin{equation}
\left[\begin{matrix}
  1 & 0 & t_x \\\
  0 & 1 & t_y \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\quad
T^{-1}=\begin{equation}
\left[\begin{matrix}
  1 & 0 & -t_x \\\
  0 & 1 & -t_y \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
$$

2. 逆旋转变换

$$
R=\begin{equation}
\left[\begin{matrix}
  cos\theta & -sin\theta & 0 \\\
  sin\theta & cos\theta & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
R^{-1}=\begin{equation}
\left[\begin{matrix}
  cos\theta & sin\theta & 0 \\\
  -sin\theta & cos\theta & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
$$

3. 逆放缩变换

$$
S=\begin{equation}
\left[\begin{matrix}
  s_x & 0 & 0 \\\
  0 & s_y & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
S^{-1}=\begin{equation}
\left[\begin{matrix}
  \frac{1}{s_x} & 0 & 0 \\\
  0 & \frac{1}{s_y} & 0 \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
$$

## css3d中的矩阵

$$
\begin{equation}
\left[\begin{matrix}
  a & c & e \\\
  b & d & f \\\
  0 & 0 & 1
\end{matrix}\right]
\end{equation}
\bullet
\begin{equation}
\left[\begin{matrix}
  x \\\
  y \\\
  1
\end{matrix}\right]
\end{equation} 
=\begin{equation}
\left[\begin{matrix}
  ax + by + e \\\
  bx + dy + f \\\
  0 + 0 + 1
\end{matrix}\right]
\end{equation} 
$$


参考网站：

[https://wenku.baidu.com/view/0f0d0e2130b765ce0508763231126edb6f1a7625.html](https://wenku.baidu.com/view/0f0d0e2130b765ce0508763231126edb6f1a7625.html)

[https://www.cnblogs.com/graphics/archive/2012/08/08/2609005.html](https://www.cnblogs.com/graphics/archive/2012/08/08/2609005.html)

[https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-矩阵/](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-矩阵/)