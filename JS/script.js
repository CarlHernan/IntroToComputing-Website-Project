document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.sticky-nav');
    const introSection = document.querySelector('.logo');

    function toggleStickyNav() {
        if (window.scrollY > introSection.offsetHeight) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleStickyNav);
});
function openNAV() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
}

function closeNAV() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("body").style.overflowY = "auto";
}

var content1 = document.getElementById("content-1");
        var content2 = document.getElementById("content-2");
        var content3 = document.getElementById("content-3");
        var btn1 = document.getElementById("btn-1");
        var btn2 = document.getElementById("btn-2");
        var btn3 = document.getElementById("btn-3");
        var rad1 = document.getElementById("radio1");
        var rad2 = document.getElementById("radio2");
        var rad3 = document.getElementById("radio3");

        function openGOALS() {
            content1.style.opacity = "1";
            content2.style.opacity = "0";
            content3.style.opacity = "0";
            btn1.style.background = "#c2c1c1";
            btn2.style.background = "none";
            btn3.style.background = "none";
            rad1.checked = true;
            rad2.checked = false;
            rad3.checked = false;
        }
        function openMISSION() {
            content1.style.opacity = "0";
            content2.style.opacity = "1";
            content3.style.opacity = "0";
            btn1.style.background = "none";
            btn2.style.background = "#c2c1c1";
            btn3.style.background = "none"
            rad1.checked = false;
            rad2.checked = true;
            rad3.checked = false;
        }
        function openVISION() {
            content1.style.opacity = "0";
            content2.style.opacity = "0";
            content3.style.opacity = "1";
            btn1.style.background = "none";
            btn2.style.background = "none";
            btn3.style.background = "#c2c1c1";
            rad1.checked = false;
            rad2.checked = false;
            rad3.checked = true;
        }
        
var slide1 = document.getElementById("slide-1");
        var slide2 = document.getElementById("slide-2");
        var slide3 = document.getElementById("slide-3");
        var sldbtn1 = document.getElementById("slidebtn1");
        var sldbtn2 = document.getElementById("slidebtn2");
        var sldbtn3 = document.getElementById("slidebtn3");
        
        function slide1SHOW() {
            slide1.style.transform = "translateX(0)";
            slide2.style.transform = "translateX(100%)";
            slide3.style.transform = "translateX(200%)";
            updateSlideButtons(1);
            //stopAutoScroll();
            //resetAutoScroll();
        }
        
        function slide2SHOW() {
            slide1.style.transform = "translateX(-100%)";
            slide2.style.transform = "translateX(0)";
            slide3.style.transform = "translateX(100%)";
            updateSlideButtons(2);
           // stopAutoScroll();
            //resetAutoScroll();
        }
        
        function slide3SHOW() {
            slide1.style.transform = "translateX(-200%)";
            slide2.style.transform = "translateX(-100%)";
            slide3.style.transform = "translateX(0)";
            updateSlideButtons(3);
            //stopAutoScroll();
           //resetAutoScroll();
        }
        
        function updateSlideButtons(activeSlide) {
            sldbtn1.style.backgroundColor = activeSlide === 1 ? "#15BBE0" : "#d6d6d6";
            sldbtn2.style.backgroundColor = activeSlide === 2 ? "#15BBE0" : "#d6d6d6";
            sldbtn3.style.backgroundColor = activeSlide === 3 ? "#15BBE0" : "#d6d6d6";
        }
        
        /*var interval = setInterval(autoScroll, 5000);
        
        function autoScroll() {
            if (slide1.style.transform === "translateX(-100%)") {
                slide3SHOW();
            } else if (slide2.style.transform === "translateX(-100%)") {
                slide1SHOW();
            } else {
                slide2SHOW();
            }
        }
        
        function stopAutoScroll() {
            clearInterval(interval);
        }
        function resetAutoScroll() {
            clearInterval(interval);
            interval = setInterval(autoScroll, 10000);
        }*/

var mslide1 = document.getElementById("slide-1");
        var mslide2 = document.getElementById("slide-2");
        var mslide3 = document.getElementById("slide-3");
        var msldbtn1 = document.getElementById("mslidebtn1");
        var msldbtn2 = document.getElementById("mslidebtn2");
        var msldbtn3 = document.getElementById("mslidebtn3");
        var msldbtn4 = document.getElementById("mslidebtn4");
        var msldbtn5 = document.getElementById("mslidebtn5");
        

        function mslide1SHOW(){
            mslide1.style.transform = "translateX(0)";
            mslide2.style.transform = "translateX(100%)";
            mslide3.style.transform = "translateX(200%)";
            msldbtn1.style.backgroundColor = "#15BBE0";
            msldbtn2.style.backgroundColor = "#d6d6d6";
            msldbtn3.style.backgroundColor = "#d6d6d6";
            msldbtn4.style.backgroundColor = "#d6d6d6";
            msldbtn5.style.backgroundColor = "#d6d6d6";
        }
        function mslide2SHOW(){
            mslide1.style.transform = "translateX(-66.66%)";
            mslide2.style.transform = "translateX(33.33%)";
            mslide3.style.transform = "translateX(166.66%)";
            msldbtn1.style.backgroundColor = "#d6d6d6";
            msldbtn2.style.backgroundColor = "#15BBE0";
            msldbtn3.style.backgroundColor = "#d6d6d6";
            msldbtn4.style.backgroundColor = "#d6d6d6";
            msldbtn5.style.backgroundColor = "#d6d6d6";
        }
        function mslide3SHOW(){
            mslide1.style.transform = "translateX(-133.33%)";
            mslide2.style.transform = "translateX(-33.33%)";
            mslide3.style.transform = "translateX(66.66%)";
            msldbtn1.style.backgroundColor = "#d6d6d6";
            msldbtn2.style.backgroundColor = "#d6d6d6";
            msldbtn3.style.backgroundColor = "#15BBE0";
            msldbtn4.style.backgroundColor = "#d6d6d6";
            msldbtn5.style.backgroundColor = "#d6d6d6";
        }
        function mslide4SHOW(){
            mslide1.style.transform = "translateX(-200%)";
            mslide2.style.transform = "translateX(-100%)";
            mslide3.style.transform = "translateX(0)";
            msldbtn1.style.backgroundColor = "#d6d6d6";
            msldbtn2.style.backgroundColor = "#d6d6d6";
            msldbtn3.style.backgroundColor = "#d6d6d6";
            msldbtn4.style.backgroundColor = "#15BBE0";
            msldbtn5.style.backgroundColor = "#d6d6d6";
        }
        function mslide5SHOW(){
            mslide1.style.transform = "translateX(-233.33%)";
            mslide2.style.transform = "translateX(-133.33%)";
            mslide3.style.transform = "translateX(-33.33%)";
            msldbtn1.style.backgroundColor = "#d6d6d6";
            msldbtn2.style.backgroundColor = "#d6d6d6";
            msldbtn3.style.backgroundColor = "#d6d6d6";
            msldbtn4.style.backgroundColor = "#d6d6d6";
            msldbtn5.style.backgroundColor = "#15BBE0";
        }
        

        
    
var perc = 0;
        function updateButtonVisibility() {
            var prevb = document.getElementById("slide-1");
            var prevBtn = document.getElementById("prevbtn");
            var nextBtn = document.getElementById("nextbtn");
            if (perc == 0) {
                prevBtn.style.display = "none";
            }else if (perc == -266.63999999999993){
                nextBtn.style.display = "none";
            }
             else {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }
        }
        function prev() {
            var prev1 = document.getElementById("slide-1");
            var prev2 = document.getElementById("slide-2");
            var prev3 = document.getElementById("slide-3");
            perc = perc+33.33;
            prev1.style.transform = "translateX("+perc+"%)";
            prev2.style.transform = "translateX("+(perc+100)+"%)";
            prev3.style.transform = "translateX("+(perc+200)+"%)";
            updateButtonVisibility();
        }
    
        function next() {
            var prev1 = document.getElementById("slide-1");
            var prev2 = document.getElementById("slide-2");
            var prev3 = document.getElementById("slide-3");
            perc = perc - 33.33;
            prev1.style.transform = "translateX("+perc+"%)";
            prev2.style.transform = "translateX("+(perc+100)+"%)";
            prev3.style.transform = "translateX("+(perc+200)+"%)";
            updateButtonVisibility();
        }
    
        function getTransformValue(element) {
            return window.getComputedStyle(element).getPropertyValue('transform');
        }
    
        document.addEventListener('DOMContentLoaded', updateButtonVisibility);


/*var cslide1 = document.getElementById("slide-1");
        var cslide2 = document.getElementById("slide-2");
        var cslide3 = document.getElementById("slide-3");
        var prev = document.getElementById("prevbtn");
        var naxt = document.getElementById("nextbtn");

        function prev(){
            var perc = ;
        }
        function next(){

        }*/
var play = document.getElementById("play-vid");
var close = document.getElementById("close-vid");
var stop = document.getElementById("body");
var videoContainer = document.getElementById('iframe-container');

        function openVID(){
            play.style.display = "block";
            close.style.display = "block";
            stop.style.overflowY = "hidden"
            videoContainer.style.display = "block";

        }
        function closeVID(){
            play.style.display = "none";
            close.style.display = "none";
            stop.style.overflowY = "auto"
            videoContainer.style.display = "none";
            
            
        }
        
        
        
        
        
        function validateForm1() {
            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const gender = document.getElementById("gender").value;
            const birthdate = document.getElementById("birthdate").value.trim();
            const tel = document.getElementById("tel").value.trim();
            const email = document.getElementById("email").value.trim();
        
            if (!fname || !lname || !gender || !birthdate || !tel || !email || !occupation || !religion) {
                return false;
            }
            
                return true;
            
        
            
        }
        function validateForm2() {
            const address = document.getElementById("address").value.trim();
            const barangay = document.getElementById("barangay").value.trim();
            const municipality = document.getElementById("municipality").value.trim();
            const province = document.getElementById("province").value.trim();
            const zipcode = document.getElementById("zipcode").value.trim();
        
            if (!address || !barangay || !municipality || !province || !zipcode) {
                
                return false;
            }
            
                return true;
            
            
        }
        function validateForm3() {
            const efname = document.getElementById("efname").value.trim();
            const elname = document.getElementById("elname").value.trim();
            const relation = document.getElementById("relation").value.trim();
            const etel = document.getElementById("etel").value.trim();
            const allergies = document.getElementById("allergies").value.trim();
            const medical = document.getElementById("medical").value.trim();
        
            if (!efname || !elname || !relation || !etel || !allergies || !medical) {
                
                return false;
            }
            
                return true;
            
        
        }

        document.querySelectorAll(".form-flex").forEach(function(form) {
            form.addEventListener("submit", function(event) {
                event.preventDefault();
            });
        });
        

var form1=document.getElementById("form1");
var form2=document.getElementById("form2");
var form3=document.getElementById("form3");
var form4=document.getElementById("form4");
var progress=document.getElementById("progress");
var prog1=document.getElementById("progress1");
var prog2=document.getElementById("progress2");
var prog3=document.getElementById("progress3");
var prog4=document.getElementById("progress4");

        function formFir(){
            form1.style.transform = "translateX(0)";
            form2.style.transform = "translateX(110%)";
            form3.style.transform = "translateX(210%)";
            form4.style.transform = "translateX(310%)";
            progress.style.width = "0%";
            prog1.style.backgroundColor = "#15BBE0";
            prog2.style.backgroundColor = "#9e9e9e";
            prog3.style.backgroundColor = "#9e9e9e";
            prog4.style.backgroundColor = "#9e9e9e";

        }
        function formSec(){
            if (validateForm1()) {
            form1.style.transform = "translateX(-110%)";
            form2.style.transform = "translateX(0)";
            form3.style.transform = "translateX(110%)";
            form4.style.transform = "translateX(210%)";
            progress.style.width = "33.33%";
            prog1.style.backgroundColor = "#15BBE0";
            prog2.style.backgroundColor = "#15BBE0";
            prog3.style.backgroundColor = "#9e9e9e";
            prog4.style.backgroundColor = "#9e9e9e";
            }
        }
        function formThird(){
            if (validateForm2()) {
            form1.style.transform = "translateX(-210%)";
            form2.style.transform = "translateX(-110%)";
            form3.style.transform = "translateX(0)";
            form4.style.transform = "translateX(110%)";
            progress.style.width = "66.66%";
            prog1.style.backgroundColor = "#15BBE0";
            prog2.style.backgroundColor = "#15BBE0";
            prog3.style.backgroundColor = "#15BBE0";
            prog4.style.backgroundColor = "#9e9e9e";
            }
        }
        function formFour(){
            if (validateForm3()){
            form1.style.transform = "translateX(-310%)";
            form2.style.transform = "translateX(-210%)";
            form3.style.transform = "translateX(-110%)";
            form4.style.transform = "translateX(0)";
            progress.style.width = "100%";
            prog1.style.backgroundColor = "#15BBE0";
            prog2.style.backgroundColor = "#15BBE0";
            prog3.style.backgroundColor = "#15BBE0";
            prog4.style.backgroundColor = "#15BBE0";
            }
        }


let idPic = document.getElementById("id-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    idPic.src = URL.createObjectURL(inputFile.files[0]);
}
let selfPic = document.getElementById("self-pic");
let inputself = document.getElementById("input-self");

inputself.onchange = function(){
    selfPic.src = URL.createObjectURL(inputself.files[0]);
}

var login = document.getElementById("logInForm");
var invalid = document.getElementById("invalidID");
var inputElement = document.getElementById("systemID");
    function openLogIn(){
        stop.style.overflowY = "hidden";
        login.style.display = "block";
    }
    function closeLogIn(){
        stop.style.overflowY = "auto";
        login.style.display = "none";
        invalid.style.display = "none";
        inputElement.value = "";
    }
    function confirmID(){
        invalid.style.display = "block";
    }



    var pop = document.getElementById("popup");
    var lolipop = document.getElementById("popel");    
    function openPopup(){
        pop.style.display = "block";
        setTimeout(function() {
            lolipop.style.maxHeight = "600px";
            body.style.overflowY = "hidden";
        }, 100);
        
    }
    function closePopup(){
        setTimeout(function() {
            pop.style.display = "none";
            window.location.href = 'index.html';
        }, 510);
        lolipop.style.maxHeight = "0";
        body.style.overflowY = "auto";
    }