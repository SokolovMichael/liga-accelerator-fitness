/* global YT */

const video = document.querySelector('.gym__video');
const videoPicture = video.querySelector('.gym__video-picture');
const videoLink = video.querySelector('.gym__video-link');
const videoButton = video.querySelector('.gym__button');


const initVideo = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const loadPlayer = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubePlayerAPIReady = () => {
        const player = new YT.Player('gym-video', {
          playerVars: {
            'playsinline': 1,
            'rel': 0,
            'showinfo': 0,
            'controls': 2,
          },

          videoId: '9TZXsZItgdw',

          events: {
            'onReady': onPlayerReady,
          },
        });

        player.playVideo();
      };
    };

    const onPlayerReady = (evt) => {
      evt.target.playVideo();
    };

    const onPlayVideo = () => {
      videoPicture.classList.add('gym__video-picture--hidden');
      videoLink.classList.add('gym__video-link--played');
      videoButton.classList.add('gym__button--hidden');
      loadPlayer();
    };

    const playVideo = () => {
      video.classList.remove('gym__video--nojs');
      videoButton.addEventListener('click', onPlayVideo);
    };

    playVideo();

  });
};

export {initVideo};
