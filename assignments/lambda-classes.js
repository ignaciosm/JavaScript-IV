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
  demo(){
    return `Today we are learning about ${this.specialty}`;
  }
  grade(){
    return `${this.name} receives a perfect score on ${this.specialty}`
  }
}

class Student extends Person {
  constructor(props){
    super(props),
    this.previousBackground = props.previousBackground,
    this.className = props.className,
    this.favSubjects = props.favSubjects
  }
  listsSubjects(){
    return this.favSubjects;
  }
  PRAssignment(){
    return `${this.name} has submitted a PR for ${this.favSubjects[0]}`;
  }
  sprintChallenge(){
    return `${this.name} has begun sprint challenge on ${this.favSubjects[0]}`;
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

const ignacio = new Student({
  name: 'Ignacio',
  location: 'Peru',
  age: 39,
  previousBackground: 'Finance',
  className:'WEB24',
  favSubjects: ['JavaScript','Python','Ruby']
});

console.log(fred.speak());
console.log(fred.demo());
console.log(fred.grade());
console.log(ignacio.listsSubjects());
console.log(ignacio.PRAssignment());
console.log(ignacio.sprintChallenge());