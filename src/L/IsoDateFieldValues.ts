









// import {
//   util,
// } from 'typexpe-commons/src/common_sv.mjs';

// import {
//   random,
// } from "lodash-es" ;

// import type {
//   AllOrNever1,
//   ArgsGetOptions ,
//   ArgsWithOptions, 
//   Extend,
//   OmitW,
//   PartializedPartially,
//   PickW,
// } from 'studk-fwcore/src/util/C1.ts'; ;

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



;

namespace ISODateFieldValues {
  ;

  export const getFromEpochMillis = (

    function <const V extends number>(...fmrArgs : (

      ArgsWithOptions<[millisFromEpoch: V], {
      } >
    ) )
    {

      const [
        dMillis,
        {
        } = {},
      ] = fmrArgs ;

      /**
       * note:
       * 1) {@link String.padStart manual padding necessary }
       * 2) and it's {@link String.padStart `padStart`}, not `padEnd`
       * 3) {@link Date.getMonth `getMonth`} is `0`-based
       * 
       */
      {
        const d = new Date(dMillis) ;

        const fullYearPadded04 = String(d.getFullYear() ).padStart(4, "0") as `${number }` ;
        const monthIdxPadded   = String(1 + d.getMonth() ).padStart(2, "0") as Exclude<`${RomanDigitUpTo<1> }${RomanDigit }` , `1${Exclude<RomanDigit, RomanDigitUpTo<2> > }` > ;
        const dayInMonthIdxPadded = String(d.getDate() ).padStart(2, "0") as `${RomanDigitUpTo<3> }${RomanDigit }` ;
        
        const hoursInDayPadded         = String(d.getHours()   ).padStart(2, "0") as `${RomanDigitUpTo<2> }${RomanDigit }` ;
        const minutesPadded            = String(d.getMinutes() ).padStart(2, "0") as `${RomanDigitUpTo<6> }${RomanDigit }` ;
        const secondsInMinutePadded    = String(d.getSeconds() ).padStart(2, "0") as `${RomanDigitUpTo<6> }${RomanDigit }` ;
  
        return {
          fullYearPadded04 ,
          monthIdxPadded ,
          dayInMonthIdxPadded ,

          hoursInDayPadded ,
          minutesPadded ,
          secondsInMinutePadded ,
        } as const ;
      }
    }
  ) ;

  ;
}

export {
  ISODateFieldValues ,
} ;








