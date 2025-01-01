
// @ts-check







const { runCmd, } = require("./src/S/frs.cjs") ;






/**
 * ensure `remote` config errors surface aheadoftime,
 * if so we exit early without switching or mutating any branch
 * 
 */
runCmd(`git fetch origin main`) ;


/**
 * @type {| { mkc: false, forceUpdateRemote?: false, } | { mkc?: true, forceUpdateRemote: boolean, }}
 */
const {
  mkc = true,
  forceUpdateRemote: forcePushToRemoteMain = mkc ? true : false ,
} = { mkc: true, forceUpdateRemote: true, };


/**
 * ensure there's no uncommitted chgs at time of this running
 * 
 */
runCmd(`git rebase --rebase-merges --no-autostash --reapply-cherry-picks HEAD~0`) ;


{

  /**
   * run `git checkout --detach` but
   * we shall give notice first
   * 
   */
  {
    console.warn(`leaving the current branch. enter 'git checkout (.....)' to return.`) ;
    runCmd(`git status`) ;
  
    runCmd(`git checkout --detach`) ;
  
  }
  
  runCmd(`git fetch origin main`) ;
  
  runCmd(`git reset --soft "FETCH_HEAD~0" `) ;
  runCmd(`git status`) ;

  if (mkc) {
    ;

    runCmd(`git commit --allow-empty -m "after these WIP(s)"`) ;
    runCmd(`git status`) ;

    if (forcePushToRemoteMain) {
      ;

      runCmd(`git push origin HEAD:refs/heads/main`) ;

    }

  }

}











