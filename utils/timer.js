define([], function () {

	var timer = function() {
		var _t;
		var _tType = -1;
		var _time = 0;
		var _callback;
		var _ref = this;
		_ref.running = false;
		_ref.once = function(time, callback) {
			_time = time;
			_callback = callback;
			_ref.clear();
			_tType = 1;
	        _ref.running = true;
	        _t = setTimeout(function(){
	        		console.log('end timeout');
	                if (typeof callback == 'function') callback();
	                _callback=null;
	                _ref.running = false;
	        },time*1000);    

		};

		_ref.every = function(time, callback) {
			_time = time;
			_callback = callback;
			_ref.clear();
			_tType = 0;
	        _ref.running = true;
	        _t = setInterval(function(){
	            

	                if (typeof callback == 'function') callback();
	                _callback=null;
	                _ref.running = false;
	        },time*1000);    

		};

		_ref.clear = function() {
			if (_t!==null) {
				
				if (_tType==1) {
					clearTimeout(_t);
				} else if (_tType==0) {
					clearInterval(_t);
				}
				_callback=null; 
				_ref.running = false;
				_t = null;
			}

		};


		_ref.reset = function() {
			_ref.clear();
			if (_time>0 && _callback) {
				if (_tType==1) {
					_ref.once(_t);
				} else if (_time, _callback) {
					_ref.every(t);
				}

			}
		};
	}	


    return timer;
});    