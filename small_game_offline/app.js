document.addEventListener("DOMContentLoaded", function () {

    //  console.log("JS podpięty");


    //starting screen
    function beginning() {
        //        console.log("beginning begins");

        var images = document.querySelectorAll(".image");
        
        var info = document.querySelectorAll(".info");

        images[0].classList.add("active");

        info[0].classList.add("visible");

    }

    beginning();

    //fruits-symbols slider

    function fruitsSlider() {

        //infinite slider of the images from the fruit-symbol list:      

        function slides() {

            var visibleImage = document.querySelector(".active");

            if (visibleImage.nextElementSibling) {

                visibleImage.nextElementSibling.classList.add("active");

                visibleImage.classList.remove("active");


            } else {

                visibleImage.classList.remove("active");

                var image = document.querySelector(".fruit_symbol li:first-child");

                image.classList.add("active");
            }


        }

        //time interval for the fruit-symbol slider: 

        var auto = setInterval(slides, 500);

        var spinButton = document.querySelector(".btn");

        //pushing the spin button:

        spinButton.addEventListener("click", function play() {

            spinButton.classList.remove("enabled");
            spinButton.classList.add("disabled");

            //fruit-slider is stopped when spinButton clicked:

            clearInterval(auto);

        });


    }

    fruitsSlider()

    //fruit-symbol slider started when window is loaded 
    window.addEventListener("load", slider, false);


    //switching the spin button
    function play() {


        var spinButton = document.querySelector(".btn");
        
        var form = document.querySelector("#form");
        
        var select = document.querySelector("#select");


        //choose a fruit from the list:


        select.addEventListener("click", function choose() {

            var fruit = select.options[select.selectedIndex].text;

            //enable the spin button:

            var spinButton = document.querySelector(".btn");

            spinButton.classList.remove("disabled");

            spinButton.classList.add("enabled");

        });
        

        fruitsSlider();

        //final stage of the game: result comparison when player clicks the spinButton:

        spinButton.addEventListener("click", function go() {

            var fruit = select.options[select.selectedIndex].text;

            var activeImage = document.querySelector(".active");

            var frozenImage = activeImage.innerText;

            var info = document.querySelectorAll(".info");


            if (fruit == frozenImage) {

                info[1].classList.add("visible");

                info[0].classList.remove("visible");
                
                info[1].style.color = "gold";




            } else {

                info[2].classList.add("visible");

                info[0].classList.remove("visible");


            }

        });


    }

    play();

    //reloading the page for playing again:

    function playAgain() {


        var playAgainBtn1 = document.querySelector("#play1");

        var playAgainBtn2 = document.querySelector("#play2");


        playAgainBtn1.addEventListener("click", function () {

            window.location.reload();

        });



        playAgainBtn2.addEventListener("click", function () {

            window.location.reload();

        });

    }

    playAgain();

});