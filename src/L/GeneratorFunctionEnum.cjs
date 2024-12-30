
// @ts-check





exports.utilReiterated = (

  /** @satisfies {<const E>(x: () => Iterable<E> ) => Iterable<E> } */
  (function (x) {

    return (
      /** @type {const} */ ([...x() ])
    ) ;
  })
) ;




