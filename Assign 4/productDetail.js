var productData = [
  {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description:
      "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
  },
];

productData.forEach((element, i) => {
  const main = document.querySelector("#products");
  console.log(main);

  // Create Card

  const card = document.createElement("div");
  card.classList = "product";

  const productCard = `


  <div class="left-column">
    <img
      src=${productData[i].preview}
      alt="Men Navy Blue Solid Sweatshirt"
    />
  </div>
  <div class="right-column">
    <div class="product-description">
      <h1 id="name">${productData[i].name}</h1>
      <h4 id="brand">${productData[i].brand}</h4>
      <h3>
        Price: Rs
        <span id="price">${productData[i].price}</span>
      </h3>
      <div class="description">
        <h3>Description</h3>
        <p id="description">
        ${productData[i].description}
        </p>
      </div>
      <div class="product-preview">
        <h3>Product Preview</h3>
        <div class="previewImg">
          <img
            id="img1"
            src=${productData[i].photos[0]}
            alt=""
          />
          <img
            id="img2"
            src=${productData[i].photos[1]}
            alt=""
          />
          <img
            id="img3"
            src=${productData[i].photos[2]}
            alt=""
          />
          <img
            id="img4"
            src=${productData[i].photos[3]}
            alt=""
          />
          <img
            id="img5"
            src=${productData[i].photos[4]}
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="btn">
      <button id="add-to-cart">Add to Cart</button>
    </div>
  </div>
  `;

  card.innerHTML += productCard;

  main.appendChild(card);
  console.log(main);
});

var mainImge = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function () {
  mainImge.src = smallImg[0].src;
  smallImg.add;
};
smallImg[1].onclick = function () {
  mainImge.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImge.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImge.src = smallImg[3].src;
};
smallImg[4].onclick = function () {
  mainImge.src = smallImg[4].src;
};
