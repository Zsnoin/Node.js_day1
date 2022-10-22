
        //核心思想：1、用将来的时间减去现在的时间  但是时分秒不能直接相减  
        //         2、用 “时间戳” 来完成  用户输入时间总的毫秒数减去现在的毫秒数
        //         3、把得到的毫秒数在转换成时分秒
        /*          
                  d = parseInt(总秒数/60/60/24)  计算天数
                  h = parseInt(总秒数/60/60%24)  计算小时
                  m = parseInt(总秒数/60%60)  计算分数
                  s = parseInt(总秒数%60)  计算秒数
        */
        var span1 = document.querySelector(".span1");
        var span2 = document.querySelector(".span2");
        var span3 = document.querySelector(".span3");
        var lateTime = +new Date('2022-12-23 12:00:00');   //返回的是用户输入的时间的毫秒数
        function conutDown() {
            var nowTime = +new Date();        //返回的是当前时间的总毫秒数
            var and = (lateTime - nowTime) / 1000;     //剩余的毫秒数除于1000得到总的秒数
            var d = parseInt(and / 60 / 60 / 24);
            d = d < 10 ? '0' + d : d;
            var h = parseInt(and / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            var m = parseInt(and / 60 % 60);
            m = m < 10 ? '0' + m : m;
            var s = parseInt(and % 60);
            s = s < 10 ? '0' + s : s;
            span1.innerHTML = h + '小时';
            span2.innerHTML = m + '分钟';
            span3.innerHTML = s + '秒';
            return d + "天" + h + "时" + m + "分" + s + '秒';
        }
        conutDown();
        setInterval(conutDown, 1000);
    