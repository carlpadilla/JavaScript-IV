// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.favLanguage = attributes.favLanguage;
    this.specialty = attributes.specialty;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    console.log(...this.favSubjects);
  }
  PRAssignment(name, subject) {
    console.log(`${name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(name, subject) {
    console.log(`${name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  ProjectManagers(name, channel) {
    console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

//Testing examples
const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock'
});
console.log(fred.speak());

const john = new Instructor({
  name: 'John',
  age: 30,
  location: 'Philly',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: "Don't forget the homies"
});

const jacob = new Student({
  name: 'Jacob',
  age: 25,
  location: 'West coast',
  previousBackground: 'something',
  className: 'Web1',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

//logging to test output
console.log(john.demo('CSS'));
console.log(john.grade('Timmy', 'CSS'));
console.log(jacob);
console.log(jacob.listsSubjects());
