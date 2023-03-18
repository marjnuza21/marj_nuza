
//This is for NotABot//
var i = 0;
var content = 

"For what it's worth... it's never too late, or in my case too early, to be whoever you want to be. There's no time limit. Start whenever you want. You can change or stay the same. There are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. I hope you see the things that startle you. I hope you feel things you've never felt before. I hope you meet people who have a different point of view. I hope you live a life you're proud of, and if you're not, I hope you have the courage to start over again."
var speed = 70;

function PrintContent() {
if ( i < content.length) {
  document.getElementById("content").innerHTML +=content.charAt(i);
  i++;
  setTimeout(PrintContent, speed)
}
}
