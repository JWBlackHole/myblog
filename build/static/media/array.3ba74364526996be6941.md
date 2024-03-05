Array
===

Introduction
---
**Array** can reacord a sequence of variables and access certain variable by indexing.

Declaration
---
To declaration of an array, we need to give this array what type of element it should record so that array will **access** or **modify** the array in unit of this type.

If we want to allocate a **static array**, we should specify a **array size** to this array, because the array size can **not** be modified during the execution of the program.




```c=
#include<stdio.h>

int main(){
    
    // specify size 100 to array, and array can be any type
    int int_arr[100];   // int array
    char char_arr[100]; // char array

    return 0;
}
```



:::success
Hint:
We usually initialize all **bits** in an array to **0** when we declare it by using this:
```c=
int arr[100] = {0};
```
:::

:::warning
Notice:

1. Whereas, we usually have a changable size in every request, so we nee to give the size as big as possible.
2. The spcification of size for a  array would be done during the **compile-time**, therefore, we must declare the size before execution.

    The declaration of ar will not be accepted in **C language**:
    ```c=
    #include<stdio.h>

    int main(){
        int n;
        scanf("%d", &n);
        int arr[n]; // we use a variable as the size of a array
                    // which is unacceptable.
                    // because value of variable n is given during the execution
        return 0;
    }
    ```

    If we use **define** a number at first and using this number as the size of a array, this situation is acceptable, because it would be done during the **compile-time**.
    ```c=
    #include<stdio.h>

    #define SIZE 10    // define a numbber

    int main(){
        int arr[SIZE]; // acceptable
        return 0;
    }
    ```

    However, this can be resolved by using **dynamic allocation**, and some late version of **C++** can support this kind of form.
:::

Operation
---

### Indexing

We can **access** or **modify** certain element in the array by using **indexing**.

And the index in an array counted from **0** to **size - 1**, total **size** elements.

When we give a index to a array, it will return a variable in that index in type which we specify it when declaration.

#### Usage

```c=
#include<stdio.h>

int main(){

    int arr[3] = {0};

    arr[0] = 1;
    arr[2] = 10;

    printf("%d ", arr[0]);
    printf("%d ", arr[1]);
    printf("%d\n", arr[2]);
    return 0;
}
```

Indexing can also be combined with **for loop**, which is a very common combination.

ex.
```c=
#include<stdio.h>

int main(){

    int arr[10] = {0};

    for(int i=0;i<10;i++){     // assing 0 ~ 9 to arr[0~9]
        arr[i] = i;
    }

    for(int i=0;i<10;i++){
        printf("%d ", arr[i]); //print out arr[0~9]
    }
    printf("\n");

    return 0;
}
```

:::info
Hint:
We can to input or output a **string** using "char" array, and program use '\0' to determine the last element of string, in other words, if '\0' at index i, arr[0~(i-1)] is the string.

We can do like this:
```c=
char arr[100]; // total length can not exceed 99                    //because we need to preserve 1 unit for '\0'
scanf("%s", arr);
printf("%s", arr);
```
:::

Addressing
---

In a array, we can acces it by using address, assume there is a array called $arr$.

Assume there is a index: $i$, value of **arr + i** equals to **&arr[i]**(address of arr[i]).

```c=
#include<stdio.h>

int main(){
    int arr[100] = {0}; // 100 element in this array
                        // We initialize it to all 0

    // flag: %p stands for "address"
    printf("arr    : %p\n", arr);
    printf("&arr[0]: %p\n", &arr[0]);
    printf("\n");
    printf("arr + 1: %p\n", arr + 1);
    printf("&arr[1]: %p\n", &arr[1]);

    return 0;
}
```

Practice
---

1. Prefix, given a array size n, followd by n numbers stand for n elements in the array, please find the prefix array of original one.

```c=
#include<stdio.h>

#define SIZE 1000

int main(){
    int n;
    int arr[SIZE];

    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%d", &arr[i]);
    }

    for(int i = 1;i<n;i++){
        arr[i] += arr[i-1];
    }
    
    for(int i = 0;i<n;i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}
```

:::info
Remember:
Prefix has a very important propertiy, if you construct a prefix array of a array, then you can calculate the interval sum very quickly.

Assume there is a array arr[n], and the prefix array p_arr[n] of original one.

Because,
p_arr[i] = arr[0] + arr[1] + ... + arr[i]
Therefore, there are 2 integer a, b, and a < b
p_arr[b] - p_arr[a] = arr[a + 1] + arr[a + 2] + ... + arr[b]


:::

2. Find maximum in a array.
    Given a array size n, followd by n numbers stand for n elements in the array, please find the **index** of max number and the **max number** in this array.
```c=
#include<stdio.h>

#define SIZE 1000

int main(){
    int n;
    int arr[SIZE];

    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%d", &arr[i]);
    }

    int index = -1, maxNum;
    for(int i=0;i<n;i++){
        if(index == -1){
            index = i;
            maxNum = arr[i];
        }else if(maxNum < arr[i]){
            index = i;
            maxNum = arr[i];
        }
    }

    printf("%d %d", index, maxNum);
    return 0;
}
```

3. Find maximum interval of a array.
    Given a array size n, followd by n numbers stand for n numbers in the array, please find the interval [x, y] that has maximun sum and the value of maximum sum in this array.
```c=
???
```

4. Cut the trees
input a n representing the number of trees, followed by n integer represent the height of n trees and those tree has their index 0~n-1 in order, and we want construct that the height of trees should keep increasing according to its index, therefore we traverse from index 0 to n-1, if the height of tree is lower than or eauql to previous trees, then cut it off.
Please ouput the trees have not been cut off.

    ex.
    input:
    6
    1 7 3 5 9
    ouput:
    1 7 9


Time Complexity
---
[Time Complixity---Wiki](https://zh.wikipedia.org/zh-tw/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)

### BIG O notation

If highest power of $x$ in $g(x)$ is $a$, then $g(x) \in O(x^a)$


O($n^2$) Sorting Algorithm
---

1. Insertion Sort
    Insertion sort is a sort algorithm that is very **intuitive** and it is a sort method like how we organize our card when we play pockers.
    Assume there is a set of cards unorganized.
    
    Here is the rules :
    1. Every time we get a card in the set, compare it and put it in to the right place in our hand.
    2. Repeat **step 1** until all cards are collected.

### 2 Array:
```c=
#include<stdio.h>

#define SIZE 1000

int main(){
    int n;
    int arr[SIZE], sorted[SIZE];

    scanf("%d", &n);

    // Initialize the array
    for(int i=0;i<n;i++){
        scanf("%d", &arr[i]);
    }

    int sortedSize = 0;
    // Sort from small to large
    // Start insertion sort
    for(int i=0;i<n;i++){
        int putPosition = 0;
        for(int j = 0;j < sortedSize;j++){
            if(sorted[j] <= arr[i]){
                putPosition++;
            }else{
                break;
            }
        }

        // Now we got right putPosition
        // Move all card after putPotion in sorted array 1 unit back
        for(int j = n-1;j >= putPosition;j--){
            sorted[j + 1] = sorted[j];
        }

        // We put now number to right position
        sorted[putPosition] = arr[i];
        sortedSize++; // update sorted size
    }
    
    // Print array out
    for(int i = 0;i<n;i++){
        printf("%d ", sorted[i]);
    }
    printf("\n");
    return 0;
}
```

2. Bubble Sort
    Bubble Sort is also a sorting algorithm to sort a unorganized seqeuence. The motivation of this sorting algorithm is that, assuming we have a array arr[n], and if we can put most i-th biggest number to i-th position, then after n rounds, we can sort this array in the right order.
    
    Here is the sorting rules:
    1. Start at the beginning of the list.
    2. Compare each pair of adjacent elements.
        - If the elements are in the wrong order (out of place), swap them.
    3. Continue this process from the beginning of the list to the end.
        - After the first pass, the largest element is guaranteed to be in its correct position at the end of the list.
        - After subsequent passes, the next largest elements are placed in their correct positions.
    4. Repeat the process for the remaining unsorted elements until the entire list is sorted.

Code:
```c=
#include<stdio.h>

#define SIZE 1000

int main(){
    int n;
    int arr[SIZE];

    scanf("%d", &n);

    // Initialize the array
    for(int i = 0;i < n;i++){
        scanf("%d", arr[i]);
    }

    // Sort from small to large
    // Start insertion sort
    for(int i = n-2;i >= 0;i--){
        for(int j = 0;j <= i;j++){
            if(arr[j] > arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    // Print array out
    for(int i = 0;i < n;i++){
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
```

### HW
1. Using **array** and **for loop** to implement **Selection Sort**(ps. You need to realize what is selection sort first)
```c=
#include<stdio.h>

int main(){
    int n;
    int arr[10000];
    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%d", &arr[i]);
    }

    for(int i=0;i<n-2;i++){
        int minIndex;
        for(int j=i;j<n;j++){
            if(j == i){
                minIndex = j;
            }else if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
    }

    for(int i=0;i<n;i++){
        printf("%d", arr[i]);
    }
    printf("\n");

    return 0;
}
```
2. [大數運算](https://zerojudge.tw/ShowProblem?problemid=a021)
```c=
#include<stdio.h>
#include<string.h>

int main(){
    char n1[501], n2[501];
    char op;

    scanf("%s %c %s", n1, &op, n2);

    int size1 = strlen(n1);
    int size2 = strlen(n2);
    int m, length;

    if(size1 > size2){
        length = size1;
        m = size1 - size2;
        for(int i = size2;i >= 0;i--){
            n2[i + m] = n2[i];
        }
        for(int i = 0;i < m;i++){
            n2[i] = 0;
        }
    }else{
        length = size2;
        m = size2 - size1;
        for(int i = size1;i >= 0;i--){
            n1[i + m] = n1[i];
        }
        for(int i = 0;i < m;i++){
            n1[i] = 0;
        }
    }

    int sum[501];

    if(op == '+'){
        int carry = 0;
        for(int i = length -1;i >= 0;i--){
            sum[i] = ((n1[i] - '0') + (n2[i] - '0') + carry)%10;
            if((n1[i] - '0') + (n2[i] - '0') + carry >= 10){
                carry = 1;
            }else{
                carry = 0;
            }
        }
        if(carry == 1) printf("%d", carry);
        for(int i = 0;i<length;i++){
            printf("%d", sum[i]);
        }
    }else if(op == '-'){
        
    }

    printf("\n");
    return 0;
}

//  0028758392\0
//+ 1874022485\0


// 28758392 -> sizeof(long) - sizeof(short)
```
3. [合併社辦](https://zerojudge.tw/ShowProblem?problemid=d456)
```c=
#include<stdio.h>
#include<string.h>

int main(){
    char classes[10000];
    char a, b;

    scanf("%s\n%c%c", classes, &a, &b);
    // printf("%s %c %c\n", classes, a, b);

    int size = strlen(classes);
    int loc1, loc2;
    for(int i=0;i<size;i++){
        if(classes[i] == a) loc1 = i;
        if(classes[i] == b) loc2 = i;
    }

    if(loc1 > loc2){
        int temp = loc1;
        loc1 = loc2;
        loc2 = temp;
    }

    for(int i = 0;i<size;i++){
        if(i<=loc1 || i>=loc2){
            printf("%c", classes[i]);
        }
    }
    printf("\n");
    for(int i = loc1 + 1;i <= loc2 - 1;i++){
        printf("%c", classes[i]);
    }
    printf("\n");

    return 0;
}
```

Apply Array to Recursion
---

### Permutation

We can ustilize the arr and recurssion to contrcute the permutation of numbers.

```c=
#include<stdio.h>

#define MAX_SIZE 1000

void arr_permute(int *arr, int sta, int end, int size){
    if(sta == end){
        for(int i=0;i<size;i++){
            printf("%d ", arr[i]);
        }
        printf("\n");
        return;
    }
    
    // total end - sta +1 times
    for(int i=sta;i<=end;i++){
        arr_permute(arr, sta+1, end, size); // we fix arr[sta] and permutate from arr[sta + 1] ~ arr[end]

        // move all ahead
        int temp = arr[sta];
        for(int j=sta;j<=end-1;j++){
            arr[j] = arr[j+1];
        }
        arr[end] = temp;
    }
}

int main(){
    int n;
    int arr[MAX_SIZE];

    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%d", &arr[i]);
    }

    arr_permute(arr, 0, n-1, n); // pass 0, n-1 to permute arr[0]~arr[n-1]

    return 0;
}
```

### Merge Sort O(nlogn)

Merge Sort is a popular sorting algorithm that follows the **divide-and-conquer** paradigm. The basic idea of Merge Sort is to divide the unsorted list into n sublists, each containing one element (making them inherently sorted), and then repeatedly merge sublists to produce new sorted sublists until only one sublist remains.



#### What is merge?

2 **sorted array**, we can merge it into **one array** with same **sorted rules**.
And we can do that in O(n).

ex.

arr1 = 1 4 8 9
arr2 = 2 6 11 16 22

merge them into
arr = 1 2 4 6 8 9 11 16 22

```c=
void merge(int *des, int *arr1, int size1, int *arr2, int size2){ // merge arr1 and arr2 to des
    int size = size1 + size2;
    int index1 = 0, index2 = 0, index = 0;
    while(index < size){
        if(index2 == size2){
            des[index] = arr1[index1];
            index1++;
            index++;
            continue;
        }
        if(index1 == size1){
            des[index] = arr2[index2];
            index2++;
            index++;
            continue;
        }

        if(arr1[index1] < arr2[index2]){
            des[index] = arr1[index1];
            index1++;
            index++;
        }else{
            des[index] = arr2[index2];
            index2++;
            index++;
        }
    }
}
```

#### Merge Sort
By applying the tech of divide and conquer, we can accomplish sorting in **O(nlogn)**
![image](https://hackmd.io/_uploads/r1au1XkqT.png)


```c=
#include<stdio.h>

#define MAX_SIZE 100000

void merge(int *des, int *arr1, int size1, int *arr2, int size2){ // merge arr1 and arr2 to des
    int size = size1 + size2;
    int index1 = 0, index2 = 0, index = 0;
    while(index < size){
        if(index2 == size2){
            des[index] = arr1[index1];
            index1++;
            index++;
            continue;
        }
        if(index1 == size1){
            des[index] = arr2[index2];
            index2++;
            index++;
            continue;
        }

        if(arr1[index1] < arr2[index2]){
            des[index] = arr1[index1];
            index1++;
            index++;
        }else{
            des[index] = arr2[index2];
            index2++;
            index++;
        }
    }
}

// divdie and conquer
void merge_sort(int *arr, int sta, int end){
    if(sta >= end){
        return;
    }

    int mid = sta + (end - sta) / 2; // we should notice that we may divide negative number
    
    // divide
    merge_sort(arr, sta, mid);   // sort sta~mid
    merge_sort(arr, mid+1, end); // sort (mid+1)~end

    int size1 = mid - sta + 1, size2 = end - (mid + 1) +1;
    
    // conquer
    int temp[MAX_SIZE];
    merge(temp, arr+sta, size1, arr+mid+1, size2);

    for(int i=sta;i<=end;i++){
        arr[i] = temp[i-sta];
    }
}

int main(){

    int n;
    int arr[MAX_SIZE];

    scanf("%d", &n);
    for(int i=0;i<n;i++){
        scanf("%d", &arr[i]);
    }

    merge_sort(arr, 0, n-1);

    for(int i=0;i<n;i++){
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}
```

Practice
---
Below practices only test your skill about recursion, do not try to **AC** the prolem(but if you have so many time...), since those problem involves some advanced knowledge and it will cost so much time.

[d443. 10497 - Sweet Child Makes Trouble](https://zerojudge.tw/ShowProblem?problemid=d443)

[f168. m4a2-分配寶物(Treasure)](https://zerojudge.tw/ShowProblem?problemid=f168)

[北門街](https://zerojudge.tw/ShowProblem?problemid=b576) (recursion with no array can solve this problem, but exceed **TIME LIMIT** array can accerlerate it.)
