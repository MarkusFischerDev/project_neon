function removeHidden(){
  var element = document.getElementById("hiddenBody");
  var button = document.getElementsByClassName("neon-button")[0]
  element.removeAttribute("id")
  element.classList.add("fade-in")
  button.innerHTML = "INITIALIZING..."
  button.id = ("hiddenBody")
}