1) What is the difference between var, let, and const?
Ans- var, let can be reassigned. but const cant reassigned. var hoist a variable to the top of its scope
let, const also hoist but the variable stay in a temporal dead zone.

2) What is the difference between map(), forEach(), and filter()?
Ans- map and filter mathod return a arrray, but foreach doesnt return a array.

3) What are arrow functions in ES6?
Ans- arrow function is a short way to write function in javascript.
const call=()=>{
console.log('')
}
so this a arrow function.
4) How does destructuring assignment work in ES6?
Ans- const person={ name:'minhajur', age:22}
const {name, age} = person
console.log(name,age) // 'minhajur',22
this is how destructuring work, where cut an object or array into small pieces

5) Explain template literals in ES6. How are they different from string concatenation?
Ans- `` - this is template literals which allow us to write string in a dynamic way.
in normal string like '' "" - we can no add variable inside this string but in template string
we can do that by using ${}

