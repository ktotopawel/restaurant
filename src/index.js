import "./styles.css";
import createHomePage from "./modules/home";
import createMenuPage from "./modules/menu";

const navBar = document.querySelector(".nav-btns");

function clearPage() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

navBar.addEventListener("click", (event) => {
  const target = event.target;
  const content = document.getElementById("content");

  switch (target.id) {
    case "o-nas":
      clearPage();
      createHomePage();
      break;
    case "menu":
      clearPage();
        createMenuPage();
      break;
    case "kontakt":
      clearPage();

      break;

    default:
      break;
  }
});

// createHomePage();
