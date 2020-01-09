function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



window.addEventListener('keydown', function (e) {
    {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const audios = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const loopBtn = document.querySelectorAll('.looped');
         this.document.onkeydown = function (e) {
            console.log("space")
            if (e.which == 32) {
                audio.pause();
            }
        }
        document.querySelector('#stop').addEventListener('click', function () {
            audio.pause();
            audio.currentTime = 0;
        })
        
        // const source = audio.src;
        // console.log(source)
        // looping functions
        function loopPlay() {
            audio.loop = true;
        }

        function stopLoop() {
            audio.loop = false;
        }

        function getSource() {
            console.log(source);
        }
       

        console.log(e.which);
        if (!audio) return;
        loopBtn.forEach(btn => btn.addEventListener('click', loopPlay));
        loopBtn.forEach(btn => btn.addEventListener('dblclick', stopLoop));
        loopBtn.forEach(btn => btn.addEventListener('mouseover', getSource));


        audio.currentTime = 0;
        audio.play();
        // audio.loop = true;
        key.classList.add('playing');
        return audio;
    }
});