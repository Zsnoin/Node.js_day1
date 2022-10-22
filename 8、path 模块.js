/*
path 模块是Node.js官方提供的、用来处理路径问题的模块。他提供了一系列的方法和属性，用来满足
用户对路径的需求。

path.join()  用来将多个路径拼接成一个完整路径字符串。

path.basename()  用来从路径字符串中，将文件名解析出来。
参数1: 必选参数 表示一个路径的字符串
参数2: 可选参数 表示文件扩展名
返回值: string 表示路径中的最后一部分

导入path模块
const path = require('path')
*/
const path = require('path')
const fs = require('fs')

//注意 ../会抵消前面一层的路径
const pathStr = path.join('/a','/b/c','../','/e','/f')
console.log(pathStr);

fs.readFile(path.join(__dirname,'/测试/读取测试.txt'),'utf8',function(err,dataStr){
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})

// 拿到文件名 index.html
const str1 = path.basename('/b/c/d/e/f/index.html')
// 拿到文件名 index 去除扩展名 .html
const str2 = path.basename('/b/c/d/e/f/index.html','.html')
console.log(str1);
console.log(str2);

//path.extname 拿到的是文件的扩展名(后缀名)
const str3 = path.extname('/a/b/c/d/e/f/index.html')
console.log(str3);