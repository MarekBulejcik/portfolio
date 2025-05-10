const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.classList.add(currentTheme);

  document.addEventListener("DOMContentLoaded", function () {
    const styleSwitch = document.querySelector(".theme-toggle");
    styleSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".theme-toggle")
    .addEventListener("click", function () {
      const isDarkMode = localStorage.getItem("theme");
      const styleSwitch = document.querySelector(".theme-toggle");

      if (isDarkMode) {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark-mode");
        styleSwitch.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
        const themeIcon = document.getElementById("theme-icon");
        themeIcon.style.animation = "test 1s";
      } else {
        localStorage.setItem("theme", "dark-mode");
        document.documentElement.classList.add("dark-mode");
        styleSwitch.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

        const themeIcon = document.getElementById("theme-icon");
        themeIcon.style.animation = "test 1s";
      }
    });

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      document.querySelector(".blur").classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      document.querySelector(".blur").classList.remove("active");
    });
  });

  document
    .querySelector(".language-toggle")
    .addEventListener("click", function () {
      var languageBox = document.querySelector(".language-box");
      var languageToggle = document.querySelector(".language-toggle");
      var languageIcon = document.querySelector(".language-icon");

      if (languageBox.style.display === "flex") {
        languageBox.style.transform = "scale(0.95) translateX(-52.5%)"; // Shrink and move left
        languageBox.style.opacity = "0"; // Fade out
        languageBox.style.top = "40px"; // Move up
        languageToggle.classList.remove("active");
        languageIcon.style.transform = "rotate(0deg)";

        setTimeout(function () {
          languageBox.style.display = "none"; // Hide after animation
        }, 200); // Match this duration with the transition duration
      } else {
        languageBox.style.display = "flex"; // Show box
        // Use a timeout to allow rendering before applying transitions
        setTimeout(function () {
          languageBox.style.transform = "scale(1) translateX(-50%)"; // Scale to original size
          languageBox.style.opacity = "1"; // Fade in
          languageBox.style.top = "45px"; // Set position
        }, 0); // Immediate execution in the next event loop

        languageToggle.classList.add("active");
        languageIcon.style.transform = "rotate(90deg)";
      }
    });

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY === 0) {
      navbar.classList.remove("stuck");
    } else {
      navbar.classList.add("stuck");
    }
  });
});
