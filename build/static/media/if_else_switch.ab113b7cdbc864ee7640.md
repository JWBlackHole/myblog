if-else & switch
===

Intro
---

**if-else** is a tool to help you determine what to do or skip next, and it is very useful when need to trade-off.

Structure
---

### if

```c=
if(statement){
    // what to do
}
```

### if else

```c=
if(statement){
    // what to do
}else{
    // what to do
}
```

### multi-level if else

```c=
if(statement){
    if(statement){
        // what to do
    }else{
        // what to do
    }
    // what to do
}else{
    // what to do
    if(statement){
        // what to do
    }
}
```


### repeat if else

```c=
if(statement){
    // what to do
}else if(statement){
    // what to do
}else if(statement){
...
...
}else if(statement){
    // what to do 
}else{
    // what to do
}
```

### Practice

1. Input 2 integers, please compare a and b and output the larger one. If they are equal, output either.

```c=
#include<stdio.h>

int main(){
    int a, b;
    scanf("%d%d", &a, &b);
    
    // v1
    int bigger;
    if(a > b){         // a > b
        bigger = a;
    }else if(b > a){   // b > a
        bigger = b;
    }else if(a == b){  // they are equal
        bigger = b;
    }
    
    // Can we exchange the comparison order?
    
    // v2
    int bigger;
    if(a > b){        // a > b
        bigger = a;
    }else if(b >= a){ // b > a or they are equal
        bigger = b;
    }

    // move '=' to a > b

    // v3
    int bigger = a;
    if(b > a){
        bigger = b;
    }

    // v4
    bigger = a > b ? a : b;
    
    printf("%d", bigger);
    
    return 0;
}
```

De Morgan's laws
---

![截圖 2024-01-22 晚上9.30.37](https://hackmd.io/_uploads/BJtzCJnYp.png)  


2. Input 3 intergers n, a and b, and if input n is in the range [a, b], then ouput "Yes, number {n} is in the range.", otherwise ouput "No, number {n} is not in the range."(You should replace {n} to the value of n)

```c=
#include<stdio.h>
#include<string.h>

int main(){
    int n, a, b;
    scanf("%d", &n);
    scanf("%d%d", &a, &b);
    
    // v1 redundant and messy
    if(a <= n){
        if(n <= b){
            printf("Yes, number %d is in the range.\n", n);
        }else{
            printf("No, number %d is not in the range.\n", n);
        }
    }else{
        printf("No, number %d is not in the range.\n", n);
    }

    // v2 : normal and clean way
    if(a <= n && n <= b){ // notice: C laguage does not accept "a <= n <= b"
        printf("Yes, number %d is in the range.\n", n);
    }else{
        printf("No, number %d is not in the range.\n", n);
    }
    

    // v3
    if(n < a || n > b){ // De Morgan's Law
        printf("No, number %d is not in the range.\n", n);
    }else{
        printf("Yes, number %d is in the range.\n", n);
    }

    // v4
    int yes_or_no;
    if(a <= n && n <= b){ // notice: C laguage does not accept "a <= n <= b"
        yes_or_no = 1;
    }else{
        yes_or_no = 0;
    }

    if(yes_or_no == 1){
        printf("Yes");
    }else{
        printf("No");
    }

    printf(", number %d is", n);

    if(yes_or_no == 0){
        printf("not");
    }

    printf(" in the range.\n");

    // v5
    char s1[100], s2[100];
    if(a <= n && n <= b){ // notice: C laguage does not accept "a <= n <= b"
        strcpy(s1, "Yes");
        strcpy(s2, "");
    }else{
        strcpy(s1, "No");
        strcpy(s2, "not ");
    }
    printf("%s, number %d is %sin the range.\n", s1, n, s2);

    // v6 one line but a little redundant
    int yes_or_no = (a <= n && n <= b) ? 1 : 0;
    printf("%s, number %d is %sin the range.\n",(yes_or_no ? "Yes" : "No"), n, (yes_or_no ? "" : "not "));

    return 0;
}
```

switch
---

The **switch** statement in C is a control statement that allows a variable to be tested for equality against a list of values. It provides a cleaner and more concise way to write multiple **if-else** statements when you need to compare a variable against different values.

```c=
switch (expression) {
    case constant1:
        // code to be executed if expression matches constant1
        break;
    case constant2:
        // code to be executed if expression matches constant2
        break;
    // more cases can be added as needed
    default:
        // code to be executed if expression doesn't match any of the constants
}
```

### Practice

1. Input a integer n, if n equals to 1, ouput "Yummy", if n equals to 2, ouput "Juicy", if n equals to 3, ouput "Disgusting".
Please use both if-else and swtich to complete it, compare the difference between them.
```c=
#include<stdio.h>

int main(){
    int n;
    scanf("%d", &n);

    // v1
    if(n == 1){
        printf("Yummy\n");
    }else if(n == 2){
        printf("Juicy\n");
    }else if(n == 3){
        printf("Disgusting");
    }

    // v2
    switch(n){
        case 1:
            printf("Yummy\n");
            break;
        case 2:
            printf("Juicy\n");
            break;
        case 3:
            printf("Disgusting");
            break;
        default:
    }


    return 0;
}
```


Excercises
---

1. Input 4 nubmers, and we know that the numbers will either be **Arithmetic sequence** or **Geometric sequence**, please ouput the 5-th number.

2. Input 3 numbers, please determine whether the sum could be 10 by adding some '+' or '-' operators and ouput "Yes" or "No".

    ex 1.
    input 2 3 5
    ouput "Yes", because 2 + 3 + 5 = 10

    ex 2.
    input 5 12 7
    ouput "Yes", because 5 + 12 - 7 = 10

    ex 3.
    input 3 6 9
    ouput "No", because the sum must not be 10

3. Bob, Amy, Gennifer are playing rock-paper-scissors, and you need to ouput who wins the game or tie?
   input are 3 integers, standing for 3 shoots of 3 people (rock is 0, paper is 5, scissors is 2)
   
   ex 1.
   input 5 5 0
   output Bob and Amy win the game.
   
   ex 2.
   input 2 2 0
   output Gennifer wins the game.
   
   ex 3.
   input 5 5 5
   output Tie