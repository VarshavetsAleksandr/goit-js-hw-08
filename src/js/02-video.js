import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const videoTime = localStorage.getItem(LOCALSTORAGE_KEY);

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(videoTime);
