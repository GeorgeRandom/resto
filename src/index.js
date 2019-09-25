console.log("BIIIIITE")

import {load} from './modules/load'
load()
import {about} from "./modules/about"
import {menu} from "./modules/menu"
import {contact} from "./modules/contact"


function eraseUnder(){
    const content= document.querySelector("#content")
    if (content.childElementCount>2)
        {content.removeChild(content.lastChild)}
}
function displayAbout(){
    eraseUnder();
    about()
}
function displayMenu(){
    eraseUnder()
    menu()
}
function displayContact(){
    eraseUnder()
    contact()
}








const aboutButton=document.querySelector("#about");
const homeButton=document.querySelector("#home");
const menuButton=document.querySelector("#menu");
const contactButton=document.querySelector("#contact");
//event listeners

aboutButton.addEventListener("click",displayAbout)
homeButton.addEventListener("click",eraseUnder)
menuButton.addEventListener("click",displayMenu)
contactButton.addEventListener("click",displayContact)

