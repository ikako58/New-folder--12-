class Animal{
    constructor(animal , sound){
        this.animal = animal;
        this.sound = sound;
    }
    makeSound(){
      console.log(`${this.animal} does ${this.sound}`)
    }
  }
  const myAnimal = new Animal;
  myAnimal.animal = "cat"
  myAnimal.sound = "meow"
  myAnimal.makeSound()