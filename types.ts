const isFetching: Boolean = false;
const isLoading: Boolean = false;

console.log(isFetching, isLoading);

let number1: Number = 600;
let nubmer2: Number = 3.4;

function greatFunc(newParam: Number): string {
  return newParam + 'great';
}

console.log(greatFunc(number1));

//простой тип с одним возможным типом значения
type SimpleCustomType = string;

//сложный тип который может иметь значения указанных типов
type ComplexCustomType = string | number;