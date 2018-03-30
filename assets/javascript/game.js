var wins = 0;
var losses = 0;
var holding = 0;

$(document).ready(function () {

    
// do{
        var holding = -2;
        var varTotal = Math.floor(Math.random() * 100 + 300);
        // variables generate random numbers for cat gems on page load  
        var valSurprise = Math.floor(Math.random() * 16 + 1);
        var valMelon = Math.floor(Math.random() * 39 + 1);
        var valCouch = Math.floor(Math.random() * 17 + 1);
        var valtp = Math.floor(Math.random() * 23 + 1);
        var valWater = Math.floor(Math.random() * 46 + 1);
        // variable generates a goal for number to be achieved
        $("#total").html(varTotal);
        //  onclick function for adding value to holding variable
        $("#gem1").on("click", function () {

            holding = holding + valSurprise;
            $("#current").html(holding);
            checkStatus();
        });

        $("#gem2").on("click", function () {

            holding = holding + valMelon;
            $("#current").html(holding);
            checkStatus();
        });
        $("#gem3").on("click", function () {

            holding = holding + valCouch;
            $("#current").html(holding);
            checkStatus();
        });
        $("#gem4").on("click", function () {

            holding = holding + valtp;
            $("#current").html(holding);
            checkStatus();
        });
        $("#gem5").on("click", function () {

            holding = holding + valWater;
            $("#current").html(holding);
            checkStatus();
        });

        //function to check for wins and losses
        function checkStatus() {
            if (holding === varTotal) {
                wins++;
            }
            if (holding > varTotal) {
                losses++;
            }
            //print status to page
            $("#win").html(wins);
            $("#loss").html(losses);
        }
  // } while (holding < varTotal); 
});


