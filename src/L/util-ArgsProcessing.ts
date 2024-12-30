















import { assign, } from './DictDefaulting';

import { hasOwnProperty, } from './DictDefaulting';

import assert = require('./util-Assert');

/**
 * return
 * {@link Error.stack `value.stack`} if Defined and Sensible, converted thru {@link StringConstructor expr `String(value.stack)`},
 * {@link StringConstructor `String(value)`} otherwise
 * 
 */
function getStackOrMessage(value: Error    ): string ;
function getStackOrMessage(value: unknown  ): string ;
function getStackOrMessage(...[o] : [unknown])
{
  if (o instanceof Error) {
    const stack = o.stack ;
    if (stack) {
      return String(stack) ;
    }
  }
  return String(o) ;
}

import { failMissingArgName, } from "./util-from-tsnode" ;

import type {
  ArgsWithOptions ,
} from "./ArgsWithOptions" ;




export {

  assert,

  getStackOrMessage ,

} ;

export {

  assign,

  hasOwnProperty,

} ;

export {

  type ArgsWithOptions ,

} ;
















