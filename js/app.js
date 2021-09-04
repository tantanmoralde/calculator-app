// VARIABLES
const screen = document.getElementById("screen"),
  btns = Array.from(document.getElementsByTagName("button"));

btns.map((btn) => {
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
