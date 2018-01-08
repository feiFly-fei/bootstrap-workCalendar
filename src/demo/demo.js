/**
 * Created by LiFei on 2017/12/20.
 */

$(function () {
    var option = {
        beginDate: '2017-10-12',
        endDate: '2017-11-25',
        disabledDay: [
            {
                day: '2017-10-01'
            },
            {
                day: '2017-10-02'
            },
            {
                day: '2017-10-03'
            },
            {
                day: '2017-11-12',
                reasonClass: 'rain'
            },
            {
                day: '2017-11-20',
                reasonClass: 'snow'
            }
        ]
    };

    $('#workCalendar-box1').workCalendar(option);
});


function getData() {
    var data = {
        beginDate: '2017-10',
        endDate: '2017-12'
    }
}