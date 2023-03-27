export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personage) {
    if (this.members.has(personage)) {
      throw new Error('Данный персонаж уже существует');
    } else {
      this.members.add(personage);
    }
  }

  addAll(...personage) {
    personage.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    for (const personage of this.members) {
      yield personage;
    }
  }
}
