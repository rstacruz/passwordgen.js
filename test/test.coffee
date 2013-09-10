assert = require('chai').assert

# Decorator to repeat a test 1000x
repeat = (fn) ->
  a = arguments
  => fn.apply(this, a) for i in [1..1024]

describe 'Passwordgen', ->
  Generator = require '..'
  gen = new Generator()

  describe '.chars', ->
    it '.chars(n)', repeat ->
      result = gen.chars(10)
      assert.equal result.length, 10

    it '.chars()', repeat ->
      result = gen.chars()
      assert.operator result.length, '>', 0

    it '.chars(n, letters: false)', repeat ->
      result = gen.chars(10, letters: false)
      assert.match result, /^[0-9]+$/

    it '.chars(n, numbers: false)', repeat ->
      result = gen.chars(10, numbers: false)
      assert.match result, /^[A-Za-z]+$/

    it '.chars(n, symbols: true) - has symbols', repeat ->
      result = gen.chars(10, symbols: true)
      result = result.replace(/[A-Za-z0-9]/g, '')
      assert.operator result.length, '>', 0

    it '.chars(n, symbols: true) - length', repeat ->
      result = gen.chars(10, symbols: true)
      assert.equal result.length, 10

    it '.chars(15)', repeat ->
      result = gen.chars(15)
      assert.equal result.length, 15

  describe '.word', ->
    it '.match', repeat ->
      assert.match gen.word(), /^[A-Za-z'\-0-9]+$/

  describe '.words', ->
    it '.words(n)', repeat ->
      words = gen.words(4)
      assert.equal words.length, 4

    it '.words(n, symbols: true) - 1', repeat ->
      words = gen.words(4, symbols: true)
      assert.equal words.length, 5

    it '.words(n, symbols: true) - 2', repeat ->
      words = gen.words(4, symbols: true)
      assert.operator words[4].replace(/[A-Za-z0-9]/g, '').length, '>', 0

    it '.match', repeat ->
      words = gen.words(4)
      for word in words
        assert.match word, /^[A-Za-z'\-0-9]+$/

  describe '.phrase', ->
    it '.phrase()', repeat ->
      phrase = gen.phrase()
      assert.equal phrase.split(' ').length, 4

    it '.phrase(n)', repeat ->
      phrase = gen.phrase(10)
      assert.equal phrase.split(' ').length, 10

  describe 'secure_random', ->
    random = null

    before ->
      random = require('../lib/secure_random')

    it '<= 1', repeat ->
      assert.operator random(), '<=', 1

    it '>= 0', repeat ->
      assert.operator random(), '>=', 0
