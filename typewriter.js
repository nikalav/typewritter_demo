"use strict";

let text = document.querySelector("#typewriter").textContent;
let myArray = text.split("");
let timer;

window.onload = writeLetters;

function writeLetters() {
  if (myArray.length > 0) {
    document.getElementById("display").innerHTML += myArray.shift();
  }
  timer = setTimeout("writeLetters()", 120);
}
