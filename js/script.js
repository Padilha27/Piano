var tecla = document.querySelectorAll('.tc');
var somNota = document.getElementById('somNota');

tecla.forEach((t) => {
    t.addEventListener('click', () => {
        somNota.src = 'sons/'+ t.id + '.mp3';
        somNota.currentTime = 0;
        somNota.play();
        console.log(t.id);
    });
}); 