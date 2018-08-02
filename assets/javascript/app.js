
$(document).ready(() => {
    
    // starting values initialized and set to 0
    let wins = 0;
    let losses = 0;
    let holding = 0;

    // value will be passed when regenerate() is called
    let valSurprise, valMelon, valCouch, valtp, valWater, varTotal;
    $("#total").html(varTotal);

    // onclick function for adding value to holding variables
    $("#gem1").on("click", () => {    
        holding = holding + valSurprise;    
        $("#current").html(holding);
        checkStatus();
    });                                     // holding variable 1
    $("#gem2").on("click", () => {    

        holding = holding + valMelon;
        $("#current").html(holding);
        checkStatus();
    });                                     //holding variable 2
    $("#gem3").on("click", () => {   

        holding = holding + valCouch;
        $("#current").html(holding);
        checkStatus();
    });                                      //holding variable 3
    $("#gem4").on("click", () => {    

        holding = holding + valtp;
        $("#current").html(holding);
        checkStatus();
    });                                     // holding variable 4
    $("#gem5").on("click", () => {    
        holding = holding + valWater;
        $("#current").html(holding);
        checkStatus();
    });                                    // holding variable 5

    // toggles the visibility of the number choices
    $("#button1").click(() => {
        $(".value-visibility").toggle();
    });
    /* ---------------------------------- FUNCTIONS ------------------------------------------- */
    // for generating random numbers
    regenerate = () => {
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
    regenerate();

    // for reseting the game
    resetGame = () => {
        holding = 0;
        $("#current").html(holding);
        regenerate();
    }

    // for checking for wins and losses
    checkStatus = () => {
        if (holding == varTotal) {
            wins++;
            resetGame();
            addCoins();
        }
        else if (holding > varTotal) {
            losses++;
            resetGame();
        }

        //print status to page
        $("#win").html(wins);
        $("#loss").html(losses);
    }

    // for adding a cat coin to your inventory (footer)
    addCoins = () =>  {
        var newCoin = $('<img src="assets/images/catcoins.jpg">').appendTo('#footer');
        $(newCoin).addClass('cat-coin');
    }
});

