// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
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
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
  randomGrade() {
    let grade = Math.floor(Math.random() * 99);
    if (grade > 50) {
      console.log((grade += Math.floor(Math.random() * 99)));
    } else {
      console.log((grade -= Math.floor(Math.random() * 99)));
    }
  } // Still working on this solution!
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade;
  }
  listsSubjects() {
    return `...this.favSubjects`;
  }
  PRAssignment(name, subject) {
    return `${name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(name, subject) {
    return `${name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade > 70) {
      return `Your going to Graduate`;
    } else {
      return `Study some more!`;
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  ProjectManagers(name, channel) {
    return `${name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

//Testing examples
const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock'
});
// console.log(fred.speak());

const john = new Instructor({
  name: 'John',
  age: 30,
  location: 'Philly',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: "Don't forget the homies"
});

const carl = new Student({
  name: 'Carl',
  age: 33,
  location: 'Philly',
  previousBackground: 'Sys Admin',
  className: 'Webpt7',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  grade: 78
});

const jacob = new ProjectManagers({
  name: 'Jacob',
  age: 25,
  location: 'Westcoast',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: "That's rad!",
  favInstructor: 'Josh'
});

//logging to test output
console.log(john.demo('CSS'));
console.log(john.grade('Timmy', 'CSS'));
console.log(carl);
console.log(carl.listsSubjects());
console.log(carl.PRAssignment('Carl', 'JavaScript IV'));
console.log(carl.sprintChallenge('Carl', 'JavaScript'));
console.log(jacob.ProjectManagers('Jacob', 'Webpt7'));
console.log(jacob.debugsCode('Carl', 'JS'));

// Stretch Goal testing
console.log(john.randomGrade('Carl'));
console.log(carl.graduate());
