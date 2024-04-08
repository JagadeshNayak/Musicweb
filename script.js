const songs = [
    {
      name: "Aarambh Hai Prachand",
      link: "songs/Aarambh - Gulaal 128 Kbps.mp3",
      artists: "Piyush Mishra",
      image: "songs/aarambh hai.png"
    },
    {
      name: "Hanuman Chalisa",
      link: "songs/[iSongs.info] 01 - Hanuman Chalisa.mp3",
      artists: "Sai Charan",
      image: "songs/chalisa.png"
    },
    {
        name: "Nandanandanaa",
        link: "songs/Nandanandanaa.mp3",
        artists: "Sid Sriram",
        image: "songs/star.png"
      },
      {
        name: "Kun Faya Kun",
        link: "songs/Kun Faaya Kun - Rockstar 128 Kbps.mp3",
        artists: "Javed Ali",
        image: "songs/kun.png"
      },
      {
        name: "Adigaa",
        link: "songs/Adigaa.mp3",
        artists: "Karthik",
        image: "songs/hi.png"
      },
      {
        name: "Gaaju Bomma",
        link: "songs/Gaaju Bomma.mp3",
        artists: "Hesham Abdul Wahab",
        image: "songs/mrunal.png"
      },
      {
        name: "Needhe Needhe",
        link: "songs/Needhe Needhe.mp3",
        artists: "Aavani Malhar",
        image: "songs/nani.png"
      },
      {
        name: "Master the Blaster",
        link: "songs/[iSongs.info] 09 - Master the Blaster.mp3",
        artists: "Anirudh Ravichander",
        image: "songs/master.png"
      },
  ];
  var progress = document.querySelector("#progress");
  var song = document.querySelector("#song");
  var playBtn = document.querySelector("#play i");
  var index = 0;
  var img = document.querySelector(".img img");
  
  var title = document.querySelector("#title");
  var thumb = document.querySelector("#thumb");
  var artist = document.querySelector("#musician");
  
  var start = document.querySelector("#start");
  var end = document.querySelector("#end");
  
  song.src = songs[index].link;
  
  title.innerHTML = songs[index].name;
  artist.innerHTML = songs[index].artists;
  thumb.src = songs[index].image;
  
  song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
  
    setInterval(() => {
      var min = Math.floor(song.duration / 60);
      var sec = Math.floor(song.duration % 60);
  
      var curMin = Math.floor(song.currentTime / 60);
      var curSec = Math.floor(song.currentTime % 60);
  
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (curSec < 10) {
        curSec = "0" + curSec;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (curMin < 10) {
        curMin = "0" + curMin;
      }
  
      end.innerHTML = min + ":" + sec;
      start.innerHTML = curMin + ":" + curSec;
    }, 1000);
  };
  
  function playPause() {
    if (playBtn.classList.contains("bx-pause")) {
      song.pause();
      playBtn.classList.remove("bx-pause");
      playBtn.classList.add("bx-play");
      img.classList.remove("play");
    } else {
      song.play();
      playBtn.classList.remove("bx-play");
      playBtn.classList.add("bx-pause");
      img.classList.add("play");
    }
  }
  
  if (song.play()) {
    setInterval(() => {
      progress.value = song.currentTime;
      if (song.currentTime == song.duration) {
        nextPlay();
      }
    }, 1000);
  }
  
  progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
  };
  function nextPlay() {
    index = index + 1;
    if (index > songs.length) {
      index = 0;
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    } else {
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs[index].image;
      song.play();
    }
  }
  
  function prevPlay() {
    index = index - 1;
    if (index < 0) {
      index = songs.length;
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs.image;
      song.play();
    } else {
      song.src = songs[index].link;
      title.innerHTML = songs[index].name;
      artist.innerHTML = songs[index].artists;
      thumb.src = songs.image;
      song.play();
    }
  }
  //#codewithjagguNayak