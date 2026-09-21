/* =========================================================
   MASUTATSU OYAMA KYOKUSHIN KARATE ORGANIZATION
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(".main-nav a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (mainNav) {

            mainNav.classList.remove("show");

        }

    });

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}