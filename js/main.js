// Animation simple au scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 200;
      const height = section.offsetHeight;
      if (top >= offset && top < offset + height) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
  