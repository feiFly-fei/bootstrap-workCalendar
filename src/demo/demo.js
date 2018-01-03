/**
 * Created by LiFei on 2017/12/20.
 */

$(function () {
    var option = {
        beginDate: '2017-10-12',
        endDate: '2017-12-20',
        disabledDay: [
            {
                beginDay: '2017-10-01',
                endDay: '2017-10-07',
                reason: '国庆'
            },
            {
                beginDay: '2017-12-12',
                reasonClass: 'rain'
            },
            {
                beginDay: '2017-12-20',
                reasonClass: 'snow'
            }
        ]
    };

    $('.workCalendar-box').workCalendar(option);
    var option1 = {
        beginDate: '2017-09-12',
        endDate: '2017-09-20',
        disabledDay: [
            {
                beginDay: '2017-10-01',
                endDay: '2017-10-07',
                reason: '国庆'
            }
        ]
    };
});


function getData() {
    var data = {
        beginDate: '2017-10',
        endDate: '2017-12'
    }
}