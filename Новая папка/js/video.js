const video = document.getElementById("Ultrakill")
let playlist = ["1minute", "seatea", "cat"]
let num = 0


function prev(){
    num = num - 1
    if(0 > num){
        num = 0
    }
    console.log(num)
    video.src=`video/${playlist[num]}.mp4`
}

function next() {
    if(num < playlist.length - 1){
        num = num + 1
    }
    else{
        num = 0
    }
    console.log(num)
    video.src=`video/${playlist[num]}.mp4`
}

function pause() {
    if (video.paused) {
        video.play()
    }
    else {
        video.pause()
    }
}

function mute() {
    if (video.muted){
        video.muted = false
    }
    else{
        video.muted = true
    }
}

