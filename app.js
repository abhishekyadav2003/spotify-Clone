const music = new Audio('audio/1.mp3');
 

const songs = [
    {
        id: "1",
        songName: `KAUN TUJHE <br>
        <div class ="subtitle">Sushant Singh </div>`,
        poster: "image/1.jpg"
    },
    {
        id: "2",
        songName: `ROM ROM <br>
        <div class ="subtitle"> MC Square</div>`,
        poster: "image/2.jpg"
    },
    {
        id: "3",
        songName: `Dilbar Dilbar <br>
        <div class ="subtitle"> Nora Fatehi</div>`,
        poster: "image/3.jpg"
    },
    {
        id: "4",
        songName: `Baarish  <br>
        <div class ="subtitle"> Arjun Kapoor & Shraddha Kapoor</div>`,
        poster: "image/4.jpg"
    },
    {
        id: "5",
        songName: `Cham Cham <br>
        <div class ="subtitle"> BAAGHI|Tiger Shroff</div>`,
        poster: "image/5.jpg"
    },
    {
        id: "6",
        songName: `Chittiyaan Kalaiyaan<br>
        <div class ="subtitle"> Kanika Kapoor</div>`,
        poster: "image/6.jpg"
    },
    {
        id: "7",
        songName: `Teri Mitti Kesari <br>
        <div class ="subtitle"> Manoj Muntashir</div>`,
        poster: "image/7.jpg"
    },
    {
        id: "8",
        songName: `Dangal  <br>
        <div class ="subtitle">Daler Mehndi</div>`,
        poster: "image/8.jpg"
    },
    {
        id: "9",
        songName: `SANAM RE  <br>
        <div class ="subtitle">Urvashi Rautela</div>`,
        poster: "image/9.jpg"
    },
    {
        id: "10",
        songName: `KHAIRIYAT <br>
        <div class ="subtitle"> Arijit Singh</div>`,
        poster: "image/10.jpg"
    },
    {
        id: "11",
        songName: `Hind Ke Sitara  <br>
        <div class ="subtitle"> Panchayat S3</div>`,
        poster: "image/11.jpg"
    },
    {
        id: "12",
        songName: `ARJAN VAILLY<br>
        <div class ="subtitle"> Ranbir Kapoor</div>`,
        poster: "image/12.jpg"
    },
    {
        id: "13",
        songName: `Daku <br>
        <div class ="subtitle">CHANI NATTAN </div>`,
        poster: "image/13.jpg"
    },
    {
        id: "14",
        songName: `Sarkar <br>
        <div class ="subtitle"> Jaura Phagwara|</div>`,
        poster: "image/14.jpg"
    },
    {
        id: "15",
        songName: `Aaj Se Teri <br>
        <div class ="subtitle">Arijit Singh </div>`,
        poster: "image/15.jpg"
    },
    {
        id: "16",
        songName: `Sun Raha Hai Na Tu <br>
        <div class ="subtitle"> Shreya Ghoshal</div>`,
        poster: "image/16.jpg"
    },
    {
        id: "17",
        songName: `Allah Waariyan <br>
        <div class ="subtitle">Divya Khosla Kumar</div>`,
        poster: "image/17.jpg"
    },
    {
        id: "18",
        songName: `Moto <br>
        <div class ="subtitle">Anjali Raghav</div>`,
        poster: "image/18.jpg"
    },
    {
        id: "19",
        songName: `Tera Fitoor <br>
        <div class ="subtitle"> Himesh Reshammiya</div>`,
        poster: "image/19.jpg"
    },
    {
        id: "20",
        songName: `Apna Bana Le<br>
        <div class ="subtitle">Sachin-Jigar,</div>`,
        poster: "image/20.jpg"
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
})


let popsongleft = document.getElementById("pop-song-left");
let popsongright = document.getElementById("pop-song-right");
let popsong = document.getElementsByClassName("pop-song")[0];
let popartleft = document.getElementById("pop-art-left");
let popartright = document.getElementById("pop-art-right");
let item = document.getElementsByClassName("item")[0];

popsongright.addEventListener('click', () => {
    popsong.scrollLeft += 330;
})
popsongleft.addEventListener('click', () => {
    popsong.scrollLeft -= 330;
})
popartright.addEventListener('click', () => {
    item.scrollLeft += 330;
})
popartleft.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background= 'rgb(105,105,105,.0)';
    })
}
const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill') 
    })
}


let index = 0;
let postermasterplay = document.getElementById("poster-master-play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        postermasterplay.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index -1].style.background="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})

 let currentStart = document.getElementById('currentStart');
 let currentEnd = document.getElementById('currentEnd');
 let seek = document.getElementById('seek');
 let bar2 = document.getElementById('bar2');
 let dot = document.getElementsByClassName('dot')[0];


 music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_dur =music.duration;

    let min1 =Math.floor(music_dur / 60);
    let sec1 =Math.floor(music_dur % 60);
if(sec1 < 10){
    sec1 = `0${sec1}`
}
    currentEnd.innerText =`${min1}:${sec1}`;

    let min2 =Math.floor(music_curr / 60);
    let sec2 =Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`
    }
    currentStart.innerText =`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr /music_dur)*100);
    seek.value =progressBar;
    let seekbar =seek.value;
    bar2.style.width =`${seekbar}%`;
    dot.style.left = `${seekbar}%`
 });
 seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
 });

 let volIcon =document.getElementById("vol-icon");
 let vol =document.getElementById("vol");
 let volBar =document.getElementsByClassName("vol-bar")[0];
 let volDot =document.getElementById("vol-dot");

  

 vol.addEventListener('change',()=>{
    if(vol.value == 0){
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-oalume-down-fill');
        volIcon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.add('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        volIcon.classList.add('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    let vol_a =vol.value;
    volBar.style.width=`${vol_a}%`;
    volDot.style.left =`${vol_a}%`;
    music.volume =vol_a / 10;
 });

 let back =document.getElementById("back");
 let next =document.getElementById("next");
 

 back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${index}.mp3`;
    postermasterplay.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

 });
 next.addEventListener('click',()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        
        index =1;
    }
    music.src = `audio/${index}.mp3`;
    postermasterplay.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index -1].style.background="rgb(105,105,105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

 })

