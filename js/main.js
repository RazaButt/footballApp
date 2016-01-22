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




