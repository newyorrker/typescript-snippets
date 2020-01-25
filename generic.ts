const arrayOfNumbers: Array<number> = [1, 2, 3, 6, 8];
const arrayOfStrings: Array<string> = ['Kolya', 'Vasya', 'Volodya'];

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);