// Récupération de la chaine de requête Url de la page actuel (methode window.location).

const queryString_url_id = window.location.search;

// Récupération de l'Id du produit selectionner avec la méthode UrlSearchParams.

const urlSearcheParams = new URLSearchParams(queryString_url_id);
const newUrlSearchParams = urlSearcheParams.get("id");
console.log(newUrlSearchParams);

let datas = [];

const fetchDatas = async () => {
  await fetch(`http://localhost:3000/${newUrlSearchParams}`)
    .then((res) => res.json())
    .then(
      (promise = (datas = promise) => {
        // Inplantation des elements dans le DOM.

        const img = document.createElement("img");
        (img.src = `${datas.imageUrl}`), (img.alt = `${datas.altTxt}`);
        document.querySelector(".item__img").appendChild(img);

        document.getElementById("title").textContent = `${datas.name}`;

        document.getElementById("price").textContent = `${datas.price}`;

        document.getElementById(
          "description"
        ).textContent = `${datas.description}`;

        // Ajout des options de couleurs avec le constructeur Option().

        let item_colors = document.getElementById("colors");
        let options = ["0", "1", "2", "3"];
        let element = `${datas.colors}`;
        options.forEach(function (element, key) {
          if (element == options) {
            item_colors[item_colors.options.length] = new Option(
              element,
              item_colors.options.length,
              false,
              false
            );
          }
          if (element == `${datas.colors}`) {
            item_colors[item_colors.options.length] = new Option(
              element,
              item_colors.options.length,
              true,
              false
            ); // Ajouter l'attribut "selected"
          }
          if (element == `${datas.colors}`) {
            item_colors[item_colors.options.length] = new Option(
              element,
              item_colors.options.length,
              true,
              false
            ); // Sélectionnera l'option
          }
        });
        console.log(datas);
      })
    );
};
fetchDatas();

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
