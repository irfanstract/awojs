









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
} from "studk-util/L/ArgsWithOptions" ;

import {
  ISODateFieldValues,
} from 'studk-util/L/IsoDateFieldValues';

import Immutable from "studk-util/L/Immutable";

import { utilReiterated, } from "studk-util/L/GeneratorFunctionEnum" ;



;






namespace GitSnapshotNaming {
  ;

  export const generateGitRefUsableHyphenatedDateTimeStr = (
    function ()
    {

      /**
       * the presently t-stamp
       * 
       * avoid representing date-time(s) as {@link Date `Date`}(s), since {@link Date.setMonth `Date` is mutable};
       * instead, represent as milliseconds (generate from {@link Date.now}), and {@link DateConstructor construct `Date`s as needed}.
       * 
       */
      const d = (
        Date.now()
      ) ;

      return (
        formatGitRefUsableHyphenatedDateTimeStr(d)
      ) ;
    }
  ) ;

  /**
   * {@link formatGitRefUsableHyphenatedDateTimeStr }
   * 
   * avoid representing date-time(s) as {@link Date `Date`}(s), since {@link Date.setMonth `Date` is mutable};
   * instead, represent as milliseconds (generate from {@link Date.now}), and {@link DateConstructor construct `Date`s as needed}.
   * 
   */
  export const formatGitRefUsableHyphenatedDateTimeStr = (

    function <const SPrecision extends GrPrecision>(...fmrArgs : (

      ArgsWithOptions<[millisFromEpoch: number], {
        precision ?: SPrecision ,
      } >
    ) )
    {

      const [
        dMillis,
        {
          precision = GrPrecision.SECONDS,
        } = {},
      ] = fmrArgs ;

      {
        const {
          //

          fullYearPadded04 ,
          monthIdxPadded ,
          dayInMonthIdxPadded ,

          hoursInDayPadded ,
          minutesPadded ,
          secondsInMinutePadded ,

        } = (
          ISODateFieldValues.getFromEpochMillis(dMillis)
        ) ;
  
        /**
         * note:
         * 4) supposed to follow {@link precision}
         * 
         */
        return (
          utilReiterated(function * () {
            ;

            yield fullYearPadded04 ;
            yield monthIdxPadded ;

            if (GrPrecision.HOURS <= precision ) {}
            else return ;

            yield dayInMonthIdxPadded ;

            if (GrPrecision.HOURS <= precision ) {}
            else return ;

            yield "-" ;

            yield hoursInDayPadded ;

            if ((
              GrPrecision.MINUTES <= precision
              || GrPrecision.TEN_MINUTES <= precision
            ) ) {}
            else return ;

            yield minutesPadded ;

            if (GrPrecision.SECONDS <= precision ) {}
            else return ;

            yield "-" ;

            yield secondsInMinutePadded ;

          })
          .join("")
        ) ;
      }
    }
  ) ;

  export enum GrPrecision {
    DAYS,
    HOURS,
    TEN_MINUTES ,
    MINUTES ,
    SECONDS ,
  }
  
}

export {
  GitSnapshotNaming ,
} ;





if (require.main === module) {
  console.warn(`ID: `, GitSnapshotNaming.generateGitRefUsableHyphenatedDateTimeStr() ) ;
}







