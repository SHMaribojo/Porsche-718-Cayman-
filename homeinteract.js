const discoverBtn = document.getElementById('discoverBtn');
const detailsSection = document.getElementById('details');


discoverBtn.addEventListener('click', () => {
    detailsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.global-header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.75)';
        header.style.padding = '15px 40px'; 
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.4)';
        header.style.padding = '20px 40px';
    }
});
function toggleEngineSound(trackType, clickedButton) {
    const allAudios = [
        document.getElementById('audio-cockpit'),
        document.getElementById('audio-exhaust'),
        document.getElementById('audio-flyby')
    ];
    const targetAudio = document.getElementById(`audio-${trackType}`);
    const isPlaying = !targetAudio.paused;

    document.querySelectorAll('.play-engine-btn').forEach(btn => {
        btn.classList.remove('playing');
        
        const btnText = btn.querySelector('.btn-text');
        const btnIcon = btn.querySelector('.btn-icon');
        if (btnText.innerText.includes('Cockpit')) btnIcon.innerText = "🔊";
        if (btnText.innerText.includes('Exhaust')) btnIcon.innerText = "🔊";
        if (btnText.innerText.includes('Flyby'))   btnIcon.innerText = "🔊";
    });

    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; 
    });

    if (!isPlaying) {
        targetAudio.play();
        clickedButton.classList.add('playing');
        clickedButton.querySelector('.btn-icon').innerText = "⏹️";
    }

    allAudios.forEach(audio => {
        audio.onended = function() {
            clickedButton.classList.remove('playing');
            if (trackType === 'cockpit') clickedButton.querySelector('.btn-icon').innerText = "🔊";
            if (trackType === 'exhaust') clickedButton.querySelector('.btn-icon').innerText = "🔊";
            if (trackType === 'flyby')    clickedButton.querySelector('.btn-icon').innerText = "🔊";
        };
    });
}
