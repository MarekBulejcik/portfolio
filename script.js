// Apply theme immediately to prevent flash
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.classList.add(currentTheme);
}

document.addEventListener("DOMContentLoaded", function () {
  // Update theme toggle button after DOM is loaded
  if (currentTheme) {
    const styleSwitch = document.querySelector(".theme-toggle");
    if (styleSwitch) {
      styleSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDarkMode = localStorage.getItem("theme");
      const styleSwitch = document.querySelector(".theme-toggle");

      if (isDarkMode) {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark-mode");
        styleSwitch.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
        const themeIcon = document.getElementById("theme-icon");
        if (themeIcon) themeIcon.style.animation = "test 1s";
      } else {
        localStorage.setItem("theme", "dark-mode");
        document.documentElement.classList.add("dark-mode");
        styleSwitch.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
        const themeIcon = document.getElementById("theme-icon");
        if (themeIcon) themeIcon.style.animation = "test 1s";
      }
    });
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const blurElement = document.querySelector(".blur");
      if (blurElement) blurElement.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      const blurElement = document.querySelector(".blur");
      if (blurElement) blurElement.classList.remove("active");
    });
  });

  const navbar = document.getElementById("navbar");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinksContainer = document.querySelector("#navbar .nav-links");
  const languageToggleElement = document.querySelector(".language-toggle");
  const languageBox = document.querySelector(".language-box");
  const languageIcon = document.querySelector(".language-icon");

  function closeMobileMenu() {
    if (navbar && navbar.classList.contains("nav-open")) {
      navbar.classList.remove("nav-open");
    }
  }

  function closeLanguageBox() {
    if (languageBox && languageBox.style.display === "flex") {
      languageBox.style.transform = "scale(0.95) translateX(-52.5%)";
      languageBox.style.opacity = "0";
      languageBox.style.top = "40px";
      if (languageToggleElement) languageToggleElement.classList.remove("active");
      if (languageIcon) languageIcon.style.transform = "rotate(0deg)";
      setTimeout(function () {
        languageBox.style.display = "none";
      }, 200);
    }
  }

  if (languageToggleElement && languageBox) {
    languageToggleElement.addEventListener("click", function () {
      if (languageBox.style.display === "flex") {
        closeLanguageBox();
      } else {
        closeMobileMenu(); // Close mobile menu if open
        languageBox.style.display = "flex";
        setTimeout(function () {
          languageBox.style.transform = "scale(1) translateX(-50%)";
          languageBox.style.opacity = "1";
          languageBox.style.top = "45px";
        }, 0);
        languageToggleElement.classList.add("active");
        if (languageIcon) languageIcon.style.transform = "rotate(90deg)";
      }
    });
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        navbar.classList.remove("stuck");
      } else {
        navbar.classList.add("stuck");
      }
    });
  }

  if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      if (navbar.classList.contains("nav-open")) {
        closeMobileMenu();
      } else {
        closeLanguageBox(); // Close language box if open
        navbar.classList.add("nav-open");
      }
    });
  }

  if (navLinksContainer && mobileMenuToggle && navbar) {
    navLinksContainer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        // Only close if the mobile menu toggle is visible (meaning we are on mobile)
        if (getComputedStyle(mobileMenuToggle).display !== 'none') {
            closeMobileMenu();
        }
      });
    });
  }
});