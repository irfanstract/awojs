


// @ts-check

"use strict"




/** @import { ArgsWithOptions, } from "studk-util/L/ArgsWithOptions" */

const assert = require("node:assert")

const {
  inspect ,
} = require("node:util")







describe(`Can Import Local 'inspect.js'`, () => {

  /**
   * 
   * @param {ArgsWithOptions<[typeof import("studk-util/L/DictObjInspect").inspect ] , { }> } args
   */
  function doInspectorCompianceCheck(...[inspect])
  {

    {
      const r = inspect({ done: true, })
      console.warn({ r, } )
      assert(!!r )
    }

    {
      const r = inspect([3, 4, 5] )
      console.warn({ r, } )
      assert(!!r )
    }

  }

  it(`Can Do ESM 'import inspect from "(this-pkg)/L/DictObjInspect" ;'`, async () => {
    
    const { inspect: xInspect, } = await import("studk-util/L/DictObjInspect")

    doInspectorCompianceCheck(xInspect)

  } )

})








