/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

type TupleNumber = 0[]
type TupleNumberZero = []
type TupleNumberOne = [0]
type TupleNumberTwo = [0, 0]
type TupleNumberSucc<N extends TupleNumber> = [0, ...N]
type TupleNumberAdd<N extends TupleNumber, M extends TupleNumber> = [...N, ...M]
type TupleNumberSub<N extends TupleNumber, M extends TupleNumber> = N extends [...M, ...infer Diff] ? Diff : TupleNumberZero
type TupleNumberToNumber<N extends TupleNumber> = N['length']
type TupleNumberFromNumberHelper<N extends number, T extends TupleNumber> = N extends TupleNumberToNumber<T> ? T : TupleNumberFromNumberHelper<N, TupleNumberSucc<T>>
type TupleNumberFromNumber<N extends number> = TupleNumberFromNumberHelper<N, TupleNumberZero>

type TupleNumberFibonacci<N extends TupleNumber> =
    N extends TupleNumberOne ? TupleNumberOne
  : N extends TupleNumberTwo ? TupleNumberOne
  : TupleNumberAdd<TupleNumberFibonacci<TupleNumberSub<N, TupleNumberOne>>, TupleNumberFibonacci<TupleNumberSub<N, TupleNumberTwo>>>

type Fibonacci<T extends number> = TupleNumberToNumber<TupleNumberFibonacci<TupleNumberFromNumber<T>>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
