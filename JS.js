const nuza = document.querySelectorAll('#nuza path');

for(let i = 0; i<nuza.length; i++){
  console.log(`Letter ${i} is ${nuza[i].getTotalLength()}`);
}

function OpenIndex() {
  location.href = "\marj_nuza\index.html"
 }

function OpenHome() {
  location.href = "\marj_nuza\home.html"
 }

 function OpenMilestone() {
  location.href = "milestone.html"
 }
 
 function hide() {
  document.getElementById("lets_connect").style.display ="none"
  document.getElementById("social_icons").style.display ="block"
 }

 function OpenGithub() {
  window.open("https://github.com/marjnuza21");
 }

 function OpenBlog1() {
  location.href = "blogs/blog1.html"
 }



//This is for NotABot//
var i = 0;
var human = "Hey there. Hope you are doing alright.\n\nI am Marj, a software engineer with a background in business and cybersecurity.\n\nI'm highly involved in back-end engineering in my day job but I've always been passionate and interested in developing my front-end engineering skills.\n\nI also enjoy traveling and seeing other places, meeting new people, and understanding other people's cultures.\nI aspire to become an instrument to inspire other people with my work and provide value to other people's lives even in the simpliest way possible.\n\nThank you for visiting my site. :) Feel free to explore my page :)"
;
var robot = "\n\nSorry Robot.\n\nBetter luck next time!!!";
var ghost = "\n\nYou're a ghost.\n\nGo away!!!";
var square = "\n\nDon't be a square.";
var redflag = "\n\nI'm hoping to see the red flag as early as possible,\nbut not today.";
var puppy = "\n\nWooofff wooofff.\n\nHi puppy, I'm sure you're adorable, \n\nbut I don't have a treat for you today :(";
var zombie = "\n\nIs it zombie apocalypse yet?";
var clown = "\n\nThere are lots of clowns \n\nwandering out there.\n\nAre you one of them?";
var cake = "\n\nWho doesn't like a piece of cake?\n\nI'll take it :)";
var speed = 70;

function ItsAHuman() {
if ( i < human.length) {
  document.getElementById("content").innerHTML +=human.charAt(i);
  i++;
  setTimeout(ItsAHuman, speed)
}
document.getElementById("tryagain").style.display ="none"
document.getElementById("proof").style.display ="none"
document.getElementById("robot").style.display ="none"
document.getElementById("ghost").style.display ="none"
document.getElementById("square").style.display ="none"
document.getElementById("redflag").style.display ="none"
document.getElementById("human").style.display ="none"
document.getElementById("puppy").style.display ="none"
document.getElementById("zombie").style.display ="none"
document.getElementById("clown").style.display ="none"
document.getElementById("cake").style.display ="none"
}

function ItsABot() {
  if ( i < robot.length) {
    document.getElementById("content").innerHTML +=robot.charAt(i);
    i++;
    setTimeout(ItsABot, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsAGhost() {
  if ( i < ghost.length) {
    document.getElementById("content").innerHTML +=ghost.charAt(i);
    i++;
    setTimeout(ItsAGhost, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsASquare() {
  if ( i < square.length) {
    document.getElementById("content").innerHTML +=square.charAt(i);
    i++;
    setTimeout(ItsASquare, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsARedFlag() {
  if ( i < redflag.length) {
    document.getElementById("content").innerHTML +=redflag.charAt(i);
    i++;
    setTimeout(ItsARedFlag, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsAPuppy() {
  if ( i < puppy.length) {
    document.getElementById("content").innerHTML +=puppy.charAt(i);
    i++;
    setTimeout(ItsAPuppy, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsAZombie() {
  if ( i < zombie.length) {
    document.getElementById("content").innerHTML +=zombie.charAt(i);
    i++;
    setTimeout(ItsAZombie, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsAClown() {
  if ( i < clown.length) {
    document.getElementById("content").innerHTML +=clown.charAt(i);
    i++;
    setTimeout(ItsAClown, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function ItsACake() {
  if ( i < cake.length) {
    document.getElementById("content").innerHTML +=cake.charAt(i);
    i++;
    setTimeout(ItsACake, speed)
  }
  document.getElementById("tryagain").style.display ="block"
  document.getElementById("proof").style.display ="none"
  document.getElementById("robot").style.display ="none"
  document.getElementById("ghost").style.display ="none"
  document.getElementById("square").style.display ="none"
  document.getElementById("redflag").style.display ="none"
  document.getElementById("human").style.display ="none"
  document.getElementById("puppy").style.display ="none"
  document.getElementById("zombie").style.display ="none"
  document.getElementById("clown").style.display ="none"
  document.getElementById("cake").style.display ="none"
}

function askVisitor() {
    if ( i < visitor.length) {
      document.getElementById("ask_bot").innerHTML +=visitor.charAt(i);
      i++;
      setTimeout(askVisitor, speed)
    }
}

