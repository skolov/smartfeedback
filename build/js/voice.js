navigator.mediaDevices.getUserMedia({ audio: true}).then(stream => {
	const mediaRecorder = new MediaRecorder(stream);


	$('div.mobile__record-footer').on()

	document.querySelector('div.mobile__record-footer').addEventListener('click', function(){
		alert('asdasd')
	});


	
	

	document.querySelector('#delete').addEventListener('click', function(){
		document.getElementById('start').hidden = false;
		document.getElementById('send').hidden = true;
		document.querySelector('div.mobile__record-ico-holder').style.display = 'none'; 
		document.querySelector('div.mobile__record-form-holder').style.display = 'none';
		document.querySelector('div.mobile__record-player-holder').style.display = 'none';
		document.querySelector('div.mobile__record-text').style.display = 'block';
		document.querySelector('#messages').innerHTML = '';
		document.clockform.hidden = true;
		document.getElementById('delete').hidden = true;
	});


    document.querySelector('#start').addEventListener('click', function(){
		alert("have touch")
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
});  

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
	t = Math.floor (t/60);
	var m = t%60; t-=m;
	t = Math.floor (t/60);
	var h = t%60;
	if (h<10) h='0'+h;
	if (m<10) m='0'+m;
	if (s<10) s='0'+s;
	if (ms<10) ms='0'+ms;
	if (init==1) document.clockform.clock.value = m + ':' + s;
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


	let toggleFlag = true;

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
					console.log('play')
					timer.innerHTML = getNormalDate(audio.duration);
				} else {
					audio.pause();
					console.log('pause')
					timer.innerHTML = getNormalDate(audio.duration);
				} 
				toggleFlag = !toggleFlag;
			}
		}
	}
	
}


function getNormalDate(inputTime) {

	let tempData = '02:22:00',
		arr = tempData.split('.');

	/*

	if (inputTime !== Infinity) {
		console.log(typeof(inputTime));
		console.log(inputTime);
		console.log(inputTime.toString().split('.'))
		
		let arr = toString(inputTime).split('.');
	
		if(arr[0] < 10) arr[0] = '0' + arr[0];
		arr[1] = Math.floor(arr[1]/100);
		if(arr[1] < 10) arr[1] = '0' + arr[1];


		console.log(arr[0] + ':' + arr[1]);
		
	}

	*/


	
	return '00:00';
}