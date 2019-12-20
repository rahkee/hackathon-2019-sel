const allContainers = document.querySelectorAll('.container');

const clickToStart = document.querySelector('.click-to-start');

const videoPlayer = document.querySelector('video');

window.addEventListener('click', e => {
    // Click to start
    if (e.target.classList.contains('click-to-start')) {
        allContainers[0].classList.remove('show-screen');
        allContainers[1].classList.add('show-screen');
    }

    // Emotional Response Start
    if (e.target.classList.contains('er-start')) {
        allContainers[1].classList.remove('show-screen');
        allContainers[2].classList.add('show-screen');

        setTimeout(() => {
            videoPlayer.play();
        }, 4000);
    }
});

videoPlayer.addEventListener('ended', () => {
    allContainers[2].classList.remove('show-screen');
    allContainers[3].classList.add('show-screen');
});

videoPlayer.addEventListener('click', () => {
    allContainers[2].classList.remove('show-screen');
    allContainers[3].classList.add('show-screen');
});
