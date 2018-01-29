const m1 = document.getElementById('menu1');
const m2 = document.getElementById('menu2');
const m3 = document.getElementById('menu3');
const m4 = document.getElementById('menu4');
const m5 = document.getElementById('menu5');
const m6 = document.getElementById('menu6');
const m7 = document.getElementById('menu7');
const m8 = document.getElementById('menu8');

$(document).ready(function() {
  m1.style.backgroundColor = '#ffffff';
  m1.style.color = '#004E89';
  m5.style.backgroundColor = '#004293';
  m5.style.color = '#ffffff';
  $('#electricity').hide();
  $('#water').hide();
  $('#dth').hide();
  $('#bus').hide();
  $('#hotels').hide();
  $('#holiday_package').hide();

  $('#menu1').click(function(){
    m1.style.backgroundColor = '#ffffff';
    m1.style.color = '#004E89';
    m2.style.backgroundColor = 'transparent';
    m3.style.backgroundColor = 'transparent';
    m4.style.backgroundColor = 'transparent';
    $('#mobile').show();
    $('#electricity').hide();
    $('#water').hide();
    $('#dth').hide();
  });
    $('#menu2').click(function(){
        m1.style.backgroundColor = 'transparent';
        m2.style.backgroundColor = 'white';
        m2.style.color = '#004E89';
        m3.style.backgroundColor = 'transparent';
        m4.style.backgroundColor = 'transparent';
        $('#electricity').show();
        $('#mobile').hide();
        $('#water').hide();
        $('#dth').hide();
    });
    $('#menu3').click(function(){
    	  m1.style.backgroundColor = 'transparent';
        m2.style.backgroundColor = 'transparent';
        m3.style.backgroundColor = 'white';
        m4.style.backgroundColor = 'transparent';
        $('#water').show();
        $('#electricity').hide();
        $('#mobile').hide();
        $('#dth').hide();
    });
    $('#menu4').click(function(){
    	  m1.style.backgroundColor = 'transparent';
        m2.style.backgroundColor = 'transparent';
        m3.style.backgroundColor = 'transparent';
        m4.style.backgroundColor = 'white';
        $('#dth').show();
        $('#mobile').hide();
        $('#electricity').hide();
        $('#water').hide();
    });
    $('#menu5').click(function(){
        m5.style.backgroundColor = '#4c50cd';
        m6.style.backgroundColor = 'transparent';
        m7.style.backgroundColor = 'transparent';
        m8.style.backgroundColor = 'transparent';
        $('#flight').show();
        $('#bus').hide();
        $('#hotels').hide();
        $('#holiday_package').hide();
    });
    $('#menu6').click(function(){
        m5.style.backgroundColor = 'transparent';
        m6.style.backgroundColor = '#4c50cd';
        m7.style.backgroundColor = 'transparent';
        m8.style.backgroundColor = 'transparent';
        $('#bus').show();
        $('#flight').hide();
        $('#hotels').hide();
        $('#holiday_package').hide();
    });
    $('#menu7').click(function(){
        m5.style.backgroundColor = 'transparent';
        m6.style.backgroundColor = 'transparent';
        m7.style.backgroundColor = '#4c50cd';
        m8.style.backgroundColor = 'transparent';
        $('#hotels').show();
        $('#flight').hide();
        $('#bus').hide();
        $('#holiday_package').hide();
    });
    $('#menu8').click(function(){
        m5.style.backgroundColor = 'transparent';
        m6.style.backgroundColor = 'transparent';
        m7.style.backgroundColor = 'transparent';
        m8.style.backgroundColor = '#4c50cd';
        $('#holiday_package').show();
        $('#flight').hide();
        $('#bus').hide();
        $('#hotels').hide();
    });
});
