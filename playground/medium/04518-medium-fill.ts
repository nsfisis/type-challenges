/*
  4518 - Fill
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple

  ### Question

  `Fill`, a common JavaScript function, now let us implement it with types.
  `Fill<T, N, Start?, End?>`, as you can see,`Fill` accepts four types of parameters, of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters.
  The requirements for these parameters are: `T` must be a `tuple`, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0.

  ```ts
  type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
  ```
  In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

  > View on GitHub: https://tsch.js.org/4518
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
type LogicalAnd<T extends boolean, U extends boolean> = T extends true ? (U extends true ? true : false) : false

type FillHelper<
  T extends unknown[],
  N,
  Start extends Nat,
  End extends Nat,
  Idx extends Nat,
> = T extends [infer Head, ...infer Tail] ? [(LogicalAnd<NatGe<Idx, Start>, NatGt<End, Idx>> extends true ? N : Head), ...FillHelper<Tail, N, Start, End, NatSucc<Idx>>] : []

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
> = FillHelper<T, N, NumberToNat<Start>, NumberToNat<End>, NatZero>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4518/answer
  > View solutions: https://tsch.js.org/4518/solutions
  > More Challenges: https://tsch.js.org
*/
