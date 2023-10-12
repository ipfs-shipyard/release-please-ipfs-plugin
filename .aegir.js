/** @type {import('aegir/types').PartialOptions} */
module.exports = {
  build: {
    config: {
      platform: 'node', // release-please runs on node
      format: 'cjs', // release-please `require`s this package, so we need to export CJS
      external: [
        'esprima',
        'node-gyp'
      ]
    }
  }
}
