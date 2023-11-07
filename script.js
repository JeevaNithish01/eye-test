function id(id) {
  return document.getElementById(id);
}

function qs(id) {
  return document.querySelector(id);
}

function print(value){
  return console.log(value);
}

let a = 0.5;
let randomBox;
let r;
let g;
let b;
let c;
let score = 0;

function generateColors(){
  randomBox = Math.floor(Math.random() * 16) + 1;
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  c = 1;
  createBoxes();
}

function createBoxes() {
  let div = "";
  for(let i =1; i<=16; i++) {
    div+=`<div id="id${i}" class="boxes" onclick="evaluates(this)"></div>`;
  }
  qs(".container").innerHTML = div;
  for(let i =1; i<=16; i++){
    if(i != randomBox){
      qs(`#id${i}`).style.backgroundColor = `rgb(${r},${g},${b},${c})`;
    }
    else {
      qs(`#id${i}`).style.backgroundColor = `rgb(${r},${g},${b},${a})`;
    }
  } 
}

function evaluates(ok){
  // print(ok.id);
  // print(randomBox);
  if(ok.id == `id${randomBox}`){
    print("Correct");
    a  += 0.025;
    score++;
    qs(".score").textContent = "Score = " + score;
    generateColors();
  }
  else {
    print("incorrect");
  }
}

generateColors();
