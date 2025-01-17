//Variabeln und Herkunft aus HTML
document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.getElementById('hamMenu');
    const offscreen = document.getElementById('off-screen');
    const body = document.body;
    //funktionen
    body.classList.toggle('no-scroll');
    hamMenu.addEventListener('click', hamMenuFun);
    offscreen.addEventListener('click', offScreenFun);
    //aktivierung
    function hamMenuFun() {
        hamMenu.classList.toggle("active");
        offscreen.classList.toggle("active");
    }
    //deaktivierung
    function offScreenFun() {
        hamMenu.classList.toggle("active");
        offscreen.classList.toggle("active");
    }



});
