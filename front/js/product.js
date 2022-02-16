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
        item_name = document.getElementById("title").textContent = datas.name;
        document.getElementById("price").textContent = datas.price;
        document.getElementById("description").textContent = datas.description;
        //
        // Ajout des options de couleurs avec une boucle forEach.
        //
        let optionColors = datas.colors;
        let item_colors = document.getElementById("colors");
        optionColors.forEach(function (element, key) {
          item_colors[item_colors.options.length] = new Option(element);
        });
        console.log(optionColors);
      })
    );
  addBasket(datas);
};
//
// Initialisation de l'affichage des donées API du produit selectionné(ID) pour product.html.
//
fetchDatas();

//
// Ajout des produits avec options dans le localStorage.
//

const addBasket = () => {
  let clickButton = document.getElementById("addToCart");
  clickButton.addEventListener("click", () => {
    let optionColors = document.getElementById("colors");
    let itemName = document.getElementById("title");
    let itemQuantity = document.getElementById("quantity");
    let productStorage = JSON.parse(localStorage.getItem("productStorage"));
    //
    // Ajout de la valeur du titre produit dans le localStorage.
    //
    const valueName = Object.assign({}, datas, {
      item_name: `${itemName.textContent}`,
    });
    //
    // Ajout de la valeur de quantité de produit dans le localStorage.
    //
    const valueQuantity = Object.assign({}, datas, {
      item_quantity: `${itemQuantity.value}`,
      quantity: 1,
    });
    //
    // Ajout de la valeur des couleurs produit et sa quantitée dans le localStorage.
    //
    const valueColor = Object.assign({}, datas, {
      item_colors: `${optionColors.value}`,
      quantity: 1,
    });

    console.log(valueColor);

    if (productStorage == null) {
      productStorage = [];
      productStorage.push[(valueColor, valueName, valueQuantity)];
      localStorage.setItem("productStorage", JSON.stringify(productStorage));
    }

    console.log(valueName);
  });
};
