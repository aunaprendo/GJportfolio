"use strict";
class Collection {
  items;
  constructor(items) {
    this.items = items;
  }
  getAll() {
    return this.items;
  }
  filter(callback) {
    return this.items.filter(callback);
  }
}
const tail = {
  type: "clothing",
  id: "Tail Cover",
  price: 25,
  item: "Tail Cover",
  brand: "Squirrel Inc",
  size: "S",
};
const tree = {
  type: "book",
  id: "learn",
  price: 10,
  title: "Drey Building",
  author: "Sandy Cheeks",
};
const nuts = {
  type: "electronics",
  id: "scanner",
  price: 55,
  item: "Nut Finder",
  model: "Pecan Perfect",
};
const products = new Collection([tail, tree, nuts]);
function renderProduct(product) {
  let html = `<div class="item" id="${product.id}">`;
  if (product.type === "book") {
    html += `
      <div class="more">
        <strong>BOOK:</strong>
        <div>${product.title} by ${product.author}</div>
      </div>
    `;
  } else if (product.type === "electronics") {
    if (product.warranty) {
      html += `
        <div class="more">
          <strong>ELECTRONICS:</strong>
          <div>${product.item} - ${product.model} - Warranty: ${product.warranty} year(s)</div>
        </div>
      `;
    } else {
      html += `
        <div class="more">
          <strong>ELECTRONICS:</strong>
          <div>${product.item} - ${product.model}</div>
        </div>
      `;
    }
  } else if (product.type === "clothing") {
    if (product.size) {
      html += `
        <div class="more">
          <strong>CLOTHING:</strong>
          <div>${product.item} by ${product.brand}</div>
          <div>Size ${product.size}</div>
        </div>
      `;
    } else {
      html += `
        <div class="more">
          <strong>CLOTHING:</strong>
          <div>${product.item} by ${product.brand}</div>
        </div>
      `;
    }
  } else {
    const jsonString = JSON.stringify(product);
    throw new Error(`Unknown product type: ${jsonString}`);
  }
  html += `
    <div class="price">$${product.price.toFixed(2)}</div>
  </div>`;
  return html;
}
function showProducts(filter) {
  const output = document.getElementById("output");
  if (output) {
    if (filter) {
      const combinedHTML = products
        .filter((product) => product.type === filter)
        .map((product) => renderProduct(product))
        .join("");
      output.innerHTML = combinedHTML;
    } else {
      const combinedHTML = products
        .getAll()
        .map((product) => renderProduct(product))
        .join("");
      output.innerHTML = combinedHTML;
    }
  }
}
const booksBtn = document.querySelector("#books");
const electronicsBtn = document.querySelector("#electronics");
const clothingBtn = document.querySelector("#clothing");
const allBtn = document.querySelector("#all");
allBtn?.addEventListener("click", () => {
  showProducts();
});
booksBtn?.addEventListener("click", () => {
  showProducts("book");
});
electronicsBtn?.addEventListener("click", () => {
  showProducts("electronics");
});
clothingBtn?.addEventListener("click", () => {
  showProducts("clothing");
});
document.addEventListener("DOMContentLoaded", () => {
  showProducts();
});
