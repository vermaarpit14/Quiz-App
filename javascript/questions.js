const questions = [
  {
    category: "C Programming",
    questions: [
      {
        question:
          "What does `sizeof('a')` return in a C implementation where int is 4 bytes?",
        options: ["1", "2", "4", "Implementation defined"],
        correctAnswer: 2,
      },
      {
        question:
          "What is the strict aliasing rule violation in: `float f = 3.14; int i = *(int*)&f;`?",
        options: [
          "No violation",
          "Violation - cannot alias float as int",
          "Violation - needs union",
          "Violation - must use memcpy",
        ],
        correctAnswer: 1,
      },
      {
        question:
          'What is the output of: `printf("%d", (int)((float)0.1 + (float)0.2 == 0.3));`',
        options: ["0", "1", "Undefined", "Compiler dependent"],
        correctAnswer: 0,
      },
      {
        question: "Which is NOT a sequence point in C?",
        options: [
          "End of full expression",
          "Function call after args evaluated",
          "First operand of && evaluated",
          "Assignment operator",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the value of `x` after: `int x = (1,2,3);`?",
        options: ["1", "2", "3", "Compile error"],
        correctAnswer: 2,
      },
      {
        question:
          'What is the output of: `char s[] = "Hello"; printf("%zu", sizeof(s));`',
        options: ["5", "6", "Size of pointer", "Undefined"],
        correctAnswer: 1,
      },
      {
        question:
          "Which alignment guarantee does malloc() provide in standard C?",
        options: [
          "1 byte",
          "Max alignment for any type",
          "8 bytes",
          "Implementation defined",
        ],
        correctAnswer: 1,
      },
      {
        question:
          'What is the output of: `int a[5] = {1,2,3}; printf("%d", a[4]);`',
        options: ["0", "Garbage value", "3", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What happens when you free() a NULL pointer?",
        options: [
          "Segmentation fault",
          "Memory leak",
          "No effect",
          "Undefined behavior",
        ],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", -1 >> 1);`',
        options: ["0", "-1", "Implementation defined", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the type of string literals like "Hello" in C?',
        options: ["char*", "const char*", "char[]", "Implementation defined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `int x = 5; printf("%d", x + ++x);`',
        options: ["11", "12", "Undefined behavior", "Compiler dependent"],
        correctAnswer: 2,
      },
      {
        question:
          "Which is NOT a valid way to declare a function pointer to `int foo(char*)`?",
        options: [
          "int (*fp)(char*)",
          "int *fp(char*)",
          "int (fp*)(char*)",
          "typedef int (*fptr)(char*); fptr fp",
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", !!5);`',
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "What is the strict aliasing rule exception?",
        options: ["char*", "void*", "Unions", "All of the above"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(main));`',
        options: ["1", "4", "8", "Compile error"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the value of `x` after: `int x = 1 << 32;` on 32-bit system?",
        options: ["0", "1", "Undefined", "Implementation defined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 < 2 < 3);`',
        options: ["0", "1", "True", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid use of restrict qualifier?",
        options: [
          "int* restrict p",
          "int restrict *p",
          "int (* restrict p)[]",
          "void foo(int* restrict p)",
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 5 && 2);`',
        options: ["0", "1", "2", "5"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of `x` after: `int x = 3.5 + 2;`",
        options: ["5", "5.5", "Undefined", "Implementation defined"],
        correctAnswer: 0,
      },
      {
        question:
          'What is the output of: `printf("%d", ~5);` assuming 32-bit int',
        options: ["-6", "5", "10", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "Which is NOT a valid pointer declaration?",
        options: ["int *p;", "int* p;", "int p*;", "int (*p);"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 ? 0 ? 2 : 3 : 4);`',
        options: ["0", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question: "What is the strict aliasing rule in C?",
        options: [
          "No two pointers of different types can alias",
          "No pointer can alias another pointer",
          "Objects of different types must not alias",
          "Pointers must be properly aligned",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the output of: `printf(\"%d\", sizeof('\\0'));`",
        options: ["1", "2", "4", "Implementation defined"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of `x` after: `int x = 5 / 2;`",
        options: ["2.5", "2", "3", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 5 || 0);`',
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid way to pass an array to a function?",
        options: [
          "void func(int arr[])",
          "void func(int *arr)",
          "void func(int arr[5])",
          "void func(int arr)",
        ],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", 1 == 1 == 1);`',
        options: ["0", "1", "True", "Compilation error"],
        correctAnswer: 0,
      },
      {
        question: "What does `volatile` keyword indicate?",
        options: [
          "Variable may change unexpectedly",
          "Variable is constant",
          "Variable is stored in RAM",
          "Variable is optimized by compiler",
        ],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(void));`',
        options: ["0", "1", "Undefined", "Compiler error"],
        correctAnswer: 3,
      },
      {
        question: "Which is NOT a valid C preprocessor directive?",
        options: ["#include", "#define", "#ifdef", "#function"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", 10 << 2);`',
        options: ["10", "20", "40", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to declare a function pointer?",
        options: [
          "int (*func)();",
          "int *func();",
          "int func*();",
          "int (func)();",
        ],
        correctAnswer: 0,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(struct {char a; int b;}));` on 32-bit system',
        options: ["5", "6", "8", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", !5);`',
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 0,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(int(*)[10]));` on 64-bit system',
        options: ["4", "8", "10", "40"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid C keyword?",
        options: ["const", "volatile", "friend", "restrict"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of: `printf(\"%d\", 5 + 'A');`",
        options: ["5A", "70", "Error", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "What happens if you free a pointer twice?",
        options: [
          "No effect",
          "Undefined behavior",
          "Memory leak",
          "Compiler error",
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 3.5 + 2);`',
        options: ["5", "5.5", "Undefined", "Compilation error"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `int x = 5; printf("%d", x & ~x);`',
        options: ["0", "5", "1", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", -1 >> 1);`',
        options: ["0", "-1", "Implementation defined", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", !!5);`',
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 ? 0 ? 2 : 3 : 4);`',
        options: ["0", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question:
          'What is the output of: `int a = 1, b = 2, c = 3; printf("%d", a += b += c);`',
        options: ["6", "5", "Undefined", "Compiler error"],
        correctAnswer: 0,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1L));` on 64-bit system',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof("Hello"));`',
        options: ["5", "6", "8", "Compiler dependent"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 << 1 << 1 << 1);`',
        options: ["1", "4", "8", "16"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", 1 && 2 || 0);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 | 2 & 3);`',
        options: ["0", "1", "3", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 + 2 * 3 / 4);`',
        options: ["1", "2", "3", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(int[10]));`',
        options: ["4", "8", "40", "Compiler dependent"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1.5 && 2.5);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 < 2 ? 3 : 4);`',
        options: ["1", "2", "3", "4"],
        correctAnswer: 3,
      },
      {
        question: "What is the correct way to start a C program?",
        options: ["start()", "main()", "begin()", "program()"],
        correctAnswer: 1,
      },
      {
        question: "Which symbol is used for single-line comments in C?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of `printf("Hello");`?',
        options: ["Hello", '"Hello"', "Error", "Nothing"],
        correctAnswer: 0,
      },
      {
        question: "Which data type is used for whole numbers?",
        options: ["float", "char", "int", "double"],
        correctAnswer: 2,
      },
      {
        question: "What does `scanf()` do?",
        options: [
          "Prints output",
          "Reads input",
          "Calculates values",
          "Creates files",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for addition?",
        options: ["-", "+", "*", "/"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare an integer variable?",
        options: ["int x;", "integer x;", "x = int;", "var x int;"],
        correctAnswer: 0,
      },
      {
        question: "Which header file is needed for `printf()`?",
        options: ["<math.h>", "<string.h>", "<stdio.h>", "<stdlib.h>"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct `if` statement syntax?",
        options: [
          "if x == 1 {}",
          "if (x == 1) {}",
          "if [x == 1] {}",
          "if {x == 1}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "if"],
        correctAnswer: 2,
      },
      {
        question: "What does `\\n` represent?",
        options: ["Tab", "New line", "Backslash", "Quote"],
        correctAnswer: 1,
      },
      {
        question: "What is the size of `int` on most 32-bit systems?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        correctAnswer: 2,
      },
      {
        question: "Which is NOT a valid variable name?",
        options: ["myVar", "_var", "123var", "var123"],
        correctAnswer: 2,
      },
      {
        question: "What is the modulus operator?",
        options: ["%", "&", "#", "$"],
        correctAnswer: 0,
      },
      {
        question: "Which statement terminates a loop?",
        options: ["stop", "exit", "break", "return"],
        correctAnswer: 2,
      },
      {
        question: "What does `==` compare?",
        options: [
          "Assigns values",
          "Compares values",
          "Adds values",
          "Multiplies values",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is a floating-point data type?",
        options: ["char", "int", "float", "long"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to initialize an array?",
        options: [
          "int arr[] = {1,2,3};",
          "array arr = [1,2,3];",
          "int arr = {1,2,3};",
          "arr[] = (1,2,3);",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function converts a string to an integer?",
        options: ["atoi()", "itoa()", "strint()", "parseint()"],
        correctAnswer: 0,
      },
      {
        question: "What does `++` do to a variable?",
        options: ["Doubles it", "Adds 1", "Squares it", "Makes it positive"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a logical operator?",
        options: ["&&", "||", "!", "&"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the default return type of a function if not specified?",
        options: ["void", "int", "char", "float"],
        correctAnswer: 1,
      },
      {
        question: "Which escape sequence represents a tab?",
        options: ["\\t", "\\n", "\\a", "\\b"],
        correctAnswer: 0,
      },
      {
        question: 'What is the correct way to write "Hello" in a C string?',
        options: ["'Hello'", '"Hello"', "{Hello}", "[Hello]"],
        correctAnswer: 1,
      },
      {
        question:
          "Which is the correct format specifier for `float` in `printf()`?",
        options: ["%d", "%f", "%c", "%s"],
        correctAnswer: 1,
      },
      {
        question: "What does `strlen()` return?",
        options: [
          "String value",
          "String length",
          "String address",
          "String type",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid C keyword?",
        options: ["for", "while", "loop", "switch"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest data type in C?",
        options: ["int", "float", "char", "short"],
        correctAnswer: 2,
      },
      {
        question: "Which operator has highest precedence?",
        options: ["+", "*", "()", "="],
        correctAnswer: 2,
      },
      {
        question: "What does `NULL` represent?",
        options: ["Zero", "Empty string", "Null pointer", "End of file"],
        correctAnswer: 2,
      },
      {
        question: "Which function allocates memory dynamically?",
        options: ["alloc()", "malloc()", "new()", "create()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to end a case in `switch`?",
        options: ["end;", "stop;", "break;", "exit;"],
        correctAnswer: 2,
      },
      {
        question: "Which header contains `rand()`?",
        options: ["<math.h>", "<stdlib.h>", "<time.h>", "<random.h>"],
        correctAnswer: 1,
      },
      {
        question: "What does `#include` do?",
        options: [
          "Exports functions",
          "Imports libraries",
          "Creates variables",
          "Defines macros",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a storage class?",
        options: ["auto", "register", "extern", "global"],
        correctAnswer: 3,
      },
      {
        question: "What is the correct way to declare a constant?",
        options: [
          "constant int x = 5;",
          "#define x 5",
          "const int x = 5;",
          "Both 2 and 3",
        ],
        correctAnswer: 3,
      },
      {
        question: "What does `return 0;` in `main()` indicate?",
        options: ["Error", "Success", "Warning", "Nothing"],
        correctAnswer: 1,
      },
      {
        question: "Which operator checks address equality?",
        options: ["==", "=", "===", "&"],
        correctAnswer: 0,
      },
      {
        question: "What is `argv` in `main(int argc, char *argv[])`?",
        options: [
          "Argument count",
          "Argument values",
          "Array size",
          "Return value",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which function copies strings?",
        options: ["strcopy()", "strdup()", "strcpy()", "cpstr()"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of `5 / 2`?",
        options: ["2.5", "2", "3", "2.0"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid number literal?",
        options: ["123", "0123", "0x123", "x123"],
        correctAnswer: 3,
      },
      {
        question: "What does `typedef` do?",
        options: [
          "Defines types",
          "Creates variables",
          "Allocates memory",
          "Declares functions",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which is NOT a valid file operation mode?",
        options: ['"r"', '"w"', '"a"', '"z"'],
        correctAnswer: 3,
      },
      {
        question: "What is the correct way to declare a pointer?",
        options: ["int ptr*;", "int *ptr;", "*int ptr;", "ptr int*;"],
        correctAnswer: 1,
      },
      {
        question: "Which function compares two strings?",
        options: ["strcmp()", "strcomp()", "compare()", "strdiff()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to access struct members?",
        options: [".", "->", "::", "Both 1 and 2"],
        correctAnswer: 3,
      },
      {
        question: "Which is NOT a valid way to write 100?",
        options: ["100", "0x64", "0144", "0b100"],
        correctAnswer: 3,
      },
      {
        question: "What does `sizeof()` return?",
        options: ["Value size", "Type size", "Memory size", "Both 2 and 3"],
        correctAnswer: 3,
      },
      {
        question: "Which symbol is used to end a statement in C?",
        options: [".", ";", ":", ","],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to print 'Hello World' in C?",
        options: [
          "print('Hello World')",
          "console.log('Hello World')",
          "printf('Hello World')",
          "echo 'Hello World'",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which data type is used for single characters?",
        options: ["char", "string", "letter", "character"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a floating-point number?",
        options: ["float x;", "decimal x;", "number x;", "double x;"],
        correctAnswer: 0,
      },
      {
        question: "Which header file is needed for mathematical functions?",
        options: ["<math.h>", "<calculate.h>", "<numbers.h>", "<functions.h>"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'printf' function do?",
        options: [
          "Reads input",
          "Prints output",
          "Performs calculations",
          "Creates files",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for multiplication?",
        options: ["x", "*", "×", "."],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to write a 'for' loop?",
        options: [
          "for i=1 to 10 {}",
          "for (i=1; i<=10; i++) {}",
          "loop (i=1; i<=10; i++) {}",
          "for i in 1..10 {}",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you write a multi-line comment in C?",
        options: [
          "// comment //",
          "/* comment */",
          "' comment '",
          "# comment #",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to compare two values for equality?",
        options: ["=", "==", "===", "equals"],
        correctAnswer: 1,
      },
      {
        question: "Which function is used to read input from the user?",
        options: ["scanf()", "input()", "read()", "get()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct format specifier for integers in printf?",
        options: ["%i", "%d", "%n", "%int"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a valid variable name?",
        options: ["myVar", "_var1", "1var", "var_one"],
        correctAnswer: 2,
      },
      {
        question: "What does the 'else' statement do?",
        options: [
          "Repeats code",
          "Handles exceptions",
          "Provides alternative execution",
          "Ends the program",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which operator gives the remainder of division?",
        options: ["/", "%", "//", "rem"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a constant integer?",
        options: [
          "const int x = 5;",
          "constant int x = 5;",
          "int const x = 5;",
          "fixed int x = 5;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which loop checks the condition before execution?",
        options: ["do-while", "while", "for", "Both 1 and 2"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'break' statement do?",
        options: [
          "Pauses the program",
          "Ends the loop",
          "Skips current iteration",
          "Prints a line",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is the correct way to include a header file?",
        options: [
          "#include stdio.h",
          "#include <stdio.h>",
          "include 'stdio.h'",
          "import stdio.h",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'continue' statement?",
        options: [
          "Exit the program",
          "Skip to next iteration",
          "Break out of loop",
          "Pause execution",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which function is used to compare two strings?",
        options: ["strcmp()", "strcompare()", "stringcmp()", "compare()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a 'while' loop?",
        options: [
          "while condition {}",
          "while (condition) {}",
          "while [condition] {}",
          "while {condition}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for logical AND?",
        options: ["&", "&&", "AND", "|"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a character?",
        options: [
          "char c = 'a';",
          "character c = 'a';",
          "string c = 'a';",
          "chr c = 'a';",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to find the length of a string?",
        options: ["len()", "length()", "strlen()", "size()"],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of the 'return' statement?",
        options: [
          "Exit the program",
          "Return a value from function",
          "Print output",
          "Stop loop execution",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for logical OR?",
        options: ["|", "||", "OR", "&"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a double?",
        options: ["double x;", "float64 x;", "decimal x;", "long float x;"],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to concatenate strings?",
        options: ["concat()", "strcat()", "stringcat()", "addstr()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to write an 'if-else' statement?",
        options: [
          "if condition {} else {}",
          "if (condition) {} else {}",
          "if [condition] {} else {}",
          "if {condition} else {}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for logical NOT?",
        options: ["!", "NOT", "~", "!!"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a long integer?",
        options: ["long x;", "long int x;", "int long x;", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which function is used to copy strings?",
        options: ["copy()", "strcpy()", "stringcpy()", "cpstr()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to write a 'switch' statement?",
        options: [
          "switch (var) { case 1: ... }",
          "switch var { case 1: ... }",
          "switch [var] { case 1: ... }",
          "switch {var} case 1: ...",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for bitwise AND?",
        options: ["&", "&&", "AND", "|"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a short integer?",
        options: [
          "short x;",
          "short int x;",
          "int short x;",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "Which function is used to search for a character in a string?",
        options: ["find()", "strchr()", "charfind()", "search()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to write a function prototype?",
        options: [
          "function name() {}",
          "type name(args);",
          "def name():",
          "func name() {}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for bitwise OR?",
        options: ["|", "||", "OR", "&"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare an unsigned integer?",
        options: [
          "unsigned x;",
          "unsigned int x;",
          "int unsigned x;",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which function is used to search for a substring?",
        options: ["find()", "strstr()", "substr()", "search()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to define a macro?",
        options: [
          "#define PI 3.14",
          "define PI 3.14",
          "macro PI 3.14",
          "const PI = 3.14",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for bitwise XOR?",
        options: ["^", "^^", "XOR", "~"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a signed integer?",
        options: [
          "signed x;",
          "signed int x;",
          "int signed x;",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which function is used to convert to lowercase?",
        options: ["lower()", "tolower()", "strlower()", "lcase()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to write a typedef?",
        options: [
          "typedef int Integer;",
          "type int Integer;",
          "define int Integer;",
          "typedef Integer int;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for bitwise NOT?",
        options: ["!", "~", "NOT", "!!"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a pointer to an integer?",
        options: ["int *p;", "int p*;", "pointer int p;", "*int p;"],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to convert to uppercase?",
        options: ["upper()", "toupper()", "strupper()", "ucase()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a structure?",
        options: [
          "struct { ... } s;",
          "structure { ... } s;",
          "def struct { ... } s;",
          "struct s { ... };",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which operator is used for left shift?",
        options: ["<<", ">>", "<-", "->"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to access a structure member?",
        options: ["s->member", "s.member", "Both 1 and 2", "s[member]"],
        correctAnswer: 2,
      },
      {
        question: "Which function is used to compare memory blocks?",
        options: ["memcmp()", "memcompare()", "blockcmp()", "cmpmem()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a union?",
        options: [
          "union { ... } u;",
          "unite { ... } u;",
          "def union { ... } u;",
          "union u { ... };",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which operator is used for right shift?",
        options: ["<<", ">>", "<-", "->"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to access a union member?",
        options: ["u->member", "u.member", "Both 1 and 2", "u[member]"],
        correctAnswer: 2,
      },
      {
        question: "Which function is used to copy memory blocks?",
        options: ["memcpy()", "memcopy()", "blockcpy()", "cpymem()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare an enum?",
        options: [
          "enum { ... } e;",
          "enumerate { ... } e;",
          "def enum { ... } e;",
          "enum e { ... };",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which operator is used to get the address of a variable?",
        options: ["*", "&", "@", "#"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to access an enum value?",
        options: ["e.value", "e->value", "e::value", "Just the value name"],
        correctAnswer: 3,
      },
      {
        question: "Which function is used to set memory blocks?",
        options: ["memset()", "memsetblock()", "blockset()", "setmem()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a function pointer?",
        options: [
          "int (*fp)();",
          "int *fp();",
          "pointer int fp();",
          "int fp*();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used to dereference a pointer?",
        options: ["*", "&", "@", "#"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to call a function through a pointer?",
        options: ["fp()", "*fp()", "(*fp)()", "call fp()"],
        correctAnswer: 2,
      },
      {
        question: "Which function is used to allocate memory?",
        options: ["alloc()", "malloc()", "new()", "create()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to free memory?",
        options: ["free()", "release()", "delete()", "remove()"],
        correctAnswer: 0,
      },
      {
        question:
          "Which operator is used to access structure members through a pointer?",
        options: [".", "->", "::", ":"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a constant pointer?",
        options: [
          "const int *p;",
          "int const *p;",
          "int * const p;",
          "All of the above",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which function is used to reallocate memory?",
        options: ["realloc()", "remalloc()", "resize()", "adjust()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a pointer to a constant?",
        options: [
          "const int *p;",
          "int const *p;",
          "int * const p;",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which operator is used for pointer arithmetic?",
        options: ["+", "-", "*", "All of the above"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the correct way to declare a constant pointer to a constant?",
        options: [
          "const int const *p;",
          "int const * const p;",
          "const int * const p;",
          "Both 2 and 3",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which function is used to compare characters?",
        options: ["chrcmp()", "cmpchr()", "strcmp()", "memcmp()"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to declare an array of pointers?",
        options: [
          "int *arr[];",
          "int []*arr;",
          "int arr*[];",
          "pointer int arr[];",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used to get the size of a type?",
        options: ["size", "sizeof", "length", "len"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare a pointer to an array?",
        options: [
          "int (*arr)[];",
          "int *arr[];",
          "int arr*[];",
          "pointer int arr[];",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to convert a string to a double?",
        options: ["strtod()", "atod()", "strdouble()", "todouble()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a pointer to a function?",
        options: [
          "int (*fp)();",
          "int *fp();",
          "pointer int fp();",
          "int fp*();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used to cast types?",
        options: ["cast", "convert", "(type)", "as"],
        correctAnswer: 2,
      },
      {
        question:
          "What is the correct way to declare an array of function pointers?",
        options: [
          "int (*arr[])();",
          "int *arr[]();",
          "int arr*[]();",
          "pointer int arr[]();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to convert a string to a long?",
        options: ["strtol()", "atol()", "strlong()", "tolong()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a pointer to a pointer?",
        options: ["int **p;", "int *p*;", "pointer pointer int p;", "int p**;"],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the ternary conditional?",
        options: ["?", ":", "if", "??"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to declare a void pointer?",
        options: ["void *p;", "pointer void p;", "void p*;", "*void p;"],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to convert a string to a float?",
        options: ["strtof()", "atof()", "strfloat()", "tofloat()"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a function that returns a pointer?",
        options: ["int *f();", "int f*();", "pointer int f();", "*int f();"],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the comma operator?",
        options: [",", ";", ":", "."],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to a constant function?",
        options: [
          "int (* const fp)();",
          "const int (*fp)();",
          "int const (*fp)();",
          "int (*fp)() const;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to convert a number to a string?",
        options: ["strnum()", "itoa()", "numstr()", "tostr()"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a constant function pointer?",
        options: [
          "int (* const fp)();",
          "const int (*fp)();",
          "int const (*fp)();",
          "int (*fp)() const;",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which operator is used for member selection through a pointer?",
        options: [".", "->", "::", ":"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a function that takes a pointer?",
        options: [
          "void f(int *p);",
          "void f(int p*);",
          "void f(pointer int p);",
          "void f(*int p);",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to format output to a string?",
        options: ["sprintf()", "format()", "strfmt()", "fprint()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a function that returns a function pointer?",
        options: [
          "int (*f())();",
          "int f*()();",
          "pointer int f()();",
          "*int f()();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the sizeof operator?",
        options: ["size", "sizeof", "length", "len"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a pointer to an array of pointers?",
        options: [
          "int *(*arr)[];",
          "int **arr[];",
          "int arr**[];",
          "pointer pointer int arr[];",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to scan input from a string?",
        options: ["sscanf()", "strscan()", "scanstr()", "fscan()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare an array of pointers to functions?",
        options: [
          "int (*arr[])();",
          "int *arr[]();",
          "int arr*[]();",
          "pointer int arr[]();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the address-of operator?",
        options: ["*", "&", "@", "#"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a pointer to a pointer to an int?",
        options: ["int **p;", "int *p*;", "pointer pointer int p;", "int p**;"],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to compare two memory blocks?",
        options: ["memcmp()", "memcompare()", "blockcmp()", "cmpmem()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to a constant pointer?",
        options: [
          "int * const *p;",
          "int const **p;",
          "const int **p;",
          "int ** const p;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the dereference operator?",
        options: ["*", "&", "@", "#"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a constant pointer to a pointer?",
        options: [
          "int ** const p;",
          "int * const *p;",
          "const int **p;",
          "int const **p;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to copy a memory block?",
        options: ["memcpy()", "memcopy()", "blockcpy()", "cpymem()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to an array of function pointers?",
        options: [
          "int (*(*arr[])())();",
          "int (**arr[]())();",
          "int *(*arr[])();",
          "pointer int (*arr[])();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the structure member operator?",
        options: [".", "->", "::", ":"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a function that takes a function pointer?",
        options: [
          "void f(int (*fp)());",
          "void f(int fp*());",
          "void f(pointer int fp());",
          "void f(*int fp());",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to set a memory block?",
        options: ["memset()", "memsetblock()", "blockset()", "setmem()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to a function that returns a pointer?",
        options: [
          "int *(*fp)();",
          "int **fp();",
          "pointer int *fp();",
          "*int *fp();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the structure pointer operator?",
        options: [".", "->", "::", ":"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a function that returns a pointer to a function?",
        options: [
          "int (*f())();",
          "int f*()();",
          "pointer int f()();",
          "*int f()();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to move a memory block?",
        options: ["memmove()", "memcopy()", "blockmove()", "movemem()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to a function that takes a function pointer?",
        options: [
          "int (* (*fp)(int (*)()))();",
          "int (**fp(int *()))();",
          "pointer int (*fp(int (*)()))();",
          "*int (*fp(int (*)()))();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the comma operator?",
        options: [",", ";", ":", "."],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a function that returns a pointer to a function that returns a pointer?",
        options: [
          "int *(* (*f())())();",
          "int **f*()()();",
          "pointer pointer int f()()();",
          "**int f()()();",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which function is used to compare two strings ignoring case?",
        options: ["strcasecmp()", "stricmp()", "strcmpi()", "All of the above"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the correct way to declare a pointer to an array of pointers to functions?",
        options: [
          "int (*(*arr[])())();",
          "int (**arr[]())();",
          "int *(*arr[])();",
          "pointer int (*arr[])();",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which operator is used for the ternary conditional operator?",
        options: ["?", ":", "if", "??"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a function that takes a pointer to a function that takes a function pointer?",
        options: [
          "void f(int (* (*fp)(int (*)()))();",
          "void f(int (**fp(int *()))();",
          "void f(pointer int (*fp(int (*)()))();",
          "void f(*int (*fp(int (*)()))();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to tokenize a string?",
        options: ["strtok()", "tokenize()", "split()", "explode()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to a function that returns a pointer to a function?",
        options: [
          "int *(* (*fp)())();",
          "int (**fp*())();",
          "pointer pointer int fp()();",
          "**int fp()();",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for the sizeof operator?",
        options: ["size", "sizeof", "length", "len"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to declare a function that returns a pointer to a function that takes a function pointer?",
        options: [
          "int (* (*f())(int (*)()))();",
          "int (**f*()(int *()))();",
          "pointer pointer int f()(int (*)());",
          "**int f()(int (*)());",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function is used to convert a string to a long long?",
        options: ["strtoll()", "atoll()", "strlonglong()", "tolonglong()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct way to declare a pointer to a function that returns a pointer to a function that returns a pointer?",
        options: [
          "int *(* (* (*fp)())())();",
          "int ***fp()()();",
          "pointer pointer pointer int fp()()();",
          "***int fp()()();",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to start a C program?",
        options: ["start()", "main()", "begin()", "program()"],
        correctAnswer: 1,
      },
      {
        question: "Which symbol is used for single-line comments in C?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of `printf("Hello");`?',
        options: ["Hello", '"Hello"', "Error", "Nothing"],
        correctAnswer: 0,
      },
      {
        question: "Which data type is used for whole numbers?",
        options: ["float", "char", "int", "double"],
        correctAnswer: 2,
      },
      {
        question: "What does `scanf()` do?",
        options: [
          "Prints output",
          "Reads input",
          "Calculates values",
          "Creates files",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used for addition?",
        options: ["-", "+", "*", "/"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to declare an integer variable?",
        options: ["int x;", "integer x;", "x = int;", "var x int;"],
        correctAnswer: 0,
      },
      {
        question: "Which header file is needed for `printf()`?",
        options: ["<math.h>", "<string.h>", "<stdio.h>", "<stdlib.h>"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct `if` statement syntax?",
        options: [
          "if x == 1 {}",
          "if (x == 1) {}",
          "if [x == 1] {}",
          "if {x == 1}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "if"],
        correctAnswer: 2,
      },
      {
        question: "What does `\\n` represent?",
        options: ["Tab", "New line", "Backslash", "Quote"],
        correctAnswer: 1,
      },
      {
        question: "What is the size of `int` on most 32-bit systems?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        correctAnswer: 2,
      },
      {
        question: "Which is NOT a valid variable name?",
        options: ["myVar", "_var", "123var", "var123"],
        correctAnswer: 2,
      },
      {
        question: "What is the modulus operator?",
        options: ["%", "&", "#", "$"],
        correctAnswer: 0,
      },
      {
        question: "Which statement terminates a loop?",
        options: ["stop", "exit", "break", "return"],
        correctAnswer: 2,
      },
      {
        question: "What does `==` compare?",
        options: [
          "Assigns values",
          "Compares values",
          "Adds values",
          "Multiplies values",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is a floating-point data type?",
        options: ["char", "int", "float", "long"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to initialize an array?",
        options: [
          "int arr[] = {1,2,3};",
          "array arr = [1,2,3];",
          "int arr = {1,2,3};",
          "arr[] = (1,2,3);",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which function converts a string to an integer?",
        options: ["atoi()", "itoa()", "strint()", "parseint()"],
        correctAnswer: 0,
      },
      {
        question: "What does `++` do to a variable?",
        options: ["Doubles it", "Adds 1", "Squares it", "Makes it positive"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a logical operator?",
        options: ["&&", "||", "!", "&"],
        correctAnswer: 3,
      },
      {
        question:
          "What is the default return type of a function if not specified?",
        options: ["void", "int", "char", "float"],
        correctAnswer: 1,
      },
      {
        question: "Which escape sequence represents a tab?",
        options: ["\\t", "\\n", "\\a", "\\b"],
        correctAnswer: 0,
      },
      {
        question: 'What is the correct way to write "Hello" in a C string?',
        options: ["'Hello'", '"Hello"', "{Hello}", "[Hello]"],
        correctAnswer: 1,
      },
      {
        question:
          "Which is the correct format specifier for `float` in `printf()`?",
        options: ["%d", "%f", "%c", "%s"],
        correctAnswer: 1,
      },
      {
        question: "What does `strlen()` return?",
        options: [
          "String value",
          "String length",
          "String address",
          "String type",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid C keyword?",
        options: ["for", "while", "loop", "switch"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest data type in C?",
        options: ["int", "float", "char", "short"],
        correctAnswer: 2,
      },
      {
        question: "Which operator has highest precedence?",
        options: ["+", "*", "()", "="],
        correctAnswer: 2,
      },
      {
        question: "What does `NULL` represent?",
        options: ["Zero", "Empty string", "Null pointer", "End of file"],
        correctAnswer: 2,
      },
      {
        question: "Which function allocates memory dynamically?",
        options: ["alloc()", "malloc()", "new()", "create()"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to end a case in `switch`?",
        options: ["end;", "stop;", "break;", "exit;"],
        correctAnswer: 2,
      },
      {
        question: "Which header contains `rand()`?",
        options: ["<math.h>", "<stdlib.h>", "<time.h>", "<random.h>"],
        correctAnswer: 1,
      },
      {
        question: "What does `#include` do?",
        options: [
          "Exports functions",
          "Imports libraries",
          "Creates variables",
          "Defines macros",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a storage class?",
        options: ["auto", "register", "extern", "global"],
        correctAnswer: 3,
      },
      {
        question: "What is the correct way to declare a constant?",
        options: [
          "constant int x = 5;",
          "#define x 5",
          "const int x = 5;",
          "Both 2 and 3",
        ],
        correctAnswer: 3,
      },
      {
        question: "What does `return 0;` in `main()` indicate?",
        options: ["Error", "Success", "Warning", "Nothing"],
        correctAnswer: 1,
      },
      {
        question: "Which operator checks address equality?",
        options: ["==", "=", "===", "&"],
        correctAnswer: 0,
      },
      {
        question: "What is `argv` in `main(int argc, char *argv[])`?",
        options: [
          "Argument count",
          "Argument values",
          "Array size",
          "Return value",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which function copies strings?",
        options: ["strcopy()", "strdup()", "strcpy()", "cpstr()"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of `5 / 2`?",
        options: ["2.5", "2", "3", "2.0"],
        correctAnswer: 1,
      },
      {
        question: "Which is NOT a valid number literal?",
        options: ["123", "0123", "0x123", "x123"],
        correctAnswer: 3,
      },
      {
        question: "What does `typedef` do?",
        options: [
          "Defines types",
          "Creates variables",
          "Allocates memory",
          "Declares functions",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which is NOT a valid file operation mode?",
        options: ['"r"', '"w"', '"a"', '"z"'],
        correctAnswer: 3,
      },
      {
        question: "What is the correct way to declare a pointer?",
        options: ["int ptr*;", "int *ptr;", "*int ptr;", "ptr int*;"],
        correctAnswer: 1,
      },
      {
        question: "Which function compares two strings?",
        options: ["strcmp()", "strcomp()", "compare()", "strdiff()"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to access struct members?",
        options: [".", "->", "::", "Both 1 and 2"],
        correctAnswer: 3,
      },
      {
        question: "Which is NOT a valid way to write 100?",
        options: ["100", "0x64", "0144", "0b100"],
        correctAnswer: 3,
      },
      {
        question: "What does `sizeof()` return?",
        options: ["Value size", "Type size", "Memory size", "Both 2 and 3"],
        correctAnswer: 3,
      },
      {
        question:
          "What will be the output of `printf('%d', sizeof('A'));` in a 32-bit C compiler?",
        options: ["1", "2", "4", "8"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is NOT a valid storage class in C?",
        options: ["auto", "register", "extern", "heap"],
        correctAnswer: 3,
      },
      {
        question: "What does the `volatile` keyword in C indicate?",
        options: [
          "The variable may change unexpectedly",
          "The variable is constant",
          "The variable is stored in RAM",
          "The variable is optimized by the compiler",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `printf('%d', 5 + 'A');`?",
        options: ["5A", "70", "Error", "Undefined"],
        correctAnswer: 1,
      },
      {
        question:
          "Which of these is NOT a valid way to declare a pointer in C?",
        options: ["int *ptr;", "int* ptr;", "int ptr*;", "All are valid"],
        correctAnswer: 2,
      },
      {
        question: "What happens if you free a pointer twice in C?",
        options: [
          "No effect",
          "Undefined behavior",
          "Memory leak",
          "Compiler error",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', 3.5 + 2);`?",
        options: ["5", "5.5", "Undefined", "Compilation error"],
        correctAnswer: 3,
      },
      {
        question:
          "Which of the following is NOT a valid way to pass an array to a function in C?",
        options: [
          "void func(int arr[])",
          "void func(int *arr)",
          "void func(int arr[5])",
          "void func(int arr)",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `printf('%d', 1 == 1 == 1);`?",
        options: ["0", "1", "True", "Compilation error"],
        correctAnswer: 0,
      },
      {
        question: "What does `strcmp()` return if two strings are identical?",
        options: ["1", "0", "-1", "Depends on compiler"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', sizeof(void));`?",
        options: ["0", "1", "Undefined", "Compiler error"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is NOT a valid C preprocessor directive?",
        options: ["#include", "#define", "#ifdef", "#function"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `printf('%d', 10 << 2);`?",
        options: ["10", "20", "40", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct way to declare a function pointer in C?",
        options: [
          "int (*func)();",
          "int *func();",
          "int func*();",
          "int (func)();",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of `printf('%d', ~5);` if integers are 4 bytes?",
        options: ["-6", "5", "10", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `printf('%d', 5 / 2);`?",
        options: ["2.5", "2", "3", "Undefined"],
        correctAnswer: 1,
      },
      {
        question:
          "Which of these is NOT a valid way to initialize an array in C?",
        options: [
          "int arr[] = {1, 2, 3};",
          "int arr[3] = {1, 2, 3};",
          "int arr[3] = {1};",
          "int arr[3] = {};",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `printf('%d', !5);`?",
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of `printf('%d', sizeof(int(*)[10]));` on a 64-bit system?",
        options: ["4", "8", "10", "40"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', 1 < 2 < 3);`?",
        options: ["0", "1", "True", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a valid C keyword?",
        options: ["const", "volatile", "friend", "restrict"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `printf('%d', sizeof('\\0'));`?",
        options: ["1", "2", "4", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `printf('%d', 5 && 2);`?",
        options: ["0", "1", "2", "5"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `printf('%d', 5 || 0);`?",
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the output of `printf('%d', sizeof(struct {char a; int b;}));` on a 32-bit system?",
        options: ["5", "6", "8", "Undefined"],
        correctAnswer: 2,
      },
      {
        question:
          'What is the output of: `int *ptr = (int*)malloc(sizeof(int)); *ptr = 5; printf("%d", (*ptr)++ + ++(*ptr));`',
        options: ["10", "11", "12", "Undefined behavior"],
        correctAnswer: 3,
      },
      {
        question: 'What happens when you: `int *ptr; printf("%d", *ptr);`',
        options: [
          "Prints 0",
          "Segmentation fault",
          "Prints garbage value",
          "Compiler error",
        ],
        correctAnswer: 2,
      },
      {
        question:
          'What does this print: `int arr[5] = {1}; printf("%d", arr[2]);`',
        options: ["0", "1", "Garbage value", "Compiler error"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(main()));`',
        options: ["1", "4", "Compiler error", "Undefined"],
        correctAnswer: 2,
      },
      {
        question:
          "What does this code do: `while(*(++ptr));` where ptr is a char pointer?",
        options: [
          "Finds string length",
          "Searches for null terminator",
          "Causes infinite loop",
          "Undefined behavior",
        ],
        correctAnswer: 1,
      },
      {
        question:
          'What is the output of: `int i = 3; printf("%d", i++ + i++);`',
        options: ["6", "7", "Undefined behavior", "Compiler dependent"],
        correctAnswer: 2,
      },
      {
        question:
          "What is the value of: `(int)((float)INT_MAX == (double)INT_MAX)`",
        options: ["0", "1", "Undefined", "Compiler dependent"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof 1);`',
        options: ["1", "2", "4", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `int x = 5; printf("%d", x & ~x);`',
        options: ["0", "5", "1", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", -1 >> 1);`',
        options: ["0", "-1", "Implementation defined", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", !!5);`',
        options: ["0", "1", "5", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 ? 0 ? 2 : 3 : 4);`',
        options: ["0", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question:
          'What is the output of: `int a = 1, b = 2, c = 3; printf("%d", a += b += c);`',
        options: ["6", "5", "Undefined", "Compiler error"],
        correctAnswer: 0,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1L));` on a 64-bit system?',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof("Hello"));`',
        options: ["5", "6", "8", "Compiler dependent"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 << 1 << 1 << 1);`',
        options: ["1", "4", "8", "16"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", 1 && 2 || 0);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 | 2 & 3);`',
        options: ["0", "1", "3", "Undefined"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 + 2 * 3 / 4);`',
        options: ["1", "2", "3", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(int[10]));`',
        options: ["4", "8", "40", "Compiler dependent"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1.5 && 2.5);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 < 2 ? 3 : 4);`',
        options: ["1", "2", "3", "4"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", 1 << 32);` on a 32-bit system?',
        options: ["0", "1", "Undefined", "Compiler error"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 / 0);`',
        options: ["0", "Undefined", "Compiler error", "Runtime error"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", 0 && printf("Hello"));`',
        options: ["0", "1", "Hello", "Nothing prints"],
        correctAnswer: 0,
      },
      {
        question:
          'What is the output of: `printf("%d", 1 || printf("Hello"));`',
        options: ["0", "1", "Hello", "Nothing prints"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `printf(\"%d\", sizeof('AB'));`",
        options: ["1", "2", "4", "Compiler dependent"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1.0 / 2 * 2);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", 1 + + + 1);`',
        options: ["1", "2", "3", "Compiler error"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 - - 1);`',
        options: ["0", "1", "2", "Compiler error"],
        correctAnswer: 2,
      },
      {
        question: 'What is the output of: `printf("%d", 1 / 2 * 2);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", 1.0 / 2 * 2);`',
        options: ["0", "1", "2", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0f));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1L));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1LL));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1u));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1ul));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1ull));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1 + 1.0));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1 + 1.0f));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1 + 1L));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1 + 1LL));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1 + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0 + 1.0f));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0f + 1.0f));`',
        options: ["4", "8", "Compiler dependent", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0 + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question: 'What is the output of: `printf("%d", sizeof(1.0f + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1.0 + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1.0f + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1LL + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0 + 1.0f + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0f + 1.0f + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0L + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1.0 + 1.0f + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1L + 1LL + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0 + 1.0f + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0f + 1.0f + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0L + 1.0L + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1.0 + 1.0f + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1 + 1L + 1LL + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0 + 1.0f + 1.0L + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0f + 1.0f + 1.0L + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
      {
        question:
          'What is the output of: `printf("%d", sizeof(1.0L + 1.0L + 1.0L + 1.0L + 1.0L));`',
        options: ["4", "8", "16", "Compiler dependent"],
        correctAnswer: 3,
      },
    ],
  },

  {
    category: "HTML",
    questions: [
      {
        question: "Which HTML5 element is used for playing video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        correctAnswer: 1,
      },
      {
        question: "What does the `defer` attribute do in a <script> tag?",
        options: [
          "Delays script execution until HTML parsing is done",
          "Prevents the script from running",
          "Makes the script asynchronous",
          "Forces the script to load first",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which attribute is used to make an <input> field required in HTML5?",
        options: ["mandatory", "required", "validate", "mustfill"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML5 doctype declaration?",
        options: [
          "<!DOCTYPE html5>",
          "<!DOCTYPE HTML>",
          "<!DOCTYPE HTML5>",
          "<!DOCTYPE>",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tag is used to define a dropdown list in HTML?",
        options: ["<list>", "<dropdown>", "<select>", "<option>"],
        correctAnswer: 2,
      },
      {
        question: "What does the `placeholder` attribute do in HTML?",
        options: [
          "Sets a default value",
          "Displays hint text",
          "Makes the field read-only",
          "Hides the input",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which HTML element is used for drawing graphics via JavaScript?",
        options: ["<canvas>", "<svg>", "<draw>", "<graphics>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `<meta charset='UTF-8'>` tag?",
        options: [
          "Defines page encoding",
          "Sets the page title",
          "Links to a stylesheet",
          "Defines a viewport",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML5 element is used for side content?",
        options: ["<sidebar>", "<aside>", "<section>", "<div>"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to embed an SVG file in HTML?",
        options: [
          "<img src='image.svg'>",
          "<svg src='image.svg'>",
          "<embed src='image.svg'>",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which HTML tag is used for a line break?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        correctAnswer: 0,
      },
      {
        question: "What does the `target='_blank'` attribute do in an <a> tag?",
        options: [
          "Opens link in a new tab",
          "Opens link in the same tab",
          "Prevents the link from opening",
          "Hides the link",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML5 element is used for progress bars?",
        options: ["<progress>", "<meter>", "<bar>", "<loading>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `<noscript>` tag?",
        options: [
          "Defines alternative content if JavaScript is disabled",
          "Prevents scripts from running",
          "Loads scripts asynchronously",
          "Hides scripts from the browser",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which attribute is used to disable an <input> field?",
        options: ["readonly", "disabled", "off", "lock"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct way to create a hyperlink in HTML?",
        options: [
          "<a url='example.com'>Link</a>",
          "<a href='example.com'>Link</a>",
          "<link src='example.com'>",
          "<hyperlink>example.com</hyperlink>",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used for a table header?",
        options: ["<thead>", "<th>", "<header>", "<theader>"],
        correctAnswer: 1,
      },
      {
        question: "What does the `contenteditable` attribute do?",
        options: [
          "Makes an element editable",
          "Hides content",
          "Prevents editing",
          "Loads content dynamically",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML5 element is used for date input?",
        options: ["<input type='date'>", "<date>", "<calendar>", "<time>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `<figure>` tag?",
        options: [
          "Defines a diagram",
          "Groups media content with captions",
          "Creates a border",
          "Defines a footer",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which HTML tag is used for subscript text?",
        options: ["<sub>", "<sup>", "<small>", "<low>"],
        correctAnswer: 0,
      },
      {
        question: "What does the `async` attribute do in a <script> tag?",
        options: [
          "Delays script execution",
          "Makes the script load asynchronously",
          "Prevents the script from running",
          "Forces the script to load first",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used for a thematic break?",
        options: ["<break>", "<hr>", "<line>", "<divider>"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the `<datalist>` tag?",
        options: [
          "Defines a dropdown list",
          "Creates a list of suggestions for input fields",
          "Displays a list of data",
          "Hides data",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which HTML5 element is used for audio playback?",
        options: ["<sound>", "<audio>", "<music>", "<play>"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Which CSS property is used to change text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: 2,
      },
      {
        question: "What does `box-sizing: border-box;` do?",
        options: [
          "Includes padding and border in element width",
          "Excludes margins from width",
          "Forces element to full width",
          "Hides borders",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which selector has the highest specificity?",
        options: ["#id", ".class", "tag", "!important"],
        correctAnswer: 0,
      },
      {
        question: "What does `z-index` control?",
        options: [
          "Horizontal stacking",
          "Vertical stacking",
          "Opacity",
          "Rotation",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which property is used to create rounded corners?",
        options: [
          "border-radius",
          "corner-radius",
          "round-border",
          "border-style",
        ],
        correctAnswer: 0,
      },
      {
        question: "What does `position: sticky;` do?",
        options: [
          "Fixes element relative to viewport",
          "Makes element draggable",
          "Hides element until scrolled",
          "Locks element in place",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which CSS unit is relative to font size?",
        options: ["px", "em", "vw", "pt"],
        correctAnswer: 1,
      },
      {
        question: "What does `display: flex;` enable?",
        options: [
          "Grid layout",
          "Flexbox layout",
          "Table layout",
          "Inline layout",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which property animates CSS changes?",
        options: ["animation", "transition", "transform", "keyframe"],
        correctAnswer: 1,
      },
      {
        question: "What does `overflow: hidden;` do?",
        options: [
          "Hides scrollbars",
          "Clips overflow content",
          "Expands container",
          "Disables scrolling",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which pseudo-class selects an element being hovered?",
        options: [":active", ":hover", ":focus", ":visited"],
        correctAnswer: 1,
      },
      {
        question: "What does `transform: rotate(45deg);` do?",
        options: [
          "Scales element",
          "Rotates element 45 degrees",
          "Skews element",
          "Moves element",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which property controls space between lines of text?",
        options: [
          "line-height",
          "letter-spacing",
          "word-spacing",
          "text-spacing",
        ],
        correctAnswer: 0,
      },
      {
        question: "What does `@media` query do?",
        options: [
          "Imports stylesheets",
          "Applies styles conditionally",
          "Defines animations",
          "Creates variables",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which selector targets direct children?",
        options: ["A > B", "A + B", "A ~ B", "A B"],
        correctAnswer: 0,
      },
      {
        question: "What does `opacity: 0.5;` do?",
        options: [
          "Makes element 50% transparent",
          "Hides element",
          "Blurs element",
          "Darkens element",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which property creates a shadow effect?",
        options: ["shadow", "box-shadow", "text-shadow", "drop-shadow"],
        correctAnswer: 1,
      },
      {
        question: "What does `float: left;` do?",
        options: [
          "Moves element left",
          "Floats element to left of container",
          "Aligns text left",
          "Clears left floats",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which property changes cursor style?",
        options: ["cursor", "pointer", "mouse", "hover"],
        correctAnswer: 0,
      },
      {
        question: "What does `background-clip: content-box;` do?",
        options: [
          "Clips background to content box",
          "Extends background",
          "Hides background",
          "Repeats background",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which property controls text alignment?",
        options: ["text-align", "align-text", "font-align", "justify"],
        correctAnswer: 0,
      },
      {
        question: "What does `will-change: transform;` do?",
        options: [
          "Forces GPU acceleration",
          "Prevents transforms",
          "Disables animations",
          "Hides element",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which pseudo-element styles the first line of text?",
        options: ["::first-line", "::first-letter", "::before", "::after"],
        correctAnswer: 0,
      },
      {
        question: "What does `object-fit: cover;` do?",
        options: [
          "Crops image to fill container",
          "Stretches image",
          "Centers image",
          "Repeats image",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which property controls column layout?",
        options: ["columns", "grid-columns", "flex-columns", "multi-column"],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "What is the output of `console.log(typeof NaN);`?",
        options: ["'number'", "'NaN'", "'undefined'", "'string'"],
        correctAnswer: 0,
      },
      {
        question: "Which of these is NOT a falsy value in JavaScript?",
        options: ["0", "' '", "null", "undefined"],
        correctAnswer: 1,
      },
      {
        question: "What does `'5' + 3` evaluate to in JavaScript?",
        options: ["8", "53", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(0.1 + 0.2 === 0.3);`?",
        options: ["true", "false", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        correctAnswer: 0,
      },
      {
        question: "What does `'use strict';` do in JavaScript?",
        options: [
          "Enforces stricter parsing",
          "Disables hoisting",
          "Prevents global variables",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `console.log([] == ![]);`?",
        options: ["true", "false", "Error", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "Which keyword creates a block-scoped variable?",
        options: ["var", "let", "const", "Both let and const"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `console.log(1 < 2 < 3);`?",
        options: ["true", "false", "Error", "Undefined"],
        correctAnswer: 0,
      },
      {
        question: "What does `Array.isArray([])` return?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of `console.log('b' + 'a' + + 'a' + 'a');`?",
        options: ["'baaa'", "'baNaNa'", "'baaNa'", "'baundefineda'"],
        correctAnswer: 1,
      },
      {
        question: "Which method creates a new array with modified elements?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(typeof []);`?",
        options: ["'array'", "'object'", "'undefined'", "'null'"],
        correctAnswer: 1,
      },
      {
        question: "What does `this` refer to in an arrow function?",
        options: [
          "Window object",
          "Parent function's context",
          "Undefined",
          "The function itself",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(!!'');`?",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: 1,
      },
      {
        question: "Which operator checks both value and type equality?",
        options: ["==", "===", "=", "!=="],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `console.log(3 > 2 > 1);`?",
        options: ["true", "false", "Error", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "What does `setTimeout(() => {}, 0)` do?",
        options: [
          "Executes immediately",
          "Executes after 0ms",
          "Adds to event loop",
          "Never executes",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the output of `console.log(typeof null);`?",
        options: ["'null'", "'object'", "'undefined'", "'number'"],
        correctAnswer: 1,
      },
      {
        question: "Which method converts JSON to a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.toObject()",
          "JSON.decode()",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `console.log([] + []);`?",
        options: ["'[]'", "' '", "''", "0"],
        correctAnswer: 2,
      },
      {
        question: "What does `'use strict';` prevent?",
        options: [
          "Hoisting",
          "Global variables",
          "Octal literals",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the output of `console.log(+'10' + 10);`?",
        options: ["'1010'", "20", "NaN", "Error"],
        correctAnswer: 1,
      },
      {
        question: "Which method joins array elements into a string?",
        options: ["join()", "concat()", "split()", "toString()"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of `console.log(typeof function(){});`?",
        options: ["'function'", "'object'", "'undefined'", "'method'"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log([] + []);`",
        options: ["[]", "''", "[object Object]", "0"],
        correctAnswer: 1,
      },
      {
        question: "What does `typeof NaN` return?",
        options: ["'number'", "'nan'", "'undefined'", "'string'"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(0.1 + 0.2 === 0.3);`",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of `this` in an arrow function?",
        options: [
          "The global object",
          "undefined",
          "The enclosing lexical context",
          "The function itself",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the output of: `console.log(typeof typeof 1);`",
        options: ["'number'", "'string'", "'undefined'", "'function'"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the output of: `console.log(!!'false' === !!'true');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "Which is NOT a falsy value in JavaScript?",
        options: ["0", "''", "null", "'0'"],
        correctAnswer: 3,
      },
      {
        question: "What is the output of: `console.log([] == ![]);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(new Date(0) - 0);`",
        options: ["0", "1", "NaN", "Current timestamp"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of: `console.log('b' + 'a' + +'a' + 'a');`",
        options: ["'baNaNa'", "'baaa'", "'baundefineda'", "'baa'"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log([1,2,3] == [1,2,3]);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(Math.max());`",
        options: ["0", "Infinity", "-Infinity", "NaN"],
        correctAnswer: 2,
      },
      {
        question: "What is the output of: `console.log(Number(null));`",
        options: ["0", "null", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(undefined == null);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(undefined === null);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log('' == '0');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(0 == '0');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(false == 'false');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log([] == 0);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log([] == '');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log([] == false);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log([0] == false);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log('1' == true);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log('01' == true);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log('2' == true);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log('0' == false);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!!'');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(!!' ');`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!!0);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(!!1);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!!-1);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!!null);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(!!undefined);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(!!NaN);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(!!{});`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!![]);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!![0]);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(!!''.length);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(!!' '.length);`",
        options: ["true", "false", "undefined", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+[]);`",
        options: ["0", "NaN", "[]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+[1]);`",
        options: ["1", "NaN", "[1]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+[1,2]);`",
        options: ["1", "NaN", "[1,2]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+{});`",
        options: ["0", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(Number([]));`",
        options: ["0", "NaN", "[]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(Number([1]));`",
        options: ["1", "NaN", "[1]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(Number([1,2]));`",
        options: ["1", "NaN", "[1,2]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(Number({}));`",
        options: ["0", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(String([]));`",
        options: ["''", "'[]'", "[]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(String([1]));`",
        options: ["'1'", "'[1]'", "[1]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(String([1,2]));`",
        options: ["'1,2'", "'[1,2]'", "[1,2]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(String({}));`",
        options: ["'[object Object]'", "'{}'", "{}", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(Boolean([]));`",
        options: ["true", "false", "[]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(Boolean([0]));`",
        options: ["true", "false", "[0]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(Boolean({}));`",
        options: ["true", "false", "{}", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log([] + {});`",
        options: ["'[object Object]'", "{}", "0", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log({} + []);`",
        options: ["'[object Object]'", "0", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log({} + {});`",
        options: ["'[object Object][object Object]'", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log([] - []);`",
        options: ["0", "NaN", "[]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log({} - {});`",
        options: ["0", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log([] - {});`",
        options: ["0", "NaN", "-[object Object]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log({} - []);`",
        options: ["0", "NaN", "-[object Object]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'');`",
        options: ["0", "NaN", "''", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+' ');`",
        options: ["0", "NaN", "' '", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'0');`",
        options: ["0", "NaN", "'0'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'1');`",
        options: ["1", "NaN", "'1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'-1');`",
        options: ["-1", "NaN", "'-1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'1.1');`",
        options: ["1.1", "NaN", "'1.1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'a');`",
        options: ["0", "NaN", "'a'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'1a');`",
        options: ["1", "NaN", "'1a'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'1.1.1');`",
        options: ["1.1", "NaN", "'1.1.1'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'Infinity');`",
        options: ["Infinity", "NaN", "'Infinity'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'-Infinity');`",
        options: ["-Infinity", "NaN", "'-Infinity'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'NaN');`",
        options: ["NaN", "'NaN'", "0", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+'true');`",
        options: ["1", "NaN", "'true'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'false');`",
        options: ["0", "NaN", "'false'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'null');`",
        options: ["0", "NaN", "'null'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+'undefined');`",
        options: ["0", "NaN", "'undefined'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+[]);`",
        options: ["0", "NaN", "[]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+[1]);`",
        options: ["1", "NaN", "[1]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(+[1,2]);`",
        options: ["1", "NaN", "[1,2]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(+{});`",
        options: ["0", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt(''));`",
        options: ["0", "NaN", "''", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt(' '));`",
        options: ["0", "NaN", "' '", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt('0'));`",
        options: ["0", "NaN", "'0'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt('1'));`",
        options: ["1", "NaN", "'1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt('-1'));`",
        options: ["-1", "NaN", "'-1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt('1.1'));`",
        options: ["1", "NaN", "'1.1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt('a'));`",
        options: ["0", "NaN", "'a'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt('1a'));`",
        options: ["1", "NaN", "'1a'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt('1.1.1'));`",
        options: ["1", "NaN", "'1.1.1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt('Infinity'));`",
        options: ["Infinity", "NaN", "'Infinity'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the output of: `console.log(parseInt('-Infinity'));`",
        options: ["-Infinity", "NaN", "'-Infinity'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt('NaN'));`",
        options: ["NaN", "'NaN'", "0", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt('true'));`",
        options: ["1", "NaN", "'true'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt('false'));`",
        options: ["0", "NaN", "'false'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt('null'));`",
        options: ["0", "NaN", "'null'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the output of: `console.log(parseInt('undefined'));`",
        options: ["0", "NaN", "'undefined'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt([]));`",
        options: ["0", "NaN", "[]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseInt([1]));`",
        options: ["1", "NaN", "[1]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt([1,2]));`",
        options: ["1", "NaN", "[1,2]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseInt({}));`",
        options: ["0", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat(''));`",
        options: ["0", "NaN", "''", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat(' '));`",
        options: ["0", "NaN", "' '", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat('0'));`",
        options: ["0", "NaN", "'0'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat('1'));`",
        options: ["1", "NaN", "'1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat('-1'));`",
        options: ["-1", "NaN", "'-1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat('1.1'));`",
        options: ["1.1", "NaN", "'1.1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat('a'));`",
        options: ["0", "NaN", "'a'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat('1a'));`",
        options: ["1", "NaN", "'1a'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat('1.1.1'));`",
        options: ["1.1", "NaN", "'1.1.1'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of: `console.log(parseFloat('Infinity'));`",
        options: ["Infinity", "NaN", "'Infinity'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of: `console.log(parseFloat('-Infinity'));`",
        options: ["-Infinity", "NaN", "'-Infinity'", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat('NaN'));`",
        options: ["NaN", "'NaN'", "0", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat('true'));`",
        options: ["1", "NaN", "'true'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat('false'));`",
        options: ["0", "NaN", "'false'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat('null'));`",
        options: ["0", "NaN", "'null'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the output of: `console.log(parseFloat('undefined'));`",
        options: ["0", "NaN", "'undefined'", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat([]));`",
        options: ["0", "NaN", "[]", "TypeError"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of: `console.log(parseFloat([1]));`",
        options: ["1", "NaN", "[1]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat([1,2]));`",
        options: ["1", "NaN", "[1,2]", "TypeError"],
        correctAnswer: 0,
      },
      {
        question: "What is the output of: `console.log(parseFloat({}));`",
        options: ["0", "NaN", "{}", "TypeError"],
        correctAnswer: 1,
      },
      {
        question:
          "Explain the difference between `==` and `===` in JavaScript with examples.",
        options: [
          "`==` compares values only, `===` compares values and types",
          "`==` compares values and types, `===` compares values only",
          "There is no difference",
          "`==` is deprecated in modern JavaScript",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the output of `console.log(0.1 + 0.2 === 0.3)` and why?",
        options: [
          "true - because the math is correct",
          "false - due to floating point precision issues",
          "undefined - because these numbers can't be compared",
          "NaN - because the operation is invalid",
        ],
        correctAnswer: 1,
      },
      {
        question: "How does JavaScript's event loop work?",
        options: [
          "It processes all synchronous code first, then async callbacks",
          "It randomly executes code in no particular order",
          "It uses multiple threads to execute code simultaneously",
          "It only works with DOM events",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the Temporal Dead Zone in JavaScript?",
        options: [
          "A period where variables are inaccessible before their declaration",
          "A browser rendering optimization technique",
          "A memory management feature in Node.js",
          "A deprecated JavaScript feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain the concept of closures in JavaScript.",
        options: [
          "Functions that remember their lexical scope even when executed outside it",
          "A way to close memory leaks in applications",
          "A pattern for private class members",
          "A technique for garbage collection",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `use strict` directive?",
        options: [
          "To enforce stricter parsing and error handling in JavaScript",
          "To make JavaScript run faster",
          "To enable TypeScript-like features",
          "To prevent cross-site scripting attacks",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement memoization in JavaScript?",
        options: [
          "By using closures to cache function results",
          "By converting functions to strings",
          "By using the memoize keyword",
          "JavaScript doesn't support memoization",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the difference between `null` and `undefined`?",
        options: [
          "`null` is an intentional absence of value, `undefined` means a variable hasn't been assigned",
          "`undefined` is an intentional absence of value, `null` means a variable hasn't been assigned",
          "They are identical and interchangeable",
          "`null` is a primitive, `undefined` is an object",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain the prototype chain in JavaScript.",
        options: [
          "The mechanism by which objects inherit properties from other objects",
          "A way to chain function calls together",
          "A deprecated inheritance pattern",
          "A type of linked list used internally by JavaScript",
        ],
        correctAnswer: 0,
      },
      {
        question: "What are JavaScript generators and how do they work?",
        options: [
          "Functions that can be paused and resumed using yield",
          "Functions that generate random numbers",
          "A pattern for creating factory functions",
          "A deprecated ES6 feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How does `this` binding work in arrow functions compared to regular functions?",
        options: [
          "Arrow functions inherit `this` from their enclosing scope",
          "Arrow functions have their own `this` binding",
          "Arrow functions cannot use `this` at all",
          "Arrow functions treat `this` as undefined",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the difference between `let`, `const`, and `var`?",
        options: [
          "`let` and `const` are block-scoped, `var` is function-scoped",
          "They are all identical in behavior",
          "`var` is block-scoped, `let` and `const` are function-scoped",
          "`const` is mutable, `let` and `var` are immutable",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain the concept of hoisting in JavaScript.",
        options: [
          "Variable and function declarations are moved to the top of their scope",
          "Variables are automatically initialized with default values",
          "Functions are loaded before variables",
          "A performance optimization technique",
        ],
        correctAnswer: 0,
      },
      {
        question: "What are JavaScript decorators and how would you use them?",
        options: [
          "Functions that modify classes or properties at design time",
          "A way to style console.log output",
          "A pattern for decorating DOM elements",
          "A deprecated ES7 feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a deep clone of an object in JavaScript?",
        options: [
          "Using `JSON.parse(JSON.stringify(obj))` or a recursive function",
          "Using the spread operator `{...obj}`",
          "Using `Object.assign({}, obj)`",
          "JavaScript objects cannot be cloned",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol` primitive type in JavaScript?",
        options: [
          "To create unique property keys that won't collide",
          "To represent mathematical symbols",
          "To create private methods in classes",
          "To optimize memory usage",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how async/await works under the hood.",
        options: [
          "It's syntactic sugar over Promises and generators",
          "It creates new threads for asynchronous operations",
          "It's a completely new concurrency model",
          "It only works with fetch API",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the difference between `Object.create()` and the `new` keyword?",
        options: [
          "`Object.create()` creates an object with a specific prototype, `new` does that and calls constructor",
          "They are identical in functionality",
          "`new` is for classes, `Object.create()` is for prototypes",
          "`Object.create()` is deprecated",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you handle memory leaks in a JavaScript application?",
        options: [
          "By removing event listeners, clearing intervals, and nullifying references",
          "JavaScript has automatic memory management so leaks don't happen",
          "By using the `delete` keyword extensively",
          "By manually calling the garbage collector",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `WeakMap` and `WeakSet` in JavaScript?",
        options: [
          "To store weak references that don't prevent garbage collection",
          "To create maps and sets with better performance",
          "To handle memory leaks automatically",
          "They are deprecated data structures",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain the Same-Origin Policy and how to work around it.",
        options: [
          "Security policy preventing cross-origin requests, workarounds include CORS and JSONP",
          "A performance optimization technique",
          "A rule about variable naming conventions",
          "A deprecated security feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "What are JavaScript Proxies and Reflect API used for?",
        options: [
          "To intercept and customize operations on objects",
          "To create network proxies for API calls",
          "To reflect object properties as strings",
          "They are deprecated features",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a publish-subscribe pattern in JavaScript?",
        options: [
          "Using an event emitter pattern with subscribers and publishers",
          "Using the Observer API built into JavaScript",
          "Using the pub/sub keywords",
          "JavaScript doesn't support this pattern",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the difference between `setImmediate()`, `setTimeout()`, and `process.nextTick()` in Node.js?",
        options: [
          "They have different positions in the event loop execution order",
          "They are identical in functionality",
          "`setImmediate()` is deprecated",
          "`process.nextTick()` is browser-only",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how Web Workers work in JavaScript.",
        options: [
          "They run scripts in background threads separate from the main execution thread",
          "They are a way to share memory between browser tabs",
          "They are deprecated in favor of Service Workers",
          "They only work in Node.js",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `finally` block in a try-catch statement?",
        options: [
          "To execute code regardless of whether an exception was thrown",
          "To handle uncaught exceptions",
          "To replace the `catch` block",
          "It's deprecated in modern JavaScript",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom iterable object in JavaScript?",
        options: [
          "By defining a `[Symbol.iterator]` method",
          "By using the `iterable` keyword",
          "By extending the Array class",
          "JavaScript doesn't support custom iterables",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Intl` object in JavaScript?",
        options: [
          "To provide language sensitive string comparison, number formatting, and date/time formatting",
          "To handle international network requests",
          "To translate strings automatically",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain the difference between `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()`.",
        options: [
          "They provide different levels of object immutability",
          "They are identical in functionality",
          "They are deprecated object methods",
          "They are used for memory optimization",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a singleton pattern in JavaScript?",
        options: [
          "Using a module pattern or class with a static getInstance method",
          "Using the `singleton` keyword",
          "By creating multiple instances of a class",
          "JavaScript doesn't support singletons",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `with` statement and why is it discouraged?",
        options: [
          "It adds properties to the scope chain but makes code harder to optimize",
          "It's used for exception handling but is unreliable",
          "It's a deprecated feature with no purpose",
          "It's used for memory management",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how the `new.target` property works in JavaScript.",
        options: [
          "It detects whether a function was called with `new`",
          "It's used for targeting DOM elements",
          "It's a deprecated feature",
          "It returns the target of an event",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the difference between `Array.prototype.map()` and `Array.prototype.forEach()`?",
        options: [
          "`map()` returns a new array, `forEach()` doesn't return anything",
          "They are identical in functionality",
          "`forEach()` is faster than `map()`",
          "`map()` mutates the original array",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a debounce or throttle function in JavaScript?",
        options: [
          "Using closures and setTimeout/clearTimeout",
          "Using the built-in `debounce` and `throttle` functions",
          "By extending the Function prototype",
          "JavaScript doesn't support these patterns",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `void` operator in JavaScript?",
        options: [
          "To evaluate an expression and return undefined",
          "To free up memory",
          "To skip the current iteration in a loop",
          "It's a deprecated operator",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `super` keyword works in JavaScript classes.",
        options: [
          "It calls the parent class's constructor or methods",
          "It's used for superior performance methods",
          "It's a deprecated feature",
          "It creates superglobal variables",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `in` operator in JavaScript?",
        options: [
          "To check if a property exists in an object or its prototype chain",
          "To iterate through array elements",
          "To create new object properties",
          "It's a deprecated operator",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a custom error type in JavaScript?",
        options: [
          "By extending the Error class",
          "By using the `new ErrorType()` syntax",
          "By modifying the Error prototype",
          "JavaScript doesn't support custom errors",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `label` statement in JavaScript?",
        options: [
          "To identify loops for `break` or `continue` statements",
          "To label variables for debugging",
          "To create named code blocks",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain the difference between `Object.keys()`, `Object.getOwnPropertyNames()`, and `Object.getOwnPropertySymbols()`.",
        options: [
          "They return different sets of property names from an object",
          "They are identical in functionality",
          "They are deprecated object methods",
          "They are used for memory optimization",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a promise polyfill for older browsers?",
        options: [
          "By creating a constructor with resolve/reject methods and then/catch handlers",
          "By using the `Promise` keyword directly",
          "By extending the Function prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `ArrayBuffer` and `TypedArray` in JavaScript?",
        options: [
          "To work with raw binary data",
          "To optimize array performance",
          "To create typed variables",
          "They are deprecated features",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how the `instanceof` operator works in JavaScript.",
        options: [
          "It checks the prototype chain of an object",
          "It compares object types directly",
          "It's a deprecated operator",
          "It only works with primitive types",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `atomics` object in JavaScript?",
        options: [
          "To provide atomic operations for shared memory in Web Workers",
          "To handle atomic CSS operations",
          "To create atomic variables",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `toString()` or `valueOf()` method for an object?",
        options: [
          "By defining these methods on the object or its prototype",
          "By using the `toString` and `valueOf` keywords",
          "By extending the Object prototype",
          "JavaScript doesn't support customizing these methods",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `with` statement in JavaScript?",
        options: [
          "To add properties to the scope chain (deprecated and discouraged)",
          "To handle exceptions",
          "To create with-scoped variables",
          "It's a new ES6 feature for object destructuring",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `import()` dynamic import function works in JavaScript.",
        options: [
          "It loads modules dynamically at runtime and returns a promise",
          "It's identical to static imports but with different syntax",
          "It's a deprecated feature",
          "It only works in Node.js",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `SharedArrayBuffer` in JavaScript?",
        options: [
          "To share memory between Web Workers",
          "To optimize array performance",
          "To create shared variables between scripts",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a custom promise-based API?",
        options: [
          "By creating functions that return new Promise()",
          "By using the `promise` keyword",
          "By extending the Promise prototype",
          "JavaScript doesn't support custom promises",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `FinalizationRegistry` in JavaScript?",
        options: [
          "To run callbacks when objects are garbage collected",
          "To register final variables that can't be changed",
          "To optimize memory usage",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how the `Object.is()` method differs from `===`.",
        options: [
          "It handles special cases like NaN and -0 differently",
          "It's identical to === but with different syntax",
          "It's a deprecated method",
          "It only works with objects",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `globalThis` property in JavaScript?",
        options: [
          "To access the global object consistently across environments",
          "To create global variables",
          "To reference the current context",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom event emitter in JavaScript?",
        options: [
          "By creating an object with subscribe/publish methods and a callback registry",
          "By using the built-in EventEmitter class",
          "By extending the Object prototype",
          "JavaScript doesn't support custom event emitters",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `WeakRef` in JavaScript?",
        options: [
          "To hold weak references to objects that don't prevent garbage collection",
          "To create weakly typed variables",
          "To optimize memory usage",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how the `Array.prototype.reduce()` method works.",
        options: [
          "It executes a reducer function on each element, accumulating a single result",
          "It reduces the size of an array",
          "It's identical to `map()` but with different syntax",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Proxy` revocable method?",
        options: [
          "To create a proxy that can be revoked later",
          "To reverse proxy operations",
          "To create temporary proxies",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom JSON serialization/deserialization for an object?",
        options: [
          "By implementing `toJSON()` and a custom constructor",
          "By using the `serialize` and `deserialize` keywords",
          "By extending the JSON prototype",
          "JavaScript doesn't support custom JSON handling",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Array.prototype.flatMap()` method?",
        options: [
          "To map each element and then flatten the result by one level",
          "To create a flat map data structure",
          "It's identical to `map()` but with better performance",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `String.raw` template tag works in JavaScript.",
        options: [
          "It returns the raw string form of template literals without processing escapes",
          "It converts strings to raw binary format",
          "It's a deprecated feature",
          "It only works with regular expressions",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Object.fromEntries()` method?",
        options: [
          "To transform a list of key-value pairs into an object",
          "To create objects from class instances",
          "To optimize object creation",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom iterator that can be used with `for...of`?",
        options: [
          "By defining a `[Symbol.iterator]` method that returns an iterator object",
          "By using the `iterator` keyword",
          "By extending the Array prototype",
          "JavaScript doesn't support custom iterators",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Array.prototype.includes()` method compared to `indexOf()`?",
        options: [
          "`includes()` checks for existence, `indexOf()` finds position",
          "They are identical in functionality",
          "`indexOf()` is deprecated in favor of `includes()`",
          "`includes()` only works with primitive values",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Object.setPrototypeOf()` method differs from `__proto__`.",
        options: [
          "`setPrototypeOf()` is the standard way, `__proto__` is deprecated",
          "They are identical in functionality",
          "`__proto__` is faster than `setPrototypeOf()`",
          "`setPrototypeOf()` only works with null prototypes",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Function.prototype.bind()` method?",
        options: [
          "To create a new function with a specific `this` value and initial arguments",
          "To bind event handlers to DOM elements",
          "To connect two functions together",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `thenable` object that works with promises?",
        options: [
          "By creating an object with a `then` method",
          "By using the `thenable` keyword",
          "By extending the Promise prototype",
          "JavaScript doesn't support custom thenables",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.defineProperty()` method?",
        options: [
          "To define or modify properties with specific attributes",
          "To create new objects from properties",
          "To optimize property access",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.sort()` method works with a compare function.",
        options: [
          "The compare function should return negative, zero, or positive to determine order",
          "The compare function should return true/false",
          "The compare function is deprecated",
          "The compare function only works with numbers",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.iterator` property in JavaScript?",
        options: [
          "To make objects iterable for `for...of` loops",
          "To create iterator functions",
          "To optimize array performance",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `async` function without using the `async` keyword?",
        options: [
          "By returning a Promise and using generator functions",
          "By using the `await` keyword directly",
          "By extending the Function prototype",
          "JavaScript doesn't support custom async functions",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.getOwnPropertyDescriptors()` method?",
        options: [
          "To get all property descriptors of an object at once",
          "To optimize property access",
          "To create property descriptors",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.splice()` method differs from `slice()`.",
        options: [
          "`splice()` modifies the array, `slice()` returns a new array",
          "They are identical in functionality",
          "`slice()` is deprecated in favor of `splice()`",
          "`splice()` only works with arrays of objects",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Reflect` API in JavaScript?",
        options: [
          "To provide methods for interceptable JavaScript operations",
          "To reflect object properties as strings",
          "To optimize reflection operations",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.allSettled()` polyfill?",
        options: [
          "By mapping promises to new promises that always resolve",
          "By using the `allSettled` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Object.isExtensible()` method?",
        options: [
          "To determine if an object can have new properties added",
          "To check if an object is sealed",
          "To optimize object extension",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.filter()` method works with sparse arrays.",
        options: [
          "It skips empty slots in sparse arrays",
          "It converts sparse arrays to dense arrays",
          "It throws an error with sparse arrays",
          "It's deprecated for sparse arrays",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.asyncIterator` property in JavaScript?",
        options: [
          "To make objects iterable in `for await...of` loops",
          "To create asynchronous iterator functions",
          "To optimize async operations",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a custom `Promise.race()` polyfill?",
        options: [
          "By creating a new Promise that resolves/rejects when any input promise settles",
          "By using the `race` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Object.isSealed()` method?",
        options: [
          "To determine if an object is sealed",
          "To check if an object is frozen",
          "To optimize object sealing",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.find()` method differs from `filter()`.",
        options: [
          "`find()` returns the first matching element, `filter()` returns all matches",
          "They are identical in functionality",
          "`filter()` is deprecated in favor of `find()`",
          "`find()` only works with objects",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.toPrimitive` method in JavaScript?",
        options: [
          "To customize object conversion to primitive values",
          "To create primitive type symbols",
          "To optimize primitive operations",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a custom `Promise.any()` polyfill?",
        options: [
          "By creating a new Promise that resolves when any input promise resolves",
          "By using the `any` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Object.isFrozen()` method?",
        options: [
          "To determine if an object is frozen",
          "To check if an object is sealed",
          "To optimize object freezing",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.flat()` method works with depth parameter.",
        options: [
          "It flattens the array to the specified depth",
          "It only flattens one level regardless of depth",
          "It throws an error if depth > 1",
          "It's deprecated for depth parameters",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.toStringTag` property in JavaScript?",
        options: [
          "To customize the `Object.prototype.toString()` output",
          "To create string tags for symbols",
          "To optimize string conversion",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.finally()` polyfill?",
        options: [
          "By adding a `then` handler that executes regardless of resolution",
          "By using the `finally` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.preventExtensions()` method?",
        options: [
          "To prevent new properties from being added to an object",
          "To make all properties read-only",
          "To optimize object property access",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.reduceRight()` method differs from `reduce()`.",
        options: [
          "It processes the array from right to left instead of left to right",
          "They are identical in functionality",
          "`reduce()` is deprecated in favor of `reduceRight()`",
          "`reduceRight()` only works with numbers",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.hasInstance` property in JavaScript?",
        options: [
          "To customize the behavior of the `instanceof` operator",
          "To check if an object is an instance",
          "To optimize instance checks",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a custom `Promise.try()` polyfill?",
        options: [
          "By creating a function that immediately invokes the executor in a try/catch",
          "By using the `try` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Object.seal()` method?",
        options: [
          "To prevent new properties and make existing properties non-configurable",
          "To make all properties read-only",
          "To optimize object sealing",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.copyWithin()` method works.",
        options: [
          "It copies a sequence of array elements within the array",
          "It creates a new copy of the array",
          "It's deprecated in favor of `slice()`",
          "It only works with typed arrays",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.isConcatSpreadable` property in JavaScript?",
        options: [
          "To control whether an object is flattened when used with `Array.prototype.concat()`",
          "To check if an array can be concatenated",
          "To optimize array concatenation",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question: "How would you implement a custom `Promise.all()` polyfill?",
        options: [
          "By creating a new Promise that resolves when all input promises resolve",
          "By using the `all` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the `Object.freeze()` method?",
        options: [
          "To make an object immutable",
          "To prevent new properties but allow existing ones to be changed",
          "To optimize object freezing",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.fill()` method works with objects.",
        options: [
          "It fills with references to the same object",
          "It creates new instances of the object",
          "It throws an error with objects",
          "It's deprecated for objects",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.match` property in JavaScript?",
        options: [
          "To customize string matching behavior",
          "To create regular expression symbols",
          "To optimize string matching",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.resolve()` polyfill?",
        options: [
          "By creating a new Promise that immediately resolves with the value",
          "By using the `resolve` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.getPrototypeOf()` method?",
        options: [
          "To get the prototype of an object",
          "To create new prototypes",
          "To optimize prototype access",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.every()` method works with empty arrays.",
        options: [
          "It returns true for any condition on empty arrays",
          "It returns false for any condition on empty arrays",
          "It throws an error with empty arrays",
          "It's deprecated for empty arrays",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.replace` property in JavaScript?",
        options: [
          "To customize string replacement behavior",
          "To create replacement symbols",
          "To optimize string replacement",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.reject()` polyfill?",
        options: [
          "By creating a new Promise that immediately rejects with the reason",
          "By using the `reject` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.setPrototypeOf()` method?",
        options: [
          "To set the prototype of an object",
          "To create new prototypes",
          "To optimize prototype setting",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.some()` method works with empty arrays.",
        options: [
          "It returns false for any condition on empty arrays",
          "It returns true for any condition on empty arrays",
          "It throws an error with empty arrays",
          "It's deprecated for empty arrays",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.search` property in JavaScript?",
        options: [
          "To customize string search behavior",
          "To create search symbols",
          "To optimize string searching",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise` constructor polyfill?",
        options: [
          "By creating a constructor with resolve/reject methods and then/catch handlers",
          "By using the `Promise` keyword directly",
          "By extending the Function prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.prototype.hasOwnProperty()` method?",
        options: [
          "To check if a property exists directly on an object (not inherited)",
          "To check if a property exists anywhere in the prototype chain",
          "To optimize property checking",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype.values()` method differs from `keys()`.",
        options: [
          "`values()` returns array elements, `keys()` returns indices",
          "They are identical in functionality",
          "`keys()` is deprecated in favor of `values()`",
          "`values()` only works with objects",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.split` property in JavaScript?",
        options: [
          "To customize string splitting behavior",
          "To create split symbols",
          "To optimize string splitting",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.prototype.catch()` polyfill?",
        options: [
          "By adding it as `then(null, onRejected)`",
          "By using the `catch` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.prototype.isPrototypeOf()` method?",
        options: [
          "To check if an object exists in another object's prototype chain",
          "To get the prototype of an object",
          "To optimize prototype checking",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question: "Explain how the `Array.prototype.entries()` method works.",
        options: [
          "It returns an iterator of [index, value] pairs",
          "It returns an array of property entries",
          "It's deprecated in favor of `values()`",
          "It only works with objects",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.unscopables` property in JavaScript?",
        options: [
          "To exclude properties from `with` statement binding",
          "To create unscoped symbols",
          "To optimize scope chain lookups",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.prototype.finally()` polyfill?",
        options: [
          "By adding a `then` handler that executes regardless of resolution",
          "By using the `finally` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Object.prototype.propertyIsEnumerable()` method?",
        options: [
          "To check if a property will appear in `for...in` loops",
          "To check if a property is writable",
          "To optimize property enumeration",
          "It's a deprecated method",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Explain how the `Array.prototype[Symbol.iterator]()` method works.",
        options: [
          "It returns the default iterator for arrays used by `for...of`",
          "It converts the array to an iterator object",
          "It's deprecated in favor of `values()`",
          "It only works with typed arrays",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the `Symbol.species` property in JavaScript?",
        options: [
          "To customize the constructor used by derived methods",
          "To create species-specific objects",
          "To optimize object creation",
          "It's a deprecated feature",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "How would you implement a custom `Promise.prototype.then()` polyfill?",
        options: [
          "By adding resolution handlers to the promise chain",
          "By using the `then` keyword directly",
          "By extending the Promise prototype",
          "JavaScript doesn't support promise polyfills",
        ],
        correctAnswer: 0,
      },
    ],
  },
];
