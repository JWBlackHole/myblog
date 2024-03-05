指標 和 陣列 - Pointer & Array
===

### 硬體常識

CPU 修改、讀取、儲存資料需要透過**記憶體**
通常記憶體位置有8bytes(64bits)
![image](https://hackmd.io/_uploads/Skp0U5Ywa.png)


### 變數

用來儲存資料的物件叫**變數**
宣告變數需要消耗記憶體空間，並且變數會有自己的記憶體地址(memory address)

```c=
#include<stdio.h>

int main(){
    int a = 10;   // 4 bytes
    char c = 'i'; // 1 byte
    int arr[5];
    for(int i=0;i<5;i++){
        arr[i] = i;
    }
        
    printf("%d\n", a);
    printf("%c\n", c);
    for(int i=0;i<5;i++){
        printf("%d\n", arr[i]);
    }
    
    a = a + 10;
    printf("%d\n", a);
    
    return 0;
}
```
![截圖 2023-12-28 下午3.07.31](https://hackmd.io/_uploads/Sy4AR9cw6.png)

:::warning
問題：如何知道變數的位置？
:::


### 運算子: & and $*$ 

- &:單運算子，用在**變數**上，用來得到==變數的記憶體位置==(address of variable)
- $*$:單運算子，用在**記憶體位置**上，用來得到==記憶體位置內的值==(value at address)

ex. 取得記憶體位置
```c=
#include<stdio.h>

int main(){
    int a = 10;
    
    printf("a = %d\n", a);
    printf("address of a = %p\n", &a);
    printf("get value at %p = %d\n", &a, *(&a));
    
    return 0;
}
```
![截圖 2023-12-27 晚上11.43.48](https://hackmd.io/_uploads/SkRUITFP6.png)


:::warning
問題：有沒有特別的變數可以紀錄記憶體位置呢？
:::

### Pointer
**Pointer**：儲存變數在記憶體中的地址(memory address)

宣告: 
```c=
//指標： “資料型態 的 變數” 的 記憶體位置
資料型態 *指標變數

int a;
int *ptr1;

ptr1 = &a; //store address of "a" to "ptr1"

char c;
char *ptr2;

ptr2 = &c;
```

#### 結合 & 和 Pointer
- & 用來**得到**變數的記憶體位置
- Pointer 用來**儲存**記憶體位置

ex. 使用Pointer紀錄記憶體位置
```c=
#include<stdio.h>

int main(){
    int a = 10;
    int *ptr = &a;
    
    printf("a = %d, address of a = %p\n", a, ptr);
    return 0;    
}
```
![截圖 2023-12-28 下午2.08.14](https://hackmd.io/_uploads/SyzkW9qwa.png)



:::info
**Pointer**應用：傳址呼叫，Tree，排序，多維陣列，linked list...
有時也能加速並節省記憶體空間
:::


### 傳址呼叫（傳送記憶體位置給其他函式）
傳送==變數的記憶體位置==，讓變數能夠在函式中被修改。

ex. 傳值 vs 傳址
```c=
#include<stdio.h>

void func1(int a){
    a+=10;
    printf("In func1, a = %d\n", a);
}

void func2(int *a){
    (*a)+=10;
    printf("In func2, a = %d\n", *a);
}

int main(){
    int a = 10;

    func1(a);
    printf("After func1(a), a = %d\n", a);

    func2(&a);
    printf("After func2(&a), a = %d\n", a);

    return 0;
}
```

### 多層Pointer

#### Pointer 的 Pointer

:::info
變數 的 資料型態：這個變數是用來儲存什麼的
:::

ex. 使用Pointer紀錄記憶體位置2
```c=
//變數                   //資料型態

int a = 10;             // integer

int *ptr_int = &a;      // address for "int" variable

int **ptr1 = &ptr_int;  // address for "int *" variable

//...以此類推

printf("a = %d, addr of a = %p, addr of addr of a = %p\n", a, ptr_int, ptr1);

/*------------------------------------*/

char b = 'i';            // ???

char *ptr_char = &b;     // ???

char **ptr2 = &ptr_char; // ???
 ```
![截圖 2023-12-27 晚上11.04.12](https://hackmd.io/_uploads/SJ6ga3tDT.png)

:::success
Tips:
看最後一個*前面是什麼就是紀錄哪一種資料型態的address
可以將 "int *",  "char *" 當作一種資料型態
:::


### 陣列(Array)

#### malloc & free
malloc: 用來向記憶體索取空間(memory allocation)
free: 用來釋放記憶體空間(release memory)

用法：
```c=
指標 = malloc(空間大小);
```

#### 一維陣列

傳統做法：
```c=
#include<stdio.h>
#include<stdlib.h>

int main(){
    int arr[5];

    for(int i=0;i<5;i++){
        arr[i] = i;
    }
    
    printf("arr: ");
    for(int i=0;i<5;i++){
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("--------------------------\n");
    

    printf("arr = %p\n", arr); 
    // val of arr = &arr[0] = address of arr[0]
    printf("*arr = %d\n", *arr);
    
    return 0;
}
```

malloc 作法
```c=
#include<stdio.h>
#include<stdlib.h>

int main(){
    int *arr;
    arr = (int*)malloc(sizeof(int) * 5); // return a address for start of array

    for(int i=0;i<5;i++){
        arr[i] = i;
    }
    
    printf("arr: ");
    for(int i=0;i<5;i++){
        printf("%d ", arr[i]); // arr[i] = *(arr + i)
    }
    printf("\n");

    printf("--------------------------\n");
    
    printf("arr = %p\n", arr); 
    // val of arr2 = &arr2[0] = address of arr2[0];
    printf("*arr = %d\n", *arr);
    
    free(arr); // release allocated memory
    return 0;
}
```
![截圖 2023-12-28 下午4.00.57](https://hackmd.io/_uploads/Hkirosqwp.png)


#### 二維陣列

傳統作法:固定長寬

```c=
#include<stdio.h>

int main(){

    int l = 3, w = 4; // l = length, w = width
    int arr[100][100];

    for(int i=0;i<l;i++){
        for(int j=0;j<w;j++){
            arr[i][j] = i * w + j;
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```




Version 1: 先第一層(*)，再第二層(**)
![image](https://hackmd.io/_uploads/HJT5kI2wa.png)

```c=
#include<stdio.h>
#include<stdlib.h>

int main(){
    int **d2; // 2 dimension
    int *d1;  // 1 dimension

    int l = 3, w = 4; // length, width
    
    // allocation
    d1 = (int*)malloc(sizeof(int) * l * w);
    d2 = (int**)malloc(sizeof(int *) * l);
    
    for(int i=0;i<l;i++){
        d2[i] = d1 + i*w; // d1 + i*w = &(d1[i*w])
    }

    for(int i=0;i<l;i++){
        for(int j=0;j<w;j++){
            d2[i][j] = i*w+j;
            printf("%d ", d2[i][j]);
        }
        printf("\n");
    }
    
    // release
    free(d1); 
    free(d2); 
    return 0;
}
```

Version 2: 先第二層(**)，再第一層(*)
![image](https://hackmd.io/_uploads/SkdLeIhP6.png)


```c=
#include<stdio.h>
#include<stdlib.h>

int main(){
    int **d2;

    int l = 3, w = 4; // length, width
    
    // allocation
    d2 = (int**)malloc(sizeof(int *) * l);
    for(int i=0;i<l;i++){
        d2[i] = (int*)malloc(sizeof(int) * w);
    }

    for(int i=0;i<l;i++){
        for(int j=0;j<w;j++){
            d2[i][j] = i*w+j;
            printf("%d ", d2[i][j]);
        }
        printf("\n");
    }

    // release
    for(int i=0;i<l;i++){
        free(d2[i]);
    }
    free(d2);

    return 0;
}
```


### Practice
1. 如何創造三維、四維或是以上維度的陣列？

2. 給定長(l)跟寬(w)，請分別使用以上兩種方法創造一個階梯狀的二維陣列。
ex. 假設 l = 5, w = 5
請製造出下圖（每個O代表一個位置）
O
OO
OOO
OOOO
OOOOO