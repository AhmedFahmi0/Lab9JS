var next=document.getElementById("next");
var prev=document.getElementById("prev");
var nxtNum=document.getElementById("two");
var prevNum=document.getElementById("six");
var current=document.getElementById("one");
var crnt=Number(current.innerHTML);
var nxt=Number(nxtNum.innerHTML);
var prv=Number(prevNum.innerHTML);
next.addEventListener("click",onNext);
prev.addEventListener("click",onPrev);

console.log(crnt+prv)
function onNext()
    {
        var nw=nxt;
        if(nw>1){
        prv=nw-1;
        }else{
            prv=6;
        }
        if(nw<6){
        nxt=nw+1
        }else{
            nxt=1;
        }
        current.innerHTML=nw.toString();
        prevNum.innerHTML=prv.toString();
        nxtNum.innerHTML=nxt.toString();

    }



    function onPrev()
    {
        var nw=prv;
        if(nw>1){
        prv=nw-1;
        }else{
            prv=6;
        }
        if(nw<6){
        nxt=nw+1
        }else{
            nxt=1;
        }
        current.innerHTML=nw.toString();
        prevNum.innerHTML=prv.toString();
        nxtNum.innerHTML=nxt.toString();

    }


