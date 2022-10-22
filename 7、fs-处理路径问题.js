/*
问题描述:
在使用js模块操作文件时，如果提供的操作路径是以./或者../开头的相对路径时，很容易出现路径动态拼接的错误。
原因：代码在运行的时候，会以执行 node 命令时所处的目录。动态拼接出被操作文件的完整路径。
*/

const fs = require('fs')

//出现路径拼接错误的问题是因为出现了./ ../的相对路径。
//要解决这个问题的话直接给一个完整的路径即可。
// fs.readFile('./测试/读取测试.txt','utf-8',function(err,dataStr){
//     if (err) {
//         return console.log('读取失败',err);
//     }
//     console.log('读取成功',dataStr);
// })

// 移植性非常差，不利于维护。
// fs.readFile('C:\\Users\\32014\\Desktop\\Nodejs\\测试\\读取测试.txt', 'utf-8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取失败', err);
//     }
//     console.log('读取成功', dataStr);
// })

// __dirname 表示当前文件所处的文件夹的目录
// console.log(__dirname);
fs.readFile(__dirname + '/测试/读取测试.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败', err);
    }
    console.log('读取成功', dataStr);
})