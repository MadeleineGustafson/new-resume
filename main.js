window.addEventListener("DOMContentLoaded",main);

/** Start of website */
function main() {
    startFrontpage();
    getDropdown();
    getLightMode();
}

/** Function that shows front page with button */
function startFrontpage() {
    const main=document.getElementById("main");
    main.style.display="none";

    const startTitle = document.createElement("h1");
    startTitle.textContent="Madeleine Gustafsson";
    startTitle.classList="startTitle";

    const enterButton=document.createElement("button");
    enterButton.textContent="Enter";
    enterButton.classList="button";
    enterButton.addEventListener("click", getMainPage);
   
    document.getElementById("frontPage").appendChild(startTitle);
    document.getElementById("frontPage").appendChild(enterButton);
   
}

/** Function that reveals main page */
function getMainPage() {
    const main=document.getElementById("main");
    document.getElementById("frontPage").style.display="none";
    main.style.display="inline";
}

/** Functions that creates dropdown menu */
function getDropdown () {
    const hamburgerMenu = document.getElementById("hamburger");
    hamburgerMenu.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('dropdown');
}

/** Function with button that toggle between light and dark mode */
function getLightMode () {
    const light = document.getElementById("lightbulb");
    light.addEventListener("click", toggleLight)
}

function toggleLight() {
    const body = document.querySelector('body');
    body.classList.toggle('switch');

}