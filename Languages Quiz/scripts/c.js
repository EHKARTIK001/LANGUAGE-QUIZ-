const questions = [
  {
      question: "C language is?",
      options: ["High-level language", "Low-level language", "Medium-level language", "None of these"],
      answer: "Medium-level language",
      explanation: "C is called a medium-level language because it combines features of both high-level and low-level languages.",
  },
  {
      question: "Who is the father of C language?",
      options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
      answer: "Dennis Ritchie",
      explanation: "Dennis Ritchie developed the C programming language at Bell Labs in the early 1970s.",
  },
  {
      question: "Which symbol is used to denote a preprocessor directive?",
      options: ["#", "$", "&", "%"],
      answer: "#",
      explanation: "The '#' symbol is used to define preprocessor directives like #include, #define, etc.",
  },
  {
      question: "What is the file extension for C programs?",
      options: [".java", ".py", ".c", ".txt"],
      answer: ".c",
      explanation: "C program files use the '.c' extension by convention.",
  },
  {
      question: "Which of the following is a valid variable name?",
      options: ["1variable", "_variable", "variable$", "None of these"],
      answer: "_variable",
      explanation: "In C, variable names cannot begin with a number or contain special symbols, but underscores are allowed.",
  },
  
    {
      "question": "Which of the following is used to define a constant in C?",
      "options": ["#define", "const", "constant", "define"],
      "answer": "#define",
      "explanation": "#define is used to define constants in C."
    },
    {
      "question": "What is the correct syntax to output 'Hello, World!' in C?",
      "options": ["printf('Hello, World!');", "echo 'Hello, World!';", "cout << 'Hello, World!';", "printf('Hello, World!');"],
      "answer": "printf('Hello, World!');",
      "explanation": "In C, the correct syntax to print text to the console is printf()."
    },
    {
      "question": "Which data type is used to store a single character in C?",
      "options": ["int", "char", "string", "float"],
      "answer": "char",
      "explanation": "The 'char' data type is used to store a single character in C."
    },
    {
      "question": "Which operator is used to access the value of a pointer in C?",
      "options": ["*", "&", "#", "%"],
      "answer": "*",
      "explanation": "The '*' operator is used to dereference a pointer and access the value it points to in C."
    },
    {
      "question": "What is the result of 5/2 in C?",
      "options": ["2.5", "2", "3", "Error"],
      "answer": "2",
      "explanation": "In C, when both operands are integers, the result of division is an integer, so 5/2 results in 2."
    },
    {
      "question": "What will be the output of the following code?\nint i = 3;\nif(i == 3)\n    printf('Hello');",
      "options": ["Hello", "Error", "Nothing", "undefined behavior"],
      "answer": "Hello",
      "explanation": "Since i == 3 is true, the printf statement will execute and 'Hello' will be printed."
    },
    {
      "question": "Which of the following is NOT a valid variable name in C?",
      "options": ["int_var", "_var", "1var", "var1"],
      "answer": "1var",
      "explanation": "Variable names in C cannot begin with a number, so '1var' is invalid."
    },
    {
      "question": "What is the purpose of the 'break' statement in C?",
      "options": ["To stop the execution of the program", "To skip the current iteration of a loop", "To exit a loop or switch case", "None of these"],
      "answer": "To exit a loop or switch case",
      "explanation": "The 'break' statement is used to terminate a loop or switch statement prematurely in C."
    },
    {
      "question": "Which function is used to dynamically allocate memory in C?",
      "options": ["malloc()", "free()", "calloc()", "realloc()"],
      "answer": "malloc()",
      "explanation": "The 'malloc()' function is used to dynamically allocate memory in C."
    },
    
      {
        "question": "What is the size of a pointer in a 64-bit system in C?",
        "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        "answer": "8 bytes",
        "explanation": "On a 64-bit system, the size of a pointer is typically 8 bytes."
      },
      {
        "question": "Which of the following is the correct way to declare a function in C?",
        "options": ["function int add(int a, int b);", "int add(int a, int b);", "add(int a, int b) int;", "int add(int a, b);"],
        "answer": "int add(int a, int b);",
        "explanation": "The correct syntax for declaring a function in C is 'return_type function_name(parameter_types);'."
      },
      {
        "question": "What does the 'sizeof' operator do in C?",
        "options": ["Returns the size of a variable", "Returns the address of a variable", "Returns the value of a variable", "None of these"],
        "answer": "Returns the size of a variable",
        "explanation": "The 'sizeof' operator in C is used to determine the size of a variable or data type in bytes."
      },
      {
        "question": "What is the output of the following code?\nint x = 5, y = 10;\nprintf('%d', x > y ? x : y);",
        "options": ["5", "10", "Error", "Undefined behavior"],
        "answer": "10",
        "explanation": "The ternary operator (x > y ? x : y) checks if x is greater than y. Since x is not greater than y, the result will be 'y' which is 10."
      },
      {
        "question": "What is the default return type of a function in C if no return type is specified?",
        "options": ["void", "int", "char", "Error"],
        "answer": "Error",
        "explanation": "In C, if a return type is not specified, it results in an error. Functions must have a defined return type."
      },
      {
        "question": "What is the purpose of the 'static' keyword in C?",
        "options": ["Makes a variable global", "Makes a function visible to all files", "Preserves the value of a variable between function calls", "Makes a function private"],
        "answer": "Preserves the value of a variable between function calls",
        "explanation": "The 'static' keyword ensures that a variable retains its value between function calls, meaning it is initialized only once."
      },
      {
        "question": "What is the output of the following code?\nint i = 5;\nwhile(i > 0)\n    printf('%d', --i);",
        "options": ["54321", "12345", "01234", "Error"],
        "answer": "4321",
        "explanation": "The 'while' loop prints the decremented value of i at each iteration. It starts from 4 and prints 4321."
      },
      {
        "question": "Which of the following will generate a compile-time error in C?",
        "options": ["int x = 10;", "int *x = NULL;", "int x = 'A';", "char x = 'A';"],
        "answer": "int x = 'A';",
        "explanation": "In C, 'A' is a character literal, which is of type char. Assigning it to an int without explicit casting would cause an error."
      },
      {
        "question": "How can you pass an array to a function in C?",
        "options": ["By passing the array's name", "By passing the address of the first element", "Both of the above", "None of these"],
        "answer": "Both of the above",
        "explanation": "In C, you can pass an array to a function either by passing the array's name or by passing the address of the first element."
      },
      {
        "question": "What does the 'exit()' function do in C?",
        "options": ["Exits the current function", "Exits the program", "Exits the current loop", "Stops the compiler"],
        "answer": "Exits the program",
        "explanation": "The 'exit()' function terminates the program and returns a status code to the operating system."
      },
      
        {
          "question": "What is the correct syntax to declare an array in C?",
          "options": ["int[] arr;", "int arr[];", "int arr(10);", "array int arr[10];"],
          "answer": "int arr[];",
          "explanation": "The correct syntax to declare an array in C is 'int arr[];' or 'int arr[10];'."
        },
        {
          "question": "What will the following code print?\nint x = 10;\nprintf('%d', ++x);",
          "options": ["9", "10", "11", "Error"],
          "answer": "11",
          "explanation": "The '++x' is a pre-increment operator, so the value of x is incremented before being printed, resulting in 11."
        },
        {
          "question": "What is the correct syntax for a for loop in C?",
          "options": ["for(i = 0; i < 10; i++)", "for(i < 10; i++)", "for(i = 0; i < 10)", "for i = 0 to 10"],
          "answer": "for(i = 0; i < 10; i++)",
          "explanation": "The correct syntax for a for loop in C is 'for(i = 0; i < 10; i++)'."
        },
        {
          "question": "What is the result of the expression 10 % 3 in C?",
          "options": ["3", "1", "0", "10"],
          "answer": "1",
          "explanation": "The '%' operator in C calculates the remainder. 10 % 3 equals 1."
        },
        {
          "question": "Which of the following is a correct pointer declaration in C?",
          "options": ["int* ptr;", "int ptr*;", "ptr int;", "pointer int*;"],
          "answer": "int* ptr;",
          "explanation": "The correct syntax to declare a pointer in C is 'int* ptr;'."
        },
        {
          "question": "What does the 'continue' statement do in C?",
          "options": ["Exits the current loop", "Exits the program", "Skips the current iteration of a loop", "None of these"],
          "answer": "Skips the current iteration of a loop",
          "explanation": "The 'continue' statement in C skips the rest of the current loop iteration and moves to the next iteration."
        },
        {
          "question": "Which of the following is used to end a function in C?",
          "options": ["exit()", "return", "stop", "finish"],
          "answer": "return",
          "explanation": "In C, the 'return' statement is used to exit from a function and optionally return a value."
        },
        {
          "question": "Which function is used to find the length of a string in C?",
          "options": ["strlen()", "strlength()", "length()", "size()"],
          "answer": "strlen()",
          "explanation": "The 'strlen()' function is used to find the length of a string in C."
        },
        {
          "question": "What will be the output of the following code?\nint i = 0;\nwhile(i < 5)\n    printf('%d', ++i);",
          "options": ["12345", "01234", "54321", "Error"],
          "answer": "12345",
          "explanation": "The 'while' loop increments i before printing, so the output will be '12345'."
        },
        {
          "question": "What is the size of an int in C on a 32-bit system?",
          "options": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
          "answer": "4 bytes",
          "explanation": "On a 32-bit system, the size of an int is typically 4 bytes."
        },
        {
          "question": "What is the correct way to open a file in C for reading?",
          "options": ["fopen('file.txt', 'r')", "open('file.txt', 'read')", "file_open('file.txt', 'r')", "fread('file.txt')"],
          "answer": "fopen('file.txt', 'r')",
          "explanation": "In C, the correct way to open a file for reading is using 'fopen('file.txt', 'r')'."
        },
        {
          "question": "Which of the following is the correct way to declare a function pointer in C?",
          "options": ["int (*ptr)(int);", "int *ptr(int);", "int ptr(int*);", "ptr int(int);"],
          "answer": "int (*ptr)(int);",
          "explanation": "The correct syntax to declare a function pointer in C is 'int (*ptr)(int);'."
        },
        {
          "question": "What is the purpose of the 'sizeof' operator in C?",
          "options": ["Calculates the size of a variable", "Returns the value of a variable", "Returns the address of a variable", "None of these"],
          "answer": "Calculates the size of a variable",
          "explanation": "The 'sizeof' operator in C returns the size of a variable or data type in bytes."
        },
        {
          "question": "What is the correct way to declare a constant in C?",
          "options": ["const int x = 10;", "#define x 10", "constant int x = 10;", "int const x = 10;"],
          "answer": "const int x = 10;",
          "explanation": "To declare a constant in C, use 'const' before the variable declaration: 'const int x = 10;'."
        },
        {
          "question": "What will the following code output?\nint x = 5;\nint y = 10;\nif(x > y) printf('x'); else printf('y');",
          "options": ["x", "y", "5", "10"],
          "answer": "y",
          "explanation": "Since x is not greater than y, the 'else' block will execute, and 'y' will be printed."
        },
        {
          "question": "What is the correct way to declare a structure in C?",
          "options": ["struct Person {int age;};", "Person struct {int age;};", "struct {int age;} Person;", "struct Person int age;"],
              "answer": "struct Person {int age;};",
              "explanation": "In C, the correct way to declare a structure is 'struct Person {int age;};'."
        },
        {
          "question": "What will be the result of the expression 10 / 3 in C?",
          "options": ["3.33", "3", "2", "Error"],
          "answer": "3",
          "explanation": "In C, the result of dividing two integers is also an integer, so 10 / 3 equals 3."
        },
        {
          "question": "What does the 'free()' function do in C?",
          "options": ["Deallocates memory", "Allocates memory", "Returns memory to the operating system", "None of these"],
          "answer": "Deallocates memory",
          "explanation": "The 'free()' function is used to deallocate memory that was previously allocated using malloc() or calloc()."
        },
        {
          "question": "Which header file is required to use the 'printf' function in C?",
          "options": ["stdio.h", "stdlib.h", "string.h", "math.h"],
          "answer": "stdio.h",
          "explanation": "'stdio.h' is the header file required to use input and output functions such as 'printf()' in C."
        },
        {
          "question": "What is the result of the expression 10 > 5 in C?",
          "options": ["true", "false", "1", "0"],
          "answer": "1",
          "explanation": "In C, a comparison expression like 10 > 5 results in a boolean value, where true is represented as 1."
        },
        
          {
            "question": "Which of the following is NOT a valid operator in C?",
            "options": ["==", "&&", "><", "!="],
            "answer": "><",
            "explanation": "The '><' operator is not a valid operator in C."
          },
          {
            "question": "Which of the following is used to read input from the user in C?",
            "options": ["scanf()", "input()", "read()", "get_input()"],
            "answer": "scanf()",
            "explanation": "The 'scanf()' function is used to take input from the user in C."
          },
          {
            "question": "What is the correct syntax to declare a pointer in C?",
            "options": ["int *ptr;", "int ptr*;", "ptr int*;", "int* ptr;"],
            "answer": "int *ptr;",
            "explanation": "The correct syntax to declare a pointer in C is 'int *ptr;'."
          },
          {
            "question": "What is the output of the following code?\nint i = 5;\nint j = 3;\nprintf('%d', i++ + ++j);",
            "options": ["8", "9", "7", "5"],
            "answer": "9",
            "explanation": "The expression i++ + ++j is evaluated as 5 + 4, resulting in 9."
          },
          {
            "question": "Which of the following is used to allocate memory dynamically for an array in C?",
            "options": ["malloc()", "calloc()", "free()", "realloc()"],
            "answer": "malloc()",
            "explanation": "'malloc()' is used to dynamically allocate memory for an array in C."
          },
          {
            "question": "What is the size of a float in C?",
            "options": ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            "answer": "4 bytes",
            "explanation": "In C, the size of a float is typically 4 bytes."
          },
          {
            "question": "Which of the following operators is used to compare two values in C?",
            "options": ["=", "==", "><", "=>"],
            "answer": "==",
            "explanation": "The '==' operator is used to compare two values for equality in C."
          },
          {
            "question": "Which of the following is used to terminate a loop in C?",
            "options": ["continue", "break", "exit", "return"],
            "answer": "break",
            "explanation": "'break' is used to exit a loop prematurely in C."
          },
          {
            "question": "Which function is used to copy one string to another in C?",
            "options": ["strdup()", "strcpy()", "copy()", "strcat()"],
            "answer": "strcpy()",
            "explanation": "'strcpy()' is used to copy one string to another in C."
          },
          {
            "question": "What does the following code snippet do?\nint arr[5] = {1, 2, 3, 4, 5};\nprintf('%d', arr[2]);",
            "options": ["Prints 1", "Prints 2", "Prints 3", "Prints 4"],
            "answer": "Prints 3",
            "explanation": "In C, arrays are 0-indexed. The element at index 2 in 'arr' is 3."
          },
          {
            "question": "What is the result of the expression 10 && 0 in C?",
            "options": ["1", "0", "true", "false"],
            "answer": "0",
            "explanation": "The '&&' operator is a logical AND. Since one of the operands is 0 (false), the result is 0 (false)."
          },
          {
            "question": "What is the result of the expression 'x = 5; x += 3;' in C?",
            "options": ["5", "3", "8", "Error"],
            "answer": "8",
            "explanation": "'x += 3;' adds 3 to the value of 'x', which is 5, resulting in 8."
          },
          {
            "question": "What is the correct way to declare a function prototype in C?",
            "options": ["int func();", "void func();", "func(int);", "int func(int);"],
            "answer": "int func(int);",
            "explanation": "The correct syntax for a function prototype in C is 'return_type function_name(parameter_types);'."
          },
          {
            "question": "What is the correct syntax for a 'do-while' loop in C?",
            "options": ["do { ... } while (condition);", "while (condition) { ... } do;", "do (condition) { ... }", "do while { ... }"],
            "answer": "do { ... } while (condition);",
            "explanation": "The correct syntax for a 'do-while' loop in C is 'do { ... } while (condition);'."
          },
          {
            "question": "Which function is used to find the first occurrence of a character in a string in C?",
            "options": ["strstr()", "strchr()", "index()", "find()"],
            "answer": "strchr()",
            "explanation": "'strchr()' is used to find the first occurrence of a character in a string in C."
          },
          {
            "question": "What is the result of the expression 10 == 10 in C?",
            "options": ["true", "false", "1", "0"],
            "answer": "1",
            "explanation": "In C, the expression '10 == 10' is true, and true is represented as 1."
          },
          {
            "question": "What does the 'strcat()' function do in C?",
            "options": ["Concatenates two strings", "Compares two strings", "Finds the length of a string", "Copies a string"],
            "answer": "Concatenates two strings",
            "explanation": "'strcat()' is used to concatenate (combine) two strings in C."
          },
          {
            "question": "What is the purpose of the 'void' keyword in C?",
            "options": ["To define a pointer", "To define a function that does not return a value", "To define an integer", "To define a character"],
            "answer": "To define a function that does not return a value",
            "explanation": "The 'void' keyword in C is used to specify that a function does not return any value."
          },
          {
            "question": "Which of the following is the correct syntax for a 'switch' statement in C?",
            "options": ["switch (x) { case 1: ... }", "switch (x) { 1: ... }", "switch (x) { if x == 1: ... }", "switch { case 1: ... }"],
            "answer": "switch (x) { case 1: ... }",
            "explanation": "The correct syntax for a 'switch' statement in C is 'switch (x) { case 1: ... }'."
          },
          {
            "question": "Which function is used to allocate memory for a specified number of elements in C?",
            "options": ["malloc()", "calloc()", "realloc()", "free()"],
            "answer": "calloc()",
            "explanation": "'calloc()' is used to allocate memory for a specified number of elements and initialize them to zero."
          },
          
            {
              "question": "What is the default return value of 'main' function in C if no return statement is provided?",
              "options": ["0", "1", "-1", "Error"],
              "answer": "0",
              "explanation": "If no return statement is provided, the default return value of 'main' is 0, which indicates successful execution."
            },
            {
              "question": "Which function is used to get the current time in C?",
              "options": ["time()", "date()", "get_time()", "clock()"],
              "answer": "time()",
              "explanation": "'time()' function is used to get the current time in C."
            },
            {
              "question": "Which of the following is the correct syntax for using 'while' loop in C?",
              "options": ["while (condition) { ... }", "while { condition } { ... }", "while condition { ... }", "while (condition) ;"],
              "answer": "while (condition) { ... }",
              "explanation": "The correct syntax for a 'while' loop in C is 'while (condition) { ... }'."
            },
            {
              "question": "Which of the following is a correct way to handle errors in C?",
              "options": ["return", "exit()", "assert()", "abort()"],
              "answer": "exit()",
              "explanation": "The 'exit()' function is used to terminate a program and can return an error code."
            },
            {
              "question": "What is the difference between 'break' and 'continue' statements in C?",
              "options": ["'break' exits a loop, 'continue' skips the current iteration", "'break' skips the current iteration, 'continue' exits the loop", "'break' terminates the program, 'continue' continues the program", "Both are used to exit a program"],
              "answer": "'break' exits a loop, 'continue' skips the current iteration",
              "explanation": "'break' terminates the loop entirely, while 'continue' skips the current iteration and continues with the next iteration."
            },
            {
              "question": "Which of the following operators is used for bitwise AND operation in C?",
              "options": ["&&", "&", "||", "|"],
              "answer": "&",
              "explanation": "'&' is the bitwise AND operator in C."
            },
            {
              "question": "Which of the following is the correct syntax for a 'for' loop in C?",
              "options": ["for(i = 0; i < 10; i++)", "for(i < 10; i++)", "for(i = 0; i < 10)", "for i = 0 to 10"],
              "answer": "for(i = 0; i < 10; i++)",
              "explanation": "The correct syntax for a 'for' loop in C is 'for(i = 0; i < 10; i++)'."
            },
            {
              "question": "What is the result of the expression 10 << 1 in C?",
              "options": ["20", "5", "15", "Error"],
              "answer": "20",
              "explanation": "The '<<' operator is the bitwise left shift. Shifting 10 (1010 in binary) one position left gives 20 (10100 in binary)."
            },
            {
              "question": "What is the output of the following code?\nint x = 5;\nif(x > 10) printf('Greater'); else printf('Lesser');",
              "options": ["Greater", "Lesser", "Error", "Nothing"],
              "answer": "Lesser",
              "explanation": "Since x is not greater than 10, the 'else' part of the statement will execute, and 'Lesser' will be printed."
            },
            {
              "question": "Which of the following function returns the number of characters in a string in C?",
              "options": ["strlen()", "size()", "count()", "string_length()"],
              "answer": "strlen()",
              "explanation": "'strlen()' is used to find the length of a string in C."
            },
            {
              "question": "Which of the following is a correct syntax to declare a pointer to an array in C?",
              "options": ["int *arr[];", "int arr*[];", "int* arr[];", "int arr*[];"],
              "answer": "int* arr[];",
              "explanation": "The correct syntax to declare a pointer to an array in C is 'int* arr[];'."
            },
            {
              "question": "What will the following code output?\nint a = 2;\nint b = 3;\nprintf('%d', a++ * ++b);",
              "options": ["5", "6", "7", "Error"],
              "answer": "6",
              "explanation": "The value of 'a++' is 2 (post-increment), and the value of '++b' is 4 (pre-increment), so the result is 2 * 4 = 6."
            },
            {
              "question": "What is the purpose of the 'typedef' keyword in C?",
              "options": ["To define a new data type", "To define a constant", "To define a variable", "To define a function"],
              "answer": "To define a new data type",
              "explanation": "'typedef' is used to define a new name for an existing data type in C."
            },
            {
              "question": "What is the correct way to declare a dynamic array in C?",
              "options": ["int *arr = malloc(sizeof(int) * 10);", "int arr = malloc(10);", "int arr[10];", "malloc(int arr);"],
              "answer": "int *arr = malloc(sizeof(int) * 10);",
              "explanation": "To declare a dynamic array, memory must be allocated using 'malloc()', specifying the size of the array."
            },
            {
              "question": "What will be the output of the following code?\nint x = 5;\nint y = 10;\nif(x == y) printf('Equal'); else printf('Not Equal');",
              "options": ["Equal", "Not Equal", "Error", "Nothing"],
              "answer": "Not Equal",
              "explanation": "Since x is not equal to y, the 'else' block will execute, and 'Not Equal' will be printed."
            },
            {
              "question": "What does the 'memset()' function do in C?",
              "options": ["Copies a block of memory", "Sets memory to a specified value", "Allocates memory", "Frees allocated memory"],
              "answer": "Sets memory to a specified value",
              "explanation": "'memset()' is used to set a block of memory to a specified value."
            },
            {
              "question": "What is the purpose of the 'return' keyword in a function?",
              "options": ["To exit from a function", "To pass a value back to the caller", "To start the function", "To allocate memory"],
              "answer": "To pass a value back to the caller",
              "explanation": "The 'return' keyword is used to exit from a function and return a value to the caller."
            },
            {
              "question": "What does the 'strtok()' function do in C?",
              "options": ["Tokenizes a string", "Copies a string", "Concatenates two strings", "Finds a substring"],
              "answer": "Tokenizes a string",
              "explanation": "'strtok()' is used to split a string into tokens based on a delimiter."
            },
            {
              "question": "What will the following code output?\nint arr[] = {1, 2, 3, 4, 5};\nprintf('%d', arr[3]);",
              "options": ["1", "2", "3", "4"],
              "answer": "4",
              "explanation": "Arrays in C are 0-indexed. The element at index 3 in 'arr' is 4."
            },
              {
                "question": "Which of the following is used to allocate memory for an array of multiple elements in C?",
                "options": ["malloc()", "calloc()", "realloc()", "free()"],
                "answer": "calloc()",
                "explanation": "'calloc()' is used to allocate memory for multiple elements and initializes them to zero."
              },
              {
                "question": "Which of the following is true about the 'static' keyword in C?",
                "options": ["It creates a local variable that retains its value between function calls", "It creates a global variable", "It increases the size of the variable", "It is used to define a constant"],
                "answer": "It creates a local variable that retains its value between function calls",
                "explanation": "'static' makes a local variable retain its value between function calls and keeps it hidden from other functions."
              },
              {
                "question": "What is the output of the following code?\nint a = 10;\nint b = 20;\nprintf('%d', a > b);",
                "options": ["1", "0", "Error", "Nothing"],
                "answer": "0",
                "explanation": "The expression 'a > b' is false, so the result is 0 (false)."
              },
              {
                "question": "What is the result of the following code?\nint x = 5;\nint y = 10;\nif(x == 5 && y == 10) printf('True'); else printf('False');",
                "options": ["True", "False", "Error", "Nothing"],
                "answer": "True",
                "explanation": "The expression 'x == 5 && y == 10' is true, so 'True' will be printed."
              },
              {
                "question": "Which of the following functions is used to get the absolute value of a number in C?",
                "options": ["abs()", "fabs()", "sqrt()", "fabs()"],
                "answer": "abs()",
                "explanation": "'abs()' is used to get the absolute value of an integer in C."
              },
              {
                "question": "What is the purpose of the 'continue' statement in a loop?",
                "options": ["It terminates the loop", "It skips the current iteration of the loop", "It returns from the function", "It jumps to the next case in a switch statement"],
                "answer": "It skips the current iteration of the loop",
                "explanation": "'continue' skips the current iteration of the loop and moves to the next one."
              },
              {
                "question": "What is the correct way to pass an array to a function in C?",
                "options": ["array[]", "array[5]", "array*", "int[]"],
                "answer": "array[]",
                "explanation": "In C, arrays are passed to functions by specifying the array name followed by '[]'."
              },
              {
                "question": "What is the default value of an uninitialized variable in C?",
                "options": ["0", "undefined", "garbage value", "NULL"],
                "answer": "garbage value",
                "explanation": "An uninitialized variable in C will contain a garbage value, which is unpredictable."
              },
              {
                "question": "Which of the following is used to handle variable length arguments in a function?",
                "options": ["stdarg.h", "stdio.h", "stdlib.h", "string.h"],
                "answer": "stdarg.h",
                "explanation": "The 'stdarg.h' header file is used to handle functions with variable-length arguments."
              },
              {
                "question": "Which of the following is a correct declaration for a structure in C?",
                "options": ["struct person { int age; char name[20]; };", "struct person { int age, char name[20]; }", "structure person { int age; char name[20]; }", "struct { int age; char name[20]; } person;"],
                "answer": "struct person { int age; char name[20]; };",
                "explanation": "The correct syntax for declaring a structure in C is 'struct <name> { ... };'."
              },
              {
                "question": "Which of the following can be used to get a line of input from the user in C?",
                "options": ["scanf()", "fgets()", "getchar()", "gets()"],
                "answer": "fgets()",
                "explanation": "'fgets()' is safer and can be used to get a line of input from the user in C."
              },
              {
                "question": "Which of the following is the correct way to print a string using 'printf' in C?",
                "options": ["printf('%s', string);", "printf('%d', string);", "printf('%c', string);", "printf(string);"],
                "answer": "printf('%s', string);",
                "explanation": "The correct syntax to print a string in C is 'printf('%s', string);'."
              },
              {
                "question": "What is the output of the following code?\nint x = 10;\nint y = 20;\nprintf('%d', x < y);",
                "options": ["1", "0", "10", "20"],
                "answer": "1",
                "explanation": "The expression 'x < y' is true, so the result is 1 (true)."
              },
              {
                "question": "What is the purpose of the 'void' keyword when used as a return type in C?",
                "options": ["It defines a function that does not return any value", "It defines a function that returns a pointer", "It defines a function with no parameters", "It defines a function with an integer return type"],
                "answer": "It defines a function that does not return any value",
                "explanation": "The 'void' return type indicates that the function does not return any value."
              },
              {
                "question": "What is the correct way to allocate memory for an array of 5 integers in C?",
                "options": ["int *arr = malloc(5 * sizeof(int));", "int *arr = malloc(5);", "int arr = malloc(sizeof(int) * 5);", "int arr[] = malloc(5 * sizeof(int));"],
                "answer": "int *arr = malloc(5 * sizeof(int));",
                "explanation": "To allocate memory dynamically for an array of integers, the correct syntax is 'malloc(5 * sizeof(int));'."
              },
              {
                "question": "Which of the following is true about the 'sizeof' operator in C?",
                "options": ["It returns the size of a data type or variable", "It returns the address of a variable", "It is used for dynamic memory allocation", "It is used to get the value of a variable"],
                "answer": "It returns the size of a data type or variable",
                "explanation": "'sizeof' is used to determine the size of a data type or variable in bytes."
              },
              {
                "question": "What is the result of the following code?\nint x = 10;\nint y = 3;\nprintf('%d', x % y);",
                "options": ["1", "3", "10", "0"],
                "answer": "1",
                "explanation": "The '%' operator returns the remainder of division. 10 % 3 equals 1."
              },
              {
                "question": "What is the correct way to define a constant in C?",
                "options": ["const int x = 5;", "#define x 5", "define const int x = 5;", "int const x = 5;"],
                "answer": "#define x 5",
                "explanation": "#define is used to define constants in C. 'const' is used for defining constant variables."
              },
              {
                "question": "Which function is used to find the largest integer less than or equal to a given number in C?",
                "options": ["floor()", "ceil()", "round()", "fabs()"],
                "answer": "floor()",
                "explanation": "'floor()' returns the largest integer less than or equal to a given number."
              },
              {
                "question": "Which of the following is a way to define a constant pointer in C?",
                "options": ["int *const ptr;", "const int *ptr;", "int const ptr;", "const int ptr;"],
                "answer": "int *const ptr;",
                "explanation": "A constant pointer is defined as 'int *const ptr;'. This means the pointer cannot be reassigned, but the value it points to can be changed."
              },
              
                {
                  "question": "What is the correct syntax for declaring a function pointer in C?",
                  "options": ["int (*f)();", "int *f();", "int f();", "(*int) f();"],
                  "answer": "int (*f)();",
                  "explanation": "The correct syntax to declare a function pointer in C is 'int (*f)();'."
                },
                {
                  "question": "What is the output of the following code?\nint arr[] = {1, 2, 3, 4};\nprintf('%d', arr[2]);",
                  "options": ["3", "4", "2", "1"],
                  "answer": "3",
                  "explanation": "Arrays in C are 0-indexed. So, the element at index 2 in 'arr' is 3."
                },
                {
                  "question": "Which of the following is used to handle errors in C?",
                  "options": ["assert()", "exit()", "abort()", "all of the above"],
                  "answer": "all of the above",
                  "explanation": "All of the mentioned functions can be used to handle errors in C. 'assert()' checks for assertions, 'exit()' terminates the program, and 'abort()' forcefully terminates the program."
                },
                {
                  "question": "Which of the following operators is used for bitwise OR operation in C?",
                  "options": ["&", "|", "^", "~"],
                  "answer": "|",
                  "explanation": "'|' is the bitwise OR operator in C."
                },
                {
                  "question": "What will be the output of the following code?\nint a = 5;\nint b = 2;\nprintf('%d', a / b);",
                  "options": ["2", "2.5", "3", "Error"],
                  "answer": "2",
                  "explanation": "In C, dividing two integers results in integer division, so the result will be 2 (the fractional part is discarded)."
                },
                {
                  "question": "Which function is used to allocate memory dynamically in C?",
                  "options": ["malloc()", "calloc()", "realloc()", "free()"],
                  "answer": "malloc()",
                  "explanation": "'malloc()' is used to allocate a specified amount of memory dynamically in C."
                },
                {
                  "question": "What is the correct syntax for defining a macro in C?",
                  "options": ["#define MACRO_NAME value", "macro MACRO_NAME value", "define #MACRO_NAME value", "MACRO_NAME = value"],
                  "answer": "#define MACRO_NAME value",
                  "explanation": "The correct syntax for defining a macro in C is '#define MACRO_NAME value'."
                },
                {
                  "question": "Which of the following header files is required to use the 'printf' function in C?",
                  "options": ["stdio.h", "stdlib.h", "string.h", "math.h"],
                  "answer": "stdio.h",
                  "explanation": "'stdio.h' header file is required to use input and output functions such as 'printf'."
                },
                {
                  "question": "What does the 'sizeof' operator return in C?",
                  "options": ["The size of the data type", "The address of the variable", "The value of the variable", "The size of the array"],
                  "answer": "The size of the data type",
                  "explanation": "'sizeof' returns the size of a data type or a variable in bytes."
                },
                {
                  "question": "What is the output of the following code?\nint a = 10;\nint b = 20;\nint c = 30;\nprintf('%d', a + b * c);",
                  "options": ["40", "620", "630", "Error"],
                  "answer": "630",
                  "explanation": "According to operator precedence, multiplication happens first, so 'b * c' is 600, and then 'a + 600' gives 630."
                },
                {
                  "question": "What is the use of the 'void' data type in C?",
                  "options": ["To define a function with no parameters", "To define a function with no return type", "To define a function that returns a pointer", "To define a function with integer return type"],
                  "answer": "To define a function with no return type",
                  "explanation": "'void' is used when a function does not return any value."
                },
                {
                  "question": "What will the following code output?\nint x = 10;\nint y = 5;\nif(x == 10 || y == 6) printf('True'); else printf('False');",
                  "options": ["True", "False", "Error", "Nothing"],
                  "answer": "True",
                  "explanation": "The '||' (logical OR) operator returns true if any of the conditions are true. Since 'x == 10' is true, 'True' will be printed."
                },
                {
                  "question": "Which of the following functions is used to convert a string to an integer in C?",
                  "options": ["atoi()", "itoa()", "strtol()", "all of the above"],
                  "answer": "atoi()",
                  "explanation": "'atoi()' is used to convert a string to an integer in C."
                },
                {
                  "question": "Which of the following is used to terminate the program immediately in C?",
                  "options": ["exit()", "return", "break", "continue"],
                  "answer": "exit()",
                  "explanation": "'exit()' terminates the program immediately."
                },
                {
                  "question": "What is the correct way to declare an array of 10 integers in C?",
                  "options": ["int arr[10];", "int arr = [10];", "array int[10];", "int[10] arr;"],
                  "answer": "int arr[10];",
                  "explanation": "The correct syntax to declare an array in C is 'int arr[10];'."
                },
                {
                  "question": "What is the result of the following code?\nint a = 10;\nint b = 20;\nif(a != b) printf('Not equal'); else printf('Equal');",
                  "options": ["Not equal", "Equal", "Error", "Nothing"],
                  "answer": "Not equal",
                  "explanation": "Since a is not equal to b, the condition 'a != b' is true, so 'Not equal' will be printed."
                },
                {
                  "question": "Which function is used to compare two strings in C?",
                  "options": ["strcmp()", "strcomp()", "compare()", "strncmp()"],
                  "answer": "strcmp()",
                  "explanation": "'strcmp()' is used to compare two strings in C."
                },
                {
                  "question": "What will the following code output?\nint a = 10;\nint b = 3;\nprintf('%d', a % b);",
                  "options": ["1", "2", "3", "10"],
                  "answer": "1",
                  "explanation": "The '%' operator calculates the remainder of the division. 10 % 3 is 1."
                },
                {
                  "question": "What is the difference between '==' and '=' operators in C?",
                  "options": ["'==' is for assignment, '=' is for comparison", "'==' is for comparison, '=' is for assignment", "'==' and '=' have the same functionality", "'==' is used in strings and '=' in numbers"],
                  "answer": "'==' is for comparison, '=' is for assignment",
                  "explanation": "'==' is used for comparison, while '=' is used for assignment."
                }

              
              
          
        
      
  
];

let currentQuestionIndex = 0;
const userAnswers = new Array(questions.length).fill(null); // Track user answers

document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const nextButton = document.getElementById("next-btn");
  const prevButton = document.getElementById("prev-btn");
  const submitButton = document.getElementById("submit-btn");
  const questionGrid = document.querySelector(".question-grid");

  // Load questions into grid
  questions.forEach((_, index) => {
      const questionButton = document.createElement("button");
      questionButton.textContent = index + 1;
      questionButton.id = `question-${index}`;
      questionButton.addEventListener("click", () => loadQuestion(index));
      questionGrid.appendChild(questionButton);
  });

  // Function to load a question
  const loadQuestion = (index) => {
      currentQuestionIndex = index;
      const questionData = questions[index];
      questionContainer.innerHTML = `
          <p>${index + 1}. ${questionData.question}</p>
          <form id="quiz-form">
              ${questionData.options
                  .map(
                      (option) => `
                  <label>
                      <input type="radio" name="answer" value="${option}" ${
                          userAnswers[index] === option ? "checked" : ""
                      }>
                      ${option}
                  </label>
              `
                  )
                  .join("")}
          </form>
      `;

      highlightAnsweredQuestions();
  };

  // Highlight answered questions
  const highlightAnsweredQuestions = () => {
      questions.forEach((_, index) => {
          const questionButton = document.getElementById(`question-${index}`);
          if (userAnswers[index] !== null) {
              questionButton.style.backgroundColor = "#28a745"; // Green for answered
              questionButton.style.color = "#fff";
          } else {
              questionButton.style.backgroundColor = "#e0e0e0"; // Default for unanswered
              questionButton.style.color = "#333";
          }
      });
  };

  // Navigation buttons
  nextButton.addEventListener("click", () => {
      saveUserAnswer();
      if (currentQuestionIndex < questions.length - 1) {
          loadQuestion(currentQuestionIndex + 1);
      }
  });

  prevButton.addEventListener("click", () => {
      saveUserAnswer();
      if (currentQuestionIndex > 0) {
          loadQuestion(currentQuestionIndex - 1);
      }
  });

  // Save user's selected answer
  const saveUserAnswer = () => {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (selectedOption) {
          userAnswers[currentQuestionIndex] = selectedOption.value;
      }
  };

  submitButton.addEventListener("click", () => {
    saveUserAnswer(); // Ensure the last answer is saved

    // Prepare results to store
    const results = questions.map((question, index) => {
        const userAnswer = userAnswers[index] || "No answer";
        const isCorrect = userAnswer === question.answer;
        return {
            question: question.question,
            userAnswer,
            correctAnswer: question.answer,
            explanation: question.explanation,
            isCorrect,
        };
    });

    // Save results in localStorage
    localStorage.setItem("quizResults", JSON.stringify(results));

    // Redirect to the results page
    window.location.href = "../result/result.html";
});


  // Load the first question initially
  loadQuestion(0);
});
