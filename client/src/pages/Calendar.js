
// // import React from 'react';
// // import ReactDOM from 'react-dom';
 
// // // ... and fullcalendar-reactwrapper.
// // import FullCalendar from 'fullcalendar-reactwrapper';
 
// onst https = require('https');
// const util = require('util');

// exports.handler = (event, context, callback) => {
//   var todayDate = new Date();
//   // var yesterdayDate = new Date(todayDate.getTime() - 1000*60*60*24);
//   // var tomorrowDate = new Date(todayDate.getTime() + 1000*60*60*24);
//   // var twoDayAgoDate = new Date(todayDate.getTime() + 1000*60*60*24*2);

//   var calendarID = "Google Calendar API";
//   var googleKey = "AIzaSyBzsQ2ZflSMVbL8KFZrl8gLJwg7ZsJiyCQ";
//   requestAPI({
//     "method": "GET",
//     "port": 443,
//     "hostname": "www.googleapis.com",
//     "path": `/calendar/v3/calendars/${calendarID}/events?orderBy=startTime&singleEvents=true&timeMax=${maxRFC3339(todayDate)}&timeMin=${minRFC3339(todayDate)}&key=${googleKey}`,
//     "content": "",
//   }, function(data) {
//     var data = JSON.parse(data);
//     console.log(data);
//   }, function(e) {
//     console.log(e);
//   });

//   const response = {
//     statusCode: 200,
//     headers: {"Access-Control-Allow-Origin": "*"},
//     body: "Success"
//   };
//   callback(null, response);
// };

// // 통신 API
// function requestAPI(request, callback, errorCallback) {
//   const options = {
//       method: (request["method"] || "GET"),
//       hostname: (request["hostname"] || ""),
//       port: (request["port"] || 443),
//       headers: (request["headers"] || {"Content-Type": "application/json"}),
//       path: (request["path"] || "")
//   };
//   const req = https.request(options, (res) => {
//     res.setEncoding('utf8');
//     var body = '';
//     res.on('data', (chunk) => {
//       body = body + chunk;
//     });
//     res.on('end',function() {
//       if (res.statusCode == 200 || res.statusCode == '200') {
//         callback(body);
//       } else {
//         errorCallback(`statusCode Error: ${res.statusCode}`);
//       }
//     });
//   });
//   req.on('error', function (e) {
//       errorCallback(e.responseText)
//   });
//   req.write(util.format("%j", (request["content"] || "")));
//   req.end();
// }

// // 시간
// function minRFC3339(date) {
//   var year = date.getFullYear();
//   var month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
//   var day  = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
//   return `${year}-${month}-${day}T00:00:00Z`;
// }

// // 시간
// function maxRFC3339(date) {
//   var year = date.getFullYear();
//   var month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
//   var day  = (date.getDate() < 10) ? `0${date.getDate()}` : `${date.getDate()}`;
//   return `${year}-${month}-${day}T23:59:59Z`;
// }
//   export default Calendar;