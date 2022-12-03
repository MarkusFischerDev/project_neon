function removeHidden(){
  var element = document.getElementById("hiddenBody");
  element.removeAttribute("id")
  element.innerHTML = "INITIALIZING..."
  element.classList.add("hiddenBody")
}