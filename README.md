# passwordgen.js

Generates passwords in the command line. Why passwordgen.js?

 * Makes phrase passwords as well as character passwords. See [xkcd #936].
 * Word passwords are easier to type on mobile.

## Install

    npm install -g passwordgen

## Usage

~~~ sh
$ gen
ztht3JflLBzmbEu

$ gen --words 4
correct horse battery staple

$ gen --chars 10 --symbols
O_Rf-4qBOHmm

$ gen | xsel -ib   # linux
$ gen | pbcopy     # osx
# copies the password to clipboard
~~~

## --help

    Usage: gen [options]

    Options:

      -h, --help          output usage information
      -w, --words <n>     generate <n> words
      -c, --chars <n>     generate <n> characters
      -s, --symbols       include symbols
      -S, --seed <seed>   use a seed value

    Examples:

      $ gen         #=> EH8peEWVyYskuPh
      $ gen -c 5    #=> WsPnA
      $ gen -w 4    #=> correct horse battery staple

## Programmatic usage

See [index.js](lib/index.js) for all details.

~~~ js
var Passwordgen = require('passwordgen');
gen = new Passwordgen();

gen.phrase();       //=> "television pen card small"
gen.chars();        //=> "uAC4bGA0tXG"

gen.word();         //=> "kitten"
gen.words();        //=> ['hello', 'honey', 'mittens', 'score']
~~~

Also available:

~~~ js
gen.phrase(3);
gen.phrase({ symbols: true });
gen.phrase({ separator: '_' });

gen.words(3);
gen.words({ symbols: true });

gen.chars(10);
gen.chars(10, { letters: false });
gen.chars(10, { numbers: false });
gen.chars(10, { symbols: true });
~~~

## License

© 2013, Rico Sta. Cruz. Released under the [MIT License].

[MIT License]: http://www.opensource.org/licenses/mit-license.php
[xkcd #936]: https://xkcd.com/936/
