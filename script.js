const songs=[

{
title:"Ophelia",
artist:"Taylor SWift",
src:"songs/s.mp3",
cover:"images/ophelia.png"
},

{
title:"Perfect",
artist:"Ed Shereen",
src:"songs/s2.mp3",
cover:"images/perfect.png"
},

{
title:"Birds of feather",
artist:"Billie Eilish ",
src:"songs/s3.mp3",
cover:"images/birds.jpg"
}

];

let currentSong=0;

const audio=document.getElementById("audio");
const playBtn=document.getElementById("play");
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");

const title=document.getElementById("title");
const artist=document.getElementById("artist");
const cover=document.getElementById("cover");

const progress=document.getElementById("progress");
const duration=document.getElementById("duration");
const current=document.getElementById("current");

const volume=document.getElementById("volume");

const playlist=document.getElementById("playlist");

function loadSong(index){

audio.src=songs[index].src;

title.innerText=songs[index].title;
artist.innerText=songs[index].artist;
cover.src=songs[index].cover;

}

loadSong(currentSong);

playBtn.onclick=()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}
else{

audio.pause();

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

}

};

nextBtn.onclick=()=>{

currentSong++;

if(currentSong>=songs.length)
currentSong=0;

loadSong(currentSong);

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

};

prevBtn.onclick=()=>{

currentSong--;

if(currentSong<0)
currentSong=songs.length-1;

loadSong(currentSong);

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

};

audio.addEventListener("loadedmetadata",()=>{

progress.max=audio.duration;

duration.innerText=format(audio.duration);

});

audio.addEventListener("timeupdate",()=>{

progress.value=audio.currentTime;

current.innerText=format(audio.currentTime);

});

progress.oninput=()=>{

audio.currentTime=progress.value;

};

function format(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10)
sec="0"+sec;

return min+":"+sec;

}

volume.oninput=()=>{

audio.volume=volume.value;

};

songs.forEach((song,index)=>{

let li=document.createElement("li");

li.innerText=song.title+" - "+song.artist;

li.onclick=()=>{

currentSong=index;

loadSong(currentSong);

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

};

playlist.appendChild(li);

});

audio.addEventListener("ended",()=>{

currentSong++;

if(currentSong>=songs.length)
currentSong=0;

loadSong(currentSong);

audio.play();

});
