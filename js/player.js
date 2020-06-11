class Player {

    player
    audio;
    audioCurrentTime;
    audioDuration;
    btnPlayer;
    boxCurrentTime;
    boxDuration;
    runerHolder;
    runerRounder;
    runerBack;
    intervalGettingDate
    toggleFlag
    intervalForDurex;

    constructor(){
        this.initPlayer()
    }


    initPlayer() {
        this.player = document.querySelector('div.review__content-audio');
        
        this.toggleFlag = false;
        if(this.player !== null) {
            this.audio = this.player.querySelector('audio'); 
            this.btnPlayer = this.player.querySelector('button.review__content-audio-play-btn');
            this.boxCurrentTime = this.player.querySelectorAll('div.review__content-audio-time')[0];
            this.boxDuration = this.player.querySelectorAll('div.review__content-audio-time')[1];
            this.runerHolder = this.player.querySelector('div.review__content-audio-mover-holder');
            this.runerRounder = this.player.querySelector('span.review__content-audio-mover-pointer');
            this.runerBack = this.player.querySelector('div.review__content-audio-mover-back');

            this.btnPlayer.onclick = () => {
                if(!this.toggleFlag) {
                    this.startPlaing()
                } else {
                    this.stopPlaing()
                }
            }


            this.runerHolder.onclick = (e) => {
                this.moveTrack(e)
            }


            this.intervalForDurex = setInterval(()=>{
                this.audio.addEventListener("canplaythrough", this.getDurationAudio(), false);
                this.audio.addEventListener("canplay", this.getDurationAudio(), false);
                this.audio.addEventListener("loadeddata", this.getDurationAudio(), false);
                this.audio.addEventListener("loadedmetadata", this.getDurationAudio(), false);
            },100)
        }

    }


    startPlaing() {
        this.audio.play();
        this.intervalGettingDate = setInterval(() => {
            this.getDateWhilePlaing()
        }, 100);
        this.toggleFlag = true;
        this.btnPlayer.querySelector('img').setAttribute('src', '/assets/images/icons/pause-button-ico.svg') /********************************************* */
    }


    stopPlaing() {
        this.audio.pause()
        this.toggleFlag = false;
        this.intervalGettingDate = clearInterval(this.intervalGettingDate);
        this.btnPlayer.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
    }


    moveTrack (e) {
        if(this.toggleFlag){
            let mousePosition = e.clientX,
                runerHolderLeft = this.runerHolder.getBoundingClientRect().left,
                runerHolderWidth = this.runerHolder.getBoundingClientRect().width,
                movePosition = mousePosition - runerHolderLeft + 1,
                percentMovement = Math.round(movePosition/runerHolderWidth*100);

            
            this.audio.currentTime = this.duration*percentMovement/100;
            this.currentTime = this.duration*percentMovement/100;
            console.log(this.audio.currentTime)
            console.log(this.audio.duration)
            this.audio.play();
        }
    }


    getDateWhilePlaing(){
        this.getCurrentTimeAudio()

		let currentTime = Math.round((this.currentTime)*100)/100;

		if(this.duration > currentTime) {

			let position = (currentTime/this.duration * 100 ),
                runerWidth = this.runerHolder.clientWidth;
                
            this.boxCurrentTime.innerText = this.toNormalTime(currentTime);
            
            position =  Math.round(runerWidth / 100 * position);
            
			this.runerRounder.style.left = `${position}px`;
            this.runerBack.style.width = `${position}px`;

	    }else{
            this.btnPlayer.querySelector('img').setAttribute('src', '/assets/images/icons/play-button-blue-ico.svg');
            this.intervalGettingDate = clearInterval(this.intervalGettingDate);
            this.toggleFlag = false;
	    }
    }


    getDurationAudio () {
        let audio = this.audio;

        if (audio.duration === Infinity) {
            audio.currentTime = 1e101;
            audio.ontimeupdate = function () {
                this.ontimeupdate = function () {
                    return;
                };
            };
            this.audio.currentTime = 0;
        } else {
            this.duration = this.audio.duration;
            this.intervalForDurex = clearInterval(this.intervalForDurex)
            this.boxDuration.innerText = this.toNormalTime(this.duration);
        }
      

    }


    getCurrentTimeAudio () {
        this.currentTime = this.audio.currentTime;
    }


    toNormalTime (input) {
        let allSeconds = Math.round(input),
            minutes = Math.floor(allSeconds / 60),
            seconds = allSeconds % 60;

        if(minutes <= 9) minutes = `0${minutes}`;
        if(seconds <= 9) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`;
    }
}




setTimeout(()=>{
    new Player
},1000)