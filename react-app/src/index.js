import Teacher, { promote } from "./teacher";
import { Person } from "./person";

const person = new Person("Hector");
const teacher = new Teacher("Hector", "programming");

console.log(person);
console.log(teacher);
teacher.teach();
