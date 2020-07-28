var page = document.getElementById("_document")
var pageCtn = document.getElementById("pageCtn")
var listenPage = document.getElementById("_listenPage")
var followPage = document.getElementById("_followPage")
var aboutPage = document.getElementById("_aboutPage")
var btns = document.getElementsByClassName("contentPage")

var navBarMain = document.getElementById("_navBar-main")
var sticky = navBarMain.offsetTop

window.onscroll = function myFunction1() {
    if (window.pageYOffset >= sticky) {
        navBarMain.classList.add("sticky")
    } else {
        navBarMain.classList.remove("sticky")
    }
}


function showContent(e) {
/*Iterate through contentPages*/
    for (let index = 0; index < btns.length; index++) {
        const btn = btns[index];
/*Hides them*/
        btn.classList.add("hiddenPage")
    }
/*Shows the page that was clicked*/

e.classList.remove("hiddenPage")
                        }
;

