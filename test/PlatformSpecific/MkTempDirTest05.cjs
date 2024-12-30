




// @ts-check

"use strict"




const assert = require("node:assert")

const {
  inspect ,
} = require("node:util")









const getFsMod = (

  () => require("node:fs")
)

const getMkTempDirModule = (

  () => require("studk-util/src/S/MkTempDir.ts")
)





describe(`MkTempDir Test`, () => {

  it(`MkTempDir Test`, () => {

    const FS = getFsMod()

    const { mkTempDir, } = getMkTempDirModule()

    for (const i of "01" ) {

      const dP = mkTempDir()

      console.warn({ dP, })

      const dStat = FS.statSync(dP)

      console.warn({ dStat, })

      assert(FS.existsSync(dP) )

      console.warn(`done`)

    }

  })

})

;















