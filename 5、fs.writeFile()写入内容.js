//导入fs模块
const fs = require('fs')

//调用fs.writeFile() 方法 

/*
参数1：表示文件存放的路径
参数2：表示要写入的内容
参数3：回调函数、
*/

fs.writeFile('./测试/写入测试.txt','我是写入的测试',function(err){
    if(err){
        return console.log('写入失败',err);
    }
    console.log('写入成功');
})