function showData(evt, toshow) {
  // Declare all variables
  var i, tabcontent, tablinks;
      evt.preventDefault()
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("show");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(toshow).style.display = "block";
  evt.currentTarget.className += " active";
}