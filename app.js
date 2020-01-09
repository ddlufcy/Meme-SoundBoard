function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    document.onkeydown = function (e) { //pause function
        if (e.keyCode === 32) {
            audio.pause();
        }
    };
    function loopPlay(){
        console.log('test');
        if(audio.loop === false){
            audio.loop = true;
        } else {
            audio.loop = false;
        };
        audio.currentTime = 0;
    };
    let looper = document.querySelectorAll('.looped');
    looper.forEach(btn => btn.addEventListener('click', loopPlay));
    
    audio.currentTime = 0;
    audio.currentTime = 0;
    audio.play();

    // audio.loop = true;
    key.classList.add('playing');
    return audio;
}



function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);