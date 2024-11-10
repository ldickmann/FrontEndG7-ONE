// Oracle ONE G7 - Challenge AluraGeek | Development by Lucas Elias Dickmann

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".button-add");
  const cleanButton = document.querySelector(".button-clean");
  const nameInput = document.querySelector(".input-name");
  const valueInput = document.querySelector(".input-value");
  const fileInput = document.querySelector(".input-file");
  const productsContainer = document.querySelector(".products-container");

  addButton.addEventListener("click", () => {
    const productName = nameInput.value;
    const productValue = valueInput.value;
    const productImage = fileInput.files[0];

    if (productName && productValue && productImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const productData = {
          name: productName,
          value: productValue,
          image: e.target.result,
        };

        fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        })
          .then((response) => response.json())
          .then((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
            <div class="container-img">
              <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="title-product">${product.name}</div>
            <div class="container-value">
              <div class="value">$ ${product.value}</div>
              <img class="icon-trash" src="./icons/lixeira.svg" />
            </div>
          `;

            productsContainer.appendChild(productCard);

            nameInput.value = "";
            valueInput.value = "";
            fileInput.value = "";
          })
          .catch((error) => console.error("Erro ao adicionar produto:", error));
      };

      reader.readAsDataURL(productImage);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

  cleanButton.addEventListener("click", () => {
    nameInput.value = "";
    valueInput.value = "";
    fileInput.value = "";
  });
});
