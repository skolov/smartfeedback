function initVideoPlayer () {
    let video, playBtn, interval;

        video = document.querySelector("video");
        playBtn = document.querySelector('.review__content-video-btn');
        

    if(video !== null && playBtn !== null){
        playBtn.onclick = () => {
            video.play();
            playBtn.style.display = 'none';
            interval = setInterval(()=>{
                if(video.ended){
                    clearInterval(interval)
                    playBtn.style.display = 'block';
                }
            }, 10)
        }
    }
}
setTimeout(()=>{
    initVideoPlayer()
},1000)