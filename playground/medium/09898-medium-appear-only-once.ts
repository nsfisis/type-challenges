/*
  9898 - Appear only once
  -------
  by X.Q. Chen (@brenner8023) #medium

  ### Question

  Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.

  > View on GitHub: https://tsch.js.org/9898
*/

/* _____________ Your Code Here _____________ */

type DuplicateCharsHelper<T extends any[], U> = T extends [infer Head, ...infer Tail] ? (Head extends U ? (Head | DuplicateCharsHelper<Tail, Head | U>) : (DuplicateCharsHelper<Tail, Head | U>)) : never
type DuplicateChars<T extends any[]> = DuplicateCharsHelper<T, never>
type FindElesHelper<T extends any[], U> = T extends [infer Head, ...infer Tail] ? (Head extends U ? FindElesHelper<Tail, U> : [Head, ...FindElesHelper<Tail, U>]) : []
type FindEles<T extends any[]> = FindElesHelper<T, DuplicateChars<T>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9898/answer
  > View solutions: https://tsch.js.org/9898/solutions
  > More Challenges: https://tsch.js.org
*/
