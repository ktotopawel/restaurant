export default function () {
  const content = document.getElementById("content");

  const phone = "32 123 45 67";
  const mail = "istnieje@prawdziwymail.com";
  const location = "ul. Prawdziwa 21c 99-000 Miasteczko";

  const kontakt = document.createElement("div");
  kontakt.classList.add("kontakt");

  const heading = document.createElement("h2");
  heading.textContent = "Dane Kontaktowe";

  kontakt.appendChild(heading);

  for (let i = 0; i < 3; i++) {
    let element = document.createElement("div");

    let field = document.createElement("h3");
    let content = document.createElement("p");

    switch (i) {
      case 0:
        field.textContent = "Telefon";
        content.textContent = phone;
        break;
      case 1:
        field.textContent = "Email";
        content.textContent = mail;
        break;
      case 2:
        field.textContent = "Adres";
        content.textContent = location;
        break;
      default:
        break;
    }
    element.appendChild(field);
    element.appendChild(content);
    kontakt.appendChild(element);
  }

  const map = document.createElement('iframe');
  map.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4085.810830337399!2d16.757022201636534!3d50.83531697679495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1739298033336!5m2!1sen!2spl";
  map.width = "100%";
  map.height= "450";
  map.style= "border:0;";
  map.allowFullscreen= "";
  map.loading= "lazy";
  map.referrerPolicy="no-referrer-when-downgrade";

  kontakt.appendChild(map);

  content.appendChild(kontakt);
}
