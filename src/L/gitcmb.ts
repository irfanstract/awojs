






/**
 * for Pure Introspective(s) like `git status`, `git reflog`, `git log`, `git view`, 
 * 
 */
namespace GitStatCmb
{
  ;

}

/**
 * for Pure Introspective(s) like `git view`, `git log`, `git list`, `git merge-base`, `git diff`,
 * 
 */
namespace GitCommitRangesCmb
{
  ;

  /**
   * returns `"HEAD"`.
   * 
   */
  export function fmtCkoHead()
  {
    return `HEAD`;
  }

}



/**
 * to deal with `clone`, `fetch`, `pull`, `push`
 * 
 */
namespace GitPullCmb
{
  ;

  /**
   * fmts `HEAD:refs/tags/${nme }` (
   * mapping local  `HEAD` to remote `refs/tags/${nme }` for PUSH,
   * mapping remote `HEAD` to local  `refs/tags/${nme }` for PULL,
   * )
   * 
   */
  export function fmtCkoHeadMapToTagnameMapping(...[nme] : [nme: string])
  {
    return (
      `${GitCommitRangesCmb.fmtCkoHead()}:refs/tags/${nme }`
    ) ;
  }

}



/**
 * to deal with `git switch` (not `git restore`)
 * 
 */
namespace GitCheckoutCmb
{
  ;

}



/**
 * deal with `git rebase`, `git reset`, `git cherry-pick`
 * 
 */
namespace GitRebaseCmb
{
  ;

}



/**
 * deal with `git stash` and `git restore`
 * 
 */
namespace GitRestoreWorktreeCmb
{
  ;

}






export {

  GitStatCmb,
  GitCommitRangesCmb ,

  GitPullCmb,
  GitPullCmb as GitPushCmb ,
  GitCheckoutCmb ,
  GitRebaseCmb ,
  GitRestoreWorktreeCmb ,

} ;








