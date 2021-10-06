const nuza = document.querySelectorAll('#nuza path');

for(let i = 0; i<nuza.length; i++){
  console.log(`Letter ${i} is ${nuza[i].getTotalLength()}`);
}