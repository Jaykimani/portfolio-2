gsap.registerPlugin(ScrollTrigger);


let headerTl = gsap.timeline();
headerTl.from(".home-img", {opacity: 0, x: 100, duration: 1})
headerTl.from(".sideline", {transform: "scaleY(0)", duration: 2}, ">-1.3");
headerTl.from(".header-div h1",{x: -100, duration: 1.5}, ">-1.5");
headerTl.from(".header-div h1",{opacity: 0, duration: 2}, ">-0.75");
headerTl.from(".header-div h3",{y: 10, opacity: 0, duration: 1}, ">-0.75");
headerTl.to(".name",{clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)", duration: 2});
headerTl.from(".header-div h4",{opacity: 0, duration: 2});
headerTl.from(".more-underline",{transform: "scaleX(0)", duration: 2}, ">-2")
headerTl.from(".about", {x: -10, opacity: 0, duration: 1});
headerTl.from(".projects", {x: 10, opacity: 0, duration: 1}, ">-1");

let dotsTl = gsap.timeline({delay: 1.5, repeat: -1, repeatDelay: 0.5})
dotsTl.to(".know-more a span", {stagger: .4, opacity: 1, duration: .5});

gsap.to(".about-info-me a span", {stagger: .4, opacity: 1, duration: .5, repeat: -1});

const about = document.querySelector(".about-me");
const skills = document.querySelector(".skills");
const aboutBar = document.querySelector(".about-bar")

about.addEventListener("click", function(){
    aboutBar.style.left = "13%";
})
skills.addEventListener("click", function(){
    aboutBar.style.left = "63%";
})


let aboutTl = gsap.timeline({
    scrollTrigger:{
        trigger: "#about-sec",
        start: "top 90%",
    }
});
aboutTl.from(".about-img", {opacity: 0, x: -100, duration: 1})
aboutTl.from(".about-header div", {x: -10, opacity: 0, duration: 1}, ">-0.8");
aboutTl.from(".about-info-me", {x:-30, duration: 1.5}, ">-1.5")
aboutTl.from(".about-info-me", {opacity: 0, duration: 1}, ">-0.5");

const aboutMe = document.querySelector(".about-me");
const aboutSkills = document.querySelector(".skills");
const aboutInfoMe = document.querySelector(".about-info-me");
const aboutInfoSkills = document.querySelector(".about-info-skills");

aboutSkills.addEventListener("click", function(){
    gsap.to(".about-info-me", {opacity: 0, duration: 0.3});
    gsap.from(".about-info-skills", {x:-10, duration: 0.5}, ">-.2")
    gsap.to(".about-info-skills", {opacity: 1, duration: 1}, ">-0.3");
});
aboutMe.addEventListener("click", function(){
    gsap.to(".about-info-skills", {opacity: 0, duration: 0.3});
    gsap.from(".about-info-me", {x:-10, duration: 0.5}, ">-.2")
     gsap.to(".about-info-me", {opacity: 1, duration: 1}, ">-0.3");
});

// PROJECTS SECTION

let projectsTl = gsap.timeline({
    scrollTrigger:{
        trigger: "#projects-sec",
        start: "top 90%"
    }
});
projectsTl.from(".projects-title span", {transform: "scaleX(0)", duration: 1});
projectsTl.from(".projects-title h4",{opacity: 0, duration: 1}, ">-0.5");

gsap.to(".full-site span", {stagger: .4, opacity: 1, duration: .5, repeat: -1});

// app.get("/netstore", function(req, res){
//  res.redirect("https://netstore-app.herokuapp.com/");
// });

// CONTACT SECTION

let contactTl = gsap.timeline({
    scrollTrigger:{
        trigger: "#contact-sec",
        start: "top 90%"
    }
});

contactTl.from(".contact-form",{x: -100, opacity: 0, duration: 1});
contactTl.from(".contact-img",{x: 100, opacity: 0, duration: 1}, ">-1")
