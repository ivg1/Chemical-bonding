document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-target]");

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetId = link.getAttribute("data-target");
      const targetElement = document.querySelector(`.${targetId}`);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
