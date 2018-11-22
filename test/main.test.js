const sao = require('sao')
const path = require('path')

const generator = path.join(__dirname, '..')

describe('test', () => {
  it('ok', async () => {
    const stream = await sao.mock({ generator }, {
      name: 'mockName',
      username: 'mockUsername',
      email: 'mockmail@mymail.com'
    })

    expect(stream.fileList).toMatchSnapshot()

    const pkg = JSON.parse(await stream.readFile('package.json'))
    expect(pkg.name).toBe('mockname')
    expect(pkg.author).toBe('mockusername <mockmail@mymail.com>')
    expect(pkg.license).toBe('MIT')

    expect(await stream.readFile('.postcssrc.js')).toMatchSnapshot('.postcssrc.js')
    expect(await stream.readFile('README.md')).toMatchSnapshot('README.md')
    expect(await stream.readFile('.babelrc')).toMatchSnapshot('.babelrc')
    expect(await stream.readFile('tsconfig.json')).toMatchSnapshot('tsconfig.json')
  })
})

