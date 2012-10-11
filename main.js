$('document').ready(function(){
	audioElement = new Audio();
	document.body.appendChild(audioElement);
	audioElement.src = 'track.oga';
	vinylPower = 'off';
});


function steerVinyl(){
	if(vinylPower != 'on'){
		playVinyl();
		
	}else{
		pauseVinyl();
	}
}

function playVinyl(){
	vinylPower = 'on';
	if(typeof degrees == 'undefined'){
	    degrees = 0;
	}
	audioElement.play();
	console.log(audioElement);
	vinylInterval = setInterval(function(){
	    degrees = degrees + 5;
	    if($.browser.webkit){
	    	$('#vinyl').attr('style', '-webkit-transform:rotate(' + degrees + 'deg);');
	    	$('#needle').attr('style', '-webkit-transform:rotate(' + audioElement.currentTime/audioElement.duration*24 + 'deg);');
	    }
	    if($.browser.mozilla){
	    	$('#vinyl').attr('style', '-moz-transform:rotate(' + degrees + 'deg);');
	    	$('#needle').attr('style', '-moz-transform:rotate(' + audioElement.currentTime/audioElement.duration*24 + 'deg);');
	    }

	    if(audioElement.currentTime == audioElement.duration){
	    	stopVinyl('');
	    }
	}, 10, degrees, audioElement);	
}

function pauseVinyl(){
	vinylPower = 'off';
	audioElement.pause();
	clearInterval(vinylInterval);
}

function stopVinyl(){
	pauseVinyl();
	degrees = 0;
	$('#vinyl').attr('style', 'transform:rotate(0deg);');
	$('#needle').attr('style', 'transform:rotate(0deg);');
}