// Get the sticky navbar
const stickyNavbar = document.querySelector(".other-navbar");

// Add scroll event listener
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Current vertical scroll position

  // Show the navbar after scrolling past 200px, hide otherwise
  if (scrollY > 400) {
    stickyNavbar.classList.remove("hidden"); // Show the navbar
  } else {
    stickyNavbar.classList.add("hidden"); // Hide the navbar
  }
});
