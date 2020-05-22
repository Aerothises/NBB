function openNav() {
    document.getElementById("sideNav").style.width = "12%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.link-nav-2')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }