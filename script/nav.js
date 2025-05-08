document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan/Tampilkan Navbar saat Scroll
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

  // Efek Slide-In Halus saat Halaman Dimuat
  navbar.style.opacity = "0";
  navbar.style.transform = "translateY(-100%)";
  setTimeout(() => {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0)";
  }, 300);

  // Efek Hover Slide Halus pada Tautan Navbar
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.style.position = "relative";
    link.style.overflow = "hidden";
    link.style.transition = "all 0.3s ease";

    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)"; // Geser tautan ke kanan saat hover
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"; // Kembalikan posisi saat hover selesai
    });
  });
});
