const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
  it('If the word ends with "ar", those two letters are removed.', function () {
    const translation = platzom('Programar')
    expect(translation).to.equal('Program')
  })

  it('If the word starts with "Z", "pe" is added at the end.', function () {
    const translation = platzom('Zorro')
    const translation2 = platzom('Zarpar')

    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })

  it('If the translated word has 10 or  more letters, it must split in half and join with a half dash', function () {
    const translation = platzom('abecedario')

    expect(translation).to.equal('abece-dario')
  })

  it('If the original word is a palindrome, no previous rules count and returns the word capitalized.', function () {
    const translation = platzom('sometemos')

    expect(translation).to.equal('SoMeTeMoS')
  })
})