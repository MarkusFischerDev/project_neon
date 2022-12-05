function removeHidden(){
  var delayInMilliseconds = 2000;
  var element = document.getElementById("hiddenBody");
  var button = document.getElementsByClassName("neon-button")[0];
  var fadeInElements = document.querySelectorAll(".revealOnScroll");
  button.innerHTML = '<div class="loader">INITIALIZING<p class="loader__dot d-inline">.</p><p class="loader__dot d-inline">.</p><p class="loader__dot d-inline">.</p></div>';
  setTimeout(function(){
    button.classList.add("fade-out");
    element.classList.add("fade-in-bottom");
    element.removeAttribute("id");
  }, delayInMilliseconds);

  function doSetTimeout(i){
    setTimeout(function(){
      fadeInElements[i].classList.add("fade-in-bottom");
      fadeInElements[i].classList.remove("revealOnScroll");
    }, delayInMilliseconds * (i  + 2));
  };
  for(var i = 0; i < fadeInElements.length; i++){
    doSetTimeout(i)
  };
}
