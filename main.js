// $( document ).ready(function() {

  // date
    tday= Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    tmonth= Array("January","February","March","April","May","June","July","August","September","October","November","December");
    function GetClock(){
    var d=new Date();
    var hour=d.getHours(),min=d.getMinutes();
    if(min<=9) min="0"+min
    document.getElementById('hour').innerHTML=hour+":"+min+"";

    //clock
    var day=d.getDay(),month=d.getMonth(),date=d.getDate(),year=d.getFullYear();
    document.getElementById('date').innerHTML=""+tday[day]+", "+tmonth[month]+" "+date;
    }
    // refresh
    window.onload=function(){
    GetClock();
    setInterval(GetClock,1000);
  }
// });
