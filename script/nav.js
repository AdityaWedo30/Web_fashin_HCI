document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan Navbar saat Scroll
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

  // Efek slide halus saat halaman dimuat
  navbar.style.opacity = "0";
  navbar.style.transform = "translateY(-100%)";
  setTimeout(() => {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0)";
  }, 300);

  // Efek hover slide pada tautan navbar
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.style.position = "relative";
    link.style.overflow = "hidden";
    link.style.transition = "all 0.3s ease";

    link.addEventListener("mouseenter", function () {
      // Geser tautan ke kanan saat hover
      this.style.transform = "translateX(5px)";
    });

    link.addEventListener("mouseleave", function () {
      // Kembalikan posisi saat hover selesai
      this.style.transform = "translateX(0)";
    });
  });
  document.getElementById("dob").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 5) {
      value =
        value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
    } else if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    e.target.value = value;
  });

  document.getElementById("eventForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message");

    if (!email.includes("@")) {
      message.textContent = "Email tidak valid. Harus mengandung '@'.";
      return;
    }

    console.log("Email:", email);
    console.log("Nama:", fullName);
    console.log("Tanggal Lahir:", dob);
    console.log("Gender:", gender);
    message.textContent = "Form berhasil dikirim!";
  });
});
