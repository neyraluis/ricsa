// Mobile menu
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click (mobile)
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Accordion
document.querySelectorAll("[data-accordion]").forEach((acc) => {
  const buttons = acc.querySelectorAll(".acc__btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Close all
      buttons.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const p = b.nextElementSibling;
        if (p) p.style.display = "none";
      });

      // Open clicked if it was closed
      if (!isExpanded) {
        btn.setAttribute("aria-expanded", "true");
        if (panel) panel.style.display = "block";
      }
    });
  });
});
