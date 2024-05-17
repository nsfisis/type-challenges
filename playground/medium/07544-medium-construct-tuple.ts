/*
  7544 - Construct Tuple
  -------
  by Lo (@LoTwT) #medium #tuple

  ### Question

  Construct a tuple with a given length.

  For example

  ```ts
  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
  ```

  > View on GitHub: https://tsch.js.org/7544
*/

/* _____________ Your Code Here _____________ */

type Nat = unknown[]
type NatZero = []
type NatSucc<N extends Nat> = [unknown, ...N]
type NumberToNatHelper<T extends number, N extends Nat> = T extends NatToNumber<N> ? N : NumberToNatHelper<T, NatSucc<N>>
type NatToNumber<N extends Nat> = N['length']
type NumberToNat<T extends number> = NumberToNatHelper<T, NatZero>
type ConstructTuple<L extends number> = NumberToNat<L>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7544/answer
  > View solutions: https://tsch.js.org/7544/solutions
  > More Challenges: https://tsch.js.org
*/
