//导入fs模块
const { log } = require('console')
const fs = require('fs')

fs.readFile('./成绩/原始成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败', err);
    }
    console.log('读取成功', dataStr);
    //字符串替换
    //replace(/=/g, ':') /g替换所有字符串
    //replace('=', ':')  只替换找到的第一个元素
    // let data = dataStr.replace(/=/g, ':')
    // replaceAll 替换所有
    let data = dataStr.replaceAll('=',':')
    //通过空格分割字符串
    data = data.split(' ');
    console.log(data);
    let str = '';
    for (let i = 0; i < data.length; i++) {
        str += data[i] + '\n'
    }
    fs.writeFile('./成绩/处理后成绩.txt', str, function (err) {
        if (err) {
            console.log('写入失败', err);
        }
    })
})