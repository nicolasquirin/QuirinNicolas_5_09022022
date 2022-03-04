//
// Fonction qui récupère et transmet le numéro de commande.
//
function confirmation() {
  const orderId = document.getElementById("orderId");
  orderId.innerText = localStorage.getItem("orderId");
  localStorage.clear();
}
confirmation();
//
// Fonction qui renvoi le client sur la page d'accueil apres la confirmation de commande + message apres 2,5 sec.
//
function reload() {
  reloadpage = window.setTimeout(startReload, 2500);
}
function startReload() {
  (window.location.href = "home.html"),
    alert("Félicitation pour votre nouvelle achat et à bientôt sur Kanap.fr !");
}
reload();
