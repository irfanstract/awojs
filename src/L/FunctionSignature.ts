









import type { AltsConjunction, Exclude, Extract, } from "./util-CompoundTypes";

import type { ArgsWithOptions, } from "./util-ArgsProcessing";












/**
 * substitute for
 * {@link globalThis.Parameters};
 * this version
 * ensures
 * proper results for
 * Overloads And `|`s (eg `{ (x: Readable): string ; } | { (x: Socket ): string; (x: Socket, opts?: { ... } ): string; }`)
 * 
 */
type MyFunctionParams<MyFunction extends MpfBase > = (

  MyFunctionParamsAndReturnsTypes<MyFunction>["params"]
) ;

type MyFunctionReturnType<MyFunction extends MpfBase > = (

  MyFunctionParamsAndReturnsTypes<MyFunction>["returnValue"]
) ;

/**
 * `converts Fnc-Type Union Into Ovld Sig`
 * 
 */
type MyFunctionOverloaded<MyFunction extends MpfBase > = (

  AltsConjunction<(
    Extract<(
      Exclude<MyFunction, (
        | never
        | boolean
        | number
        | string
      )>
    ), any >
  )>
) ;

/**
 * non-generic sig with specific type
 * 
 */
// MyFunctionMonoSig
// MprtMonoSig
// MprtMono
type MprtMono<in P extends readonly unknown[] = never, out R extends unknown = unknown > = (

  // (...x: P) => R
  { (...x: P): R ; }
) ;

/**
 * Given Given Descriptor Assumed To Be Returned From {@link MyFunctionFromParamsAndReturnsTypes},
 * Reconstruct The (Hopefully) Original (Overloaded) Function-Type
 * 
 */
type MyFunctionFromParamsAndReturnsTypes<T extends MprtReturnTup, dmmy1 = never, dmmy2 = never, DT extends MpfBase = MpfBase > = (

  AltsConjunction<(
    T extends any ?
    { (...args: T["params"]): T["returnValue"] ; }
    : never
  )>
) ;

/**
 * Inspect The Function-Type's Params(es) And Return-Type(s),
 * Making Correl(s) Between The Two By Which Overload It-Both Came From
 * 
 * this version
 * ensures
 * proper results for
 * Overloads And `|`s (eg `{ (x: Readable): string ; } | { (x: Socket ): string; (x: Socket, opts?: { ... } ): string; }`)
 * 
 */
type MyFunctionParamsAndReturnsTypes<MyFunction extends MpfBase > = (
    //

    [MyFunction] extends [{
      //
      (...args: infer P01): infer R01;
      (...args: infer P02): infer R02;
      (...args: infer P03): infer R03;
      (...args: infer P04): infer R04;
      (...args: infer P05): infer R05;
      (...args: infer P06): infer R06;
      (...args: infer P07): infer R07;
      (...args: infer P08): infer R08;
      (...args: infer P09): infer R09;
      (...args: infer P10): infer R10;
      (...args: infer P11): infer R11;
      (...args: infer P12): infer R12;
      (...args: infer P13): infer R13;
      (...args: infer P14): infer R14;
      (...args: infer P15): infer R15;
    }]
    ?
    (
      | MprtReturnTup<P01, R01>
      | MprtReturnTup<P02, R02>
      | MprtReturnTup<P03, R03>
      | MprtReturnTup<P04, R04>
      | MprtReturnTup<P05, R05>
      | MprtReturnTup<P06, R06>
      | MprtReturnTup<P07, R07>
      | MprtReturnTup<P08, R08>
      | MprtReturnTup<P09, R09>
      | MprtReturnTup<P10, R10>
      | MprtReturnTup<P11, R11>
      | MprtReturnTup<P12, R12>
      | MprtReturnTup<P13, R13>
      | MprtReturnTup<P14, R14>
      | MprtReturnTup<P15, R15>
    )
    :

    [MyFunction] extends [{
      //
      (...args: infer P1): infer R1;
      (...args: infer P2): infer R2;
      (...args: infer P3): infer R3;
      (...args: infer P4): infer R4;
      (...args: infer P5): infer R5;
    }]
    ?
    (
      | MprtReturnTup<P1, R1>
      | MprtReturnTup<P2, R2>
      | MprtReturnTup<P3, R3>
      | MprtReturnTup<P4, R4>
      | MprtReturnTup<P5, R5>
    )
    :

    [MyFunction] extends [( & MprtMono<infer P1, infer R1> & MprtMono<infer P2, infer R2> & MprtMono<infer P3, infer R3> & MprtMono<infer P4, infer R4> )] ?
    (                       | MprtReturnTup<P1, R1>        | MprtReturnTup<P2, R2>        | MprtReturnTup<P3, R3>        | MprtReturnTup<P4, R4>        ) :

    [MyFunction] extends [( & MprtMono<infer P1, infer R1> & MprtMono<infer P2, infer R2> & MprtMono<infer P3, infer R3> )] ?
    (                       | MprtReturnTup<P1, R1>        | MprtReturnTup<P2, R2>        | MprtReturnTup<P3, R3>        ) :

    [MyFunction] extends [( & MprtMono<infer P1, infer R1> & MprtMono<infer P2, infer R2> )] ?
    (                       | MprtReturnTup<P1, R1>        | MprtReturnTup<P2, R2>        ) :

    [MyFunction] extends [( & MprtMono<infer P1, infer R1>  )] ?
    (                       | MprtReturnTup<P1, R1>       ) :

    never
) ;

{

  ({ ...a }: MyFunctionParamsAndReturnsTypes<NodeRequire> ) => a ;

  ;
  ({ ...a }: MyFunctionParamsAndReturnsTypes<typeof import("node:child_process").execSync > ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<(ReturnType<(x: number[]) => typeof x.splice > ) > ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<(ReturnType<(x: number[]) => typeof x.slice > ) > ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<(ReturnType<(x: number[]) => (typeof x.slice | typeof x.at) > ) > ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<(ReturnType<(x: number[]) => typeof x.map > ) > ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<(ReturnType<(x: number[]) => typeof x.reduce > ) > ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<typeof import("immutable").Map<any, unknown> > ) => (
    a
  ) ;

  (a: (
    MyFunctionFromParamsAndReturnsTypes<(
      MyFunctionParamsAndReturnsTypes<(
        typeof import("immutable").Map<any, unknown>
      ) >
    )>
  ) ) => (
    a
  ) ;

  ({ ...a }: MyFunctionParamsAndReturnsTypes<IterableIterator<string>["next"] > ) => a ;

}

interface MprtReturnTup<Params extends readonly unknown[] = any, ReturnValue = unknown> extends Extract<(

  {
    readonly params     : Params,
    readonly returnValue: ReturnValue,
  }
), any > {}




type MpfBase = (
  (...args: never) => any
) ;








export {

  type MyFunctionFromParamsAndReturnsTypes as FunctionFromParamsAndReturnsTypes ,

  type MyFunctionParamsAndReturnsTypes as ParamsAndReturnsTypes ,
  /** @deprecated @see {Parameters} */
  type MyFunctionParams as Paramseters,
  type MyFunctionParams        as Parameters,
  type MyFunctionReturnType    as ReturnType ,

  type MyFunctionOverloaded as FunctionOverloaded ,

  /* auxiliary `export`s to prevent 'return type is using private names' complaints */
  /** {@link MprtReturnTup}. auxiliary `export` to prevent 'return type is using private names' complaints, DON'T USE IN USERSPACE. @deprecated */
  type MprtReturnTup,

} ;




















