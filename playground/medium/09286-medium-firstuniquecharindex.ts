/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > View on GitHub: https://tsch.js.org/9286
*/

/* _____________ Your Code Here _____________ */

type Nat = 0[]
type NatZero = []
type NatSucc<N extends Nat> = [0, ...N]
type NatToNum<N extends Nat> = N['length']

type DuplicateCharsHelper<T extends string, U extends string> = T extends `${infer Head}${infer Tail}` ? (Head extends U ? (Head | DuplicateCharsHelper<Tail, Head | U>) : (DuplicateCharsHelper<Tail, Head | U>)) : never
type DuplicateChars<T extends string> = DuplicateCharsHelper<T, never>
type FirstUniqueCharIndexHelper<Idx extends Nat, T extends string, D extends string> =
  T extends `${infer Head}${infer Tail}`
    ? (Head extends D ? FirstUniqueCharIndexHelper<NatSucc<Idx>, Tail, D> : NatToNum<Idx>)
    : -1
type FirstUniqueCharIndex<T extends string> = FirstUniqueCharIndexHelper<NatZero, T, DuplicateChars<T>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9286/answer
  > View solutions: https://tsch.js.org/9286/solutions
  > More Challenges: https://tsch.js.org
*/
