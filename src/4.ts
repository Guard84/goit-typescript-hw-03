class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
};

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } 
  }
}

class MyHouse extends House {
  constructor(door: boolean, key: Key) {
    super(door, key);
  }

  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
    } else {
      throw new Error("Invalid key");
    }
  }
}


const key = new Key();

const house = new MyHouse(false, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};