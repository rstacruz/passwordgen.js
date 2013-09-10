function Passwordgen(options) {
  if (!options) options = {};

  this.random = options.random || Math.random;
}

/**
 * Password generator.
 *
 *     var gen = new Passwordgen();
 *
 *     gen.phrase();       // 'television pen card small'
 *     gen.phrase(3);
 *     gen.phrase({ symbols: true });
 *     gen.phrase({ separator: '_' });
 *
 *     gen.words();       // ['hello', 'honey', 'mittens', 'score']
 *     gen.words(3);
 *     gen.words({ symbols: true });
 *
 *     gen.chars();       // "uAC4bGA0tXG"
 *     gen.chars(10);
 *     gen.chars(10, { letters: false });
 *     gen.chars(10, { numbers: false });
 *     gen.chars(10, { symbols: true });
 */

Passwordgen.prototype = {
  letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','W','Y','Z'],
  numbers: ['0','1','2','3','4','5','6','7','8','9'],
  symbols: ['!','@','#','$','%','^','&','*','`','~','/','=','?','+','|','_','-',':',';','.',','],
  wordlist: require('./words'),

  /**
   * Returns a random member of an `array`.
   */

  sample: function(array) {
    return array[this.rand(this.random() * (array.length-1))];
  },

  /**
   * Returns a random integer less than `max`.
   */

  rand: function(max) {
    return Math.floor(this.random() * max);
  },

  /**
   * Returns a string of characters.
   *
   *     gen.chars();       // "uAC4bGA0tXG"
   *     gen.chars(10);
   *     gen.chars(10, { letters: false });
   *     gen.chars(10, { numbers: false });
   *     gen.chars(10, { symbols: true });
   */

  chars: function(length, options) {
    if (!length) length = 10;

    var pool = [];
    if (!options || options.letters !== false) pool = pool.concat(this.letters);
    if (!options || options.numbers !== false) pool = pool.concat(this.numbers);

    var str = "";
    for (var i=0; i<length; ++i) { str += this.sample(pool); }

    if (options && options.symbols) {
      var symbols = this.rand(length * 0.4) + 1;

      for (i=0; i<symbols; ++i) {
        var pos = this.rand(length-1) + 1;
        str = str.substr(0, pos) + this.sample(this.symbols) + str.substr(pos+1);
      }
    }
    return str;
  },

  /**
   * Generates a random word.
   *
   *     gen.word();         // "kitten"
   */

  word: function() {
    return this.sample(this.wordlist);
  },

  /**
   * Generates words.
   *
   *     gen.words();       // ['hello', 'honey', 'mittens', 'score']
   *     gen.words(3);
   *     gen.words({ symbols: true });
   */

  words: function(length, options) {
    if (!length) length = 4;

    var list = [];
    for (var i=0; i<length; ++i) { list.push(this.word()); }

    if (options && options.symbols) {
      list.push(this.chars(this.rand(3)+2, { letters: false, symbols: true }));
    }

    return list;
  },

  /**
   * Generates a phrase.
   *
   *     gen.phrase();       // 'television pen card small'
   *     gen.phrase(3);
   *     gen.phrase({ symbols: true });
   *     gen.phrase({ separator: '_' });
   */

  phrase: function(length, options) {
    var sep = (options && options.separator) || ' ';
    return this.words(length, options).join(sep);
  }
};

module.exports = Passwordgen;
