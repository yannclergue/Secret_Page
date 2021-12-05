document.querySelector(".clique").addEventListener(
  "click", go
  )

function go(){
  document.querySelector("main").classList.toggle("apparait");
  document.querySelector("audio").play();
  document.querySelector(".clique").classList.toggle("cache");
}