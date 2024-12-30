
// @ts-check




/** @import { ArgsWithOptions, } from "../L/ArgsWithOptions" */

const { inspect, } = require("node:util") ;







const NCP = require(`node:child_process`) ;



/**
 * Run A String Of Platform-Specific Cmd.
 * 
 */
exports.runCmd = (

  /**
   *
   * @param {ArgsWithOptions<[code: string, ], { shell ?: boolean, }> } args
   */
  function (...[cmd, { shell: useShell = true, } = {}])
  {

    return (
      checkNcpSuccessfulRan((

        NCP.spawnSync(cmd, {
          shell: useShell,
          stdio: "inherit",
        } )
      ))
    ) ;
  }
) ;

/**
 * Runs A Bin With Args.
 * 
 */
exports.runProg = (

  /**
   *
   * @param {ArgsWithOptions<[code: string, args: readonly string[]], { shell ?: boolean, }> } args
   */
  function (...[cmd, args, { shell: useShell = true } = {}])
  {

    return (
      checkNcpSuccessfulRan((

        NCP.spawnSync(cmd, args, {
          shell: useShell,
          stdio: "inherit",
        } )
      ))
    ) ;
  }
) ;

/**
 * Expects That It Returned Successfullly.
 * 
 */
const checkNcpSuccessfulRan = (

  /**
   * 
   * @template {NCP.SpawnSyncReturns } C
   * @param {ArgsWithOptions<[c: C, ], {}> } args
   */
  function (...[c])
  {

    /** handy quick-return */
    if (c.error) {
      throw c.error ;
    }

    ;
    /** expect {@link c.status} to be `number` `0`; `throw` if it's anything else (eg The Process Remained Running) */
    if (Number(c.status) == 0 ) {
      ;
    } else {
      throw new TypeError(`process status-code: ${inspect(c.status) }`) ;
    }

    return c ;
  }
) ;










