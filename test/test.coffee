chai = require('chai')
assert = chai.assert

repeat = (fn) ->
  a = arguments
  => fn.apply(this, a) for i in [1..1024]

describe 'Passwordgen', ->
  Pw = require('..')
  gen = Pw(Math.random)

  describe 'chars', ->
    it '.length', repeat ->
      result = gen.Chars.generate(10, {})
      assert.equal result.length, 10

    it '.length 15', repeat ->
      result = gen.Chars.generate(15, {})
      assert.equal result.length, 15

    it '.match', repeat ->
      result = gen.Chars.generate(15, {})
      assert.match result, /^[A-Za-z0-9]+$/

  describe 'words', ->
    it '.length', repeat ->
      result = gen.Words.words(4, {})
      assert.equal result.length, 4

    it '.match', repeat ->
      result = gen.Words.words(4, {})
      for i, word of result
        assert.match word, /^[A-Za-z'\-0-9]+$/

