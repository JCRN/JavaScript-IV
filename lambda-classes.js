// CODE here for your Lambda Classes

// Base class - Person
class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

// Instructor class - inherits from Person class ***
class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

// Student class - inherits from Person class ***
class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects        
    }

    listsSubjects() {
        this.favSubjects.forE
    }

    PRAssignment() {

    }

    sprintChallenge() {

    }

}
