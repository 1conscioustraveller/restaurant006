// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple form submission (demo)
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Your reservation has been submitted!");
});
