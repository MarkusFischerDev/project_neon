function removeHidden(){
  var element = document.getElementById("hiddenBody");
  var button = document.getElementsByClassName("neon-button")[0]
  element.classList.add("fade-in")
  element.removeAttribute("id")
  button.innerHTML = "INITIALIZING..."
  button.classList.add("fade-out")
}