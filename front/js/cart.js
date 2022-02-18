let productInStorage = JSON.parse(localStorage.getItem("product"));

for (j = 0; j < productInStorage.length; j++) {
  let items = document.getElementById("cart__items");

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
  newInput.classList.add("itemQuantity");
  newP4.classList.add("deleteItem");
  //
  newImg.src = "/front/kanap01.jpeg";
  newImg = productInStorage[j].altTxt;
  newH2.textContent = productInStorage[j].name;
  newP1.textContent = productInStorage[j].color;
  newP2.textContent = productInStorage[j].price + ` € `;
  newP3.textContent = ` Qté : `;
  newInput.classList.add("itemQuantity");
  newP4.textContent = `Suprimer`;
  total1.textContent = productInStorage[j].quantity;
  total2.textContent = productInStorage[j].price;
  (newInput.type = Number),
    (newInput.value = 42),
    (newInput.minLength = "1"),
    (newInput.maxLength = "100");
  // MANQUE LE MIN ET MAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

// Supression des articles du panier avec la methode filter.

newArticle = document.getElementsByClassName("cart__item");
let supBtn = document.querySelectorAll(".deleteItem");
for (let i = 0; i < supBtn.length; i++) {
  supBtn[i].addEventListener("click", (e) => {
    e.preventDefault();

    let id_sup = productInStorage[i].id;
    console.log(id_sup);

    productInStorage = productInStorage.filter((el) => el.id !== id_sup);

    // mise a jour du localStorage ???
    localStorage.setItem("product", JSON.stringify(productInStorage));
    console.log(productInStorage);
  });
}
