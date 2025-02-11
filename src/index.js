import "./styles.css";
import home from "./modules/home";
import createHomePage from "./modules/home";

const navBar = document.querySelector(".nav-btns");

navBar.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id="") {
    return;
  }
  while (document.getElementById(".content").firstChild){
    
  }
  switch (target.id) {
    case "o-nas":
      createHomePage();
      break;
    case "menu":
      break;
    case "kontakt":
      break;

    default:
      break;
  }
});

createHomePage();
