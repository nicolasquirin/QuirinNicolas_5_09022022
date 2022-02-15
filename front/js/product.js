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
        // Ajout des options de couleurs avec le constructeur Option().
        //
        let optionColors = datas.colors;
        let item_colors = document.getElementById("colors");
        let options = [
          optionColors[0],
          optionColors[1],
          optionColors[2],
          optionColors[3],
        ];
        options.forEach(function (element, key) {
          if (element == optionColors[key]) {
            item_colors[item_colors.options.length] = new Option(
              element,
              item_colors.options.length,
              false,
              false
            );
          }
        });
        console.log(datas);
        console.log(optionColors);
      })
    );
  addBasket(datas);
};
//
// Initialisation de l'affichage des donées API du produit selectionné(ID) pour product.html
//
fetchDatas();

//
// Ajout du produit
//

const addBasket = () => {
  let clickButton = document.getElementById("addToCart");
  clickButton.addEventListener("click", () => {
    let optionColors = document.getElementById("colors");
    let quantityProduct = document.getElementById("quantity");
    let productStorage = JSON.parse(localStorage.getItem("productStorage"));

    const valueColor = Object.assign({}, datas, {
      item_colors: `${optionColors.value}`,
      quantity: 1,
    });

    console.log(valueColor);

    if (productStorage == null) {
      productStorage = [];
      productStorage.push(valueColor);
      localStorage.setItem("productStorage", JSON.stringify(productStorage));
    }
  });
};
