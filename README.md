Timer.js
========

Simple Timer class for RequireJS Projects

RequireJS module

Example:
=========

var timer = new Timer();



// call callback function after 4.5secs.

timer.once(4.5, callback);



// call callback function every 0.1secs.

timer.every(0.1, callback);


// stop timer

timer.clear();



//reset timer and restart

timer.restart();



