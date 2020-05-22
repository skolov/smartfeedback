function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

navigator.mediaDevices.getUserMedia({
  audio: true
}).then(function (stream) {
  var mediaRecorder = new MediaRecorder(stream);
  document.querySelector('#delete').addEventListener('click', function () {
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
  document.querySelector('#start').addEventListener('click', function () {
    mediaRecorder.start();
    document.getElementById('send').hidden = true;
    document.querySelector('div.mobile__record-ico-holder').style.display = 'flex';
    document.querySelector('div.mobile__record-form-holder').style.display = 'flex';
    document.querySelector('div.mobile__record-text').style.display = 'none';
    document.querySelector('#messages').innerHTML = '';
    document.clockform.hidden = false;
    findTIME();
  });
  var audioChunks = [];
  mediaRecorder.addEventListener("dataavailable", function (event) {
    audioChunks.push(event.data);
  });
  document.querySelector('#start').addEventListener('touchend', function () {
    mediaRecorder.stop();
    document.getElementById('start').hidden = true;
    document.getElementById('send').hidden = false;
    document.getElementById('delete').hidden = false;
    document.querySelector('div.mobile__record-form-holder').style.display = 'none';
    document.querySelector('div.mobile__record-player-holder').style.display = 'flex';
    document.clockform.hidden = false;
    findTIME();
  });
  document.querySelector('#send').addEventListener('click', function () {
    var send = new FormData();
    send.append('action', 'filesUploaded');
    send.append('type', 'sendVoice');
    sendVoice(send);
  });
  mediaRecorder.addEventListener("stop", function () {
    var audioBlob = new Blob(audioChunks, {
      type: 'audio/wav'
    });
    var fd = new FormData();
    fd.append('voice', audioBlob);
    fd.append('action', 'filesUploaded');
    fd.append('type', 'updateTempVoice');
    sendTempVoice(fd);
    audioChunks = [];
  });
});

function sendVoice(_x) {
  return _sendVoice.apply(this, arguments);
}

function _sendVoice() {
  _sendVoice = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(form) {
    var promise, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/ajax.php", {
              method: 'POST',
              body: form
            });

          case 2:
            promise = _context.sent;

            if (!promise.ok) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return promise.json();

          case 6:
            response = _context.sent;
            document.location.href = response.url;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendVoice.apply(this, arguments);
}

function sendTempVoice(_x2) {
  return _sendTempVoice.apply(this, arguments);
}

function _sendTempVoice() {
  _sendTempVoice = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(form) {
    var promise, response, audio;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/ajax.php", {
              method: 'POST',
              body: form
            });

          case 2:
            promise = _context2.sent;

            if (!promise.ok) {
              _context2.next = 14;
              break;
            }

            _context2.next = 6;
            return promise.json();

          case 6:
            response = _context2.sent;
            audio = document.createElement('audio');
            audio.src = response.data;
            audio.controls = true;
            audio.autoplay = false;
            document.querySelector('#messages').innerHTML = '';
            document.querySelector('#messages').appendChild(audio);
            initPlayer();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendTempVoice.apply(this, arguments);
}

function trim(string) {
  return string.replace(/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, '');
}

var init = 0;
var startDate;
var clocktimer;

function clearFields() {
  init = 0;
  clearTimeout(clocktimer);
  document.clockform.clock.value = '00:00';
  document.clockform.label.value = '';
}

function startTIME() {
  var thisDate = new Date();
  var t = thisDate.getTime() - startDate.getTime();
  var ms = t % 1000;
  t -= ms;
  ms = Math.floor(ms / 10);
  t = Math.floor(t / 1000);
  var s = t % 60;
  t -= s;
  t = Math.floor(t / 60);
  var m = t % 60;
  t -= m;
  t = Math.floor(t / 60);
  var h = t % 60;
  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;
  if (ms < 10) ms = '0' + ms;
  if (init == 1) document.clockform.clock.value = m + ':' + s;
  clocktimer = setTimeout("startTIME()", 10);
}

function findTIME() {
  if (init == 0) {
    startDate = new Date();
    startTIME();
    init = 1;
  } else {
    var str = trim(document.clockform.label.value);
    clearFields();
  }
}

function initPlayer() {
  var audioHolder = document.querySelector('#messages'),
      audio = audioHolder.querySelector('audio'),
      playBtn = document.querySelector('button.mobile__record-play-btn'),
      timer = document.querySelector('div.mobile__record-timer'),
      timeLine = document.querySelector('div.mobile__record-player-line'),
      timeLinePointer = document.querySelector('span.mobile__record-player-line-pointer'),
      timeLineBack = document.querySelector('div.mobile__record-player-line-back');
  var toggleFlag = true;

  if (audio !== null && playBtn !== null && timer !== null && timeLine !== null && timeLineBack !== null && timeLinePointer !== null) {
    audio.onloadedmetadata = function () {
      playBtn.onclick = function () {
        if (toggleFlag) {
          audio.play();
          console.log('play');
          timer.innerHTML = getNormalDate(audio.duration);
        } else {
          audio.pause();
          console.log('pause');
          timer.innerHTML = getNormalDate(audio.duration);
        }

        toggleFlag = !toggleFlag;
      };
    };
  }
}

function getNormalDate(inputTime) {
  var tempData = '02:22:00',
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
//# sourceMappingURL=voice.js.map
