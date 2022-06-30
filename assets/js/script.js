
var currentTime = $('#current-time');
var currentDate = $('#current-date');

currentTime.text(moment().format('MMM Do, YYYY'));
currentDate.text(moment().format('h:mm A'));

