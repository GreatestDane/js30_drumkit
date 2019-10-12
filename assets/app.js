
window.addEventListener( "keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e.keyCode);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");

});

