




// @ts-check

"use strict"




const assert = require("node:assert")

const {
  inspect ,
} = require("node:util")






const getUrlPartsManipModule = (

  () => require("studk-util/L/UrlParts")
)





/** @type {{ ucmTestVerbose ?: Boolean }} */
const { ucmTestVerbose = false, } = {} ;


describe(`URL Componentwise Manip 055`, () => {

  it(`Replacing The Port-No Via 'mutationallyTransformUrl'`, async () => {

    const {
      mutationallyTransformUrl,
    } = getUrlPartsManipModule()

    assert.deepEqual(
      mutationallyTransformUrl("http://localhost:10300/", c => { c.port = "51200" ; } )
      ,
      "http://localhost:51200/"
    )

  } )

  for (const p of /** @type {const} */ ([
    "http://localhost:50700/path/to/my/page" ,
  ]))
  {
  ;

  for (const s of /** @satisfies {`?${String}`[] } */ ([
    "?q=my+specific+title" ,
    "?q=my+specific+title&r=code" ,
  ]))
  it(`Search-Param-Manip Via 'mutationallyTransformUrl', URL '${p}' against { s='${s }' } `, async () => {

    const {
      mutationallyTransformUrl,
    } = getUrlPartsManipModule()

    {
    ;

    {
    ;

    ucmTestVerbose && console.warn((
      inspect({ p, s, })
    ))

    assert.deepEqual(
      mutationallyTransformUrl(p, c => { c.search = s; } )
      ,
      p + s
    )

    }
    }


  } )

  for (const s of /** @satisfies {(`#${String}` | "" )[] } */ ([
    "#q=my+specific+title" ,
    "#q=my+specific+title&amp;r=code" ,
  ]))
  it(`Fragmet-Param-Manip Via 'mutationallyTransformUrl', URL '${p}' against { s='${s }' } `, async () => {

    const {
      mutationallyTransformUrl,
    } = getUrlPartsManipModule()

    {
    ;

    {
    ;

    ucmTestVerbose && console.warn((
      inspect({ p, s, })
    ))

    assert.deepEqual(
      mutationallyTransformUrl(p, c => { c.hash = s; } )
      ,
      p + s
    )

    }
    }


  } )

  }

})


describe(`For Those URL(s) Each, Whether It Was Absolute Or Relative`, () => {

  for (const [p, { rel: pIsRelative, } ] of /** @satisfies {([url: String, { readonly rel: Boolean, }])[] } */ ([
    ["path/to/my/page", { rel: true, } ] ,
    ["http://localhost:50700/path/to/my/page", { rel: false, }] ,
    ["http://localhost:50700", { rel: false, }] ,
    ["resolve:///./src/index.ts", { rel: false, }] ,
    ["resolve:///./src/index.tsx", { rel: false, }] ,
    ["node:util", { rel: false, }] ,
    ["node:streams"           , { rel: false, }] ,
    ["node:worker_threads"    , { rel: false, }] ,
    ["node:vm"                , { rel: false, }] ,
    ["util"           , { rel: true, }] ,
    ["streams"        , { rel: true, }] ,
    ["worker_threads" , { rel: true, }] ,
  ]))
  it(`Whether URL '${p }' It Was ${pIsRelative ? `Relative` : `Absolute` }`, async () => {

    const {
      isAbsoluteUrlString ,
      isRelativeUrlString ,
    } = getUrlPartsManipModule()

    {
    ;

    ucmTestVerbose && console.warn((
      inspect({ p, pIsRelative, })
    ))

    assert.strictEqual(isRelativeUrlString(p), pIsRelative ) ;

    assert.strictEqual(isAbsoluteUrlString(p), !pIsRelative ) ;

    }


  } )

})














