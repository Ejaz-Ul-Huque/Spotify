console.log("Hello JavaScript")



let songs = [new Audio('1.mp3') , new Audio('2.mp3') , new Audio('3.mp3') , new Audio('4.mp3') , new Audio('5.mp3') , new Audio('6.mp3') ]


function stopAll(){
for (let i=0; i < songs.length; i++ ){
    songs[i].pause();
    songs[i].currentTime = 0;
}

}


function Play(x){
    stopAll();
    songs[x-1].play();
}

let song = [];
