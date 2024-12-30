














export {

  once ,
  memoize ,

  L ,

  Immutable,

} from "./L/util-from-tsnode" ;

export { utilReiterated, } from "studk-util/L/GeneratorFunctionEnum" ;

export {

  /** alias of {@link AllOrNeither}. @deprecated */
  type AllOrNeither as AllOrNever ,
  type AllOrNeither ,
  type ConformOrNever,
  type ConformOrAssignFalse,
  /** alias of {@link EitherOneProp}. */
  type EitherOneProp as EitherProp ,
  type EitherOneProp ,

  type PartializeOptionsConditionally ,
  type PartializeOptionsConditionallyAndRequifyIfFalse ,

  type Pick ,
  type PickGivenAndDenyOthers ,

  type Extract ,
  type ExtractSupertype ,
  type Exclude ,
  type ExcludeSupertype ,

  type Parameters ,

  type AltsConjunction  ,

  Entry ,

  type UsableKey ,
  type KnownPossibleKey ,
  type ObtainedEntryOf ,
  type EntryofTable ,
  type ToRequiredKeyArray ,
  type ToRequirednessRecord ,
  type ToAnyValuedRecord ,
  type ToReadonlyAnyValuedRecord ,

  type exactOptionalPropertyTypesFlagEnabled,

} from "./L/util-recordtypes" ;

export * from "./L/util-CompoundTypes" ;

export * from "./L/util-ArgsProcessing" ;

export { inspect, inspectObj, } from "./L/DictObjInspect" ;
export { assign, hasOwnProperty, } from "./L/DictDefaulting" ;

export * from "./L/UrlParts" ;

export {
  versionGteLt ,
} from "./L/SemVerComparison" ;

export {
  GitSnapshotNaming ,
} from "./L/GitRefNameGen" ;



{
  function m(): (typeof import("./main").ArgsWithOptions )[]
  { return [] ; }
}

{
  function m(): (typeof import("studk-util").ArgsWithOptions )[]
  { return [] ; }
}

{
  function m(): ((typeof import("studk-util") )["assert"] )[]
  { return [] ; }
}

{
  function m(): (typeof import("studk-util/N").ArgsWithOptions )[]
  { return [] ; }
}

{
  function m(): ((typeof import("studk-util/N") )["assert"] )[]
  { return [] ; }
}















