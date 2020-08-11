//Creating current time/date and appending them onto the screen
$(document).ready(function() {
  
var m = moment().format('LLLL'); 
console.log(m.toString());

$(".time").text(m);



});


//Timeblock functionality set up

$(document).ready(function() {
var actualEvent = $("<textarea>");
var eventBox = $(".eventSch");


$(eventBox).click(function() {
eventBox.append(actualEvent);
}); 
});

//Timeblock color-code 

$(document).ready(function (eventSch0, timeValFinal){
    var eventSch0 = $(".eventSch0");
    var currentMil = moment().format('H')
    console.log(currentMil)
    var currentVal = parseInt(currentMil);

    console.log(currentVal)
    var timeVal = $(eventSch0).attr("value");
    parseInt($(eventSch0).attr("value"));
  

    var timeValFinal = parseInt($(eventSch0).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch0).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch0).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch0).css('background-color','green');
    
    }

    
});


$(document).ready(function (eventSch1, timeValFinal){
    var eventSch1 = $(".eventSch1");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch1).attr("value");
    parseInt($(eventSch1).attr("value"));
  

    var timeValFinal = parseInt($(eventSch1).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch1).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch1).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch1).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch2, timeValFinal){
    var eventSch2 = $(".eventSch2");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch2).attr("value");
    parseInt($(eventSch2).attr("value"));
  

    var timeValFinal = parseInt($(eventSch2).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch2).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch2).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch2).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch3, timeValFinal){
    var eventSch3 = $(".eventSch3");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch3).attr("value");
    parseInt($(eventSch3).attr("value"));
  

    var timeValFinal = parseInt($(eventSch3).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch3).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch3).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch3).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch4, timeValFinal){
    var eventSch4 = $(".eventSch4");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch4).attr("value");
    parseInt($(eventSch4).attr("value"));
  

    var timeValFinal = parseInt($(eventSch4).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch4).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch4).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch4).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch5, timeValFinal){
    var eventSch5 = $(".eventSch5");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch5).attr("value");
    parseInt($(eventSch5).attr("value"));
  

    var timeValFinal = parseInt($(eventSch5).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch5).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch5).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch5).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch6, timeValFinal){
    var eventSch6 = $(".eventSch6");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch6).attr("value");
    parseInt($(eventSch6).attr("value"));
  

    var timeValFinal = parseInt($(eventSch6).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch6).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch6).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch6).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch7, timeValFinal){
    var eventSch7 = $(".eventSch7");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch7).attr("value");
    parseInt($(eventSch7).attr("value"));
  

    var timeValFinal = parseInt($(eventSch7).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch7).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch7).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch7).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch8, timeValFinal){
    var eventSch8 = $(".eventSch8");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch8).attr("value");
    parseInt($(eventSch8).attr("value"));
  

    var timeValFinal = parseInt($(eventSch8).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch8).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch8).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch8).css('background-color','green');
    
    }

    
});

$(document).ready(function (eventSch9, timeValFinal){
    var eventSch9 = $(".eventSch9");
    var currentMil = moment().format('H')
    var currentVal = parseInt(currentMil);

    
    var timeVal = $(eventSch9).attr("value");
    parseInt($(eventSch9).attr("value"));
  

    var timeValFinal = parseInt($(eventSch9).attr("value"));
    console.log(timeValFinal)
    

    if (timeValFinal < currentVal) {
        $(eventSch9).css('background-color', 'red');
    }
    else if (timeVal > currentVal) {
        $(eventSch9).css('background-color', 'blue');
    }

    else if (timeVal === currentVal) {
        $(eventSch9).css('background-color','green');
    
    }

    
});
//Save button 
var Save = $(".save-btn");



