export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой!');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Значение не соответствует');
    }
    if (
      ![
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ].includes(type)
    ) {
      throw new Error('Заданный персонаж не существует');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
