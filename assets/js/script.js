var currentTime = $("#current-time");
var currentDate = $("#current-date");

currentTime.text(moment().format("MMM Do, YYYY"));
currentDate.text(moment().format("h:mm A"));

/**
 * Get Project Form Information
 */

var projectNameEl = $("#project_name");
var projectTypeEl = $("#project_type");
var hourlyRateEl = $("#hourly_rate");
var dueDateEl = $("#due_date");

var projectData = {
  projectName: "",
  projectType: "",
  hourlyRate: "",
  dueDate: "",
};
projectData.projectName = projectNameEl.val();
console.log(projectData);

const init = () => {
  //get local storage information
};
init();
