import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const saveCurrentTime = throttle(function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
  console.log('played the video!', currentTime);
}, 1000);

player.on('timeupdate', saveCurrentTime);

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (currentTime) {
  console.log('Current time:', currentTime);
} else {
  console.log('No saved time found.');
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
