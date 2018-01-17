$(document).ready(function(){
  		$("#electricity").hide();
        $("#water").hide();
        $("#dth").hide();
        $("#bus").hide();
        $("#hotels").hide();
        $("#holiday_package").hide();
    $("#menu1").click(function(){
    	$("#mobile").show();
        $("#electricity").hide();
        $("#water").hide();
        $("#dth").hide();
    });
    $("#menu2").click(function(){
        $("#electricity").show();
        $("#mobile").hide();
        $("#water").hide();
        $("#dth").hide();
    });
    $("#menu3").click(function(){
    	$("#water").show();
        $("#electricity").hide();
        $("#mobile").hide();
        $("#dth").hide();
    });
    $("#menu4").click(function(){
    	$("#dth").show();
        $("#mobile").hide();
        $("#electricity").hide();
        $("#water").hide();
    });
    $("#menu5").click(function(){
        $("#flight").show();
        $("#bus").hide();
        $("#hotels").hide();
        $("#holiday_package").hide();
    });
    $("#menu6").click(function(){
        $("#bus").show();
        $("#flight").hide();
        $("#hotels").hide();
        $("#holiday_package").hide();
    });
    $("#menu7").click(function(){
        $("#hotels").show();
        $("#flight").hide();
        $("#bus").hide();
        $("#holiday_package").hide();
    });
    $("#menu8").click(function(){
        $("#holiday_package").show();
        $("#flight").hide();
        $("#bus").hide();
        $("#hotels").hide();
    });
});

function validateMobileRechargeForm() {
    var x = document.forms["mobile_recharge_form"]["number"].value;
    var y = document.forms["mobile_recharge_form"]["amount"].value;
    if (x == "") {
        alert("Please enter a number");
        return false;
    }
    else if (x.length < 10 || x.length > 10) {
        alert("Please enter a valid number");
        return false;
    }
    else if (y == "") {
        alert("Please enter amount");
        return false;
        } 
}

function validateDthRechargeForm() {
    var x = document.forms["dth_recharge_form"]["number"].value;
    var y = document.forms["dth_recharge_form"]["amount"].value;
    if (x == "") {
        alert("Please enter a number");
        return false;
    }
    else if (x.length < 10 || x.length > 10) {
        alert("Please enter a valid number");
        return false;
    }
    else if (y == "") {
        alert("Please enter amount");
        return false;
        } 
}

function validateElectricityRechargeForm() {
    var x = document.forms["electricity_recharge_form"]["number"].value;
    var y = document.forms["electricity_recharge_form"]["amount"].value;
    if (x == "") {
        alert("Please enter a number");
        return false;
    }
    else if (x.length < 10 || x.length > 10) {
        alert("Please enter a valid number");
        return false;
    }
    else if (y == "") {
        alert("Please enter amount");
        return false;
        } 
}


