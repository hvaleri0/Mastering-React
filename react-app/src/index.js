const person = {
  talk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
  }
};
person.talk(); // returns the window object Wrong we want the Person Object

const person1 = {
  talk() {
    const self = this;
    setTimeout(function() {
      console.log("self", self);
    }, 1000);
  }
};
person1.talk(); // old school way, assign self to this

const person2 = {
  talk() {
    setTimeout(() => console.log("this", this), 1000);
  }
};
person2.talk(); // The Cleanest way! arrow functions dont rebind the this
