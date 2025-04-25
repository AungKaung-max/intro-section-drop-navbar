document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".dropdown-btn");
  const menuToggle = document.getElementById("menu-toggle");
  const navContainer = document.getElementById("navContainer");
  const overlay = document.getElementById("overlay");
  const menuIcon = document.getElementById("menu-icon");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = button.nextElementSibling;
      const arrowIcon = button.querySelector(".arrow-icon");

      document.querySelectorAll(".dropdown-content").forEach((d) => {
        if (d !== dropdown) d.classList.remove("show");
      });
      document.querySelectorAll(".arrow-icon").forEach((icon) => {
        if (icon !== arrowIcon) icon.classList.remove("arrow-rotate");
      });

      dropdown.classList.toggle("show");
      arrowIcon.classList.toggle("arrow-rotate");
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".dropdown-content")
      .forEach((d) => d.classList.remove("show"));
    document
      .querySelectorAll(".arrow-icon")
      .forEach((icon) => icon.classList.remove("arrow-rotate"));
  });

  menuToggle.addEventListener("click", function () {
    navContainer.classList.toggle("active");
    overlay.classList.toggle("active");
    const isOpen = navContainer.classList.contains("active");

    menuIcon.style.opacity = 0;
    setTimeout(() => {
      menuIcon.src = isOpen
        ? "./images/icon-close-menu.svg"
        : "./images/icon-menu.svg";
      menuIcon.style.opacity = 1;
    }, 150);
  });

  overlay.addEventListener("click", function () {
    navContainer.classList.remove("active");
    overlay.classList.remove("active");
  });
});
