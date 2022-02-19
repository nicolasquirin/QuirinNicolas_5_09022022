// récupération des produits API => interdit dans localStorage.

const fetchDatas = async () => {
  datas = await fetch("http://localhost:3000")
    .then((res) => res.json())
    .catch((error) =>
      alert("Erreur de chargement des produits de l'API  : " + error)
    );
};

const showDatas = async () => {
  await fetchDatas();
  for (let l = 0; l < datas.length; l++) {}
  console.log(datas);
};

// Recupération des produits du localStorage.
let productInStorage = [];
productInStorage = JSON.parse(localStorage.getItem("basket"));
for (let u = 0; u < productInStorage.length; u++) {
  console.log(productInStorage[u]);

  let items = document.getElementById("cart__items");

  //
  // Création des elements dans le DOM par la méthode textContent car innerHTML interdite.
  //

  const newArticle = document.createElement("article");
  let newDiv1 = document.createElement("div");
  let newImg = document.createElement("img");
  let newDiv2 = document.createElement("div");
  let newDiv3 = document.createElement("div");
  let newH2 = document.createElement("h2");
  let newP1 = document.createElement("p");
  let newP2 = document.createElement("p");
  let newDiv4 = document.createElement("div");
  let newDiv5 = document.createElement("div");
  let newP3 = document.createElement("p");
  let newInput = document.createElement("input");
  let newDiv6 = document.createElement("div");
  let newP4 = document.createElement("p");
  let total1 = document.getElementById("totalQuantity");
  let total2 = document.getElementById("totalPrice");
  items.append(newArticle);
  newArticle.append(newDiv1, newDiv2);
  newDiv1.append(newImg);
  newDiv2.append(newDiv3, newDiv4);
  newDiv3.append(newH2, newP1, newP2);
  newDiv4.append(newDiv5, newDiv6);
  newDiv5.append(newP3, newInput);
  newDiv6.append(newP4);
  newArticle.classList.add("cart__item");
  newDiv1.classList.add("cart__item__img");
  newDiv2.classList.add("cart__item__content");
  newDiv3.classList.add("cart__item__content__description");
  newDiv4.classList.add("cart__item__content__settings");
  newDiv5.classList.add("cart__item__content__settings__quantity");
  newDiv6.classList.add("cart__item__content__settings__delete");
  newP4.classList.add("deleteItem");
  //
  //
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!PHOTOS MANQUANTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  newImg.src = `/front/kanap01.jpeg`;

  //newH2.textContent = productInStorage.name;
  newP1.textContent = productInStorage[u].color;
  newP2.textContent = productInStorage[u].price + ` € `;
  newP3.textContent = ` Qté : ${productInStorage[u].quantity}`;

  newP4.textContent = `Suprimer`;
  total1.textContent = productInStorage.quantity;
  total2.textContent = productInStorage.price;

  //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!INPUT MIN ET MAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
// Iteration des prix produit.

let totalPriceTab = [];

for (let k = 0; k < productInStorage.length; k++) {}

// Supression des articles du panier avec la methode filter.

newArticle = document.getElementsByClassName("cart__item");
let supBtn = document.querySelectorAll(".deleteItem");
for (let i = 0; i < supBtn.length; i++) {
  supBtn[i].addEventListener("click", (e) => {
    e.preventDefault();

    let id_sup = productInStorage[i].id;
    productInStorage = productInStorage.filter((el) => el.id !== id_sup);

    // mise a jour du localStorage.
    localStorage.setItem("basket", JSON.stringify(productInStorage));
    console.log("ici" + id_sup);

    alert("Votre produit à bien été suprimer du panier !");
    window.location.href = "cart.html";
  });
}
