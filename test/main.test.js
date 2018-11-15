const sao = require('sao')
const path = require('path')

const template = {
  fromPath: path.join(__dirname, '..')
}

describe('test', () => {
  it('ok', async () => {
    const stream = await sao.mockPrompt(template, {
      name: 'mockName',
      username: 'mockUsername',
      email: 'mockmail@mymail.com'
    })

    expect(stream.fileList).toMatchSnapshot()

    const pkg = JSON.parse(stream.fileContents('package.json'))
    expect(pkg.name).toBe('mockName')
    expect(pkg.author).toBe('mockUsername <mockmail@mymail.com>')
    expect(pkg.license).toBe('MIT')

    expect(stream.fileContents('.postcssrc.js')).toMatchSnapshot('.postcssrc.js')
    expect(stream.fileContents('README.md')).toMatchSnapshot('README.md')
    expect(stream.fileContents('.babelrc')).toMatchSnapshot('.babelrc')
    expect(stream.fileContents('tsconfig.json')).toMatchSnapshot('tsconfig.json')
  })
})

