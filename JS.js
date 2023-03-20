const nuza = document.querySelectorAll('#nuza path');

for(let i = 0; i<nuza.length; i++){
  console.log(`Letter ${i} is ${nuza[i].getTotalLength()}`);
}

function OpenIndex() {
  location.href = "index.html"
 }

function OpenHome() {
  location.href = "home.html"
 }

 function OpenMilestone() {
  location.href = "milestone.html"
 }

 function OpenFFT() {
  location.href = "home_onepage.html"
 }
 
 function hide() {
  document.getElementById("lets_connect").style.display ="none"
  document.getElementById("social_icons").style.display ="block"
 }

 function OpenGithub() {
  window.open("https://github.com/marjnuza21");
 }



//This is for NotABot//
var i = 0;
var text = "I am Marj, a software engineer with a background in business and cybersecurity.\n\nI'm highly involved in back-end engineering in my day job but I've always been passionate and interested in developing my front-end engineering skills. This is why I've decided to build my professional portfolio website from scratch.\n\nI aspire to become an instrument to inspire other people with my work and provide value to other people's lives even in the simpliest way possible.\n\nThank you for visiting my site. :) Feel free to explore my page :)"
;
var yesBot = "Sorry Robot. Better luck next time!!!";
var visitor = "Please confirm that you're not a bot."
var speed = 50;

function NotABot() {
if ( i < text.length) {
  document.getElementById("content").innerHTML +=text.charAt(i);
  i++;
  setTimeout(NotABot, speed)
}
document.getElementById("yes").style.display ="none"
}

function ItsABot() {
  if ( i < yesBot.length) {
    document.getElementById("content").innerHTML +=yesBot.charAt(i);
    i++;
    setTimeout(ItsABot, speed)
  }
  document.getElementById("no").style.display ="none"
  }

function askVisitor() {
    if ( i < visitor.length) {
      document.getElementById("ask_bot").innerHTML +=visitor.charAt(i);
      i++;
      setTimeout(askVisitor, speed)
    }
    }

