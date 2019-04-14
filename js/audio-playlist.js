//<![CDATA[
$(document).ready(function(){
    "use strict";
    new jPlayerPlaylist({
        jPlayer: "#musica-jquery-jplayer",
        cssSelectorAncestor: "#musica-audio-player-container"
    }, [
        { 
            title:"Burnin moonlight", 
            mp3:"music/Burnin_moonlight.mp3",
			
        },
        
       
    ], {
        playlistOptions: {
            autoPlay: false,
            loopOnPrevious: true,
            shuffleOnLoop: true,
            enableRemoveControls: true,
            displayTime: "show",
            freeItemClass: "jp-playlist-item-free",
        },
        swfPath: "js/jquery.jplayer.swf",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: true,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        volume: 1,
    });



});
//]]>
