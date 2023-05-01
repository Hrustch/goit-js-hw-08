import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player');
const player = new Player(video);

function saveTiming() {
  player.getCurrentTime().then((seconds) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime).catch((error) => {
    console.error(error);
  });
}

const throttledSaveTiming = throttle(saveTiming, 1000);
player.on('timeupdate', throttledSaveTiming);