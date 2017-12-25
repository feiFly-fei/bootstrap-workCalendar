/**
 * Created by LiFei on 2017/12/20.
 */


$.fn.workCalendar = function (option) {
    var that = this;
    this.each(function () {
        var $this = $(this),
            data = $this.data('workCalendar'),
            options = typeof option === 'object' && option;

        if(!options.endDate){
            var nowDate = new Date();
            options.endDate = DateOperate.formatDate(nowDate, 'yyyy-MM');

            if(!options.startDate){
                var startDate = nowDate.getFullYear() + "-" + parseInt(nowDate.getMonth()-1);
                options.startDate = startDate;
            }
        }

        $this.unbind('click').bind('click', function () {

        });

    });
};

var holiday = {
    // 农历节日
    Lfestival: {
        "正月:初一": "春节",
            "正月:十五": "元宵节",
            "五月:初五": "端午节",
            "七月:初七": "乞巧节",
            "八月:十五": "中秋节",
            "九月:初九": "重阳节",
            "腊月:初八": "腊八节",
            "腊月:廿九": "除夕"
    },
    // 传统节日
    festival: {
        "1月1": "元旦",
            "2月2": "世界湿地日",
            "2月14": "情人节",
            "3月3": "全国爱耳日",
            "3月5": "青年志愿者服务日",
            "3月8": "国际妇女节",
            "3月9": "保护母亲河日",
            "3月12": "中国植树节",
            "3月14": "白色情人节",
            "3月15": "世界消费者权益日",
            "3月21": "世界森林日",
            "3月22": "世界水日",
            "3月23": "世界气象日",
            "3月24": "世界防治结核病日",
            "4月1": "愚人节",
            "4月7": "世界卫生日",
            "4月22": "世界地球日",
            "4月26": "世界知识产权日",
            "5月1": "国际劳动节",
            "5月3": "世界哮喘日",
            "5月4": "中国青年节",
            "5月8": "世界红十字日",
            "5月12": "国际护士节",
            "5月15": "国际家庭日",
            "5月17": "世界电信日",
            "5月20": "全国学生营养日",
            "5月23": "国际牛奶日",
            "5月31": " 世界无烟日",
            "6月1": " 国际儿童节",
            "6月5": "世界环境日",
            "6月6": "全国爱眼日",
            "6月17": "世界防治荒漠化和干旱日",
            "6月23": "国际奥林匹克日",
            "6月25": "全国土地日",
            "6月26": "国际禁毒日",
            "7月1": "中国共产党诞生日",
            "7月7": "中国人民抗日战争纪念日",
            "7月11": "世界人口日",
            "8月1": "中国人民解放军建军节",
            "8月12": "国际青年节",
            "9月8": "国际扫盲日",
            "9月10": "中国教师节",
            "9月16": "中国脑健康日",
            "9月20": "全国爱牙日",
            "9月21": "世界停火日",
            "9月27": "世界旅游日",
            "10月1": "中华人民共和国国庆节",
            "10月4": "世界动物日",
            "10月5": "世界教师日",
            "10月8": "全国高血压日",
            "10月9": "世界邮政日",
            "10月10": "世界精神卫生日",
            "10月14": "世界标准日",
            "10月15": "国际盲人节",
            "10月16": "世界粮食日",
            "10月17": "国际消除贫困日",
            "10月24": "联合国日",
            "10月28": "中国男性健康日",
            "10月29": "国际生物多样性日",
            "10月31": "万圣节",
            "11月8": "中国记者节",
            "11月9": "消防宣传日",
            "11月14": "世界糖尿病日",
            "11月17": "国际大学生节",
            "11月25": "国际消除对妇女的暴力日",
            "12月1": "世界爱滋病日",
            "12月3": "世界残疾人日",
            "12月4": "全国法制宣传日",
            "12月9": "世界足球日",
            "12月25": "圣诞节",
            "12月29": "国际生物多样性日"
    },
    rest: {
        '元旦': '1=>01:01',
            '除夕': '2=>腊月:廿九',
            '春节': '2=>正月:初一',
            '清明节': '1=>04:04',
            '劳动节': '1=>05:01',
            '端午节': '2=>五月:初五',
            '中秋节': '2=>八月:十五',
            '国庆节': '1=>10:01'
    }
};


var DateOperate = {
    isLeapYear: function (year) {
        return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
    },
    getDaysInMonth: function (year, month) {
        return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    },
    formatDate: function (date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    isHoliday: function (year, month, day) {
        for (var attr in this.holiday.festival) {
            var msg = attr.split('月');
            var m = parseInt(msg[0]);
            var d = parseInt(msg[1]);
            if (month == m && day == d) {
                return this.holiday.festival[attr];
            }
        }
        return false;
    },
    isLunarHoliday: function (year, month, day) {
        for (var attr in this.holiday.Lfestival) {
            var msg = attr.split(':');
            if (msg[0] == month && msg[1] == day) {
                return this.holiday.Lfestival[attr];
            }
        }
        return false;
    },
    dateTemplate: function (date) {
        var jsDate = new Date(date);
        var beginWeekDay = new Date(jsDate).getDay(),
            monthDay = DateOperate.getDaysInMonth(jsDate.getFullYear(), jsDate.getMonth());

        //
        var template = "", beginTd = beginWeekDay, beginDay = 1;
        for(var i = 0; i < 6; i++){
            var _tr = '<tr></tr>';
        }
    }
};

DateOperate.boxTemplate = function (beginDate, endDate) {
   var _dom =  '<div class="calendar-box">' +
        '<div class="row">' +
            '<div class="col-md-6 col-sm-6">' +
                '<input type="text" class="form-control"><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>' +
            '</div>' +
            '<div class="col-md-5 col-sm-5">' +
                '<input type="text" class="form-control"><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>' +
            '</div>' +
            '<div class="col-sm-1 col-md-1">' +
                '<div class="btn-box"><button class="btn btn-sm btn-success">确定</button></div>' +
            '</div>' +
            '<div class="col-md-6 col-sm-6 text-center"><span class="glyphicon glyphicon-chevron-left pull-left"></span> <label class="beginDate"></label></div>' +
            '<div class="col-md-6 col-sm-6 text-center"><span class="glyphicon glyphicon-chevron-left pull-right"></span> <label class="endDate"></label></div>' +
            '<div class="col-md-6 col-sm-6">' +
                '<table class="table calendar-table table-condensed">' +
                    '<thead><tr><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th><th>周日</th></tr></thead>' +
                    '<tbody>' + DateOperate.dateTemplate(beginDate) + '</tbody>' +
                '</table>'+
            '</div>' +
            '<div class="col-md-6 col-sm-6">' +
                '<table class="table calendar-table table-condensed">' +
                    '<thead><tr><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th>周六</th><th>周日</th></tr></thead>' +
                    '<tbody>' + DateOperate.dateTemplate(endDate) + '</tbody>' +
                '</table>'+
            '</div>' +
        '</div>'
    + '</div>';

   return _dom;
};

$(document).on(
    'focus.workCalendar click.workCalendar',
    function (e) {
        var $this = $(this);
        if($this.data('workCalendar')) return ;

        e.preventDefault();

        $this.workCalendar('show');
    }
);
