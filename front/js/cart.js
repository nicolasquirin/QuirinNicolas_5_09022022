let productInStorage = JSON.parse(localStorage.getItem("product"));

productInCart = [];

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
  newDiv1.appendChild(newImg);
  newDiv2.append(newDiv3, newDiv4);
  newDiv3.append(newH2, newP1, newP2);
  newDiv4.append(newDiv5, newDiv6);
  newDiv5.append(newP3, newInput);
  newDiv6.append(newP4);

  newImg = productInStorage[j].imageUrl;
  newImg = productInStorage[j].altTxt;
  newH2.textContent = productInStorage[j].name;
  newP1.textContent = productInStorage[j].color;
  newP2.textContent = productInStorage[j].price;
  newP3.textContent = productInStorage[j].quantity;
  newP4.textContent = `suprimer`;
  total1.textContent = productInStorage[j].quantity;
  total2.textContent = productInStorage[j].price;

  console.log(productInStorage[j]);
}

/*<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
                    <p>Vert</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> -->
*/
