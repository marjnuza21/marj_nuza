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

 function hide() {
  document.getElementById("lets_connect").style.display ="none"
  document.getElementById("social_icons").style.display ="block"
 }

 function OpenGithub() {
  window.open("https://github.com/marjnuza21");
 }



//This is for NotABot//
var i = 0;
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
;
var yesBot = "Sorry Robot. Please try again!!!";
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


