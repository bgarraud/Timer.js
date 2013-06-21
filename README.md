Timer.js
========

Simple Timer class for RequireJS Projects

RequireJS module

Example:
=========

var timer = new Timer();



// call callback function after 4500 Milliseconds

timer.once(4500, callback);



// call callback function every 100 Milliseconds

timer.every(100, callback);


// stop timer

timer.clear();



//reset timer and restart

timer.restart();



