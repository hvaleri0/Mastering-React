//var -> Function = never use this!
//let -> Block = only use when you need to reasign the variable
//const -> Block = alway use this

function sayHello() {
  for (const i = 0; i < 5; i++) {
    console.log("var of i:", i);
  }
  console.log("var of i:", i);
}
sayHello();
