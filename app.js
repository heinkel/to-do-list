const myExpressJS = require("express");
const bParser = require("body-parser");
const listApp = myExpressJS();
const port = 3001;
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

listApp.set("view engine", "ejs"); //adds EJS to my projects to start adding markers to add dinamic content for HTML
//* 1) first step to start using EJS with express 

listApp.get("/", (request, response) => {
  var today = new Date();
  var currentDay = today.getDay();
  var dayName = daysInWeek[currentDay];
  var day = "";
  var message = "";

  day = daysInWeek[currentDay];
  if (currentDay === 6 || currentDay === 0) {
    message = "It's Weekend Yey!";
    // response.write(`<h1>Hey is ${dayName} so is weekend yey!</h1>`);
    // response.send();
  } else {
    message = "Why are you not working!";
    // response.write(`<p>It is not Weekend, today is ${dayName}!</p>`);
    // response.write('<h1>I have to work today!</h1>');//send method could be invocated just one everytime  thats way I should use a different method if I want to send to the user multiple HTML code and content
    // response.send();
    //OR JUST sending files like:
    //if weekend
    //response.sendFile(__dirname + "/weekend.html"); weekend.html must be created before
    //else
    //response.sendFile(__dirname + "/notweekend.html");
  }
  response.render("list", { kindOfDay: day, alertMessage: message });
  //* 2) finally invoke html this case named as list file that should exist, and assign variabe value to markers that should exist in list file, list file is .ejs
  // second element is a JS object where {x:y} 'x' is variable name in html file , and 'y' a local variable here in javascript file
  //multiple objects are variable in list file using markers
});

listApp.listen(port, () => {
  console.log(`server started on port ${port}`);
});
