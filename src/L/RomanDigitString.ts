









import type {
  ArgsWithOptions ,
} from 'studk-util/L/ArgsWithOptions'; ;

type RomanDigit = (
  | 0
  | 1 | 2 | 3 | 4
  | 5
  | 6 | 7 | 8 | 9
) ;
type RomanDigitUpTo<n extends RomanDigit> = (
  {
    9: Exclude<RomanDigit, never> ,
    8: Exclude<RomanDigit, 9> ,
    7: Exclude<RomanDigit, 9 | 8> ,
    6: Exclude<RomanDigit, 9 | 8 | 7> ,
    5: Exclude<RomanDigit, 9 | 8 | 7 | 6> ,
    4: 0 | 1 | 2 | 3 | 4 ,
    3: 0 | 1 | 2 | 3 ,
    2: 0 | 1 | 2 ,
    1: 0 | 1 ,
    0: 0 ,
  }[n]
) ;

export type {
  RomanDigit ,
  RomanDigitUpTo ,
} ;








