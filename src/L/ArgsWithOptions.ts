









/**
 * 
 * returns array-type {@link mainArgsT} with added parameter `options` ;
 * if `options` is conformed by empty-object-literal `{}` then `options` become optional,
 * otherwise it stays required ;
 * 
 * ```
 * function run(...args: ArgsWithOptions<[dataset: any[] ], { size: number, } > ) ;
 * // becomes
 * function run(...args: [
 *   dataset: any[],
 *   options: { readonly size: number, } ] ) ;
 * // ;
 * 
 * //
 * 
 * function run(...args: ArgsWithOptions<[dataset: any[] ], { size?: number, } > ) ;
 * // becomes
 * function run(...args: [
 *   dataset: any[],
 *   options?: {
 *     readonly size?: number,
 *   } ] ) ;
 * // ;
 * 
 * //
 * 
 * function run(...args: ArgsWithOptions<[dataset: any[] ], { size?: number, disposition: Disposition, } > ) ;
 * // becomes
 * function run(...args: [
 *   dataset: any[],
 *   options: {
 *     readonly disposition: Disposition;
 *     readonly size?: number;
 *   } ] ) ;
 * // ;
 * 
 * //
 * 
 * function run(...args: ArgsWithOptions<[dataset: any[] ], { compilerOptions?: { strict?: boolean; jsx?: string; }, } > ) ;
 * // becomes
 * function run(...args: [
 *   dataset: any[],
 *   options?: {
 *     readonly compilerOptions?: {
 *       strict?: boolean;
 *       jsx?: string;
 *     },
 *   } ] ) ;
 * // ;
 * 
 * //
 * 
 * function run(...args: ArgsWithOptions<[dataset: any[] ], { size?: number, disposition: Disposition, } | { preset ?: string ; } > ) ;
 * // becomes
 * function run(...args: [
 *   dataset: any[],
 *   options?:
 *     | { readonly disposition: ...; readonly size?: ...; }
 *     | { readonly preset?: ...; } ,
 *   ] ) ;
 * // ;
 * 
 * //
 * ```
 * 
 */
type ArgsWithOptions<mainArgsT extends readonly any[], optsT extends object > = (
  ArgsWithOptionsImpl<mainArgsT, Readonly<optsT> >
) ;

namespace ArgsWithOptions { ; }

type ArgsWithOptionsImpl<mainArgsT extends readonly unknown[], optsT extends object > = (
  readonly [
    ...mainArgsT,
    ...(({} & object) extends optsT ? [options?: optsT] : [options: optsT ] ) ]
) ;

export {
  ArgsWithOptions,
}




namespace ArgsGetOptions { ; }

/**
 * 
 * coloquially the inverse of {@link ArgsWithOptions} -
 * __assuming that `options` were the last parameter__, restores `options`'s type
 * 
 */
type ArgsGetOptions<argsT extends readonly any[]> = (
  /**
   * note:
   * if {@link argsT} were plain `readonly T[]` then
   * this method would immediately exit with {@link AGO_NOT_REDUCED}.
   * 
   * note:
   * to avoid distributivity,
   * needs to wrap both sides each as one-item tuple-type
   * 
   */
  (
    [argsT] extends [ /* don't forget `readonly`!!! */ readonly [infer arg0T, ...(infer etcArgsT extends readonly any[])] ] ?
    (
      ArgsGetOptions<etcArgsT> extends infer etcCaseResultT ?
      (
        AGO_INVARIANTTYPEPACK<etcCaseResultT> extends AGO_INVARIANTTYPEPACK<AGO_ERROR_NOSUCHELEMENTEXCEPTION> ?
        /* stop here. */
        Required<{ readonly value?: arg0T }>["value"]
        : etcCaseResultT
      )
      : /* shall never happen. */ never
    )
    :
    [argsT] extends [AGO_EEMPTYARRAY]  ?
    AGO_ERROR_NOSUCHELEMENTEXCEPTION
    :
    AGO_NOT_REDUCED
  )
) ;

type AGO_NOT_REDUCED = unknown ;

type AGO_ERROR_NOSUCHELEMENTEXCEPTION = undefined | never ;

interface AGO_INVARIANTTYPEPACK<T> { (x: T): T ; }

type AGO_EEMPTYARRAY = (
  | (readonly [])
  | (readonly never[] )

  /* an edge-case: `readonly undefined[]` */
  | (readonly undefined[] )
) ;

export {
  ArgsGetOptions ,
} ;









