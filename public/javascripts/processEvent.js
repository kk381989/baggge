$(document).ready(function() {
  $("#menu1").css("background-color", "#ffffff");
  $("#menu1").css("color", "#004E89");
  $("#menu7").css("background-color", "#004293");
  $("#menu7").css("color", "#ffffff");
  $('#electricity, #telephone, #dth, #datacard, #gas, #bus, #hotels').hide();

  $('#menu1').click(function(){
    $('#menu1').css("background-color", '#ffffff');
    $('#menu2, #menu3, #menu4, #menu5, #menu6').css("background-color", "transparent");
    $("#menu1").css("color", "#004E89");
    $("#menu2, #menu3, #menu4, #menu5, #menu6").css("color", "#ffffff");
    $('#mobile').show();
    $('#electricity, #telephone, #dth, #datacard, #gas').hide();
  });

    $('#menu2').click(function(){
      $('#menu2').css("background-color", '#ffffff');
      $('#menu1, #menu3, #menu4, #menu5, #menu6').css("background-color", "transparent");
      $("#menu2").css("color", "#004E89");
      $("#menu1, #menu3, #menu4, #menu5, #menu6").css("color", "#ffffff");
      $('#electricity').show();
      $('#mobile, #telephone, #dth, #datacard, #gas').hide();
    });
    $('#menu3').click(function(){
      $('#menu3').css("background-color", '#ffffff');
      $('#menu2, #menu1, #menu4, #menu5, #menu6').css("background-color", "transparent");
      $("#menu3").css("color", "#004E89");
      $("#menu2, #menu1, #menu4, #menu5, #menu6").css("color", "#ffffff");
      $('#telephone').show();
      $('#electricity, #mobile, #dth, #datacard, #gas').hide();
    });
    $('#menu4').click(function(){
      $('#menu4').css("background-color", '#ffffff');
      $('#menu2, #menu3, #menu1, #menu5, #menu6').css("background-color", "transparent");
      $("#menu4").css("color", "#004E89");
      $("#menu2, #menu3, #menu1, #menu5, #menu6").css("color", "#ffffff");
      $('#dth').show();
      $('#electricity, #telephone, #mobile, #datacard, #gas').hide();

    });
    $('#menu5').click(function(){
      $('#menu5').css("background-color", '#ffffff');
      $('#menu2, #menu3, #menu4, #menu1, #menu6').css("background-color", "transparent");
      $("#menu5").css("color", "#004E89");
      $("#menu2, #menu3, #menu4, #menu1, #menu6").css("color", "#ffffff");
      $('#datacard').show();
      $('#electricity, #telephone, #dth, #mobile, #gas').hide();
    });
    $('#menu6').click(function(){
      $('#menu6').css("background-color", '#ffffff');
      $('#menu2, #menu3, #menu4, #menu5, #menu1').css("background-color", "transparent");
      $("#menu6").css("color", "#004E89");
      $("#menu2, #menu3, #menu4, #menu5, #menu1").css("color", "#ffffff");
      $('#gas').show();
      $('#electricity, #telephone, #dth, #datacard, #mobile').hide();

    });
    $('#menu7').click(function(){
      $('#menu7').css("background-color", '#004293');
      $('#menu8, #menu9').css("background-color", "transparent");
      $("#menu7").css("color", "#ffffff");
      $("#menu8, #menu9").css("color", "#004293");
      $('#flight').show();
      $('#bus, #hotels').hide();
    });
    $('#menu8').click(function(){
      $('#menu8').css("background-color", '#004293');
      $('#menu7, #menu9').css("background-color", "transparent");
      $("#menu8").css("color", "#ffffff");
      $("#menu7, #menu9").css("color", "#004293");
      $('#bus').show();
      $('#flight, #hotels').hide();
    });
    $('#menu9').click(function(){
      $('#menu9').css("background-color", '#004293');
      $('#menu8, #menu7').css("background-color", "transparent");
      $("#menu9").css("color", "#ffffff");
      $("#menu8, #menu7").css("color", "#004293");
      $('#hotels').show();
      $('#bus, #flight').hide();
    });
});
