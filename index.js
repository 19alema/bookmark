// ACCORDANATION
const questionBox = document.querySelectorAll(".question-box");
questionBox.forEach(quiz => {
    quiz.addEventListener("click", function () {
        let answer = quiz.querySelector(".answer");
        let imgBtn = quiz.querySelector("img");

        imgBtn.onclick = function () {
            answer.classList.toggle("display")
        }
    })
})
 let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
       
         header.style.boxShadow = "0 0 5px rgba(0,0,0,.5)"
    } else if (window.scrollY < 0) {
        header.style.boxShadow = "none"
    }
})

// TAB SECTION
const featureH3 = document.querySelector(".feature-h3");
const featurePara = document.querySelector(".feature-para");
const featureImg = document.querySelector(".feature-img");

const tab1 = document.querySelector(".tab1")
tab1.addEventListener("click", function () {
    featureH3.innerText = " Bookmark in one click";
    featurePara.innerText = "Organize your bookmarks howerver you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    featureImg.src = "images/illustration-features-tab-1.svg";
});

const tab2 = document.querySelector(".tab2")
tab2.addEventListener("click", function () {
    featureH3.innerText = " Get into Quick Search";
    featurePara.innerText = "Easy get engaeged with your favourite sites using our quick search tool embeded in the final markup of that fiels of your interset."
    featureImg.src = "images/illustration-features-tab-2.svg";
});

const tab3 = document.querySelector(".tab3")
tab3.addEventListener("click", function () {
    featureH3.innerText = " Easy Sharing";
    featurePara.innerText = "Our simple drag-and-drop interface gives you complete sharing over how you manage your favourite sites."
    featureImg.src = "images/illustration-features-tab-3.svg";
});

// NAVBAR
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".home-menu");
const navbar = document.querySelector(".navbar")
closeBtn.addEventListener("click", function () {
    navbar.style.height = 0;
})
menu.addEventListener("click", function () {
    navbar.style.height = `${100}vh`;
})

const links = document.querySelectorAll(".link");
links.forEach(function (e) {
    e.addEventListener("click", function () {
         navbar.style.height = 0;
    })
})

// AUTOMATIC YEAR
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

const topLink = document.querySelector(".top-link");


window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})
