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
var text = "Hey there! I hope you're doing alright.\n My name is Marj. \nWelcome to my site. \nLorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, ex non interdum laoreet, tellus felis scelerisque ante, a eleifend ligula ante sit amet augue. Integer eleifend ipsum sed urna placerat, ut ultricies erat tempus. Duis lobortis eget ex volutpat dapibus. In hac habitasse platea dictumst. Vestibulum efficitur sollicitudin mattis. Etiam vitae odio ac ligula iaculis eleifend."
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

