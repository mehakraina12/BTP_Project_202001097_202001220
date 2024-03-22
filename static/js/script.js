'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

function playVideo() {
  var video = document.getElementById("video");
  video.src = "static/images/video.mp4"; // Reset the video source
  video.play();
  document.querySelector(".play-btn").style.display = "none"; // Hide the play button after clicking
}



document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Add a class to trigger the transition animation
    document.body.classList.add('transitioning');

    // Redirect to the login/register page after a short delay
    setTimeout(function() {
      window.location.href = loginButton.getAttribute('href');
    }, 500); // Adjust the delay time as needed for the transition animation

    // Remove the transitioning class after the transition is complete
    setTimeout(function() {
      document.body.classList.remove('transitioning');
    }, 1000); // Adjust the time to match the duration of the transition
  });
});