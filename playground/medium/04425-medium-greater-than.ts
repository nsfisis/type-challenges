/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type Nat = 0[]
type NatZero = []
type NatSucc<N extends Nat> = [0, ...N]
type NumberToNatHelper<T extends number, N extends Nat> = T extends NatToNumber<N> ? N : NumberToNatHelper<T, NatSucc<N>>
type NatToNumber<N extends Nat> = N['length']
type NumberToNat<T extends number> = NumberToNatHelper<T, NatZero>

type NatGe<N extends Nat, M extends Nat> = N extends [...M, ...any[]] ? true : false
type NatEq<N extends Nat, M extends Nat> = N extends M ? true : false
type NatGt<N extends Nat, M extends Nat> = NatEq<N, M> extends true ? false : NatGe<N, M>
type GreaterThan<T extends number, U extends number> = NatGt<NumberToNat<T>, NumberToNat<U>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
