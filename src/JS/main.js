
const $ = selector => document.getElementById(selector);

//*Button code for show the menu when we click it:
//*Button for change the display of one of our menu's section:
let menuButton = $('menuAccessButton');
let sectionMenu2 = $('secondSection');

let clicksCounter = 1;

//*Here we hide our second menu section:
sectionMenu2.style.display = 'none';


//*Here we'll render our menu once we click our button:
menuButton.onclick = () => {

    //*We count the amount of our clicks for render our hide our section:
    if(clicksCounter === 1){

        sectionMenu2.style.display = 'flex';
        
    }
    
    if(clicksCounter === 2){
    
         //*Here we hide our second menu section:
        sectionMenu2.style.display = 'none';

    }

    //*When we click our button we increase the total amount of clicks
    clicksCounter = clicksCounter + 1;

    //*Once our clicks reach the the limit we reset our clicks
    if(clicksCounter > 2){

        clicksCounter = clicksCounter - 2;

    }

}



// Main slider template function:

//Sliders elements:

const rankedSlider = document.getElementById('rankedBookSlider');
const rankedSlider2 = document.getElementById('bestSelledSlider')
const rankedSlider3 = document.getElementById('flashSaleSlider');

// rakedBooks slides buttons:
const btnLeft1 = document.getElementById('leftButton');
const btnRight1 = document.getElementById('rightButton');

const btnLeft2 = document.getElementById('leftButton2');
const btnRight2 = document.getElementById('rightButton2');

const btnLeft3 = document.getElementById('leftButton3');
const btnRight3 = document.getElementById('rightButton3');


//ranked books slides buttons:
const btnLeft4 = document.getElementById('leftButton4');
const btnRight4 = document.getElementById('rightButton4');

const btnLeft5 = document.getElementById('leftButton5');
const btnRight5 = document.getElementById('rightButton5');

const btnLeft6 = document.getElementById('leftButton6');
const btnRight6 = document.getElementById('rightButton6');


//sale books slides buttons:
const btnLeft7 = document.getElementById('leftButton7');
const btnRight7 = document.getElementById('rightButton7');

const btnLeft8 = document.getElementById('leftButton8');
const btnRight8 = document.getElementById('rightButton8');

const btnLeft9 = document.getElementById('leftButton9');
const btnRight9 = document.getElementById('rightButton9');



    function moveSlideRight(slider) {
        slider.scrollBy({left: slider.clientWidth, behavior: 'smooth'});
    }
        
    function moveSlideLeft(slider) {
        slider.scrollBy({left: (slider.clientWidth * -1), behavior: 'smooth'});
    }

    // Function for create the slider buttons: 
    function createButtonForSlider(newButtonRight, newButtonLeft, slider){
        newButtonRight.onclick = () => {
            moveSlideRight(slider);
        };
    
        newButtonLeft.onclick = () => {
            moveSlideLeft(slider);
        }
    }

// Here we create the button pairs ofr ranked slider:

//Slider 1:
createButtonForSlider(btnRight1, btnLeft1, rankedSlider);
createButtonForSlider(btnRight2, btnLeft2, rankedSlider);
createButtonForSlider(btnRight3, btnLeft3, rankedSlider);

//Slider 2:
createButtonForSlider(btnRight4, btnLeft4, rankedSlider2);
createButtonForSlider(btnRight5, btnLeft5, rankedSlider2);
createButtonForSlider(btnRight6, btnLeft6, rankedSlider2);

//Slider 3:
createButtonForSlider(btnRight7, btnLeft7, rankedSlider3);
createButtonForSlider(btnRight8, btnLeft8, rankedSlider3);
createButtonForSlider(btnRight9, btnLeft9, rankedSlider3);

//Here we create the button pairs of selled slider



//*Code for the clock:
const countdownDuration = 1064752;

    let timeLeft = countdownDuration;

    let intervalId;

    let days = 12;

    let hours = 7;

    let minutes = 44;

    let seconds = 12;

    function updateClock() {

        document.getElementById("flashSaleDays").innerHTML = `${days.toString()}`;
        document.getElementById('flashSalesHours').innerHTML = `${hours.toString()}`;
        document.getElementById('flashSaleMinutes').innerHTML = `${minutes.toString()}`;
        document.getElementById('flashSaleSeconds').innerHTML = `${seconds.toString()}`;

        timeLeft -= 1;

        seconds -= 1;

        if(seconds == 0){
            seconds = 59;
            minutes -= 1;
        }

        if (minutes == 0){
            minutes = 59;
            hours -= 1;
        }

        if (hours == 0){
            hours = 23;
            days -= 1;
        }
        
        
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            // Handle countdown completion (e.g., display a message or trigger an event)
        }
    }

intervalId = setInterval(updateClock, 1000); // update every 1 second