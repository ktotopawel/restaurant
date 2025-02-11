function createMenu() {
  let content = document.getElementById("content");

  function createDom(...dividers) {
    let menu = document.createElement("div");
    menu.classList.add("menu");

    console;

    for (let i = 0; i < dividers.length; i++) {
      const element = dividers[i];

      const divider = document.createElement("ol");
      const heading = document.createElement("h2");
      heading.textContent = element.title;
      divider.appendChild(heading);

      for (let j = 0; j < element.items.length; j++) {
        const item = element.items[j];

        const name = item.name;
        const ingredients = item.ingredients;

        const itemLi = document.createElement("li");

        const itemName = document.createElement("h3");
        itemName.textContent = name;
        itemLi.appendChild(itemName);

        const itemIngredients = document.createElement("p");
        itemIngredients.textContent = ingredients;
        itemLi.appendChild(itemIngredients);

        divider.appendChild(itemLi);
      }
      menu.appendChild(divider);
    }
    content.appendChild(menu);
  }

  function MenuDivider(title, ...items) {
    this.title = title;
    this.items = items;
  }

  function Item(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }

  const appendDom = () =>
    createDom(
      new MenuDivider(
        "Pizza",
        new Item("Margherita", "pomidor, mozzarella, bazylia, oliwa"),
        new Item(
          "Pepperoni",
          "pomidor, mozzarella, pepperoni, papryczki chili"
        ),
        new Item(
          "Quattro Formaggi",
          "mieszanka czterech serów: mozzarella, gorgonzola, parmezan, ricotta"
        ),
        new Item(
          "Prosciutto e Funghi",
          "pomidor, mozzarella, szynka dojrzewająca, pieczarki"
        ),
        new Item(
          "Capricciosa",
          "pomidor, mozzarella, szynka, pieczarki, karczochy, oliwki"
        ),
        new Item(
          "Diavola",
          "pomidor, mozzarella, salami piccante, papryczki chili"
        )
      ),
      new MenuDivider(
        "Pasta",
        new Item(
          "Spaghetti Carbonara",
          "spaghetti, jajko, guanciale, parmezan, pieprz"
        ),
        new Item(
          "Penne all’Arrabbiata",
          "penne, sos pomidorowy z czosnkiem i chili"
        ),
        new Item(
          "Tagliatelle al Ragù",
          "tagliatelle, tradycyjny sos mięsny bolognese"
        )
      ),
      new MenuDivider(
        "Napoje",
        new Item("Wino czerwone (kieliszek)", "Chianti Classico"),
        new Item("Wino białe (kieliszek)", "Pinot Grigio"),
        new Item("Limonata", "tradycyjna włoska lemoniada")
      )
    );

  return appendDom;
}

export default createMenu();
