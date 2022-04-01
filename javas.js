var nav=document.querySelectorAll(".navbtn a");
for(var x=0; x<nav.length; x++){
  nav[x].addEventListener("click",scrollMainFunc);
}
var interval;

function scrollMainFunc(event){
  event.preventDefault();
  var btn = this.getAttribute("href");
  var y = document.querySelector(btn);
  //console.log(y);
  interval=setInterval(function(){
    //console.log(y);
    var ycd = y.getBoundingClientRect();
    if (ycd.top<=0){
      //console.log("Hello")
      clearInterval(interval);
      return;
    }
    window.scrollBy(0,60);
    console.log(ycd.top);
  },20)
}


var animate=false;
var skillSection=document.querySelector("#skills2");
// console.log(skillSection);
var skillBar=document.querySelectorAll(".skill-progress");
// console.log(skillBar);
window.addEventListener("scroll",skillVisible);

function skillVisible(){
  coordinates=skillSection.getBoundingClientRect();
  if(!animate && coordinates.top <= window.innerHeight){
    animate=true;
    // console.log("Skill section visible");
    skillIncrease();
  }
  else if(coordinates.top > window.innerHeight){
    animate=false;
    clearSkillProgress();
  }
}
clearSkillProgress();

function clearSkillProgress(){
  // console.log(skillBar[0]);
  for(let bar of skillBar){
    bar.style.width=0+"%";
  }
  // skillIncrease();
}

function skillIncrease(){
  for (let bar of skillBar){
    let currentWidth=0;
    let tarWidth=bar.getAttribute("data-value");
    // console.log(tarWidth);
    let int=setInterval(function(){
      if(currentWidth>tarWidth){
        clearInterval(int);
        return;
      }
      currentWidth++;
      bar.style.width=currentWidth+"%";
    },10);
  }
}















// var formSubmitTag=document.getElementById("formsubmit");
// formSubmitTag.addEventListener("click",validation);

var formfinal=document.querySelector("#form > form");
formfinal.onsubmit=validation();

function validation(){
  var un=document.getElementById("formname").value;
  var ue=document.getElementById("formemail").value;
  var ut=document.getElementById("formtext").value;
  
  var uncheck= /^[A-Za-z]{3,30}$/;

  if(uncheck.test(un)){
    document.getElementById("errorname").innerHTML="correct name";
  }
}
