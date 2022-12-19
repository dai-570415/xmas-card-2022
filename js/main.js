let snowContainer = document.querySelector('.snowContainer');

const createSnow = () => {
    let snow = document.createElement('span');
    snow.className = 'snow';

    minSize = 2;
    mavSize = 5;

    let snowSize = Math.random() * (mavSize - minSize) + minSize;

    snow.style.width = snowSize + 'px';
    snow.style.height = snowSize + 'px';

    snow.style.left = Math.random() * 100 + '%';

    snowContainer.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 10000);
}

setInterval (createSnow, 100);

$(function () {
    let audioBtn = $('.audio_button'),
    audioWrap = $('.audio_wrap'),
    audio = document.getElementById('audio');
  
    audioBtn.on('click', function () {
      if( audioWrap.hasClass('play') ) {
            audio.pause();
            audioWrap.removeClass('play');
      } else {
            audio.play();
            audioWrap.addClass('play');
      }
    });
});