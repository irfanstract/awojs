





import type {

  ArgsWithOptions,

} from "#studk-util/src/L/util-ArgsProcessing";








import NativePath = require("node:path") ;

import {
  tmpdir,
} from "node:os";

import NativeFS = require("node:fs") ;







/**
 * create temp dir
 * 
 * @see {@link NativeFS.mkdtempSync   }
 * @see {@link NativeFS.mkdtemp       }
 * 
 */
function mkTempDir(...a : (

  Parameters<typeof mkTempDirAdv>
) )
: string
{

  const {
    p: p,
  } = (

    mkTempDirAdv(...a)
  ) ;

  return (
    p
  ) ;
}

/**
 * create temp dir
 * 
 * @see NativeFS.mkdtempSync
 * @see NativeFS.mkdtemp
 * 
 */
function mkTempDirAdv(...[{ prefix: leafPrefix0 = null, } = {}] : (

  ArgsWithOptions<[], { prefix?: string | null, }>
) )
{

  const leafPrefix = (
    leafPrefix0
    ?? `ThatThing`
  ) ;

  const p = (

    NativeFS.mkdtempSync(
      NativePath.join(tmpdir() , leafPrefix )
      , { } )
  ) ;

  return (
    {
      p: p,
    } as const
  ) ;
}




export {

  mkTempDir,

  mkTempDirAdv ,

} ;











