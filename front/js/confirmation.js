//
// Fonction qui récupère et transmet le numéro de commande.
//
function confirmOrder() {
  const orderId = document.getElementById("orderId");
  orderId.innerText = localStorage.getItem("orderId");
  localStorage.clear();
}
confirmOrder();
//
// Fonction qui renvoi le client sur la page d'accueil apres la confirmation de commande + message apres 2sec.
//
function reload() {
  reloadpage = window.setTimeout(startReload, 2000);
}
function startReload() {
  (window.location.href = "home.html"),
    alert("Félicitation pour votre nouvelle achat, à bientôt sur Kanap.fr !");
}
reload();
