// TODO: Create a function called greet that takes a name parameter
// TODO: Make the greet function return "Hello, [name]!"
// TODO: Create a function called add that takes two parameters
// TODO: Make the add function return the sum of both parameters
// TODO: Call both functions and store their results in variables
// TODO: Print the results to the console

function greet(name){
    return "Hello" + ", " + name + "!";
}

function add(a, b){
    return a + b;
} 
let greetingMessage = greet("Alice");
let sumResult = add(5, 10);
console.log(greetingMessage);
console.log("Sum:", sumResult);
console.log(greet("Alice"));
console.log("Sum:", add(5, 10));
