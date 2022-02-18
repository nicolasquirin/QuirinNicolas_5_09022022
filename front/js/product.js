// Récupération de la chaine de requête Url de la page actuel (methode window.location).

const queryString_url_id = window.location.search;
//
// Récupération de l'Id du produit selectionner avec la méthode UrlSearchParams.
//
const urlSearcheParams = new URLSearchParams(queryString_url_id);
const newUrlSearchParams = urlSearcheParams.get("id");
console.log(newUrlSearchParams);

let datas = [];

const fetchDatas = async () => {
  await fetch(`http://localhost:3000/${newUrlSearchParams}`)
    .then((res) => res.json())
    .then(
      (promise = (datas = promise) => {
        //
        // Inplantation des elements dans le DOM.
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
// Initialisation de l'affichage des donées API du produit selectionné(ID) pour product.html.
//
fetchDatas();

//
// Ajout des produits avec options dans le localStorage.
//

const id = newUrlSearchParams;
const colors = document.getElementById("colors");
const quantity = document.getElementById("quantity");
const clickButton = document.getElementById("addToCart");

clickButton.addEventListener("click", (event) => {
  event.preventDefault();

  let objectProduct = {
    id: id,
    color: colors.value,
    quantity: quantity.value,
    name: document.getElementById("title").textContent,
    imageAlt: document.querySelector(".item__img").lastElementChild.alt,
    description: document.getElementById("description").textContent,
  };

  //
  // Envoi des produits dans le local Storage en le 'Parssant'.
  //

  let productInStorage = JSON.parse(localStorage.getItem("Keyproduct"));

  // Fonction pour ajouter les produits dans le localStorage.

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ITERATION DE LA QUANTITE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const addInStorage = () => {
    productInStorage.push(objectProduct);
    localStorage.setItem("Keyproduct", JSON.stringify(productInStorage));

    let foundProduct = productInStorage.find((p) => p.id == objectProduct.id);
    if (foundProduct != undefined) {
      foundProduct.quantity++;
    } else {
      objectProduct.quantity = 1;
      productInStorage.push(objectProduct);
    }
  };
  addInStorage();

  //
  // Envoi du client sur la page panier(cart.html).
  //

  window.location.href = "./cart.html";
});

//
//
//

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
