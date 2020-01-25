class Typescript {
  version: string

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car {
//   readonly model: string,
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  /**
   * setVoice
   */
  public setVoice(voice: string) {
    this.voice = voice
  }

  /**
   * getVoice
   */
  public getVoice(): string {
    return this.voice;
  }
}

const cat = new Cat();

cat.setVoice('meow')
console.log(cat.getVoice());

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render():void {
    console.log('Component on render');
  }

  info(): string {
    return 'Some info'
  }
}