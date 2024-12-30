








import {
  memoize,
  once,
} from "lodash";


import {
  Console,
} from "console" ;



const setupGlobalConsoleAlwaysStderr = (

  once(function setupGlobalConsoleAlwaysStderrImpl() {
    ;

    MAIN: {
      ;
      if (1) {
        console["log"] = console["info"] = console["warn"] ;
        break MAIN ;;
      }
  
      {
        globalThis.console = (
          new Console({
            stdout: process.stderr,
            stderr: process.stderr,
          })
        ) ;
        break MAIN ;;
      }
    }

    console["info"](`done 'setupGlobalConsoleAlwaysStderr()'`) ;

  })
) ;



import envNmSetupConsoleLogsAlwaysStdErr = require("../S/auto/EnvNmSetupConsoleLogsAlwaysStdErr.cjs") ;

if ((
  ((typeof process !== "undefined") && Number(process.env[envNmSetupConsoleLogsAlwaysStdErr ] ) )
)) {
  console["warn"](`automatically running 'setupGlobalConsoleAlwaysStderr()'`) ;
  setupGlobalConsoleAlwaysStderr() ;
}




export {
  setupGlobalConsoleAlwaysStderr ,
} ;











