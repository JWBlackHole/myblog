Loop(while, for, do...while)
===

Intro
---
**Loop** is a tool for special purpose, it allows program operating similar instructions repeatly. ex. Counting, Array Traversal, List some information

And in general, we have 3 kinds of loop: **while loop**, **for loop** and **do...while**
```c=
// Counting
// it will print from 0~(n-1)
for(int i=0;i<n;i++){
    printf("%d ", i);
}
```

"while" Loop
---

**while** loop is most basic loop, and it usually which contains 3 parts:
1. **Shell**
2. **Checking Statement**
3. **Instructions**.

```c=
while(2.Check){     // 1.Shell
        ...        
        ...
    Instrunction
    Instrunction    // 3.Instructions
    Instrunction 
        ...
        ...
}                   //1.Shell
```

And **while loop** works by 3 steps

1. Check the statement
    -> if **true**, continue next step
    -> if **false**, break the while loop
2. Do instructions
3. Go back step 1

### Practice:

#### Collatz conjecture:
There is a number **n**, and the rule is:

if n is **even**, divide it by 2
if n is **odd**, time it by 3 and plus 1

n finally go back to 1

So, there is a example.

Input a number **n**,
and please ouput the outcomes of **n** at every step and the step(s) where **n** will go back to **1** according to the rule of **Collatz conjecture**.

ex. 
input:
10
ouput:
5 16 8 4 2 1 
6
```c=
#include<stdio.h>

int main(){
    int n, count = 0;
    scanf("%d", &n);
    while(/*Statement*/){
        if(/*Statement*/) n /= 2;
        else n = (3 * n + 1);
        printf("%d ", n);
        count++;
    }
    printf("\n");
    printf("%d\n", count);
}
```

:::success
Hint:
**while loop** is usually used for **UNKNOWN** steps operations.
:::

"for" Loop
---

**for loop** is a kind of loop based on the **while loop**, in other words, **for loop** can also be implemented by **while loop**.

**for loop** contains 5 parts:
1. Shell
2. Initial Declaration
3. Checking Statement
4. Instructions
5. Operation after Intrucitons

```c=
for(2.Init;3.Check;4.Oper){  // 1.Shell
        ...        
        ...
    Instrunction
    Instrunction             // 5.Instructions
    Instrunction 
        ...
        ...
}                            // 1.Shell
```

And **for loop** works by 3 steps

1. Initial Declaration
2. Check the statement
    -> if **true**, continue next step
    -> if **false**, break the while loop
3. Do instructions
4. Do operation
5. go back step 2

:::success
Hint:
**for loop** is used more often than other 2 types of loop, because its convenience for **iterations**, **traversal** and so on.

We usually use letter 'i' to be the iteration variable in the for loop, meaning "Iterations", and it became a kind of common sense...

So, something you will see very common in **programs** or **projects** is like:
```c=
for(int i=0;i<n;i++){
    ...blablabla
}
```
:::

### Practice

There is a program, 
1. Please trace the following code step by step.
2. Please implement same function by using **while loop**
3. Analyze what will happen if we remove "i+=2"

```c=
#include<stdio.h>

int main(){
    int x = 100;
    for(int i=0;i<10;i+=2, x-=10){
        printf("x: %d\n", x);
    }
    return 0;
}
```

"do...while" Loop
---
**do...while** is a kind of variation of **while**, and it is used least among 3 types of **loop**, the only difference between them is that **do...while** checking the statement after instructions.

Therefore, Instructions in **do...while** will be executed at least once, however, those in **while** may not.

ps. You can test by yourself if you are curious.

ex.
```c=
// Using do...while
int i = 0;
do {
    System.out.println("This will be printed at least once");
    i++;
} while (i < 3);

// Using while
int j = 0;
while (j < 3) {
    System.out.println("This may not be printed if the condition is false initially");
    j++;
}

```

Excercise
---
ZeroJudge:
1. [因數分解](https://zerojudge.tw/ShowProblem?problemid=a010)
3. [數字翻轉](https://zerojudge.tw/ShowProblem?problemid=a038)
4. [阿姆斯壯數](https://zerojudge.tw/ShowProblem?problemid=a040)
5. [迴文](https://zerojudge.tw/ShowProblem?problemid=a022) // 需要Array

Multi-Level Loop
---

We can do something advanced bu using **multi-level loop**.

### 1. Multiplication Table:
Generate a multiplication table using nested loops. Allow the user to input the number up to which they want the table.

Example:

```
Enter the number for the multiplication table: 5
1   2   3   4   5
2   4   6   8  10
3   6   9  12  15
4   8  12  16  20
5  10  15  20  25
```



### 2. Print a Triangle Pattern:
Write a program to print a triangle pattern using nested loops.

Example:
```
Enter the height of the triangle: 5
*
**
***
****
*****
```

### 3. Matrix Transposition:
Write a program to transpose a given matrix. The user inputs the number of rows and columns, and then the matrix elements.

Example:
```
Enter the number of rows: 3
Enter the number of columns: 2
Enter matrix elements:
1 2
3 4
5 6

Transposed Matrix:
1 2 3
4 5 6
```

Ans
---

```c=
//因數分解
#include<stdio.h>
#include<stdbool.h>

int main(){
    int n, remaining;
    bool first;

    scanf("%d", &n);

    first = true;
    remaining = n;
    for(int i=2;i<=n;i++){
        int count = 0;
        while(remaining % i == 0){
            remaining /= i;
            count++;
        }
        if(count){
            if(first){
                first = false;
            }else{
                printf(" * ");
            }

            printf("%d", i);
            if(count >= 2)
                printf("^%d", count);
            
        }
    }
    printf("\n");
    return 0;
}
```


```c=
// Multiplication Table
#include<stdio.h>


int main(){
    int n;
    scanf("%d", &n);
    int maxN = n*n;

    int digits = 0;
    int tempN = maxN;
    while(tempN / 10 != 0){
        tempN /= 10;
        digits++;
    }

    int space = digits + 1;

    for(int i=0;i<n;i++){
        int start = i+1;
        for(int j = 0;j<n;j++){
            int num = start*(j+1);
            
            int digits = 0;
            int tempN = num;
            while(tempN / 10 != 0){
                tempN /= 10;
                digits++;
            }

            printf("%d", num);
            for(int k = 0;k<space-digits;k+=1){
                printf(" ");
            }
        }
        printf("\n");
    }
    

    return 0;
}

// at most t digits
// t + 1 space for 1 number
```