Function and Recursion
===

Function
---

### Introduction

In programming language, **function** is a reusable block of code that performs a **specific task** or **set of tasks**.

And In C language, we are required to utilize the **main** function, it is entry of the whole program and it help us the compelete the tasks.

ex. 
```c=
#include<stdio.h>

int main(){
    int a = 10;
    int b = 5;
    
    // we want to add a and b together
    int sum = a + b;
    printf("%d", sum);
    
    return 0;
}
```

### Structure
The structure of a **function** in the C programming language typically consists of 5 parts:

1. **Shell**:
    Cover of the function, which contains function name and {}.
2. **Return type**:
    The type you want to return, which can be "int", "char", "void" and so on.
3. **Parameters**:
    The parameters we have to pass to this function when we want to use this function.
5. **Instructions**:
    Instructions we want to execute.
7. **Return**:
    We can use **return** to terminate the function proceding and return a value to the caller.
    ps. You and return anywhere in the function
    
```c=
2.Type functionName(3.parameters){   // 1.Shell
    if(...){
        return ...;     // 5. Return
    }
        ...
    Instruction
    Instruction         // 4. Instructions
    Instruction
        ...
            
    return ...;         // 5. Return 
}                                   // 1.Shell
```
    
### How does a function works?

- Caller and Callee
    In the context of programming and function calls, "**caller**" and "**callee**" refer to the roles played by different parts of the code during the execution of a function.
    
    - Caller:
        The "caller" is the part of the code that initiates a function call.
    - Callee:
        The "callee" is the function being called or invoked by the caller.

#### Steps:
1. **Caller** calls and passes parameters to the **Callee**
2. **Callee** do some Instructions
3. When we need to return, returning the value we want to return according to the return type

ex. 
```c=
#include<stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    // Caller
    int result = add(3, 5);
    
    // The caller initiated the add function and assigned its result to 'result'.
    // Control returns to the caller after the add function execution.

    printf("Result: %d\n", result);

    return 0;
}
```

### Practice
1. Implement **add, substract, multiply, divide** by using functions.
2. Passing an interger number to function, please provide a function that can calculate and return the digits of a number.
3. **Fibonacci Sequence**
    Fibonacci sequence is a sequence having these properties.

    $Seq = {A_1, A_2, A_3... }$

    $A_1 = 0$
    $A_2 = 1$
    $A_i = A_{i-1} + A_{i-2}$, as $i > 2$

    We want to get the $n$-th number in this sequence.

    Input a number $n$, and we need to ouput the $n$-th number in this sequence.
    
    You need to implement:
    Provide a funciton called **fibonacci_with_loop**, which receive a integer $n$, and using loop to calculate $n$-th number in sequence and return the value.


Ans:
```c=
#include<stdio.h>

int fibonacci_with_loop(int n){
    int a1 = 1, a2 = 1;
    int rv;
    if(n < 2){
        printf("1\n");
    }

    int prev_2 = a1, prev_1 = a2;
    for(int i=3;i<=n;i++){
        int now = prev_1 + prev_2;
        rv = now; // update the answer

        // prepare for next round
        prev_2 = prev_1;
        prev_1 = now;
    }

    return rv;
}

int main(){
    int n;
    scanf("%d", &n);

    int ans = fibonacci(n);
}
```
    
:::success
We can do very complicated things in a function, like **calculating**, **addressing** or **looping**.
In general, function help us wrapping something similar together, letting us don't need to writing it again in several positions.
:::


:::info
Hint:
In **pure** function having no recursion, the execution of **caller** and **callee** are very easy to trace, however, it becomes very complicated when it comes to the concept of **recursion**.
:::



Recursion
---

**Recursion** is a specific application of **functions** that shares properties with **loops** but has the capability to handle more intricate and complex tasks.

Simply, **recursion** is just a function call itself!
```c=
type this_func(int a){
    if(...){
        return ...;
    }
    ...
    ...
    this_func(b);
    ...
    ...
    return ...;
}
```

### Practice

We knew the rules of fibonacci sequnce in previous parts. Now we want to implement the same funciton **fibonacci_with_recursion** in recursive way.

Here are the rules of **Fibonacci Sequence**:

$Seq = {A_1, A_2, A_3... }$

$A_1 = 0$
$A_2 = 1$
$A_i = A_{i-1} + A_{i-2}$, as $i > 2$

Ans:
```c=
#include<stdio.h>

int fibonacci_with_recursion(int n){
    if(n == 1) return 0;
    if(n == 2) return 1;
    `
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main(){
    int n;
    scanf("%d", &n);

    int ans = fibonacci(n);

    printf("%d\n", ans);

    return 0;
}
```

Hint:  
In this case, compared to not recursive one, recursive way having less lines of code.
However, it has low efficiency because of redundent computing.(can be resolved by using **dynamic programming**, which is a algorithm)
And if we handle it properly, we can even do something complicated that normal way can not.

But there may exist some problem when using recursion:
1. Low readibility, causing difficulty on debugging
2. Redundent computing (if we do not handle it properly)

Homework:  
[GCD 最大公因數](https://zerojudge.tw/ShowProblem?problemid=a024)(Please write it in recursive way)  
[河內塔](https://zerojudge.tw/ShowProblem?problemid=b190) (You may exceed the time limit of the test cases until you learn **dynamic programming**)  
![3de9312c-2f04-44c9-a3a9-aa0f914f7136](https://hackmd.io/_uploads/Sye6RcHKt6.jpg)  

```c=
//GCD in function with no recursion
#include<stdio.h>

int gcd(int a, int b){
    int x1, x2;
    if(a < b) x1 = a, x2 = b;
    else x1 = b, x2 = a;

    while(x1 != 0){
        int temp = x2 % x1;

        // current round
        // temp 餘數
        // x2 大的
        // x1 小的

        // next round
        // x1 <- 現在的餘數
        // x2 <- 現在小的(x1)

        // prepare for next round
        x2 = x1;
        x1 = temp;
    }
    return x2;
}

int main(){
    int a, b;
    scanf("%d%d", &a, &b);

    int result = gcd(a, b);
    printf("%d", result);
    return 0;
}
```