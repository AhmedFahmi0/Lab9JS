function updateWatch(){
    var watch = document.getElementById("watch");
    watch.innerHTML = (new Date()).toLocaleTimeString();

}
var day = new Date().getDay();
switch(day){
  case 0:document.getElementById("sun").style.opacity=1;break;
  case 1:document.getElementById("mon").style.opacity=1;break;
  case 2:document.getElementById("tue").style.opacity=1;break;
  case 3:document.getElementById("wed").style.opacity=1;break;
  case 4:document.getElementById("thu").style.opacity=1;break;
  case 5:document.getElementById("fri").style.opacity=1;break;
  case 6:document.getElementById("sat").style.opacity=1;break;
}
var hrss=new Date().getHours();
if (hrss>11 && hrss<=23) document.getElementById('m').innerHTML="PM"


setInterval(updateWatch,1000);
var set=document.getElementById("setAlarm");
var popUp=document.getElementById("popUp");
var clear=document.getElementById("clear");
var setA=document.getElementById("set")
var hrs=document.getElementById("hrs");
var min=document.getElementById("min");
var sec=document.getElementById("sec");
set.addEventListener("click",function(){popUp.style.display="flex"});
clear.addEventListener("click",clearAlarm);
setA.addEventListener("click",setAlarm);
function setAlarm() {
    period = Number(
      (Number(sec.value) + Number(min.value) * 60 + Number(hrs.value * 3600)) *
        1000
    );
  
    setTimeout(startAlarm, period);
    start = new Date().toLocaleTimeString();
  
    clearAlarm();
  }
  function startAlarm() {
    alert(
      `Alarm
      From: ${start} To: ${new Date().toLocaleTimeString()}
        Period: ${period} ms`
    );
  }
  function clearAlarm(){
    popUp.style.display="none";
    sec.value="0";hrs.value="0";
    min.value="0";
};


