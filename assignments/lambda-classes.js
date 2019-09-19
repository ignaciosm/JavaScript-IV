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

// Test
const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  // favLanguage: 'JavaScript',
  // specialty: 'Front-end',
  // catchPhrase: `Don't forget the homies`
});

console.log(fred.speak());