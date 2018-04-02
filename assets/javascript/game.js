
$(document).ready(function () {
    // starting values initialized and set to 0
    var wins = 0;
    var losses = 0;
    var holding = 0;
    //variables initialized, but value is not passed until regenerate(); is called
    var valSurprise, valMelon, valCouch, valtp, valWater, varTotal;
    // variables generate random numbers for cat gems on page load when regenerate(); is called
    // and the first value that you are aiming for is displayed on screen
    regenerate();
    $("#total").html(varTotal);
    //  onclick function for adding value to holding variable
    $("#gem1").on("click", function () {    
        holding = holding + valSurprise;    
        $("#current").html(holding);
        checkStatus();
    });                                     //holding variable 1
    $("#gem2").on("click", function () {    

        holding = holding + valMelon;
        $("#current").html(holding);
        checkStatus();
    });                                     //holding variable 2
    $("#gem3").on("click", function () {   

        holding = holding + valCouch;
        $("#current").html(holding);
        checkStatus();
    });                                      //holding variable 3
    $("#gem4").on("click", function () {    

        holding = holding + valtp;
        $("#current").html(holding);
        checkStatus();
    });                                     //holding variable 4
    $("#gem5").on("click", function () {    
        holding = holding + valWater;
        $("#current").html(holding);
        checkStatus();
    });                                    //holding variable 5
    // I learned this specific way to call this function 
    // from exercise 4 on w3schools (that's why it's different)
    //toggles the visibility of the number choices
    $("#button1").click(function(){
        $(".valClass").toggle();
    });
    /*---------------------------------- FUNCTIONS -------------------------------------------*/
    //function for generating random numbers
    function regenerate() {
        varTotal = Math.floor(Math.random() * 150 + 200);
        valSurprise = Math.floor(Math.random() * 20 + 1);
        valMelon = Math.floor(Math.random() * 20 + 3);
        valCouch = Math.floor(Math.random() * 20 + 6);
        valtp = Math.floor(Math.random() * 20 + 7);
        valWater = Math.floor(Math.random() * 20 + 10);
        $("#total").html(varTotal);
           // assigns number for toggle on easy mode
           $("#val1").html(valSurprise);
           $("#val2").html(valMelon);
           $("#val3").html(valCouch);
           $("#val4").html(valtp);
           $("#val5").html(valWater);
    } 
    // Function for reseting the game
    function resetGame() {
        holding = 0;
        $("#current").html(holding);
        regenerate();
    }
    //function to check for wins and losses
    function checkStatus() {
        if (holding == varTotal) {
            wins++;
            resetGame();
            addCoins();
        }
        if (holding > varTotal) {
            losses++;
            resetGame();
        }
        //print status to page
        $("#win").html(wins);
        $("#loss").html(losses);
    }
    // function for adding a cat coin to your inventory
    function addCoins() {
        var newCoin = $('<img src="assets/images/catcoins.jpg">').appendTo('#footer');
        $(newCoin).addClass('catCoin');
    }
});

