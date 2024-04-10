## 逻辑运算符
Python语言支持逻辑运算符，以下假设变量 a 为 10, b为 20:

| 运算符	| 逻辑表达式 | 描述	| 实例 |
| - | - | - | - |
| and |	x and y	| 布尔"与" - 如果 x 为 False，x and y 返回 x 的值，否则返回 y 的计算值。	| (a and b) 返回 20。 |
| or	| x or y	| 布尔"或" - 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。	(a or b) | 返回 10。 |
| not	| not x	| 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。	not(a and b) | 返回 False |

## 海象运算符
```:=```  这个运算符的主要目的是在表达式中同时进行赋值和返回赋值的值。
Python3.8 版本新增运算符

```python
# 传统写法
n = 10
if n > 5:
    print(n)

# 使用海象运算符
if (n := 10) > 5:
    print(n)
```

## 循环
while循环和for循环可以添加else语句
```python
# for循环(break后不执行else, 循环可以没有else)
sites = ["Baidu", "Google", "Runoob", "Taobao"]
for site in sites:
  if site == "Runoob":
    print("菜鸟教程!")
    break
  print("循环数据 " + site)
else:
  print("没有循环数据!")
print("完成循环!")
```

## 推导式
#### 列表推导式
```python
[表达式 for 变量 in 列表] 
[out_exp_res for out_exp in input_list]

或者 

[表达式 for 变量 in 列表 if 条件]
[out_exp_res for out_exp in input_list if condition]
```
- out_exp_res：列表生成元素表达式，可以是有返回值的函数。
- for out_exp in input_list：迭代 input_list 将 out_exp 传入到 out_exp_res 表达式中。
- if condition：条件语句，可以过滤列表中不符合条件的值。


```python
names = ['Bob','Tom','alice','Jerry','Wendy','Smith']
new_names = [name.upper()for name in names if len(name)>3]
print(new_names)
# 输出['ALICE', 'JERRY', 'WENDY', 'SMITH']
```
#### 字典推导式
```python
{ key_expr: value_expr for value in collection }

或

{ key_expr: value_expr for value in collection if condition }
```

```python
listdemo = ['Google','Runoob', 'Taobao']
# 将列表中各字符串值为键，各字符串的长度为值，组成键值对
newdict = {key:len(key) for key in listdemo}
print(newdict)
# 输出{'Google': 6, 'Runoob': 6, 'Taobao': 6}
```

## 函数不定长参数
#### 一个星号
语法：
```python
def functionname([formal_args,] *var_args_tuple ):
  "函数_文档字符串"
  function_suite
  return [expression]
```
加了星号 * 的参数会以元组(tuple)的形式导入，存放所有未命名的变量参数。
```python
#!/usr/bin/python3
  
# 可写函数说明
def printinfo( arg1, *vartuple ):
  "打印任何传入的参数"
  print ("输出: ")
  print (arg1)
  print (vartuple)
 
# 调用printinfo 函数
printinfo( 70, 60, 50 )
# 输出: 
# 70
# (60, 50)
```
#### 两个星号
还有一种就是参数带两个星号 **基本语法如下：
```python
def functionname([formal_args,] **var_args_dict ):
  "函数_文档字符串"
  function_suite
  return [expression]
```

```python
#!/usr/bin/python3
  
# 可写函数说明
def printinfo( arg1, **vardict ):
  "打印任何传入的参数"
  print ("输出: ")
  print (arg1)
  print (vardict)
 
# 调用printinfo 函数
printinfo(1, a=2,b=3)

# 输出:
# 1
# {'a': 2, 'b': 3}
```

## 装饰器
基本语法
```python
def decorator_function(original_function):
  def wrapper(*args, **kwargs):
    # 这里是在调用原始函数前添加的新功能
    before_call_code()

    result = original_function(*args, **kwargs)
    
    # 这里是在调用原始函数后添加的新功能
    after_call_code()

    return result
  return wrapper

# 使用装饰器
@decorator_function
def target_function(arg1, arg2):
  pass  # 原始函数的实现
```

#### 带参数的修饰器
```python
def repeat(n):
  def decorator(func):
    def wrapper(*args, **kwargs):
      for _ in range(n):
        result = func(*args, **kwargs)
      return result
    return wrapper
  return decorator

@repeat(3)
def greet(name):
  print(f"Hello, {name}!")

greet("Alice")
```

#### 类装饰器
```python
class DecoratorClass:
  def __init__(self, func):
    self.func = func
    
  def __call__(self, *args, **kwargs):
    # 在调用原始函数之前/之后执行的代码
    result = self.func(*args, **kwargs)
    # 在调用原始函数之后执行的代码
    return result

@DecoratorClass
def my_function():
  pass
```

## 遍历技巧
#### 字典遍历技巧
在字典中遍历时，关键字和对应的值可以使用 items() 方法同时解读出来：
```python
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items():
  print(k, v)

# 输出
# gallahad the pure
# robin the brave
```

#### 序列遍历技巧
在序列中遍历时，索引位置和对应值可以使用 enumerate() 函数同时得到：
```python
for i, v in enumerate(['tic', 'tac', 'toe']):
  print(i, v)

# 输出
# 0 tic
# 1 tac
# 2 toe
```

同时遍历两个或更多的序列，可以使用 zip() 组合：
```python
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
  print('What is your {0}?  It is {1}.'.format(q, a))

# 输出
# What is your name?  It is lancelot.
# What is your quest?  It is the holy grail.
# What is your favorite color?  It is blue.
```

## 异常
```python
try:
  raise NameError('HiThere')  # 抛出一个异常。
except NameError:
  print('An exception flew by!')
else:
  print('没发生异常会打印这句话。')
finally:
  print('这句话，无论异常是否发生都会执行。')
```

## 类属性和方法
#### 类的私有属性
__private_attrs：两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。在类内部的方法中使用时 self.__private_attrs。

#### 类的方法
在类的内部，使用 def 关键字来定义一个方法，与一般函数定义不同，类方法必须包含参数 self，且为第一个参数，self 代表的是类的实例。

self 的名字并不是规定死的，也可以使用 this，但是最好还是按照约定使用 self。

#### 类的私有方法
__private_method：两个下划线开头，声明该方法为私有方法，只能在类的内部调用 ，不能在类的外部调用。self.__private_methods。