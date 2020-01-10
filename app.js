function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const bottomText = document.getElementById('buttomText');

window.addEventListener('keydown', function (e) {
    {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const loopBtn = document.querySelectorAll('.looped');
        const space = document.getElementById('space');
        const spanText = document.querySelectorAll('.sound');

        document.onkeydown = function (e) {
            if (e.keycode === 32) {
                audio.pause()
                console.log("space")
            }
        }
        document.querySelector('#stop').addEventListener('click', function () {
            audio.pause();
            audio.currentTime = 0;
        })

        if (e.keycode == 65) {
            audio.loop = true;
        }
        // console.log(source)
        // looping functions
        function loopPlay() {
            

            console.log("looping");
            audio.loop = true
            const loopShow = document.createElement('h4');
            loopShow.innerText = "looping";
            loopShow.classList.add('bottomLoopText');
            bottomText.appendChild(loopShow);           1 
        }

        function stopLoop() {
            audio.loop = false;
            console.log('stop loop');
            
        }

        function getSource() {
            console.log(audio.src);
        }


        console.log(e.which, e.code);
        if (!audio) return;
        space.addEventListener('click', () => {
            audio.pause();
        });


        loopBtn.forEach(btn => btn.addEventListener('click', loopPlay));
        loopBtn.forEach(btn => btn.addEventListener('dblclick', stopLoop));
        loopBtn.forEach(btn => btn.addEventListener('mouseover', getSource));


        audio.currentTime = 0;
        audio.play();

        // if(audio.loop = true){
        //     btnBox.classList.add('looping');
        // };
        key.classList.add('playing');
        return audio;
    }
});