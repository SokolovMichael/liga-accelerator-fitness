const video = document.querySelector('.gym__video');
const videoPicture = video.querySelector('.gym__video-picture');
const videoLink = video.querySelector('.gym__video-link');
const videoButton = video.querySelector('button');
const videoIframe = videoLink.querySelector('iframe');

const onPlayVideo = () => {
  videoPicture.classList.add('gym__video-picture--hidden');
  videoLink.classList.add('gym__video-link--played');
  videoButton.classList.add('gym__button--hidden');
  videoIframe.src = videoIframe.src + '&autoplay=1';
};

const playVideo = () => {
  video.classList.remove('gym__video--nojs');
  videoButton.addEventListener('click', onPlayVideo);
};

export {playVideo};
