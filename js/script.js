

var kanal = 33;
jQuery.getJSON("http://api.sr.se/api/v2/channels/?liveaudiotemplateid=2&audioquality=hi&format=json&indent=true&pagination=false",function(data) {

	var arr = [];
	for (i=0; i < data.channels.length; i++) {
		if (data.channels[i].channeltype != 'Extrakanaler') {
			arr.push("<li data-toggle='collapse' data-target='#collapsable-nav'><a href='javascript:;' onclick='changeChannel("+i+")'>"+data.channels[i].name+"</a></li>");
		}
	}

	document.getElementById('nav-list').innerHTML = arr.join("");

	var channelData = data.channels[kanal];

	document.getElementById('pic-show').style.background = 'url('+channelData.image+')';
	document.getElementById('pic-show').style.backgroundSize = '100%';
	var audio = document.getElementById('audioSource');
	audio.src = channelData.liveaudio.url;
	document.getElementById('programTitle').innerHTML = channelData.name;

});


var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {
	if(ctrl.className == "glyphicon glyphicon-play") {
		yourAudio.load();
        ctrl.className="glyphicon glyphicon-pause";
        yourAudio["play"]();
	}
	else if (ctrl.className == "glyphicon glyphicon-pause"){
	ctrl.className="glyphicon glyphicon-play";
	    yourAudio["pause"]();
	}
};

function changeChannel (channel) {
 	jQuery.getJSON("http://api.sr.se/api/v2/channels/?liveaudiotemplateid=2&audioquality=hi&format=json&indent=true&pagination=false",function(data) {
		var channelData = data.channels[channel];
		document.getElementById('pic-show').style.background = 'url('+channelData.image+')';
		document.getElementById('pic-show').style.backgroundSize = '100%';
		var audio = document.getElementById('audioSource');
		document.getElementById('programTitle').innerHTML = channelData.name;
		audio.src = channelData.liveaudio.url;
		yourAudio.load();
		if(ctrl.className == "glyphicon glyphicon-play") {
			yourAudio.load();
		}
		else if (ctrl.className == "glyphicon glyphicon-pause"){
			yourAudio.load();
			yourAudio.play();
		}
	});
};
