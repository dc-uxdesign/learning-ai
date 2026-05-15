document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const watchFace = document.querySelector(".watch-face");
  const themeImages = document.querySelectorAll(".watch-face__theme-img");

  if (!toggle || !watchFace) return;

  const applyTheme = (isLight) => {
    document.body.dataset.theme = isLight ? "light" : "dark";
    watchFace.classList.toggle("watch-face--light", isLight);
    watchFace.dataset.nodeId = isLight
      ? watchFace.dataset.nodeIdLight
      : "42:283";

    themeImages.forEach((img) => {
      img.src = isLight ? img.dataset.srcLight : img.dataset.srcDark;
    });
  };

  const setChecked = (checked) => {
    toggle.setAttribute("aria-checked", String(checked));
    toggle.dataset.selection = checked ? "Light" : "Dark";
    applyTheme(checked);
  };

  toggle.addEventListener("click", () => {
    setChecked(toggle.getAttribute("aria-checked") !== "true");
  });

  toggle.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      toggle.click();
    }
  });

  setChecked(false);
});
