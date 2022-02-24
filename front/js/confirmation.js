// Numero de la commande passé.

function confirmation() {
  const Confirmation = document.getElementById("orderId");
  Confirmation.innerText = localStorage.getItem("orderId");
  localStorage.clear();
  console.log(orderId);
}
confirmation();
