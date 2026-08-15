interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  items: T[];
  constructor(items: T[]) {
    this.items = items;
  }
  getAll() {
    return this.items;
  }

  filter(callback: (item: T) => boolean) {
    return this.items.filter(callback);
  }
}

const tail: Clothing = {
  type: "clothing",
  id: "tail cover",
  price: 25,
  item: "knit",
  brand: "squirrels inc",
  size: "S",
};

const tree: Book = {
  type: "book",
  id: "learn",
  price: 10,
  title: "Drey Building",
  author: "Sandy Cheeks",
};

const nuts: Electronics = {
  type: "electronics",
  id: "scanner",
  price: 55,
  item: "nut finder",
  model: "PecanDelux",
};

const products = new Collection<Product>([tail, tree, nuts]);

function renderProduct(product: Product) {
  let html = `<div class="item" id="${product.id}"></div>
<div class="price">${product.price}</div>`;
  if (product.type === "book") {
    html += `<div id="more">Book: ${product.title} by ${product.author}</div>`;
  } else if (product.type === "electronics") {
    if (product.warranty) {
      html += `<div id="more">Electronics: ${product.item} - ${product.model} - Warranty: ${product.warranty} year(s)</div>`;
    } else {
      html += `<div id="more">Electronics: ${product.item} - ${product.model}</div>`;
    }
  } else if (product.type === "clothing") {
    if (product.size) {
      html += `<div id="more">Clothing: ${product.item} by ${product.brand} - Size ${product.size}</div>`;
    } else {
      html += `<div id="more">Clothing: ${product.item} by ${product.brand}</div>`;
    }
  } else {
    const jsonString = JSON.stringify(product);
    throw new Error(`Unknown product type: ${jsonString}`);
  }
  return html;
}

function showProducts(filter?: Product["type"]) {
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

const booksBtn = document.querySelector<HTMLButtonElement>("#books");
const electronicsBtn = document.querySelector<HTMLButtonElement>("#electronics");
const clothingBtn = document.querySelector<HTMLButtonElement>("#clothing");
const allBtn = document.querySelector<HTMLButtonElement>("#all");

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
