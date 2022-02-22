// récupération des produits API => interdite dans localStorage.

// Recuperer le datas de L'api pour Image, nom, prix, et altTxt de image.
//
// Recupération des produits du localStorage.

let productInStorage = JSON.parse(localStorage.getItem("basket"));

async function fetchDatas() {
  let items = document.getElementById("cart__items");
  for (let datas of productInStorage) {
    await fetch(`http://localhost:3000/${datas.id}`)
      .then((res) => res.json())
      .then(
        (data) => (
          (productInStorage.name = data.name),
          (productInStorage.price = data.price),
          (productInStorage.imageUrl = data.imageUrl),
          (productInStorage.altTxt = data.altTxt)
        )
      )
      .catch((error) =>
        alert("Erreur de chargement des produits de l'API  : " + error)
      );

    console.log(productInStorage);
    console.log(datas.color);

    //
    // Création des elements dans le DOM par la méthode textContent car innerHTML interdite par OC.
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
    newInput.classList.add("itemQuantity");
    //
    //
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!PHOTOS MANQUANTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    newH2.textContent = productInStorage.name;
    newP1.textContent = datas.color;
    newP2.textContent = productInStorage.price + ` € `;
    newP3.textContent = ` Qté : `;
    newImg.src = productInStorage.imageUrl;
    newImg.alt = productInStorage.altTxt;
    newInput.setAttribute = ("name", "itemQuantity");
    newInput.setAttribute = ("type", "number");
    newInput.setAttribute = ("min", "1");
    newInput.setAttribute = ("max", "100");
    newInput.setAttribute = "value";
    newP4.textContent = `Suprimer`;
    total1.textContent = datas.quantity;
    total2.textContent = productInStorage.price;

    //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!INPUT MIN ET MAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // Iteration des prix produit.

    let totalPriceTab = [];

    //for (let k = 0; k < productInStorage.length; k++) {}

    // Supression des articles du panier avec la methode filter.

    let cartArticle = newArticle; 

    cartArticle = document.getElementsByClassName("cart__item");
    let supBtn = document.querySelectorAll(".deleteItem");
    for (let u = 0; u < supBtn.length; u++) {
      supBtn[u].addEventListener("click", (e) => {
        e.preventDefault();

        let id_sup = productInStorage[u].id;
        productInStorage = productInStorage.filter((el) => el.id != id_sup || el.color != productInStorage[u].color);
        

        // mise a jour du localStorage.
        localStorage.setItem("basket", JSON.stringify(productInStorage));
      

        alert("Votre produit à bien été suprimer du panier !");
        window.location.href = "cart.html";
      });
    }
  }
}
fetchDatas();
