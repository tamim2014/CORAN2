

// Ouverture/Fermeture du sidebar

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// Ouverture/Fermeture des dropdowns à l'interieur du sidebar

/***
 *  Loop through all dropdown buttons 
 *  to toggle (between hiding and showing) its dropdown content
 *  This allows the user to have multiple dropdowns without any conflict
 */
 
var dropdown = document.getElementsByClassName("dropdownBtn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {	
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		 
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}


