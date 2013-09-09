var words = require('./words');

module.exports = function(random) {

  function sample(array) {
    return array[Math.floor(random() * (array.length-1), 10)];
  }

  function rand(n) {
    return Math.floor(random() * n);
  }

  var Chars = {
    letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','W','Y','Z'],
    numbers: ['0','1','2','3','4','5','6','7','8','9'],
    symbols: ['!','@','#','$','%','^','&','*','`','~','/','=','?','+','|','_','-',':',';','.',','],

    generate: function(length, options) {
      var pool = [];
      if (options.letters !== false) pool = pool.concat(this.letters);
      if (options.numbers !== false) pool = pool.concat(this.numbers);

      var str = "";
      for (var i=0; i<length; ++i) { str += sample(pool); }

      if (options.symbols) {
        var symbols = Math.floor(random() * (length * 0.4)) + 1;

        for (i=0; i<symbols; ++i) {
          var pos = Math.floor(rand(length-1)) + 1;
          str = str.substr(0, pos) + sample(this.symbols) + str.substr(pos);
        }
      }
      return str;
    },
  };

  var Words = {
    word: function() {
      var len = words.length;
      return words[parseInt(random() * len, 10)];
    },
    words: function(length, options) {
      var list = [];
      for (var i=0; i<length; ++i) { list.push(this.word()); }

      if (options.symbols) {
        list.push(Chars.generate(rand(3)+2, { letters: false, symbols: true }));
      }
      return list;
    }
  };

  return {
    Chars: Chars,
    Words: Words
  };

};
