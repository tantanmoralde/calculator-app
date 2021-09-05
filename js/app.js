// GLOBAL VARIABLES
const screen = document.getElementById("screen"),
  btns = Array.from(document.getElementsByTagName("button")),
  body = document.body,
  container = document.getElementById("container"),
  themeBtn = Array.from(document.querySelector(".theme-btn").children);

// CALCULATOR BUTTONS

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "DEL":
        if (screen.value) {
          screen.value = screen.value.slice(0, -1);
        }
        break;
      case "RESET":
        if (screen.value) {
          screen.value = "";
        }
        break;
      case "=":
        if (screen.value) {
          if (screen.value.includes("x")) {
            let newValue = screen.value.replace(/x/g, "*");
            screen.value = newValue;
          }
          try {
            screen.value = screen.value.replace(/^0+/, "");
            screen.value = eval(screen.value);
          } catch {
            screen.value = "Error!";
            setTimeout(() => (screen.value = ""), 1000);
          }
        }
        break;

      default:
        screen.value += e.target.innerText;
        break;
    }
  });
});

// THEME SLIDER
themeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "2") {
      body.style.backgroundColor = "var(--theme2MainBG)";
      container.classList.add("theme2");
      container.classList.remove("theme3");

      // Add to localStorage
      localStorage.setItem("theme", "theme2");
    } else if (btn.innerText === "3") {
      body.style.backgroundColor = "var(--theme3MainBG)";
      container.classList.add("theme3");
      container.classList.remove("theme2");

      // Add to localStorage
      localStorage.setItem("theme", "theme3");
    } else {
      body.style.backgroundColor = "var(--theme1MainBG)";
      container.classList.remove("theme2", "theme3");

      // Add to localStorage
      localStorage.removeItem("theme");
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const selectedTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "";

  if (selectedTheme === "theme2") {
    body.style.backgroundColor = "var(--theme2MainBG)";
    container.classList.add(selectedTheme);
  }
  if (selectedTheme === "theme3") {
    body.style.backgroundColor = "var(--theme3MainBG)";
    container.classList.add(selectedTheme);
  }
});
