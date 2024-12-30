






import type { ArgsWithOptions, } from "./ArgsWithOptions";

















/**
 * transform given URL String, thru localised in-place ops `applyMod`
 * 
 */
const mutationallyTransformUrl = (

  function (...[x0, applyMod]: ArgsWithOptions<[x0: string, applyMod: (x: URL) => (URL | undefined | void) ], {}> )
  : string
  {
    /**
     * unfntely,
     * {@link URL `class` `URL`} doesn't support relative URL(s), so
     * we'll need to
     * first convert into absolute URL, and then,
     * with our best-effort, try to do what we know to ensure that, if {@link x0} was Relative URL, the return-value is another Relative URL
     * 
     */
    {

      const isAsRelativeUrl1 = (
        isRelativeUrlString(x0)
      ) ;

      const o = (
        /** see {@link resolveUrl } */
        (new URL(x0, 'resolve://') )
      ) ;

      const o1 = (applyMod(o) ?? null ) ?? o ;

      return (
        isAsRelativeUrl1 ?
        /** see {@link resolveUrl } */
        (o1.pathname + o1.search + o1.hash )
        :
        o1.toString()
      ) ;
    }
  }
) ;

const isRelativeUrlString = (

  function <const p extends string>(...[x0]: [x: p]) {

    return (
      !isAbsoluteUrlString(x0)
    ) ;
  }
) ;

const isAbsoluteUrlString = (

  function <const p extends string>(...[x0]: [url: p]): boolean {

    const protocolWasPreserved = (
      /** see {@link resolveUrl } */
      (
        (new URL(x0, 'protocolone://').protocol === new URL(x0, 'protocoltwo://').protocol )
      )
    ) ;

    return protocolWasPreserved ;
  }
) ;

import {
  resolve as resolveUrl ,
} from "node:url" ;

/**
 * joins {@link dropSearchParamAndHash `dropSearchParamAndHash(from)`} and `to`;
 * equivalent to this
 * 
 * ```
 *  resolveUrl(
 *    dropSearchParamAndHash(x0, ).replace(/(\/?)$/, () => "/index")
 *    ,
 *    x1)
 * ```
 * 
 */
const joinUrlNoBsp = (

  (...[x0, x1] : Parameters<typeof resolveUrl>) => (

    // TODO
    resolveUrl(
      dropSearchParamAndHash(x0, ).replace(/(\/?)$/, () => "/index")
      ,
      x1)
  )
) ;

/**
 * omitting `from`'s `search` and `hash`
 * 
 */
const dropSearchParamAndHash = (

  (...[x0]: [x: string]) => (

    mutationallyTransformUrl(x0, e => { e.hash = "" ; e.search = "" ; } )
  )
) ;

export {

  mutationallyTransformUrl,

  isRelativeUrlString,
  isAbsoluteUrlString,

  resolveUrl ,

  dropSearchParamAndHash,

  joinUrlNoBsp ,
  /** implemented as {@link joinUrlNoBsp}. @deprecated */
  joinUrlNoBsp as joinUrl ,

} ;





















