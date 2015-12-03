$(document).ready(function(){
//establish input variable

//set function to occur when submit
$("#submit-btn").click(function(event){
    event.preventDefault();

var city = $('#city-type').val();
city = city.toLowerCase().trim();

//set if else statement

//if input = city, set body class to city name
    if (city === "new york" || city === "new york city" || city === "nyc"){
        $("body").removeClass().addClass("nyc");

    }else if (city === "san francisco" || city === "sf" || city === "bay area"){
        $("body").removeClass().addClass("sf");

    }else if (city === "los angeles" || city === "la" || city === "lax"){
        $("body").removeClass().addClass("la");

    }else if (city === "austin" || city === "atx"){
        $("body").removeClass().addClass("austin");

    }else if (city === "sydney" || city === "syd"){
        $("body").removeClass().addClass("sydney");

    }else {
        $("body").addClass("narnia");

    };

    $("#city-type").val('');
    });
});