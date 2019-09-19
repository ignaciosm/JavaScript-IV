// CODE here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name,
    this.age = props.age,
    this.location = props.location
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props){
    super(props),
    this.specialty = props.specialty,
    this.favLanguage = props.favLanguage,
    this.catchPhrase = props.catchPhrase
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(Student, subject){
    return `${Student.name} receives a perfect score on ${subject}`
  }
  points(Student){
    return `${Student.name}'s grade is ${Math.min(Math.max(Math.round(Student.grade + (Math.random()*100 - 50)),0),100)}`;
  }
}

class Student extends Person {
  constructor(props){
    super(props),
    this.previousBackground = props.previousBackground,
    this.className = props.className,
    this.favSubjects = props.favSubjects,
    this.grade = props.grade
  }
  listsSubjects(){
    return this.favSubjects;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props),
    this.gradClassName = props.gradClassName,
    this.favInstructor = props.favInstructor
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
  }
  debugsCode(Student, subject){
    return `${this.name} debugs ${Student.name}'s code on ${subject}`;
  }
}





// Test
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const brit = new Instructor({
  name: 'Brit',
  location: 'Hemming',
  age: 31,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Eh?!'
});

const ignacio = new Student({
  name: 'Ignacio',
  location: 'Peru',
  age: 39,
  previousBackground: 'Finance',
  className:'WEB24',
  favSubjects: ['JavaScript','HTML+CSS (I know, not a real language)','Python','Ruby','NodeJS','Java'],
  grade: 50
});

const rachel = new Student({
  name: 'Rachel',
  location: 'California',
  age: 35,
  previousBackground: 'Tech',
  className:'WEB34',
  favSubjects: ['CSS'],
  grade: 65
});

const don = new ProjectManager({
  name: 'Don',
  location: 'Somewhere',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Hello Lambda'
});

const john = new ProjectManager({
  name: 'John',
  location: 'Mars',
  age: 37,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: 'I am made up'
});

console.log(fred.speak());
console.log(brit.demo('JavaScript'));
console.log(brit.grade(ignacio,'CSS'));
console.log(ignacio.listsSubjects());
console.log(ignacio.PRAssignment('Python'));
console.log(rachel.sprintChallenge('Ruby'));
console.log(don.standUp('web24'));
console.log(john.debugsCode(ignacio,ignacio.favSubjects[0]));
console.log(don.points(ignacio));