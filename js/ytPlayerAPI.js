
    // 2. This code loads the IFrame Player API code asyncronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iFrame> (and YouTube player)
    // after the api code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player( 'player', {
            // height: '390',
            // width: '640',
            videoId: 'O_00cBa5ROk',
            playerVars: { 'autoplay':1, 'controls':0, 'showinfo':0, 'rel':0, 'disablekb':1, 'mute':1, 'loop':1 }, // 'showinfo' has been depricated in Sep,25,2018
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event){
        player.setPlaybackQuality('hd1080');
        event.target.playVideo();
    }

    // 5. The API calls this function when the players state changes.
    // The function indicates that when playing a video (state=1),
    // the player should play for six second and than stop.
    var done = false;
    function onPlayerStateChange(event) {
        // if( event.data == YT.PlayerState.PLAYING && !done ) {
        //     setTimeout(stopVideo, 6000);
        //     done = true;
        // }
    }

    function stopVideo() {
        player.stopVideo();
    }

    // Mute/Unmute Button
    var muteButton = document.getElementById('muteButton');
    var soundon = false;
    muteButton.addEventListener( 'click' , function(){
        if( soundon != true ){
            player.unMute();
            soundon = true;
        }else{
            player.mute();
            soundon = false;
        }
    });
