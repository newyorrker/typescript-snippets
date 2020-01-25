interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person;

let key: PersonKeys = 'name'

key = 'age'

type User = {
  _id: number
  name: string
  email: string
  cretedAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysWithOutInfo = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name'

let u2: UserKeysWithOutInfo = {
  name: 'kek',
  email: 'rqwer@m.ru'
}






