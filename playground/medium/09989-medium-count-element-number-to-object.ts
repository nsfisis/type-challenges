/*
  9989 - Count Element Number To Object
  -------
  by 凤之兮原 (@kongmingLatern) #medium

  ### Question

  With type ``CountElementNumberToObject``, get the number of occurrences of every item from an array and return them in an object. For example:

  ~~~ts
  type Simple1 = CountElementNumberToObject<[]> // return {}
  type Simple2 = CountElementNumberToObject<[1,2,3,4,5]>
  // return {
  //   1: 1,
  //   2: 1,
  //   3: 1,
  //   4: 1,
  //   5: 1
  // }

  type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]>
  // return {
  //   1: 2,
  //   2: 2,
  //   3: 2,
  //   4: 1,
  //   5: 1
  // }
  ~~~

  > View on GitHub: https://tsch.js.org/9989
*/

/* _____________ Your Code Here _____________ */

type Nat = 0[]
type NatZero = []
type NatSucc<N extends Nat> = [0, ...N]
type NatToNum<N extends Nat> = N['length']

type Flatten<T extends any> = T extends [infer Head, ...infer Tail] ? (Head extends any[] ? [...Flatten<Head>, ...Flatten<Tail>] : [Head, ...Flatten<Tail>]) : []

type CountElementNumberToObjectHelper1<T extends any[], Acc extends { [K: keyof any]: Nat }> =
  T extends [infer Head, ...infer Tail]
    ? CountElementNumberToObjectHelper1<Tail, { [P in keyof Acc]: Head extends P ? NatSucc<Acc[P]> : Acc[P] }>
    : Acc
type CountElementNumberToObjectHelper2<T extends any[]> = CountElementNumberToObjectHelper1<T, { [P in T[number]]: NatZero }>
type CountElementNumberToObjectHelper3<Acc extends { [K: keyof any]: Nat }> = { [P in keyof Acc]: NatToNum<Acc[P]> }
type CountElementNumberToObjectHelper4<T extends any[]> = CountElementNumberToObjectHelper3<CountElementNumberToObjectHelper2<Flatten<T>>>
type CountElementNumberToObject<T extends any[]> = T[] extends [never][] ? {} : CountElementNumberToObjectHelper4<T>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  } >>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9989/answer
  > View solutions: https://tsch.js.org/9989/solutions
  > More Challenges: https://tsch.js.org
*/
