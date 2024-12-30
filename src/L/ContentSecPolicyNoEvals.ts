



import {

  assert,
  getStackOrMessage ,

} from "./util-ArgsProcessing" ;









/// <reference lib="DOM" />



/**
 * some developers might've been tempted to put-or-keep their apps under {@link eval some Strict CSP prohibiting any usage of `eval`-like Fnc},
 * inthatcase
 * certain usecases like Mockup/Polyfill(s) for `node:vm` or `webpack-dev-server` or etc will likely fail.
 * 
 */
export const isUnderCspNoEvalsPolicy = (

  (): boolean => {
    try {
      new Function(``) ;
      void ({ value: eval, }.value )(``) ;
      return false ;
    } catch (z) {
      return true ;
    }
  }
) ;










