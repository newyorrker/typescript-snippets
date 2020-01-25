//инициализация интерфейса
interface Rect {
  readonly id: String,
  color?: String,
  size: {
    width: Number,
    height: Number
  }
}

//невалидный интерфейс
const rect1: Rect = {
  id: '12d'
}

const rect2: Rect = {
  id: '123',
  color: 'red',
  size: {
    width: 100,
    height: 100
  }
}

//поле readonly
rect2.id = '12dck';

//приведение к типу
const rect3 = {} as Rect;

//наследование интерфейсов

interface RectWithArea extends Rect {
  getArea: () => Number,
};

const rect5: RectWithArea = {
  id: '123',
  color: 'red',
  size: {
    width: 100,
    height: 100
  },
  getArea(): Number {
    return 500
  }
}