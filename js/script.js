

var span=document.getElementById("span");
var btn=document.getElementById("btn");


btn.addEventListener("click",function(){
    span.classList.toggle("none");

    if(btn.innerText==="Show More"){
        btn.innerText="Show Less"
    }else{
        btn.innerText="Show More"
    }

})