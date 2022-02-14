// Creation de la variable (datas) comme contenant pour le future tableau de donnés.

let datas = [];
//
// Récupération asynchrone des données => localhost avec la methode (fetch).
//
const fetchDatas = async () => {
  datas = await fetch("http://localhost:3000")
    .then((res) => res.json())
    .catch((error) =>
      alert("Erreur de chargement des produits de l'API  : " + error)
    );
  console.log(datas);
};
//
// Initialisation asynchrone des données [datas] dans une boucle (for) pour affichage => (home.html).
//
const showDatas = async () => {
  await fetchDatas();
  let items = document.getElementById("items");

  for (let i = 0; i < datas.length; i++) {
    // revoir la boucle en for in....
    // Création des elements 'a' 'article' 'img' 'h3' 'p' stockés dans des variables.
    //
    let link = document.createElement("a");
    let article_item = document.createElement("article");
    let article_item_img = document.createElement("img");
    let article_item_h3 = document.createElement("h3");
    let article_item_p = document.createElement("p");
    //
    // integration des elements dans le DOM.
    //
    items.appendChild(link);
    link.appendChild(article_item);
    article_item.append(article_item_img, article_item_h3, article_item_p);
    //
    // Corrélation des élements [articles] a leurs valeurs recupéré dans [datas].
    //
    link.href = `./product.html?id=${datas[i]._id}`;
    article_item_img.src = datas[i].imageUrl;
    article_item_img.alt = datas[i].altTxt;
    article_item_h3.classList.add("productName");
    article_item_h3.textContent = datas[i].name;
    article_item_p.classList.add("productDescription");
    article_item_p.textContent = datas[i].description;
  }
};
//
// Initialisation de l'affichage des donées API pour home.html
//
showDatas();

/*

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
      `;
  })

  .catch((error) => alert("Erreur de chargement des produits : " + error));

*/
