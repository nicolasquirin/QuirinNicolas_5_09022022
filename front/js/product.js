// Récupération de la chaine de requête Url (methode window.location).

const queryString_url_id = window.location.search;

// Récupération de l'Id du produit selectionner.

const urlSearcheParams = new URLSearchParams(queryString_url_id);
const newUrlSearchParams = urlSearcheParams.get("id");
console.log(newUrlSearchParams);

// Utilisation de l'Id des produits.

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
