function removeHidden(){
  var delayInMilliseconds = 2000;
  var element = document.getElementById("hiddenBody");
  var button = document.getElementsByClassName("neon-button")[0]
  button.innerHTML = '<div class="loader">INITIALIZING<p class="loader__dot d-inline">.</p><p class="loader__dot d-inline">.</p><p class="loader__dot d-inline">.</p></div>'
  setTimeout(function(){
    button.classList.add("fade-out")
  }, delayInMilliseconds)
  setTimeout(function(){
    element.classList.add("fade-in-bottom")
    element.removeAttribute("id")
  }, delayInMilliseconds)
}
