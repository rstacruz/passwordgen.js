# passwordgen.js

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
