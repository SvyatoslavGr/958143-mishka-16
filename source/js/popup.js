var link = document.querySelectorAll(".js-popup");
var popup = document.querySelector(".popup");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("popup--show");
  })
}

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup--show")){
      evt.preventDefault();
      popup.classList.remove("popup--show");
    }
  }
})
