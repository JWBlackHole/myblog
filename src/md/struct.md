Structure
===

Introduction
---
In the **C programming language**, a struct (short for "structure") is a **user-defined data type** that allows you to group together variables of different data types under a single name. It enables you to create complex data structures to represent entities with multiple attributes.

Structure of Structure
---

```c=
// define struct
struct (Structure Name){
    type attribute1;
    type attribute2;
    ...
    ...
};

// declare variable of struct
struct (Structure Name) (Variable Name)
    
// access atttibutes
Variable.attribute1 = ...;
Variable.attribute2 = ...;
...
```

### Eg.
```c=
#include<stdio.h>
#include<string.h>

struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    // Declare a variable of type struct Person
    struct Person person1;

    // Access and assign values to the members of the struct
    strcpy(person1.name, "John");
    person1.age = 30;
    person1.height = 6.0;

    // Accessing and printing the values
    printf("Name: %s\n", person1.name);
    printf("Age: %d\n", person1.age);
    printf("Height: %.2f\n", person1.height);

    return 0;
}
```

hint:  
For the simplicity of declaration, we will define the struct like:
```c=
typedef struct _person_ {
    char name[50];
    int age;
    float height;
} Person;

// By doing so, we can declare variable like that:
int main(){
    Person person1;
    return 0;
}
```

Access by pointer:
If you have a pointer of certain struct variable, you can access attributes by these ways.
```c=
struct person *ptr = &person1;
// we want to access age
(*ptr).age = 10;
// or
ptr->age = 10;
```

### Practice

There are n animals in zoo, each animal has attributes: type, name, age, height, weight;
Input n, followed by n lines, each line includes a type, name, age , height, weight.
Please store these informations using **struct**.

eg.
input:
3
Tiger Leo 10 100 159
Rabbit Fluffy 2 20 8
Turtle Chicky 150 50 62


Linked List
---

A **linked list** is a linear data structure where elements, known as **nodes**, are linked using pointers. Each node contains two parts: data and a pointer (or reference) to the next node in the sequence

### Array v.s Linked List
![image](https://hackmd.io/_uploads/SJwK6Zbia.png)
![image](https://hackmd.io/_uploads/SJfwTWWsp.png)

#### Eg.

Input n, followd by n numbers.
please store it in linked list and print them out in order.
```c=
int main(){
    // we use linked_list record the head of the list
    struct node *linked_list = (struct node*)malloc(sizeof(struct node));
    linked_list->next = NULL;

    struct node *now_node = linked_list;

    int n;
    scanf("%d", &n);
    for(int i=0;i<n;i++){
        int num;
        scanf("%d", &num);

        // determine whether it is new linked list
        now_node->next = (struct node*) malloc(sizeof(struct node));
        now_node = now_node->next;

        now_node->next = NULL;
        now_node->num = num;
        // printf("%d ", now_node->num);
    }

    // insertion(linked_list, 2, 100);

    // deletion(linked_list, 4);

    // print out num in nodes
    now_node = linked_list;
    while(now_node != NULL){
        now_node = now_node->next;
        if(now_node) printf("%d ", now_node->num);
    }
    printf("\n");


    return 0;
}
```


### Insertion

Insert a element into  certain index

```c=
void insertion(struct node *linked_list, int index, int num){
    // find previous node
    struct node *now_node = linked_list;
    for(int i=0;i<index;i++){
        now_node = now_node->next;
    }

    struct node *new_node = (struct node*)malloc(sizeof(struct node));
    new_node->num = num;

    // struct node *ptr1 = now_node->next;
    // new_node->next = ptr1;
    new_node->next = now_node->next;
    now_node->next = new_node;
}
```

### Deletion

```c=
void deletion(struct node *linked_list, int index){
    struct node *now_node = linked_list;

    for(int i=0;i<index;i++){
        now_node = now_node->next;
    }

    struct node *temp_ptr = now_node->next;
    now_node->next = now_node->next->next;
    free(temp_ptr);
}
```

Cycle Linked List
---
```c=
struct node{
    int element;
    struct node *prev;
    struct node *next;
}
```


Double Linked List
---
```c=
struct node{
    int element;
    struct node *prev;
    struct node *next;
}
```

### Practice
[Reverse linked list](https://leetcode.cn/problems/reverse-linked-list/description/)   
[Merge Two linked list](https://leetcode.cn/problems/merge-two-sorted-lists/description/)   
[Middle of the linked list](https://leetcode.cn/problems/middle-of-the-linked-list/description/)

