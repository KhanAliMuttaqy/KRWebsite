const navLinks = document.querySelectorAll(".nav-links a");
const navMenu = document.querySelector(".nav-links");

// Menü öffnen/schließen
function toggleMenu() {
  navMenu.classList.toggle("active");
}

// Menü automatisch schließen nach Klick (MOBILE PROFI!)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Aktiven Menüpunkt beim Scrollen markieren
window.addEventListener("scroll", () => {
  let current = "";

  const sections = document.querySelectorAll("section, header");

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // 🔥 EXTRA FIX für letzte Section (Kontakt)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
    current = "contact";
  }

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});