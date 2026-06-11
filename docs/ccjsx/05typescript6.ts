interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}


interface Book extends Item {
  type: "book";
}
