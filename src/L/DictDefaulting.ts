












/**
 * Like `Object.assign`, but ignores `undefined` properties.
 *
 * @internal
 */
function assign(...args: never): unknown ;

// function assign<dummy5 extends never, dummy6 extends never, dummy7 extends never, const T extends object = never, dummy8 extends never = never,  >(...args: never): unknown ;

// function assign<dummy5 extends never, dummy6 extends never, dummy7 extends never, const T extends object = never, dummy8 extends never = never, DstT = NoInfer<{ /** supposed to be assignable, to prevent unintended mutability */ [k in {} & (keyof T)] ?: T[k] ; }> >(
//   initialValue: NoInfer<(DstT )>,
//   ...sources: (Array<T> )
// ): typeof initialValue ;

// /** @deprecated seems like there're properties not supposed to be reassigned, aren't there? check your objs' types. */
// function assign<dummy5 extends never, dummy6 extends never, dummy7 extends never, const T extends object = never,  >(
//   initialValue: NoInfer<({ readonly [k in {} & (keyof T)] ?: T[k] ; } )>,
//   ...sources: (Array<T> )
// ): typeof initialValue ;

function assign<const T extends object = never, >(
  initialValue: NoInfer<({ /** supposed to be assignable, to prevent unintended mutability */ [k in {} & (keyof T)] ?: T[k] ; } )>,
  ...sources: NoInfer<(Array<{ readonly [k in {} & (keyof T)] ?: T[k] ; }> )>
): typeof initialValue ;
// function assign<const TSrc extends object, TDest extends { [k in keyof TSrc]: unknown ; }>(initialValue: TDest, ...sources: Array<TSrc>): TDest ;

function assign<const TSrc extends object, TDest extends { [k in keyof TSrc]: unknown ; }>(initialValue: TDest, ...sources: Array<TSrc>): TDest {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const value = (source as any)[key];
      if (value !== undefined) (initialValue as any)[key] = value;
    }
  }
  return initialValue;
}

export { assign, } ;


/**
 * {@link Object.hasOwnProperty the built-in `hasOwnProperty` },
 * evenwhen
 * the `object` {@link Record defines entirely-different method with that name } or {@link Object.getPrototypeOf doesn't `extends` `Object` }
 * 
 */
function hasOwnProperty(object: any, property: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}

export { hasOwnProperty, } ;

;









import { split, } from "./util-from-tsnode" ;

export {
  /** @deprecated */ split,
} ;



import { parse, } from "./util-from-tsnode" ;

export {
  /** @deprecated */ parse,
} ;














