document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  let lastScrollY = window.scrollY;

  navbar.style.transition =
    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

  window.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY) {
      navbar.style.opacity = "0";
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.opacity = "1";
      navbar.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
  });

  // Smooth slide-in effect on load
  navbar.style.opacity = "0";
  navbar.style.transform = "translateY(-100%)";
  setTimeout(() => {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0)";
  }, 300);

  // Smooth hover slide effect
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.style.position = "relative";
    link.style.overflow = "hidden";
    link.style.transition = "all 0.3s ease";

    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });
});
