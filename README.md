<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isAnagram

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an [anagram][anagram].



<section class="usage">

## Usage

To use in Observable,

```javascript
isAnagram = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-anagram@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isAnagram = require( 'path/to/vendor/umd/assert-is-anagram/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-anagram@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isAnagram;
})();
</script>
```

#### isAnagram( str, value )

Tests if a `value` is an [anagram][anagram].

```javascript
var str = 'I am a weakish speller';
var value = 'William Shakespeare';

var bool = isAnagram( str, value );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** address the presence of [diacritics][diacritics].
-   Only **alphanumeric** characters are considered.
-   Capitalization is **ignored**.
-   If provided a non-string for the first `argument`, the function throws an `Error`.
-   If provided a non-string for the second `argument`, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-anagram@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isAnagram( 'I am a weakish speller', 'William Shakespeare' );
// returns true

bool = isAnagram( 'bat', 'tab' );
// returns true

bool = isAnagram( 'bat', 'TAB' );
// returns true

bool = isAnagram( 'bat', 't a b' );
// returns true

bool = isAnagram( 'bat 321', 'tab 123' );
// returns true

bool = isAnagram( 'bat', 'tabba' );
// returns false

bool = isAnagram( 'bat', 5 );
// returns false

bool = isAnagram( '123', 321 );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-alphagram`][@stdlib/assert/is-alphagram]</span><span class="delimiter">: </span><span class="description">test if a value is an alphagram.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-anagram.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-anagram

[test-image]: https://github.com/stdlib-js/assert-is-anagram/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-anagram/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-anagram/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-anagram?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-anagram.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-anagram/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-anagram#cli
[cli-url]: https://github.com/stdlib-js/assert-is-anagram/tree/cli
[@stdlib/assert-is-anagram]: https://github.com/stdlib-js/assert-is-anagram/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-anagram/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-anagram/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-anagram/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-anagram/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-anagram/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-anagram/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-anagram/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-anagram/main/LICENSE

[anagram]: https://en.wikipedia.org/wiki/Anagram

[diacritics]: https://en.wikipedia.org/wiki/Diacritic

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-alphagram]: https://github.com/stdlib-js/assert-is-alphagram/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
