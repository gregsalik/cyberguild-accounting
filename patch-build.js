// Patch fs.readlink to handle Node.js v24 EISDIR on Windows for regular files
const fs = require('fs')
const origReadlink = fs.readlink.bind(fs)
const origReadlinkSync = fs.readlinkSync.bind(fs)

fs.readlink = function (path, options, callback) {
  if (typeof options === 'function') { callback = options; options = {} }
  origReadlink(path, options, (err, linkStr) => {
    if (err && err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`)
      e.code = 'EINVAL'
      return callback(e)
    }
    callback(err, linkStr)
  })
}

fs.readlinkSync = function (path, options) {
  try {
    return origReadlinkSync(path, options)
  } catch (err) {
    if (err.code === 'EISDIR') {
      const e = new Error(`EINVAL: invalid argument, readlink '${path}'`)
      e.code = 'EINVAL'
      throw e
    }
    throw err
  }
}

// Run next build
require('./node_modules/next/dist/bin/next')
