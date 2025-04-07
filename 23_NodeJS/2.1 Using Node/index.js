console.log("Hello from Node");
/*
Active code page: 65001

C:\Users\hp\OneDrive\Desktop\web-dev-pro>node -v
v22.14.0

C:\Users\hp\OneDrive\Desktop\web-dev-pro>node
Welcome to Node.js v22.14.0.
Type ".help" for more information.
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
> .exit

C:\Users\hp\OneDrive\Desktop\web-dev-pro>

C:\Users\hp\OneDrive\Desktop\web-dev-pro> node

Welcome to Node.js v22.14.0.
Type ".help" for more information.
> 5 + 8
13
> let a = 3
undefined
> a + 12
15
> cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node\index.js"
cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node\index.js"
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uncaught SyntaxError: Unexpected string       
> cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node"
cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node"
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uncaught SyntaxError: Unexpected string       
> cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node"
cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node"
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uncaught SyntaxError: Unexpected string       
> cd "\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node"
cd "\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node"
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Uncaught SyntaxError: Unexpected string       
> .exit

C:\Users\hp\OneDrive\Desktop\web-dev-pro>cd "C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node" 

C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node>node index.js
Hello from Node

C:\Users\hp\OneDrive\Desktop\web-dev-pro\23_NodeJS\2.1 Using Node>
*/