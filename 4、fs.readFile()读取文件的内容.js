//导入fs模块 来操作文档
const { log } = require('console');
const fs = require('fs')

//调用fs.readFile() 方法获取文件
// 参数1:存放路径                                       必写
// 参数2:编码格式(读取文件时采用的编码格式),默认utf8       选写
// 参数3:回调函数，拿到读取失败和成功的结果 err dataStr    必写

fs.readFile('./测试/读取测试.txt', 'utf8', function (err, dataStr) {
    //打印失败的结果
    //如果读取成功 err的值时null，dataStr为文本的值。
    //如果读取失败 err的值是错误对象，dataStr的值是undefined。
    // console.log(err);
    // console.log('--------');
    //打印成功的结果
    if (err) {
        return console.log('读取失败', err)
    }
    console.log('读取成功', dataStr);
})