



/* from `ts-node/src/util` */













const directorySeparator = '/';
const backslashRegExp = /\\/g;
/**
 * Replace backslashes with forward slashes.
 * @internal
 */
function normalizeSlashes(value: string): string {
  return value.replace(backslashRegExp, directorySeparator);
}



export {
  normalizeSlashes ,
} ;












