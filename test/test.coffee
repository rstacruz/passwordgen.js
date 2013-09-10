chai = require('chai')
assert = chai.assert

describe 'Passwordgen', ->
  before ->
    Pw = require('..')
    @gen = Pw(Math.random)

  describe 'chars', ->
    it '.length', ->
      @result = @gen.Chars.generate(10, {})
      assert.equal @result.length, 10

    it '.length 15', ->
      @result = @gen.Chars.generate(15, {})
      assert.equal @result.length, 15

    it '.match', ->
      @result = @gen.Chars.generate(15, {})
      assert.match @result, /^[A-Za-z0-9]+$/
