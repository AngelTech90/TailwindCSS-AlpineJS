
const $ = selector => document.getElementById(selector);

//* Code for navbar:
function loadNavBarComponent(){

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

}
    
//* Code for slide right:
function moveSlideRight(slider) {
    slider.scrollBy({left: slider.clientWidth, behavior: 'smooth'});
}
    
//* Code for slide left:
function moveSlideLeft(slider) {
    slider.scrollBy({left: (slider.clientWidth * -1), behavior: 'smooth'});
}

//* Function for create the slider buttons: 
function createButtonForSlider(newButtonRight, newButtonLeft, slider){
    newButtonRight.onclick = () => {
        moveSlideRight(slider);
    };

    newButtonLeft.onclick = () => {
        moveSlideLeft(slider);
    }
}

//* Function for slider 1:
function loadRankedBooksSlider(){

    //Slider element:
    const rankedSlider = $('rankedBookSlider');

    // rakedBooks slides buttons:
    const btnLeft1 = $('leftButton');
    const btnRight1 = $('rightButton');

    const btnLeft2 = $('leftButton2');
    const btnRight2 = $('rightButton2');

    const btnLeft3 = $('leftButton3');
    const btnRight3 = $('rightButton3');

    //Slider 1:
    createButtonForSlider(btnRight1, btnLeft1, rankedSlider);
    createButtonForSlider(btnRight2, btnLeft2, rankedSlider);
    createButtonForSlider(btnRight3, btnLeft3, rankedSlider);

}

//* Function for slider 2:
function loadBestSelledSlider(){

    //Slider element:
    const rankedSlider2 = $('bestSelledSlider');

    //ranked books slides buttons:
    const btnLeft4 = $('leftButton4');
    const btnRight4 = $('rightButton4');

    const btnLeft5 = $('leftButton5');
    const btnRight5 = $('rightButton5');

    const btnLeft6 = $('leftButton6');
    const btnRight6 = $('rightButton6');

    //Slider 2:
    createButtonForSlider(btnRight4, btnLeft4, rankedSlider2);
    createButtonForSlider(btnRight5, btnLeft5, rankedSlider2);
    createButtonForSlider(btnRight6, btnLeft6, rankedSlider2);


}

//* Function for slider 3:
function loadFlashSalesSlider(){

    //Slider element:
    const rankedSlider3 = $('flashSaleSlider');

    //sale books slides buttons:
    const btnLeft7 = $('leftButton7');
    const btnRight7 = $('rightButton7');

    const btnLeft8 = $('leftButton8');
    const btnRight8 = $('rightButton8');

    const btnLeft9 = $('leftButton9');
    const btnRight9 = $('rightButton9');

    //Slider 3:
    createButtonForSlider(btnRight7, btnLeft7, rankedSlider3);
    createButtonForSlider(btnRight8, btnLeft8, rankedSlider3);
    createButtonForSlider(btnRight9, btnLeft9, rankedSlider3);

}

//* Code for slider 4:
function loadFeaturedBookSlider(){

    //slider element:
    const rankedSlider4 = $('featuredBookSlider');

    // best selled slider buttons:
    const btnLeft10 = $("leftButton10");
    const btnRight10 = $("rightButton10");

    const btnLeft11 = $("leftButton11");
    const btnRight11 = $("rightButton11");

    const btnLeft12 = $("leftButton12");
    const btnRight12 = $("rightButton12");

    const btnLeft13 = $("leftButton13");
    const btnRight13 = $("rightButton13");

    const btnLeft14 = $("leftButton14");
    const btnRight14 = $("rightButton14");

    //Slider 4:
    createButtonForSlider(btnRight10, btnLeft10, rankedSlider4);
    createButtonForSlider(btnRight11, btnLeft11, rankedSlider4);
    createButtonForSlider(btnRight12, btnLeft12, rankedSlider4);
    createButtonForSlider(btnRight13, btnLeft13, rankedSlider4);
    createButtonForSlider(btnRight14, btnLeft14, rankedSlider4);

}

//* Code for the clock:
function loadTimerComponent(){

    const countdownDuration = 1064752;

    let timeLeft = countdownDuration;

    let intervalId;

    let days = 12;

    let hours = 7;

    let minutes = 44;

    let seconds = 12;

    function updateClock() {

        $("flashSaleDays").innerHTML = `${days.toString()}`;
        $('flashSalesHours').innerHTML = `${hours.toString()}`;
        $('flashSaleMinutes').innerHTML = `${minutes.toString()}`;
        $('flashSaleSeconds').innerHTML = `${seconds.toString()}`;

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
}


//*Load all pieces of our page
function loadPageComponent(){
    loadNavBarComponent();
    loadTimerComponent();
    loadRankedBooksSlider();
    loadBestSelledSlider();
    loadFlashSalesSlider();
    loadFeaturedBookSlider();
}

// we load everthing:
loadPageComponent();