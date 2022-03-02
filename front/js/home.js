//
// Fonction de récupération asynchrone des ressources de l'API avec la methode (fetch).
//
const fetchDatas = async () => {
  datas = await fetch("http://localhost:3000")
    .then((res) => res.json())
    .catch((error) =>
      alert("Erreur de chargement des produits de l'API  : " + error)
    );

  for (let i in datas) {
    //
    // Création des elements HTML 'a' 'article' 'img' 'h3' 'p' stockés dans des variables;
    //
    let link = document.createElement("a");
    let article_item = document.createElement("article");
    let article_item_img = document.createElement("img");
    let article_item_h3 = document.createElement("h3");
    let article_item_p = document.createElement("p");
    //
    // integration des noeuds parents/enfants spécifié.
    //
    items.appendChild(link);
    link.appendChild(article_item);
    article_item.append(article_item_img, article_item_h3, article_item_p);
    //
    // Corrélation des élements [articles] a leurs valeurs recupéré dans la boucle[i] de [datas].
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
fetchDatas();
