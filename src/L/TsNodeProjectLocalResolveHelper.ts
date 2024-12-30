






import type { ArgsWithOptions, } from "./ArgsWithOptions";








import {
  dirname,
} from "node:path";







/**
 * Helper to discover dependencies relative to a user's project, optionally
 * falling back to relative to ts-node.  This supports global installations of
 * ts-node, for example where someone does `#!/usr/bin/env -S ts-node --swc` and
 * we need to fallback to a global install of @swc/core
 * @internal
 */
function createProjectLocalResolveHelper(...[localDirectory]: ArgsWithOptions<[localDirectory: string], {}> ) {
  return function projectLocalResolveHelper(specifier: string, fallbackToTsNodeRelative: boolean) {
    return require.resolve(specifier, {
      paths: fallbackToTsNodeRelative ? [localDirectory, __dirname] : [localDirectory],
    });
  };
}

/** @internal */
type ProjectLocalResolveHelper = ReturnType<typeof createProjectLocalResolveHelper>;

/**
 * Used as a reminder of all the factors we must consider when finding project-local dependencies and when a config file
 * on disk may or may not exist.
 * @internal
 */
function getBasePathForProjectLocalDependencyResolution(
  configFilePath: string | undefined,
  projectSearchDirOption: string | undefined,
  projectOption: string | undefined,
  cwdOption: string
) {
  if (configFilePath != null) return dirname(configFilePath);
  return projectSearchDirOption ?? projectOption ?? cwdOption;
  // TODO technically breaks if projectOption is path to a file, not a directory,
  // and we attempt to resolve relative specifiers.  By the time we resolve relative specifiers,
  // should have configFilePath, so not reach this codepath.
}



export {
  createProjectLocalResolveHelper,
  getBasePathForProjectLocalDependencyResolution ,
  type ProjectLocalResolveHelper ,
} ;















