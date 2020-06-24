var durationTrack = '',
	interval = null,
	toggleFlag = true;



function successCallback(stream) {
	const mediaRecorder = new MediaRecorder(stream);

	document.querySelector('#delete').addEventListener('click', function(){
		document.querySelector('div.mobile__record-player-line-back').style.width = '0px';
		document.querySelector('span.mobile__record-player-line-pointer').style.left = '0px';
		document.querySelector('div.mobile__record-timer').innerText = '00:00';
		document.querySelector('img.mobile__record-play-btn-ico').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');

		document.getElementById('start').hidden = false;
		document.getElementById('send').hidden = true;
		document.querySelector('div.mobile__record-ico-holder').style.display = 'none'; 
		document.querySelector('div.mobile__record-form-holder').style.display = 'none';
		document.querySelector('div.mobile__record-player-holder').style.display = 'none';
		document.querySelector('div.mobile__record-text').style.display = 'block';
		document.querySelector('#messages').innerHTML = '';
		document.clockform.hidden = true;
		document.getElementById('delete').hidden = true;
		durationTrack = '';

	});


    document.querySelector('#start').addEventListener('touchstart', function(){
		document.oncontextmenu = e => {
			return false
		}
		mediaRecorder.start();
		document.getElementById('send').hidden = true;
		document.querySelector('div.mobile__record-ico-holder').style.display = 'flex';
		document.querySelector('div.mobile__record-form-holder').style.display = 'flex';
		document.querySelector('div.mobile__record-text').style.display = 'none';
		document.querySelector('#messages').innerHTML = '';
		document.clockform.hidden = false;
		findTIME();
	});
	
    let audioChunks = [];
    mediaRecorder.addEventListener("dataavailable",function(event) {
        audioChunks.push(event.data);
    });

    document.querySelector('#start').addEventListener('touchend', function(){
        mediaRecorder.stop();
		document.getElementById('start').hidden = true;
		document.getElementById('send').hidden = false;
		document.getElementById('delete').hidden = false;
		document.querySelector('div.mobile__record-form-holder').style.display = 'none';
		document.querySelector('div.mobile__record-player-holder').style.display = 'flex';
		document.clockform.hidden = false;
		findTIME();
    });

	document.querySelector('#send').addEventListener('click', function(){
		let send = new FormData();
		send.append('action', 'filesUploaded');
		send.append('type', 'sendVoice');
		
		sendVoice(send);
		
	});
	

    mediaRecorder.addEventListener("stop", function() {
        const audioBlob = new Blob(audioChunks, {
            type: 'audio/wav'
        });

        let fd = new FormData();
        fd.append('voice', audioBlob);
		fd.append('action', 'filesUploaded');
		fd.append('type', 'updateTempVoice');
        sendTempVoice(fd);
        audioChunks = [];
    });
}

function errorCallback(error) {
	//alert(error.name + ": " + error.message);
	if(navigator.userAgent.includes("Safari")) {
		let div = document.createElement('div');
			div.className = "safe__safari";
			div.innerHTML = "Для включения аудиозаписи Вам необходимо следующее: Настройки -> safari -> Дополнения -> Experimental Features -> MediaRecorder (активировать ползунок)";
		document.body.append(div);
	}
  }




navigator.getUserMedia = (
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
);


if (typeof navigator.mediaDevices.getUserMedia === 'undefined') {
    navigator.getUserMedia({audio: true}, successCallback, errorCallback);
} else {
	navigator.mediaDevices.getUserMedia({audio: true})
		.then(successCallback)
		.catch(errorCallback);
}


async function sendVoice(form) {
    let promise = await fetch("/ajax.php", {
        method: 'POST',
        body: form});
    if (promise.ok) {
		let response =  await promise.json();
		
		document.location.href = response.url;
	}
}
                    
async function sendTempVoice(form) {
    let promise = await fetch("/ajax.php", {
        method: 'POST',
        body: form});
    if (promise.ok) {
		let response =  await promise.json();
		

        let audio = document.createElement('audio');
        audio.src = response.data;
        audio.controls = true;
        audio.autoplay = false;
		document.querySelector('#messages').innerHTML = '';
		document.querySelector('#messages').appendChild(audio);
		initPlayer();
		
    }
}
					
function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
var init=0;
var startDate;
var clocktimer;

function clearFields() {
	init = 0;
	clearTimeout(clocktimer);
	document.clockform.clock.value='00:00';
	document.clockform.label.value='';
}

function startTIME() { 
	var thisDate = new Date();
	var t = thisDate.getTime() - startDate.getTime();
	var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
	t = Math.floor (t/1000);
	var s = t%60; t-=s;
	var forcount = s + '.' + ms;
	t = Math.floor (t/60);
	var m = t%60; t-=m;
	t = Math.floor (t/60);
	var h = t%60;
	if (h<10) h='0'+h;
	if (m<10) m='0'+m;
	if (s<10) s='0'+s;
	if (ms<10) ms='0'+ms;
	if (init==1) document.clockform.clock.value = m + ':' + s;
	if (init==1) durationTrack = forcount;
	clocktimer = setTimeout("startTIME()",10);
}

function findTIME() {
	if (init==0) {
		startDate = new Date();
		startTIME();
		init=1;
	} 
	else {
		var str = trim(document.clockform.label.value);
		clearFields();
	}
}



function initPlayer() {
	let audioHolder = document.querySelector('#messages'),
		audio = audioHolder.querySelector('audio'),
		playBtn = document.querySelector('button.mobile__record-play-btn'),
		timer = document.querySelector('div.mobile__record-timer'),
		timeLine = document.querySelector('div.mobile__record-player-line'),
		timeLinePointer = document.querySelector('span.mobile__record-player-line-pointer'),
		timeLineBack = document.querySelector('div.mobile__record-player-line-back');
	if(
		audio !== null &&
		playBtn !== null &&
		timer !== null &&
		timeLine !== null &&
		timeLineBack !== null &&
		timeLinePointer !== null
	) {
		audio.onloadedmetadata = () => {
			playBtn.onclick = () => {
				if (toggleFlag) {
					audio.play();
					playBtn.querySelector('img').setAttribute('src', '/assets/images/icons/pause-ico-btn.svg');
					interval = setInterval(() => {
                        getDateWhilePlaing(audio, timeLinePointer,timer,timeLine, timeLineBack, playBtn)
                    }, 100);
				} else {
					audio.pause();
					playBtn.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
                    interval = clearInterval(interval);
				} 
				toggleFlag = !toggleFlag;
			}
		}
	}
}

function getDateWhilePlaing(
		audio,
		timeLinePointer,
		timer,
		timeLine,
		timeLineBack,
		playBtn
	) 
	{
		let currentTime = Math.round((audio.currentTime)*100)/100;

		if((+durationTrack-0.12) > (currentTime)) {
			let position = (currentTime/durationTrack * 100 ),
				widthPointer = timeLine.clientWidth;
			timer.innerText = getNormalDate(currentTime);
			position =  Math.round(widthPointer / 100 * position);
			timeLinePointer.style.left = `${position}px`;
			timeLineBack.style.width = `${position}px`;
			console.log('dsa')
	}else{
			console.log('asd')
			playBtn.querySelector('img.mobile__record-play-btn-ico').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
			interval = clearInterval(interval);
			toggleFlag = !toggleFlag;
	}
}

function getNormalDate(inputTime) {
	let currentTime = Math.round(inputTime);
	let s = currentTime % 60,
		m = Math.floor(currentTime/60);
	if (s <= 9) {
		s = `0${s}`;
	}
	if (m <= 9) {
		m = `0${m}`;
	}
	return `${m}:${s}`;
}