






















/**
 * Specific Alt(s) Of `T` Conforming To `U`
 * 
 */
type Extract<T, U> = (
  T extends U ? T : never
) ;

/**
 * Excludes Specific Alt(s) Of `T` Conforming To `U`
 * 
 */
type Exclude<T, U> = (
  T extends U ? never : T
) ;

/**
 * Specific Alt(s) Of `T` Which `U` Confirms To
 * 
 */
type ExtractSupertype<T, U> = (
  T extends any ?
  ([U] extends [T] ? T : never )
  : never
) ;

/**
 * Excludes Specific Alt(s) Of `T` Which `U` Confirms To
 * 
 */
type ExcludeSupertype<T, U> = (
  T extends any ?
  ([U] extends [T] ? never : T )
  : never
) ;

{
  (x: Extract                 <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
  (x: ExtractSupertype        <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
  (x: Exclude                 <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
  (x: ExcludeSupertype        <{ c: 3, } | { d: 3, } | { e: 3, } | { readonly g?: 5, }, {}>) => {} ;
}

/**
 * convert
 * `A1 | A2 | ... | AN` (Alternation)
 * into
 * `A1 & A2 & ... & AN` (Conjunction/Multicast)
 * 
 */
type AltsConjunction<T extends object> = (

  /**
   * `T extends any ?` distributes, so
   * eg `number | string` become `number[] | string[]` and not `(number | string)[]`.
   * atthesametime,
   * Function Param(s) have inverted variance, so
   * `((x: number ) => void ) | ((x: string ) => void )` becomes `((x: number & string ) => void )`
   * 
   */
  Parameters<(
    //
    T extends any ?
    ((x: T) => void )
    : never
  )>[0]
) ;



;

/**
 * substitute for
 * {@link globalThis.Parameters};
 * this version
 * ensures
 * proper results for
 * Overloads And `|`s (eg `{ (x: Readable): string ; } | { (x: Socket ): string; (x: Socket, opts?: { ... } ): string; }`)
 * 
 */
type Parameters<T extends (...args: any) => any> = (

  import("./FunctionSignature").Parameters<T>
) ;

/**
 * substitute for
 * {@link globalThis.ReturnType};
 * this version
 * ensures
 * proper results for
 * Overloads And `|`s (eg `{ (x: Readable): string ; } | { (x: Socket ): string; (x: Socket, opts?: { ... } ): string; }`)
 * 
 */
type ReturnType<T extends (...args: any) => any> = (

  import("./FunctionSignature").ReturnType<T>
) ;

;



export {

  type Extract ,
  type ExtractSupertype ,
  type Exclude ,
  type ExcludeSupertype ,

  type Parameters ,
  type ReturnType ,

  type AltsConjunction  ,
  type AltsConjunction as AltsConstituentConjunction ,

} ;






















