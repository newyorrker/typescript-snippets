enum CharacterClass {
  Warrior = 2,
  Mage,
  Healer
}
//получение номера
let type: CharacterClass;
type = CharacterClass.Mage;

//получение значение
let typeRevers: String;
typeRevers = CharacterClass[3];

enum Food {
  Meat = 'Meat',
  Chease = 'Chease'
}

const chease = Food.Chease;

console.log(type);
console.log(typeRevers);
console.log(chease);
