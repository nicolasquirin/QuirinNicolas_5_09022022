// Récupération de la chaine de requête Url de la page actuel (methode window.location).

const queryString_url_id = window.location.search;

// Récupération de l'Id du produit selectionner avec la méthode UrlSearchParams.

const urlSearcheParams = new URLSearchParams(queryString_url_id);
const newUrlSearchParams = urlSearcheParams.get("id");
console.log(newUrlSearchParams);

// Inplantation des elements dans le DOM.

let img = document.createElement("img");
img.src = "/front/kanap01.jpeg";
let div = document.getElementsByClassName(".item__img");
img.appendChild;
console.log(img);

document.getElementById("title").textContent = "Je suis le nom du...";

document.getElementById("price").textContent = "5555";

document.getElementById("description").textContent = "blablablablablaaaaaa";

// Ajout des options de couleurs avec le constructeur Option().

let item_colors = document.getElementById("colors");
let options = ["Vert", "Bleu", "Jaune"];

options.forEach(function (element, key) {
  if (element == "Vert") {
    item_colors[item_colors.options.length] = new Option(
      element,
      item_colors.options.length,
      false,
      false
    );
  }
  if (element == "Bleu") {
    item_colors[item_colors.options.length] = new Option(
      element,
      item_colors.options.length,
      true,
      false
    ); // Ajouter l'attribut "selected"
  }
  if (element == "Jaune") {
    item_colors[item_colors.options.length] = new Option(
      element,
      item_colors.options.length,
      true,
      false
    ); // Sélectionnera l'option
  }
});

/*

let items = document.getElementsByClassName("item");

let item_img = document.getElementsByClassName("item_img");
let item_title = document.getElementById("title");
let item_price = document.getElementById("price");
let item_description = document.getElementById("description");
let item_colors = document.getElementById("colors");

// integration des elements dans le DOM.

item_img.src = newUrlSearchParams.imageUrl;
item_img.alt = newUrlSearchParams.altTxt;
item_title.classList.add = "description";
item_description.textContent = newUrlSearchParams.description;
item_colors = newUrlSearchParams.colors;

console.log(item_description);
*/
