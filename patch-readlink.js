const fs = require('fs')
const origReadlink = fs.readlink.bind(fs)
const origReadlinkSync = fs.readlinkSync.bind(fs)

fs.readlink = function (path, options, callback) {
  if (typeof options === 'function') { callback = options; options = {} }
  origReadlink(path, options, (err, linkStr) => {
    if (err && err.code === 'EISDIR') {
      const e = Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), { code: 'EINVAL', errno: -4048, syscall: 'readlink', path })
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
      const e = Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), { code: 'EINVAL', errno: -4048, syscall: 'readlink', path })
      throw e
    }
    throw err
  }
}
