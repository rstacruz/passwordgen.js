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

      -h, --help       output usage information
      -w, --words <n>  generate <n> words
      -c, --chars <n>  generate <n> characters
      -s, --symbols    include symbols

    Examples:

      $ gen         #=> EH8peEWVyYskuPh
      $ gen -c 5    #=> WsPnA
      $ gen -w 4    #=> correct horse battery staple

## License

© 2013, Rico Sta. Cruz. Released under the [MIT License].

[MIT License]: http://www.opensource.org/licenses/mit-license.php
[xkcd #936]: https://xkcd.com/936/
