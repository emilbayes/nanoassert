var path = require('path')

module.exports = [{
    mode: 'none',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nanoassert.js',
        library: 'assert'
    }
}, {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nanoassert.min.js',
        library: 'assert'
    }
}];