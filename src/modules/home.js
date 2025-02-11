import pizzaHero from "../imgs/pizza.jpg";
import reviewPizza from "../imgs/rw-pizza.jpg"
import reviewPizza1 from "../imgs/rw-pizza1.jpg"
import reviewPizza2 from "../imgs/rw-pizza2.jpg"

class Hero {
  constructor() {
    this.headingTxt = "Smak Włoch na Twoim talerzu!";
    this.textTxt =
      "Witaj w naszej tradycyjnej włoskiej pizzerii i trattorii, gdzie każdy kęs to podróż do słonecznej Italii. Serwujemy autentyczne pizze z chrupiącym ciastem, świeże makarony i dania rodem z włoskiej trattorii, przygotowane z pasją i najlepszych składników. Odkryj prawdziwy smak Włoch – bez biletu lotniczego!";
    this.imgSrc = pizzaHero;
  }

  appendToContent(element) {
    let content = document.getElementById("content");
    content.appendChild(element);
  }

  createElement() {
    this.tile = document.createElement("div");
    this.tile.classList.add("hero");

    this.heroTxt = document.createElement("div");
    this.heroTxt.classList.add("hero-txt");

    this.heading = document.createElement("h3");
    this.heading.textContent = this.headingTxt;

    this.text = document.createElement("p");
    this.text.textContent = this.textTxt;

    this.orderBtn = document.createElement("div");
    this.orderBtn.classList.add("order-btn", "btn");
    this.orderBtn.textContent = "Zadzwoń";

    console.log(this.imgSrc);

    this.img = document.createElement("img");
    this.img.src = this.imgSrc;

    this.heroTxt.appendChild(this.heading);
    this.heroTxt.appendChild(this.text);
    this.heroTxt.appendChild(this.orderBtn);

    this.tile.appendChild(this.heroTxt);
    this.tile.appendChild(this.img);
    this.appendToContent(this.tile);
  }
}

function createMasonryReview() {
  let reviewArr = [];

  let container = document.getElementById('content');

  function makeReviewArr() {
    reviewArr.push(
      new Review(
        "Katarzyna M.",
        "Najlepsza pizza w mieście! Czułam się jak we Włoszech."
      )
    );
    reviewArr.push(
      new Review("Marek T.", "Pizza Margherita to mistrzostwo świata. Polecam!", reviewPizza)
    );
    reviewArr.push(
      new Review(
        "Anna K.",
        "Rewelacyjne miejsce! Pizza z prawdziwym włoskim charakterem, a obsługa bardzo miła. Polecam każdemu, kto szuka autentycznych smaków Włoch."
      )
    );
    reviewArr.push(
      new Review(
        "Piotr Z.",
        "Byłem już w wielu pizzeriach, ale ta jest wyjątkowa. Ciasto cienkie i chrupiące, a sos pomidorowy pełen smaku. Wrócę na pewno!"
      )
    );
    reviewArr.push(
      new Review(
        "Magda P.",
        "Świetne miejsce na rodzinny obiad. Pizza dla dzieci była ogromna, a moje Carbonara – po prostu boskie!"
      )
    );
    reviewArr.push(
      new Review(
        "Tomasz R.",
        "Pizza doskonała, a dodatkowo miła obsługa i przytulny wystrój. Polecam!"
      )
    );
    reviewArr.push(
      new Review(
        "Ewa S.",
        "Fantastyczne miejsce! Pizza z serem burrata to coś, co trzeba spróbować. Smakuje jak w Rzymie!"
      )
    );
    reviewArr.push(
      new Review(
        "Jakub W.",
        "Byłem tu z przyjaciółmi i wszyscy byliśmy zachwyceni. Pizza była świetna, a tiramisu na deser to wisienka na torcie. Na pewno wrócimy!"
      )
    );
    reviewArr.push(
      new Review(
        "Natalia L.",
        "Pyszna pizza, świetne wino i przytulna atmosfera. Idealne miejsce na romantyczną kolację.", reviewPizza1
      )
    );
    reviewArr.push(
      new Review(
        "Paweł G.",
        "Pizza była dobra, ale moim zdaniem trochę za mało sosu. Mimo to warto spróbować!"
      )
    );
    reviewArr.push(
      new Review(
        "Monika K.",
        "Świetne miejsce! Pizza z pepperoni była idealnie doprawiona, a ciasto chrupiące. Obsługa bardzo uprzejma. Polecam!"
      )
    );
    reviewArr.push(
      new Review(
        "Robert P.",
        "Pizza była dobra, ale brakowało mi trochę więcej opcji wegetariańskich. Mimo to warto odwiedzić!", reviewPizza2
      )
    );
    reviewArr.push(
      new Review(
        "Agnieszka Z.",
        "Byłam tu z rodziną i wszyscy byliśmy zachwyceni. Pizza była pyszna, a obsługa bardzo miła. Na pewno wrócimy!"
      )
    );
    reviewArr.push(
      new Review(
        "Krzysztof M.",
        "Pizza była dobra, ale moim zdaniem trochę za droga jak na taką porcję. Mimo to smakowała wyśmienicie."
      )
    );
    reviewArr.push(
      new Review(
        "Zuzanna W.",
        "Polecam! Pizza była pyszna, a atmosfera bardzo przyjemna. Idealne miejsce na spotkanie ze znajomymi."
      )
    );
  };

  function createElement() {
    makeReviewArr();

    let masonryContainer = document.createElement('div');
    masonryContainer.classList.add('masonry-reviews');

    for (let i = 0; i < reviewArr.length; i++) {
        masonryContainer.appendChild(reviewArr[i].createTile());
    }

    container.appendChild(masonryContainer);
  }
  createElement();
};


class Review {
    constructor(name, review, photo) {
      (this.name = name), (this.review = review), (this.photo = photo);
    }
  
    createTile() {
      this.tile = document.createElement("div");
      this.tile.classList.add("review-tile");
  
      this.head = document.createElement("h3");
      this.head.classList.add("name");
      this.head.textContent = this.name;
  
      this.text = document.createElement("p");
      this.text.classList.add("review");
      this.text.textContent = this.review;
  
      this.tile.appendChild(this.head);
      this.tile.appendChild(this.text);
  
      if (this.photo) {
        this.img = document.createElement("img");
        this.img.src = this.photo;
        this.tile.appendChild(this.img);
      }

      return this.tile;
    }
  }

let createHomePage = () => {
    let createHero = new Hero();
    
    createHero.createElement();
    createMasonryReview();
}

export default createHomePage;
