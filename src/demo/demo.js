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
                day: '2017-11-26',
                reasonClass: 'rain'
            },
            {
                day: '2017-11-27',
                reasonClass: 'snow'
            },
            {
                day: '2017-11-28',
                reasonClass: 'snow'
            }
        ],
        editable: true,
        callback: function (data) {
            console.log(data)
            $('#workCalendar_modal').modal('toggle');
        }
    };

    $('#workCalendar-box1').workCalendar(option);
});
