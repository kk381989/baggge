$(document).ready(function(){
        document.getElementById("menu1").style.backgroundColor = "white";
  		  document.getElementById("menu5").style.backgroundColor = "#4c50cd";
        $("#electricity").hide();
        $("#water").hide();
        $("#dth").hide();
        $("#bus").hide();
        $("#hotels").hide();
        $("#holiday_package").hide();
    $("#menu1").click(function(){
        document.getElementById("menu1").style.backgroundColor = "white";
        document.getElementById("menu2").style.backgroundColor = "transparent";
        document.getElementById("menu3").style.backgroundColor = "transparent";
        document.getElementById("menu4").style.backgroundColor = "transparent";
    	$("#mobile").show();
        $("#electricity").hide();
        $("#water").hide();
        $("#dth").hide();
    });
    $("#menu2").click(function(){
        document.getElementById("menu1").style.backgroundColor = "transparent";
        document.getElementById("menu2").style.backgroundColor = "white";
        document.getElementById("menu3").style.backgroundColor = "transparent";
        document.getElementById("menu4").style.backgroundColor = "transparent";
        $("#electricity").show();
        $("#mobile").hide();
        $("#water").hide();
        $("#dth").hide();
    });
    $("#menu3").click(function(){
    	document.getElementById("menu1").style.backgroundColor = "transparent";
        document.getElementById("menu2").style.backgroundColor = "transparent";
        document.getElementById("menu3").style.backgroundColor = "white";
        document.getElementById("menu4").style.backgroundColor = "transparent";
        $("#water").show();
        $("#electricity").hide();
        $("#mobile").hide();
        $("#dth").hide();
    });
    $("#menu4").click(function(){
    	document.getElementById("menu1").style.backgroundColor = "transparent";
        document.getElementById("menu2").style.backgroundColor = "transparent";
        document.getElementById("menu3").style.backgroundColor = "transparent";
        document.getElementById("menu4").style.backgroundColor = "white";
        $("#dth").show();
        $("#mobile").hide();
        $("#electricity").hide();
        $("#water").hide();
    });
    $("#menu5").click(function(){
        document.getElementById("menu5").style.backgroundColor = "#4c50cd";
        document.getElementById("menu6").style.backgroundColor = "transparent";
        document.getElementById("menu7").style.backgroundColor = "transparent";
        document.getElementById("menu8").style.backgroundColor = "transparent";
        $("#flight").show();
        $("#bus").hide();
        $("#hotels").hide();
        $("#holiday_package").hide();
    });
    $("#menu6").click(function(){
        document.getElementById("menu5").style.backgroundColor = "transparent";
        document.getElementById("menu6").style.backgroundColor = "#4c50cd";
        document.getElementById("menu7").style.backgroundColor = "transparent";
        document.getElementById("menu8").style.backgroundColor = "transparent";
        $("#bus").show();
        $("#flight").hide();
        $("#hotels").hide();
        $("#holiday_package").hide();
    });
    $("#menu7").click(function(){
        document.getElementById("menu5").style.backgroundColor = "transparent";
        document.getElementById("menu6").style.backgroundColor = "transparent";
        document.getElementById("menu7").style.backgroundColor = "#4c50cd";
        document.getElementById("menu8").style.backgroundColor = "transparent";
        $("#hotels").show();
        $("#flight").hide();
        $("#bus").hide();
        $("#holiday_package").hide();
    });
    $("#menu8").click(function(){
        document.getElementById("menu5").style.backgroundColor = "transparent";
        document.getElementById("menu6").style.backgroundColor = "transparent";
        document.getElementById("menu7").style.backgroundColor = "transparent";
        document.getElementById("menu8").style.backgroundColor = "#4c50cd";
        $("#holiday_package").show();
        $("#flight").hide();
        $("#bus").hide();
        $("#hotels").hide();
    });
});
