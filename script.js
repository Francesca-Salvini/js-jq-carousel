// CONSEGNA
//
// Creare uno slider di 4 immagini
//
// Cliccando sulla freccia a destra si scorrerà all'immagine seguente
// Cliccando sulla freccia a sinistra si scorrerà all'immagine precedente
// Quando si arriva all'ultima immagine (a dx), si riparte dalla prima
// Quando si arriva all'ultima immagine (a sx), si riparte dall'ultima
// Lo scorrimento non deve mai rompersi

// FRECCIA DESTRA 
// al click, le immagini scorrono verso destra 

var arrowRight = $('.arrow.right');

arrowRight.click(function() {

    var currentActive = $('.carousel .active');
    currentActive.removeClass('active');

    if(currentActive.hasClass('last')){
        // torno alla prima immagine (le ri do la classe active)
        $('.carousel .first').addClass('active');
    } else {
        // attribuisco la classe active all'immagine successiva
        var imgNext = currentActive.next();
        imgNext.addClass('active');
    }


});

// FRECCIA SINISTRA
// al click, le immagini scorrono verso sinistra 

var arrowLeft = $('.arrow.left');

arrowLeft.click(function() {

    var currentActive = $('.carousel .active');
    currentActive.removeClass('active');

    if(currentActive.hasClass('first')){
        // torno all'ultima immagine (le ri do la classe active)
        $('.carousel .last').addClass('active');
    } else {
        // attribuisco la classe active all'immagine precedente
        var imgPrev = currentActive.prev();
        imgPrev.addClass('active');
    }
});