var players = (function(){

	$.ajax({
	    type:'GET',
	    url:'http://localhost/footballApp/js/data/players.json',
	    data:'name=dave&location=boston',
	    success: function(data) {
	    	$.each(data.players, function(index, val) {
	    		 console.log(val.name);
	    	});
	    },
	    dataType:'json'


	});

})();





// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
