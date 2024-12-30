





import {
  assert ,
  once,
  parse,
  type ArgsWithOptions, 
  Immutable,
  isUnderCspNoEvalsPolicy,
} from './util-from-tsnode';






/**
 * either (a) all of them, or (b) neither
 * 
 * ```
 * interface CompilerOptions extends Extract<(
 *   & { strict?: boolean; }
 * 
 *   // ensure users each set both at once, or neiher.
 *   & AllOrNever<{ emit: boolean; outDir: Path; }>
 * 
 * ), any> {}
 * 
 * ```
 * 
 * essentially {@link ConformOrNever `ConformOrNever<(Required<O> )>` }
 * 
 */
type AllOrNeither<O extends object> = (

  ConformOrNever<(
    Required<O>
  ) >
) ;

;
/**
 * like {@link AllOrNeither}, but retains the Optionality(es)
 * 
 */
type ConformOrNever<O extends object> = (

  | O
  | { readonly [k in KnownPossibleKey<O>] ?: never ; }
) ;

{
  (x: {
    (e: EitherOneProp<{
      //
      readonly srcDirWhitelist: Required<string> ,
      readonly srcDirBlacklist: Required<string> ,
      readonly srcUrlWhitelist: Required<string | URL> ,
    }>): void
  }) => {
    x({ srcDirBlacklist: "???" , }) ;
    x({ srcDirWhitelist: "???" , }) ;
    x({ srcUrlWhitelist: "???" , }) ;
  } ;

  ;
  (x: {
    (e: (
      ConformOrNever<(
        EitherOneProp<{
          //
          readonly srcDirWhitelist: Required<string> ,
          readonly srcDirBlacklist: Required<string> ,
          readonly srcUrlWhitelist: Required<string | URL> ,
        }>
      )>
    )): void
  }) => {
    x({ srcDirBlacklist: "???" , }) ;
    x({ srcDirWhitelist: "???" , }) ;
    x({ srcUrlWhitelist: "???" , }) ;
    x({  }) ;
  } ;

}

/**
 * like {@link ConformOrNever}, but allows setting to `false`
 * 
 */
type ConformOrAssignFalse<O extends Partial<Record<keyof any, true | object>>, SO extends O | {} = O | {}> = (

  SO extends any ?
  (
    //
    & {
      readonly [k in KnownPossibleKey<O>] ?: (
        false |
        ([k] extends [keyof SO] ? SO[k] : never )
      ) ;
    }
    & {
      readonly [k in keyof SO]: unknown ;
    }
    // & SO
    & {
      readonly __src_xs?: KnownPossibleKey<O>,
      readonly __src_so?: SO,
    }
  )
  : never
) ;

{

  (x: ConformOrAssignFalse<(
    EitherOneProp<{
      readonly fromEsm: true,
    }>
  )>) => {
    if (x.fromEsm) {
      x.fromEsm ;
      return ;
    }
    x.fromEsm ;
  } ;

  (x: ConformOrAssignFalse<(
    EitherOneProp<{
      readonly fromEsm: true,
      readonly fromCjs: true,
    }>
  )>) => {

    if (x.fromEsm) {
      x.fromEsm ;
      x.fromCjs ;
      return ;
    }

    if (x.fromCjs) {
      x.fromEsm ;
      x.fromCjs ;
      return ;
    }

    x.fromEsm ;

  } ;

}

/**
 * either of the props (after `Required`ed)
 * 
 * ```
 * interface CompilerOptions extends Extract<(
 *   & { strict?: boolean; }
 * 
 *   // ensure users each set either one, but not both.
 *   & EitherOneProp<{ outFile: Path; outDir: Path; }>
 * 
 * ), any> {}
 * 
 * ```
 * 
 */
type EitherOneProp<O extends object, unused1 = any, unused2 = any, D3 = any, k extends keyof O = keyof O> = (

  Partial<O> &
  (
    //
    /** distributivity */ k extends any ?
    PickGivenAndDenyOthers<Required<O>, k>
    : never
  )
) ;

/**
 * {@link Pick pick select}
 * 
 */
type Pick<D extends object, K extends keyof D> = (
  globalThis.Pick<D, K>
) ;

/**
 * {@link Pick pick select}, and deny others
 * 
 */
type PickGivenAndDenyOthers<D extends object, K extends keyof D> = (
  // Partial<D> &
  Pick<D, K> & { readonly [sk in keyof D ] ?: ([sk] extends [K] ? unknown : never ) ; }
) ;


export {

  /** alias of {@link AllOrNeither}. @deprecated */
  type AllOrNeither as AllOrNever ,
  type AllOrNeither ,
  type ConformOrNever,
  type ConformOrAssignFalse,
  /** alias of {@link EitherOneProp}. */
  type EitherOneProp as EitherProp ,
  type EitherOneProp ,

  type Pick ,
  type PickGivenAndDenyOthers ,

} ;







type PartializeOptionsConditionally<D extends object, E extends boolean> = (
  (
    // [E] extends [true] ? Partial<D> :
    // D
    [D, Partial<D> ][[E] extends [true] ? 1 : 0 ]
  )
) ;

type PartializeOptionsConditionallyAndRequifyIfFalse<D extends object, E extends boolean> = (
  (
    [E] extends [true    ] ?  Partial<D> :

    /** note: one may need to Conjunct with `Record<keyof D, unknown>`, to work-around Deference (of the reduction) */
    [E] extends [false   ] ? Required<D> :

    D
  )
) ;

/**
 * only make it Optional when `undefined` conforms;
 * leave it Required/Obligatory otherwise
 * 
 * NOTE: we disabled Distributivity since
 * such Distributivity broke usages of Instantiable-Type-Param(s) with this TC (the TC got widened into `{} | null | undefined` )
 * 
 */
type MayOptRecord<K extends keyof any, value> = (
  /** note: may need to Conjunct with `& Record<keyof D, unknown>`, to work-around Deference (of the reduction) */

  // /* embrace distributivity from alts */ value extends any ?
  (
    // { [k in K] ?: unknown; }
    // &
    PartializeOptionsConditionally<Record<K, value >, [value] extends [undefined] ? true : false >
  )
  // : never
) ;

/**
 * {@link MayOptRecord `MayOptRecord<keyof K, value>`}.
 * 
 */
type MayOptRecordRevalue<K extends object, value> = (
  MayOptRecord<keyof K, value>
) ;


export {

  type PartializeOptionsConditionally ,
  type PartializeOptionsConditionallyAndRequifyIfFalse ,

  type MayOptRecord ,
  type MayOptRecordRevalue ,

} ;








;

import {

  type Extract ,
  type ExtractSupertype ,
  type Exclude ,
  type ExcludeSupertype ,

  type Parameters ,

  type AltsConjunction  ,
  type AltsConjunction as AltsConstituentConjunction ,

} from "./util-CompoundTypes" ;

export {

  type Extract ,
  type ExtractSupertype ,
  type Exclude ,
  type ExcludeSupertype ,

  type Parameters ,

  type AltsConjunction  ,
  type AltsConstituentConjunction ,
  /** alias of {@link AltsConjunction}. @deprecated */
  type AltsConjunction as LxIntersection ,

} ;

/**
 * {@link Entry} names types `(readonly) [key: k, value: V]`.
 * 
 * run `Entry(key, value)` to get one.
 * 
 */
type Entry<k = keyof any, V = unknown> = (

  (readonly [key: k, value: V ] )
) ;

function Entry<const k, const V >(...[k, v]: [key: k, value: V] ) : Entry<k, V>
{ return [k, v] ; }

namespace Entry {
  ;

  ;
}

/**
 * picks,
 * specific alt of `E` which `k` conforms the `key` (Elem 0) type of
 * 
 */
type SelectEntry<E extends Entry<keyof any>, k extends E[0]> = (

  Extract<E, Entry<k, unknown> >
) ;

{
  type Dispatch1<T> = import("./ReactJsDispatchFnc").Dispatch<T> ;

  ((x:    AltsConjunction<{ length: number, } | { knownLength?: null, tail?: object, }>) => x ) ;

  ((x:    Partial<{ length: number, }> & Partial<{ length: null, tail?: object, }>) => x ) ;
  ((x:    Dispatch1<Partial<{ length: number, }>> | Dispatch1<Partial<{ length: null, tail?: object, }>>) => {
    x({ }) ;
    return x ;
  } ) ;
  ((x:    KnownPossibleKey<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
  ((x:    KnownPossibleKey<Partial<{ length: number, }> | Partial<{ length: null, tail?: object, }>>) => x ) ;
  ((x:    Dispatch1<{ length: number, }> | Dispatch1<{ length: null, tail?: object, }>) => x ) ;
  ((x:    AltsConjunction<{ length: number, } | { length: null, tail?: object, }>) => x ) ;

}

{
  (x: AltsConjunction<NumberConstructor | DateConstructor | import("node:worker_threads").Worker >) => {} ;
}

/**
 * Known Possible Key Of {@link T}
 * 
 * ```
 * k: KnownPossibleKey<{ length: number, } | { length?: null, tail?: object, }> // "length" | "tail"
 * k:        UsableKey<{ length: number, } | { length?: null, tail?: object, }> // "length"
 * ```
 * 
 */
type KnownPossibleKey<T extends object> = (

  /** Distribute Over Alts */ T extends any ?
  (keyof T)
  : never

) ;

/**
 * Key Which Can Definitely Be Used For {@link T}
 * 
 * ```
 * k: KnownPossibleKey<{ length: number, } | { length?: null, tail?: object, }> // "length" | "tail"
 * k:        UsableKey<{ length: number, } | { length?: null, tail?: object, }> // "length"
 * ```
 * 
 */
type UsableKey<T extends object> = (

  keyof T
) ;

/**
 * Any Entry Obtained From It.
 * 
 */
type ObtainedEntryOf<T extends object> = (

  T extends any ? (
    //
    [Required<EntryofTable<T> > ] extends [infer Dx] ?
    Dx[keyof Dx]
    : never
  )
  : never
) ;

/**
 * {@link ObtainedEntryOf `ObtainedEntryOf<AltsConjunction<T> >`}
 * excluding `null` and `undefined`
 * 
 */
type NeededEntryOf<T extends object> = (

  FinishNeededEntryofT<(
    //
    ObtainedEntryOf<(
      object &
      AltsConjunction<T>
    ) >
  )>
) ;

type FinishNeededEntryofT<T extends Entry<any> > = (

  NonNullable<T>
) ;

/**
 * `{ readonly [k in keyof T]: Entry<k, T[k] > }` ;
 * mapping every key of `T` (as `k`) to
 * {@link Entry `Entry<k, T[k]>`}.
 * preserves the Optional(Ity)(es) of each Key --
 * key `k1` in Result would be Optional if so in Src, and Required otherwise
 * 
 */
type EntryofTable<T extends object> = (

  { readonly [k in keyof T]: Entry<k, T[k] > }
) ;

type CompileEntry<T extends Entry<keyof any> > = (

  { readonly [k in T[0] ]: SelectEntry<T, k>[1]; }
) ;

type ToRequiredKeyArray<T extends object, dmmy1 = never, dmmy2 = never, dmmy3 = never,  > = (

  /** Distribute Over The Alts */ T extends any ?
  ReadonlyArray<(
    keyof (
      CompileEntry<(
        Extract<(
          ObtainedEntryOf<(
            ToRequirednessRecord<T, 1>
          )>
        ) , readonly [unknown, 1] >
      )>
    )
  ) >
  : never
) ;

{
  ((x:          KnownPossibleKey<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
  ((x:                 UsableKey<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
  ((x:        ToRequiredKeyArray<{ length: number, } | { length: null, tail?: object, }>) => x ) ;
}

{

  type Oef<T extends object> = (
    {
      readonly   NeededEntry    : NeededEntryOf      <T>   ,
      readonly ObtainedEntry    : ObtainedEntryOf    <T>   ,
    }
  ) ;

  (({ NeededEntry, ObtainedEntry, }:    Oef<(
    | { prev        : 5    , next        : 7    , }
  )>) => ({ NeededEntry, ObtainedEntry, }) ) ;

  (({ NeededEntry, ObtainedEntry, }:    Oef<(
    | { prev        : 4   ,  currently    : 5   ,   optin: boolean   , next        : 7    , }
    | { prevIdx     : 4   ,  currently    : 5   ,   optin: boolean   , nextIdx     : 7    , }
  )>) => ({ NeededEntry, ObtainedEntry, }) ) ;

  (({ ...x }:    Required<(
    EntryofTable<(
      | { prevIdx    ?: 4   ,  currently   ?: 5   ,   optin: true      , nextIdx     : 7    , }
    )>
  )>) => x ) ;

  (({ NeededEntry, ObtainedEntry, }:    Oef<(
    | { prevIdx    ?: 4   ,  currently   ?: 5   ,   optin: true      , nextIdx     : 7    , }
  )>) => ({ NeededEntry, ObtainedEntry, }) ) ;

  (({ ...x }:    Required<(
    EntryofTable<(
      | { prevIdx    ?: 4   ,  currently   ?: 5   ,   optin: true      , nextIdx     : 7    , }
      | { prev        : 4   ,  currently    : 5   ,   optin: boolean   , next        : 7    , }
    )>
  )>) => x ) ;

  (({ NeededEntry, ObtainedEntry, }:    Oef<(
    | { prev        : 4   ,  currently    : 5   ,   optin: boolean   , next        : 7    , }
    | { prevIdx    ?: 4   ,  currently   ?: 5   ,   optin: true      , nextIdx     : 7    , }
  )>) => ({ NeededEntry, ObtainedEntry, }) ) ;

  // (({ ...x }:    (
  //   [(
  //     Required<(
  //       EntryofTable<(
  //         | { prevIdx    ?: 4   ,  currently   ?: 5   ,   optin: true      , nextIdx     : 7    , }
  //       )>
  //     )>
  //   )] extends [infer Dx] ?
  //   Dx[keyof Dx]
  //   : never
  // )) => x ) ;

  (({ NeededEntry, ObtainedEntry, }:    Oef<(
    | { prev        : 4   ,  currently    : 5   , next        : 7    , }
    | { prevIdx     : 4   ,  currentlyIdx : 5   , nextIdx     : 7    , }
  )>) => ({ NeededEntry, ObtainedEntry, }) ) ;

  ((x:    ToRequiredKeyArray<(
    | { prevIdx     : 4   ,  currentlyIdx : 5   , nextIdx     : 7    , }
  )>) => x ) ;

  ((x:    ToRequiredKeyArray<(
    | { prev        : 4   ,  currently    : 5   , next        : 7    , }
    | { prevIdx     : 4   ,  currentlyIdx : 5   , nextIdx     : 7    , }
  )>) => x ) ;

}

{
  ((x: KnownPossibleKey<NumberConstructor | DateConstructor | import("node:worker_threads").Worker >) => {} )("UTC") ;
}

type ToRequirednessRecord<T extends object, TT extends {} | null = 1, dmmy1 = never, dmmy2 = never, dmmy3 = never, FT extends {} | null = 0 > = (

  /** Distribute Over The Alts */ T extends any ?
  { [k in keyof T] -?: ([undefined] extends [T[k] ] ? FT : TT ) ; }
  : never
) ;

/**
 * `distributive(T) : { [k in keyof T]: any ; }`
 * 
 */
type ToAnyValuedRecord<T extends object> = (

  /** Distribute Over The Alts */ T extends any ?
  { [k in keyof T]: any ; }
  : never
) ;

/**
 * {@link ToAnyValuedRecord}
 * with the resulting keys `readonly`
 * 
 */
type ToReadonlyAnyValuedRecord<T extends object> = (

  Readonly<ToAnyValuedRecord<T> >
) ;

type exactOptionalPropertyTypesFlagEnabled = (

  [{ readonly value?: object | undefined }] extends [{ readonly value?: object }] ?
  false
  : true
) ;

export {

  Entry ,

  type UsableKey ,
  type KnownPossibleKey ,
  /** alias of {@link KnownPossibleKey}. @deprecated */
  type KnownPossibleKey as AllPossibleKeys ,
  type ObtainedEntryOf ,
  type NeededEntryOf ,
  /** ill-defined. @deprecated */
  type ObtainedEntryOf as EntryOf ,
  type EntryofTable ,
  /** @deprecated */ type CompileEntry ,
  type ToRequiredKeyArray ,
  type ToRequirednessRecord ,
  type ToAnyValuedRecord ,
  type ToReadonlyAnyValuedRecord ,
  /** {@link ToAnyValuedRecord}. @deprecated */
  type ToAnyValuedRecord as ToAnyTyped ,
  /** {@link ToReadonlyAnyValuedRecord}. @deprecated */
  type ToReadonlyAnyValuedRecord as ToReadonlyAnyTyped ,

  type exactOptionalPropertyTypesFlagEnabled,

} ;

;








