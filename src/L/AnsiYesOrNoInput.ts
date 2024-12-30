









/**
 * 
 * `function` `yn` from `ts-node/arc/util`
 * 
 * Copied from https://unpkg.com/yn@3.1.1/index.js
 * Because people get weird when they see you have dependencies. /jk
 * This is a lazy way to make the dep number go down, we haven't touched this
 * dep in ages, and we didn't use all its features, so we stripped them.
 * 
 */
export function yn(input: string            ): boolean | undefined ;
export function yn(input: string | undefined): boolean | undefined ;
export function yn(input: string | undefined) {
  input = String(input).trim();

  if (/^(?:y|yes|true|1)$/i.test(input)) {
    return true;
  }

  if (/^(?:n|no|false|0)$/i.test(input)) {
    return false;
  }
}











