/** @license Apache-2.0 */

'use strict';

/**
* Test if a finite single-precision floating-point number is a nonnegative integer.
*
* @module @stdlib/math-base-assert-is-nonnegative-integerf
*
* @example
* var isNonNegativeIntegerf = require( '@stdlib/math-base-assert-is-nonnegative-integerf' );
*
* var bool = isNonNegativeIntegerf( 1.0 );
* // returns true
*
* bool = isNonNegativeIntegerf( 0.0 );
* // returns true
*
* bool = isNonNegativeIntegerf( -10.0 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
