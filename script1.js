console.log("Welcome");
progressBar = document.getElementById('progressBar');
masterPlay = document.getElementById('masterPlay');
next = document.getElementById('next');
back = document.getElementById('back');
gif = document.getElementById('gif');
gif1 = document.getElementById('gif1');
click = document.getElementById("clickToPlay");
play = document.getElementById("play");
loop = document.getElementById("loop");
volume=document.getElementById("volume");
let hasClicked = false;
let isLooping = true;
let isVolume = true;

function gifs() {
    gif.style.opacity = 1;
    gif1.style.opacity = 1;
};
function gifsoff() {
    gif.style.opacity = 0;
    gif1.style.opacity = 0;
};
function pauseIcon() {
    masterPlay.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        </svg>`;
}
function playIcon() {
    masterPlay.innerHTML = ` <svg id="masterPlay" width="50px" height="50px" viewBox="0 0 50 50" fill="white"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
    <path
        d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
        stroke="#1C274C" stroke-width="1.5" />
</svg>`;


}

function backSong() {
    back.addEventListener('click', () => {
        songIndex = (songIndex - 1) % songs.length;
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        nav.innerText = songs[songIndex].songName;
        // songCover.src = songs[songIndex].coverPath; 
        gifs();
        pauseIcon();
        nav.style.opacity = 1;
    });

}
function nextSong() {
    next.addEventListener('click', () => {
        songIndex = (songIndex + 1) % songs.length;
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        nav.innerText = songs[songIndex].songName;
        // songCover.src = songs[songIndex].coverPath;
        gifs();
        pauseIcon();
        nav.style.opacity = 1;

    });
}

let songs = [
    { songName: "Mai hu saath tere", filePath: "songs/maihusaathtere.mp3", coverPath: "images/maihusaathtere.jpg" },
    { songName: "Soch  na sake", filePath: "songs/sochnasake.mp3", coverPath: "images/sochnasake.jpg" },
    { songName: "Zaalima", filePath: "songs/zaalima.mp3", coverPath: "images/zaalima.jpg" },
    { songName: "Tum Hi Ho", filePath: "songs/tumhiho.mp3", coverPath: "images/tumhiho.jpg" },
    { songName: "Kabira", filePath: "songs/kabira.mp3", coverPath: "images/kabira.jpg" },
    { songName: "Khairiyat", filePath: "songs/khairiyat.mp3", coverPath: "images/khairiyat.jpg" },
    { songName: "Channa mereya", filePath: "songs/channamereya.mp3", coverPath: "images/channamereya.jpg" }

]
songIndex = 0;
let audioElement = new Audio(songs[songIndex].filePath);
let songItems = Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        // Get the index from the data attribute
        songIndex = i; // Update the song index to the clicked song        
        audioElement.src = songs[songIndex].filePath;
        nav.innerText = songs[songIndex].songName;
        nav.style.opacity = 1;
        audioElement.play();
        // play.innerHTML = `<svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <circle cx="12" cy="12" r="10" stroke="#fffafa" stroke-width="1.5"/>
        // <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        // <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#fffafa" stroke-width="1.5"/>
        // </svg>`;
        pauseIcon()
        gifs();
    });
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        pauseIcon();
        gifs();

    } else {
        audioElement.pause();
        playIcon();
        gifsoff();
    }

    if (!hasClicked) {
        // Actions to perform on the first click
        // console.log("This is the first click!");
        nav.innerText = songs[0].songName;
        nav.style.opacity = 1;

        // Update the flag to true so this code won't run again
        hasClicked = true;
    }
});
nextSong();

backSong();

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});

// Event listener to allow seeking through the progress bar
progressBar.addEventListener('change', () => {
    audioElement.currentTime = ((progressBar.value * audioElement.duration) / 100);
});

audioElement.addEventListener('ended', () => {

    if(!isLooping){
         Audio.currentTime=0;
         audioElement.play();
    }
    else {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    nav.innerText = songs[songIndex].songName;

    pauseIcon();
    gifs();
}

})

loop.addEventListener('click', () => {


    if (isLooping) {
        loop.innerHTML = `<svg id="loop" fill="#fafafa" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="600px" viewBox="0 0 487.63 487.63" xml:space="preserve" stroke="#fafafa" stroke-width="40.240293"><g id="SVGRepo_bgCarrier" stroke-width="300"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="6.826862"> <g> <path d="M474.381,119.249h-219.49l45.895-26.492c6.34-3.656,8.51-11.76,4.852-18.101c-3.656-6.338-11.764-8.518-18.102-4.85 l-88.719,51.213c-4.099,2.365-6.625,6.738-6.625,11.475c0,4.733,2.526,9.107,6.625,11.476l88.719,51.225 c2.088,1.206,4.363,1.779,6.613,1.779c4.58,0,9.035-2.378,11.486-6.629c3.658-6.338,1.488-14.442-4.85-18.101L254.9,145.752h206.23 v247.354H26.502V145.751h96.729c7.317,0,13.251-5.933,13.251-13.251s-5.934-13.251-13.251-13.251H13.251 C5.933,119.249,0,125.182,0,132.5v273.856c0,7.318,5.933,13.252,13.251,13.252h461.132c7.316,0,13.25-5.934,13.25-13.252V132.5 C487.633,125.182,481.699,119.249,474.381,119.249z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.381,119.249h-219.49l45.895-26.492c6.34-3.656,8.51-11.76,4.852-18.101c-3.656-6.338-11.764-8.518-18.102-4.85 l-88.719,51.213c-4.099,2.365-6.625,6.738-6.625,11.475c0,4.733,2.526,9.107,6.625,11.476l88.719,51.225 c2.088,1.206,4.363,1.779,6.613,1.779c4.58,0,9.035-2.378,11.486-6.629c3.658-6.338,1.488-14.442-4.85-18.101L254.9,145.752h206.23 v247.354H26.502V145.751h96.729c7.317,0,13.251-5.933,13.251-13.251s-5.934-13.251-13.251-13.251H13.251 C5.933,119.249,0,125.182,0,132.5v273.856c0,7.318,5.933,13.252,13.251,13.252h461.132c7.316,0,13.25-5.934,13.25-13.252V132.5 C487.633,125.182,481.699,119.249,474.381,119.249z"></path> </g> </g></svg>`
        console.log("hello")
        isLooping = false;
    }
    else if (!isLooping) {
        loop.innerHTML = `<svg fill="#ffffff" height="600px" width="600px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 587.163 587.163" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M539.655,340.297c-14.929-14.925-39.125-14.925-54.054,0c-14.925,14.927-14.925,39.127,0,54.054l8.726,8.726h-50.745 c-36.955,0-63.735-35.973-100.758-96.033c37.689-61.308,64.665-98.122,102.044-98.122h49.458l-8.724,8.724 c-14.925,14.927-14.925,39.127,0.002,54.052c7.463,7.463,17.241,11.193,27.025,11.193c9.781,0,19.566-3.732,27.027-11.195 l52.083-52.086c13.067-13.063,20.262-30.432,20.262-48.909c0-18.475-7.192-35.842-20.257-48.912l-52.087-52.084 c-14.927-14.925-39.129-14.924-54.054,0.002c-14.925,14.927-14.925,39.127,0.002,54.052l8.726,8.726h-49.461 c-39.772,0-74.956,16.767-107.561,51.26c-14.434,15.27-27.468,33.099-39.785,51.797c-11.546-16.5-23.92-32.238-37.724-46.286 c-37.55-38.202-78.693-56.771-125.78-56.771H38.22C17.112,132.483,0,149.595,0,170.703s17.112,38.22,38.22,38.22h95.797 c48.538,0,80.845,37.948,118.974,98.08c-37.573,58.957-69.702,96.072-117.694,96.072H39.498c-21.108,0-38.222,17.111-38.222,38.22 s17.112,38.22,38.222,38.22h95.797c47.087,0,88.232-18.57,125.782-56.771c13.282-13.511,25.238-28.584,36.408-44.398 c11.947,18.011,24.59,35.154,38.537,49.909c32.604,34.493,67.787,51.26,107.559,51.26h50.746l-8.728,8.729 c-14.925,14.925-14.925,39.125,0.002,54.051c7.463,7.463,17.241,11.193,27.025,11.193c9.78,0,19.566-3.732,27.027-11.195 l52.087-52.089c26.964-26.966,26.966-70.844,0-97.818L539.655,340.297z"></path> </g> </g></svg>`
        isLooping = true;
    }
})

volume.addEventListener('click',() => {
    if(isVolume){
   volume.innerHTML=`<svg fill="#ffffff" viewBox="0 0 24 24" id="mute-3" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M16.41,2.19a1,1,0,0,1,1-.08A1,1,0,0,1,18,3v9.93L9.89,7ZM4,9v6a2,2,0,0,0,2,2H9.84l6.57,4.81a1,1,0,0,0,1,.08A1,1,0,0,0,18,21V14.19L8.25,7H6a2,2,0,0,0-.85.19A2,2,0,0,0,4,9Z" style="fill: #fcfcfc;"></path><path id="secondary" d="M2.41,5.17l2.74,2L18,16.65l2.41,1.78a.94.94,0,0,0,.59.2,1,1,0,0,0,.59-1.8L18,14.19,8.25,7,3.59,3.57a1,1,0,0,0-1.18,1.6Z" style="fill: #e21212;"></path></g></svg>`
    isVolume=false
    audioElement.volume=0
}
else if(!isVolume){
    volume.innerHTML= `<svg id="volume" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="5"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4853 2.29289C18.8758 1.90237 19.509 1.90237 19.8995 2.29289C25.3668 7.76023 25.3668 16.6245 19.8995 22.0919C19.509 22.4824 18.8758 22.4824 18.4853 22.0919C18.0948 21.7014 18.0948 21.0682 18.4853 20.6777C23.1716 15.9914 23.1716 8.3934 18.4853 3.70711C18.0948 3.31658 18.0948 2.68342 18.4853 2.29289ZM17.0711 5.12126C16.6806 4.73074 16.0474 4.73074 15.6569 5.12126C15.2664 5.51179 15.2664 6.14495 15.6569 6.53548C18.7811 9.65967 18.7811 14.725 15.6569 17.8492C15.2664 18.2397 15.2664 18.8729 15.6569 19.2634C16.0474 19.6539 16.6806 19.6539 17.0711 19.2634C20.9764 15.3582 20.9764 9.02651 17.0711 5.12126ZM14.2426 7.94975C13.8521 7.55923 13.2189 7.55923 12.8284 7.94975C12.4379 8.34028 12.4379 8.97344 12.8284 9.36397C14.3905 10.9261 14.3905 13.4587 12.8284 15.0208C12.4379 15.4113 12.4379 16.0445 12.8284 16.435C13.2189 16.8256 13.8521 16.8256 14.2426 16.435C16.5858 14.0919 16.5858 10.2929 14.2426 7.94975ZM11 6.04031C11 4.78255 9.5451 4.08329 8.56296 4.86901L4.64922 8H3C1.34315 8 0 9.34315 0 11V13C0 14.6569 1.34315 16 3 16H4.64922L8.56296 19.131C9.5451 19.9167 11 19.2174 11 17.9597V6.04031ZM5.89861 9.56174L9 7.08062V16.9194L5.89861 14.4383C5.54398 14.1546 5.10336 14 4.64922 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 10 3 10H4.64922C5.10336 10 5.54398 9.84544 5.89861 9.56174Z" fill="#ffffff"></path> </g>
             </svg>`
    isVolume=true
    audioElement.volume=1
 }
})
