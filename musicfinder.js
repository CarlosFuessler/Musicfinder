//Variabeln und Herkunft aus HTML
document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.getElementById('hamMenu');
    const offscreen = document.getElementById('off-screen');
    //funktionen
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
