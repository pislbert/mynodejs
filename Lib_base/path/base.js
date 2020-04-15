const path = require('path')

// path.basename(path[, ext])
// path.delimiter
// path.dirname(path)
// path.extname(path)
// path.format(pathObject)
// path.isAbsolute(path)
// path.join([...paths])
// path.normalize(path)
// path.parse(path)
// path.posix
// path.relative(from, to)
// path.resolve([...paths])
// path.sep
// path.toNamespacedPath(path)
// path.win32

// path.basename(path)
// 获取路径中文件基准名
const baseName = path.basename('C:\\temp\\test.txt')
console.log('base name:', baseName)

const baseName2 = path.basename('/c/temp/test.txt')
console.log('base name2:', baseName2)

// posix 也可解析win32 的路径
const baseName3 = path.win32.basename('C:\\temp\\test.txt')
console.log('base name3:', baseName3)

const baseName4 = path.posix.basename('C:\\temp\\test.txt')
console.log('base name4:', baseName4)

// path.basename(path[, ext])
// 获取路径中文件去掉扩展符的基准名
const baseName5 = path.basename('/c/temp/test.txt', '.txt')
console.log('base name5:', baseName5)

console.log('============================')

// path.delimiter
// 对应系统环境路径定界符
console.log('delimiter:', path.delimiter)
console.log('delimiter windows:', path.win32.delimiter)
console.log('delimiter posix:', path.posix.delimiter)

// path.dirname(path)
// 获取路径
console.log('dirname:', path.dirname('/c/temp/test.txt'))

// path.extname(path)
// 获取扩展名
console.log('extname:', path.extname('/c/temp/test.txt'))
console.log('extname:', path.extname('test.html'))

// 如果提供了 `dir`、 `root` 和 `base`，
// 则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt',
}))
// 返回: '/home/user/dir/file.txt'

// 如果未指定 `dir`，则使用 `root`。
// 如果只提供 `root`，或 'dir` 等于 `root`，则将不包括平台分隔符。
// `ext` 将被忽略。
console.log(path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored',
}))
// 返回: '/file.txt'

// 如果未指定 `base`，则使用 `name` + `ext`。
console.log(path.format({
  root: '/',
  name: 'file',
  ext: '.txt',
}))
// 返回: '/file.txt'

// path.join([...paths])
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// 返回: '/foo/bar/baz/asdf'
console.log(path.join('/foo', '\\bar', '/baz/asdf', 'quux', '..\\..'))
// 返回: ''/foo/bar/baz'
// console.log(path.join('foo', {}, 'bar'))
// 抛出 'TypeError: Path must be a string. Received {}'

// path.normalize(path) 规范化路径，解析 '..' 和 '.' 片段。
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
console.log(path.normalize('/foo/bar//baz/asdf/quux/../'))
// 返回: '/foo/bar/baz/asdf'
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'))

//  path.parse(path) 返回一个对象，其属性表示 path 的重要元素
console.log(path.parse('/home/user/dir/file.txt'))
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// path.posix 针对posix 环境来进行操作

// path.relative(from, to) 获取路径相对位置
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))
// 返回: '..\\..\\impl\\bbb'

// path.resolve([...paths]) 解析绝对路径
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))

// path.sep 路径分隔符 Windows 上是 \。POSIX 上是 /

// path.toNamespacedPath(path)  仅在 Windows 系统上，返回给定 path 的等效名称空间前缀路径。
console.log(path.toNamespacedPath('C:\\orandea\\test\\aaa')) 

// path.win32 win32环境