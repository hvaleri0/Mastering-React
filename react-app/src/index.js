class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const person = new Person("Hector");
const teacher = new Teacher("Hector", "programming");

console.log(person);
console.log(teacher);
