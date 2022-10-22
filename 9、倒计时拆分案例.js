//导入模块
const fs = require('fs')
const path = require('path')

//定义正则规则 分别匹配 <style></style> 和<script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//读取文件
fs.readFile(path.join(__dirname, './倒计时素材/倒计时.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取失败', err.message);
    }
    // console.log(dataStr);
    resolvecss(dataStr)
})

function resolvecss(htmlStr) {
    //正则匹配方法 exec() 在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
    //exec() 返回的数组中 索引号为0的就是匹配的结果
    const arr1 = regStyle.exec(htmlStr)
    const arr2 = regScript.exec(htmlStr)
    write(arr1[0], '<style>', '</style>', 'index.css')
    write(arr2[0], '<script>', '</script>', 'index.js')
    writeHTML(htmlStr, arr1[0], arr2[0], 'index.html')
}


//css js写入函数
/* 
 参数1: 写入的内容
 参数2: 开始标签 
 参数3: 结束标签 
 参数4: 写入的文件的名字
*/
function write(arr1, star, end, names) {
    //去除字符串中的开始标签 和 结束标签
    const str = arr1.replace(star, '').replace(end, '')
    //写入文件
    fs.writeFile(path.join(__dirname, `/倒计时素材/${names}`), str, function (err) {
        if (err) {
            console.log('写入失败', err.message);
        }
        console.log('写入成功!!!');
    })
}

//html处理函数
/*
参数1: 获取到的html文件
参数2: 匹配到的CSS样式
参数3: 匹配到的JS样式
参数4: 写入的文件的名字
*/
function writeHTML(HTML, CSS, JS, names) {
    const str = HTML.replace(CSS, '<link rel="stylesheet" href="./index.css">').replace(JS, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, `/倒计时素材/${names}`), str, function (err) {
        if (err) {
            console.log('写入失败', err.message);
        }
        console.log('写入成功!!!');
    })
}
