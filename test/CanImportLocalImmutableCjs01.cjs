
// @ts-check

"use strict"




const assert = require("node:assert")

const {
  inspect ,
} = require("node:util")




describe(`Can Import Local 'Immutable.cjs'`, () => {

  for (const { getImmutableJs, title, } of (
    /** @satisfies {{ getImmutableJs: () => object, title: string, }[] } */ ([
      { getImmutableJs: () => require("studk-util/Immutable"), title: `Exposed 'Immutable.cjs'`, } ,
      { getImmutableJs: () => require("studk-util/L/Immutable"), title: `Local 'Immutable.cjs'`, } ,
      // () => requireLocalImmutableCjs() ,
    ])
  )) {
  ;

  it(`Can Import ${title}`, () => {

    const Immutable = getImmutableJs()

    console.warn((
      inspect(Immutable)
    ) )

    assert((
      Immutable.List([5, 6, 7] ).join(",")
      ===
      "5,6,7"
    ) )

  })

  it(`Can Import ${title} And Do Things With It Reasonably`, () => {

    const Immutable = getImmutableJs()

    console.warn((
      inspect(Immutable)
    ) )

    assert((
      Immutable.List([5, 6, 7] ).join(",")
      ===
      "5,6,7"
    ) )

    assert((
      Immutable.List([5, 6, 11] ).sortBy(e => String(e) ).join(",")
      ===
      "11,5,6"
    ))

  })

  ;
  }

})







