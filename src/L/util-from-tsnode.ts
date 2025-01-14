







// import "./utilGlobalConsoleAlwaysStderr" ;

export { yn, } from "./AnsiYesOrNoInput" ;

export { isUnderCspNoEvalsPolicy, } from "./ContentSecPolicyNoEvals" ;

/**
 * Split a string array of values
 * and remove empty strings from the resulting array.
 * @internal
 */
function split(value: string            ): string[]             ;
function split(value: string | undefined): string[] | undefined ;
function split(value: string | undefined) {
  return typeof value === 'string' ? value.split(/ *, */g).filter((v) => v !== '') : undefined;
}

export { split, } ;

/**
 * Parse a string as JSON.
 * @internal
 */
function parse(value: string            ): object | null             ;
function parse(value: string | undefined): object | null | undefined ;
function parse(value: string | undefined): object | null | undefined {
  return typeof value === 'string' ? JSON.parse(value) : undefined;
}

export { parse, } ;

export {

  mutationallyTransformUrl ,

  isRelativeUrlString ,

  resolveUrl ,

  dropSearchParamAndHash,

  joinUrlNoBsp ,

} from "./UrlParts" ;

export {

  normalizeSlashes ,

} from "./UrlComponentInEsm" ;

export {

  versionGteLt,

} from "./SemVerComparison" ;



/**
 * Cached fs operation wrapper.
 */
export function cachedLookup<T, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (!cache.has(arg)) {
      const v = fn(arg);
      cache.set(arg, v);
      return v;
    }
    return cache.get(arg)!;
  };
}

import { assign, } from './DictDefaulting';
export { assign, } ;

import { hasOwnProperty, } from './DictDefaulting';
export { hasOwnProperty, } ;

import assert = require('assert');

import { getStackOrMessage, } from "./util-ArgsProcessing";

export {

  assert,
  getStackOrMessage ,

} ;

function failMissingArgName<const RT = never>(nm: string): RT
{
  return (
    assert.fail(new TypeError(`unspecified argument '${nm}'`) )
  ) ;
}

import type {
  ArgsWithOptions ,
} from "./ArgsWithOptions" ;

export {

  failMissingArgName,

  type ArgsWithOptions ,

} ;

/**
 * `L.once`
 * 
 */
function once<Fn extends (...args: any[]) => any>(fn: Fn) {
  let value: ReturnType<Fn>;
  let ran = false;
  function onceFn(...args: Parameters<Fn>): ReturnType<Fn> {
    if (ran) return value;
    value = fn(...args);
    ran = true;
    return value;
  }
  return onceFn;
}

/* TODO work-around potential problems like 'no named export named "memoize"' */
import { memoize, } from "lodash" ;

export {
  once ,
  memoize ,
} ;

export import L = require("lodash") ;

export function utilReiterated<const E>(src: () => Iterable<E> ) {
  return [...src() ] ;
}

export import Immutable = require("immutable") ;

export {

  type AllOrNever1 ,
  type PossibleKeyOf ,
  type KeyOf ,
  //
  type AtLeastEitherProp ,
  type EitherOneProp,
  type EitherOneProp1,

  //
  type PickEitherProp1 as PickEitherProp ,
  type OnlySelectEitherProp ,
  type OnlySelectProps ,

} ;

type AllOrNever1<Props extends object> = (
  (
    Props extends any ?
    AnevImplEach<Props>
    : never
  )
  |
  { [k in PossibleKeyOf<Props>] ?: never ; }
) ;

type AnevImplEach<Props extends object> = (
  Required<Props>
) ;

type PossibleKeyOf<Props extends object> = (
  Props extends any ?
  PossibleKeyOfOneAlt<Props>
  : never
) ;

type KeyOf<Props extends object> = (
  PossibleKeyOfOneAlt<Props>
) ;

type PossibleKeyOfOneAlt<Props extends object> = (
  keyof Required<Props>
) ;

{
  {
    const ADPE = (x: AtLeastEitherProp<{
      //
      onNewKnownPath : (value: string) => void ,
      onNewDynamicPathExpr : (expr: NodeRequire) => void ,
    }>) => { x.onNewDynamicPathExpr ; } ;
    ADPE({ onNewDynamicPathExpr: () => {} , }) ;
    ADPE({ onNewKnownPath: () => {} , }) ;
    ADPE({
      onNewKnownPath: () => {} ,
      onNewDynamicPathExpr: () => {} ,
    }) ;
    // @ts-expect-error
    ADPE({
    }) ;
  }
}

type AtLeastEitherProp<Props extends object> = (
  Partial<Props>
  & Required<PickEitherProp1<Props > >
) ;

import type {
  EitherOneProp,
  PickGivenAndDenyOthers ,
} from "./util-recordtypes" ;

/**
 * 
 * @deprecated
 */
type EitherOneProp1<Props extends object> = (
  OnlySelectEitherProp<Props, keyof Props>
) ;

/**
 * 
 * @deprecated
 */
type PickEitherProp1<D extends object, kChosen extends keyof D = keyof D > = (
  kChosen extends any ?
  Pick<D, kChosen>
  : never
) ;

type OnlySelectEitherProp<D extends object, kChosen extends keyof D = keyof D> = (
  kChosen extends any ?
  OnlySelectProps<D, kChosen>
  : never
) ;

type OnlySelectProps<D extends object, kChosen extends keyof D> = (
  { [k1 in keyof D]?: ([k1] extends [kChosen] ? D[k1] : never ) ; }
  &
  Required<{ [k1 in kChosen]?: unknown ; }>
) ;

type EipSingleProp<k extends keyof any, val> = (
  k extends any ?
  { [k1 in k]: val ; }
  : never
) ;






