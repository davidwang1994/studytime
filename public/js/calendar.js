/*/
$(document).ready(function() {
$('#calendar').fullCalendar({
googleCalendarApiKey: '<YOUR API KEY>',
events: {
googleCalendarId: 'abcd1234@group.calendar.google.com'
}
});
});

*/
//$.getScript('fullcalendar.min.js',function(){

$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js', function() {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var calendar = $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    /* Sets the default view when page is loaded. In this case
    * the user will say their agenda for the day.
    */
    defaultView: 'agendaDay',
    selectable: true,
    /* Displays a semi transparent column that shows the user the time slot 
    * that they clicked on.
    */
    selectHelper: true,
    editable: true,

    select: function(start, end, allDay)
    {
    var title = prompt('Event Title:');
    if (title)
    {
    calendar.fullCalendar('renderEvent',
    {
    title: title,
    start: start,
    end: end,
    allDay: allDay
    },
    true // make the event "stick"
    );
    }
    calendar.fullCalendar('unselect');
    },

/*
    dayClick: function(date, allDay, jsEvent, view) {
      var dateFormat = new DateFormat("yyyy-MM-dd HH:mm:ss");
      var str = dateFormat.format(date);

      var allDayParam;
      if (allDay) {
        allDayParam = 1;
      }
      else {
        allDayParam = 0;
      }
      var url = "eventform.html";
      $.get({
        type: 'POST',
        url: url,
        data: {
          allday: allDayParam
 //         dateTm: str
        },
        dataType: 'html'
      success: function(data) {
          $('#editdialog').html(data);
        },
        error:function() {
         alert('Error occured');
        }
      });
      #("#editdialog").dialog("open");
    },
   */ 
    url: 'https://www.google.com/calendar/embed?src=ninjaskater365%40gmail.com&ctz=America/Los_Angeles',
    events: [
      {
        title: 'Cram for Final',
        start: new Date(y, m, 1)
      },
      {
        title: 'Study for Midterm',
        start: new Date(y, m, d-5),
        end: new Date(y, m, d-2)
      },
      {
        id: 999,
        title: 'Lecture',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Finish Math Homework',
        start: new Date(y, m, d+4, 16, 0),
        allDay: false
      },
      {
        title: 'Review Session',
        start: new Date(y, m, d, 10, 30),
        allDay: false
      },
      {
        title: 'Lecture',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        title: 'Gym',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false
      },
      {
        title: 'Click for Google',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://google.com/'
      }
    ]
  });
})
