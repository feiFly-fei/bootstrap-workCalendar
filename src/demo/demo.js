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


    $('#showCalendar').workCalendar(option);
});


function getData() {
    var data = {
        beginDate: '2017-10',
        endDate: '2017-12'
    }
}