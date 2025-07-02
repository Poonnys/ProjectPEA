const qty = document.getElementById("qty");
const price = document.getElementById("price");
const service = document.getElementById("service");
const total = document.getElementById("total");

function updateTotal() {
  const q = parseFloat(qty.value) || 0;
  const p = parseFloat(price.value) || 0;
  const s = parseFloat(service.value) || 0;
  total.value = (q * p + s).toFixed(2);
}

[qty, price, service].forEach(input => {
  input.addEventListener("input", updateTotal);
});
