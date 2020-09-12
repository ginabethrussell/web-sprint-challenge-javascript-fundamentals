// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The nested function is a child of myFunction. Because it is defined inside the parent function, it has access to the parent function's scope. The child function can reach out to grab the parent's variables.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

// function summation(param){
//   return counter(param);
// }
// function counter(value){
//   let counter = 0;
//   for (let i = 0; i <= value; i++ ){
//     counter += i;
//   }
//   return counter;
// }
// console.log(summation(4));

function summation(param){
  let sum = 0;
  function counter(){
    for (let i = 0; i <= param; i++ ){
      sum += i;
    }
    return sum;   
  }
  return counter();
}
console.log(summation(4));
// console.log(summation(10));