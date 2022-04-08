$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

const btn_more_event = document.getElementById("readmoreevent");
const btn_less_event = document.getElementById("readlessevent");
btn_more_event.onclick = function() {
    btn_more_event.style.display = "none";
    btn_less_event.style.display = "block";
};
btn_less_event.onclick = function() {
    btn_less_event.style.display = "none";
    btn_more_event.style.display = "block";
};

const btn_more1 = document.getElementById("achievement1_more");
const btn_less1 = document.getElementById("achievement1_less");
btn_more1.onclick = function() {
    btn_more1.style.display = "none";
    btn_less1.style.display = "block";
};
btn_less1.onclick = function() {
    btn_less1.style.display = "none";
    btn_more1.style.display = "block";
};

const btn_more2 = document.getElementById("achievement2_more");
const btn_less2 = document.getElementById("achievement2_less");
btn_more2.onclick = function() {
    btn_more2.style.display = "none";
    btn_less2.style.display = "block";
};
btn_less2.onclick = function() {
    btn_less2.style.display = "none";
    btn_more2.style.display = "block";
};

const btn_more3 = document.getElementById("achievement3_more");
const btn_less3 = document.getElementById("achievement3_less");
btn_more3.onclick = function() {
    btn_more3.style.display = "none";
    btn_less3.style.display = "block";
};
btn_less3.onclick = function() {
    btn_less3.style.display = "none";
    btn_more3.style.display = "block";
};

const btn_more4 = document.getElementById("achievement4_more");
const btn_less4 = document.getElementById("achievement4_less");
btn_more4.onclick = function() {
    btn_more4.style.display = "none";
    btn_less4.style.display = "block";
};
btn_less4.onclick = function() {
    btn_less4.style.display = "none";
    btn_more4.style.display = "block";
};


var observerhome = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Home');
        document.getElementById("homenav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerhome.observe(document.querySelector("#home"));

var observerourstory = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Ourstory');
        document.getElementById("animatecard1").style.display = "block";
        document.getElementById("animatecard1").style.animation = "fadeInAnimation ease 1.5s";
        document.getElementById("animatecard2").style.display = "block";
        document.getElementById("animatecard2").style.animation = "fadeInAnimation ease 1s";
        document.getElementById("ourstorynav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerourstory.observe(document.querySelector("#ourstory"));

var observerachievements = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Achievements');
        document.getElementById("carouselExampleControls").style.display = "block";
        document.getElementById("carouselExampleControls").style.animation = "fadeInAnimation ease 1.5s";
        document.getElementById("achievementsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerachievements.observe(document.querySelector("#achievements"));

var observerourprojects = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Our Projects');
        document.getElementById("projectscardanimation").style.display = "block";
        document.getElementById("projectscardanimation").style.animation = "fadeInAnimation ease 1.5s";
        document.getElementById("ourprojectsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerourprojects.observe(document.querySelector("#ourprojects"));

var observerevents = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Events');
        document.getElementById("eventsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerevents.observe(document.querySelector("#events"));

var observerteam = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Team');
        document.getElementById("teamnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.4] });

observerteam.observe(document.querySelector("#team"));

var observernewsletter = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Newsletter');
        document.getElementById("newsletternav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.4] });

observernewsletter.observe(document.querySelector("#newsletter"));

var observercontact = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Contact');
        document.getElementById("contactnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observercontact.observe(document.querySelector("#contact"));
