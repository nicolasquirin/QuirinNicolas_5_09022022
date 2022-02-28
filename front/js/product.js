// Récupération de la chaine de requête Url de la page actuel (methode window.location).

const queryString_url_id = window.location.search;
//
// Récupération de l'Id du produit selectionner avec la méthode UrlSearchParams.
//
const urlSearcheParams = new URLSearchParams(queryString_url_id);
const newUrlSearchParams = urlSearcheParams.get("id");
console.log(newUrlSearchParams);

let datas = [];
//
// Récupération du produit selectionner pas Id avec la méthode (Fetch + UrlSearchParams).
//
const fetchDatas = async () => {
  await fetch(`http://localhost:3000/${newUrlSearchParams}`)
    .then((res) => res.json())
    .then(
      (promise = (datas = promise) => {
        //
        // Création de l'element HTML 'img' + récupération des elements du DOM en spécifiant leurs Id.
        //
        const img = document.createElement("img");
        (img.src = datas.imageUrl), (img.alt = datas.altTxt);
        document.querySelector(".item__img").appendChild(img);
        document.getElementById("title").textContent = datas.name;
        document.getElementById("price").textContent = datas.price;
        document.getElementById("description").textContent = datas.description;
        //
        // Ajout des options de couleurs avec une boucle forEach.
        //
        let optionColors = datas.colors;
        let item_colors = document.getElementById("colors");
        optionColors.forEach(function (element) {
          item_colors[item_colors.options.length] = new Option(element);
        });
      })
    );
};
//
// Initialisation de l'affichage des donées API du produit selectionné(Id) pour product.html.
//
fetchDatas();
//
// Déclaration et stockage des variables pour id du produit, option de couleurs du produit, et quantité du produit.
//

let id = newUrlSearchParams;
let colorOption = document.getElementById("colors");
let quantity = document.getElementById("quantity");

const clickButton = document.getElementById("addToCart");

console.log(quantity);
//
// Fonction EventListener du boutton ajout Panier(addToCart).
//

clickButton.addEventListener("click", (event) => {
  event.preventDefault();
  let product = {
    id: id,
    color: colorOption.value,
    quantity: quantity.valueAsNumber,
  };
  console.log(quantity.valueAsNumber);
  //
  // Initialisation de l'acces au local storage avec (set Item) + conversion de la valeur en chaîne JSON.
  //
  function saveBasket(basket) {
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  function getBasket() {
    let basket = localStorage.getItem("basket");
    if (basket == null) {
      return [];
    } else {
      return JSON.parse(basket);
    }
  }
  //
  // Fonction qui bloque les tentatives de commande inapproprié.
  //
  function wrongInput(e) {
    if (colors.value == "" || quantity.value <= 0) {
      alert("SVP, choisissez une couleur et un nombre d'article valide");
      e.stopPropagation();
    } else {
    }
  }
  wrongInput();

  //
  // Addition des articles dans le panier.
  //
  function addBasket(product) {
    let basket = getBasket();
    let foundProduct = basket.find(
      (p) => p.id === product.id && p.color === product.color
      //
      // Prise en compte de l'id Produit et de sa couleur selectionné pour l'addition de l'article.
      //
    );
    if (foundProduct != undefined) {
      foundProduct.quantity += product.quantity;
      alert(` Vous avez rajouté ${product.quantity} article(s) a votre panier`);
    } else {
      basket.push(product);
      alert(`${product.quantity} Article(s) ajouté a votre panier`);
    }
    //
    // Initialisation de l'acces au local storage avec (set Item) + conversion de la valeur en chaîne JSON.
    //
    saveBasket(basket);
  }

  //
  // Récupération des valeurs du panier (get Item) + conversion de la valeur en objet JSON.
  //
  addBasket(product);

  //
  // Envoi du client sur la page panier(cart.html) apres l'evènement click.
  //
  window.location.href = "./cart.html";
});
console.log(quantity);

// EXAMPLE DU WEBINAIRE
/*
function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}
function getBasket() {
  let basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
}
function addBasket(product) {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
}
function removeBasket(product) {
  let basket = getBasket();
  basket = basket.filter((p) => p.id != product.id);
  saveBasket(basket);
}
function changeQuantity(product, quantity) {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
}
function totalProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}
function totalPrice() {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
}
*/
