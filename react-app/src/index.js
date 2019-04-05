const person = {
  name: "Mosh",
  walk() {},
  talk() {}
};

person.talk();
person.name = "s";
person["name"] = "john";

const targetMember = "name";
person[targetMember.value] = "John";
