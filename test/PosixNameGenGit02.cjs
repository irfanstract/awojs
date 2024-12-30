
// @ts-check

"use strict"




const assert = require("node:assert")

const {
  inspect ,
} = require("node:util")






describe(`Git Name Gen`, () => {

  it(`Git Name Gen`, async () => {

    const {
      GitSnapshotNaming ,
    } = require("studk-util/L/GitRefNameGen")
    
    for (const c of "01234567" ) {

      const id = (
        GitSnapshotNaming.generateGitRefUsableHyphenatedDateTimeStr()
      )

      console.warn({
        id ,
      })

      assert((
        id
        .match(/\w+(-\w+)+/)
      ))

    }

  } )

})








