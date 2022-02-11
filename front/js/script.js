/*
// Collecte des données de l'API

const article = document.createElement("article");

document.getElementById("items").appendChild(article);


let datas;

const fetchDatas = async () => {
  datas = await fetch("http://localhost:3000")
    .then((res) => res.json())
    .catch((error) => alert("Erreur de chargement des produits : " + error));
};

const showDatas = async () => {
  await fetchDatas();

  article.innerHTML = datas
    .map(
      (data) =>
        `
        <a href="${data._id}/>
            <article>
              <img src="${data.imageUrl}/>
              <h3 class="productName">${data.name}</h3>
              <p class="productDescription">${data.description}</p>
            </article>
        </a>

        `
    )
    .join("");
};

showDatas();

*/

// Initialisation des données de l'API dans le DOM

const article = document.createElement("article");
let elt = document.getElementById("items");
elt.appendChild(article);

// Collecte des données de l'API

const collectData = fetch("http://localhost:3000")
  .then(async (response) => {
    const products = await response.json();

    article.innerHTML = ` 
        <a href="${products[0]._id}"/>
          <article class="items">
            <img src="${products[0].imageUrl}" alt="${products[0].altTxt}">
            <h3 class="productName">${products.name}</h3>
              <p class="productDescription">${products[0].description}</p>
          </article>
        </a>
     
        <a href="${products[1]._id}"/>
          <article class="items">
            <img src="${products[1].imageUrl}" alt="${products[1].altTxt}">
            <h3 class="productName">${products[1].name}</h3>
              <p class="productDescription">${products[1].description}</p>
          </article>
        </a>

        <a href="${products[2]._id}"/>
          <article class="items">
            <img src="${products[2].imageUrl}" alt="${products[2].altTxt}">
            <h3 class="productName">${products[2].name}</h3>
              <p class="productDescription">${products[2].description}</p>
          </article>
        </a>
      `;
  })

  .catch((error) => alert("Erreur de chargement des produits : " + error));
