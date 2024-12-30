











import {

  failMissingArgName ,

} from "./util-from-tsnode" ;















/** @internal */
function versionGteLt(version: string, gteRequirement: string, ltRequirement?: string) {
  const [major = failMissingArgName("major"), minor, patch, extra] = parse(version);
  const [gteMajor, gteMinor, gtePatch] = parse(gteRequirement);
  const isGte =
    // @ts-ignore
    major > gteMajor || (major === gteMajor && (minor > gteMinor || (minor === gteMinor && patch >= gtePatch)));
  let isLt = true;
  if (ltRequirement) {
    const [ltMajor, ltMinor, ltPatch] = parse(ltRequirement);
    // @ts-ignore
    isLt = major < ltMajor || (major === ltMajor && (minor < ltMinor || (minor === ltMinor && patch < ltPatch)));
  }
  return isGte && isLt;

  function parse(requirement: string) {
    return requirement.split(/[\.-]/).map((s) => parseInt(s, 10));
  }
}



export { versionGteLt, } ;





















