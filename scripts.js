const nameOf = document.getElementById("name");
const priceOf = document.getElementById("price");
const form = document.getElementsByName("form");


async function fetchProducts() {
  const response = await fetch("http://localhost:3000/Product");
  const data = await response.json();
  console.log(data);
}

async function fetchById(id) {
  const response = await fetch(`http://localhost:3000/Product/${id}`);
  const data = await response.json();

  console.log(data);
}

addEventListener("submit", async (event) => {
    event.preventDefault();

  await fetch("http://localhost:3000/Product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: nameOf.value,
      price: priceOf.value,
    }),
  });

  await fetchProducts();
});
