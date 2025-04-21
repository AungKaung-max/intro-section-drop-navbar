document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".dropdown-btn");

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
});
