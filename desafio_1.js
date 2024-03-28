class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`El código ${code} esta repetido`);
        break;
      }
    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(newProduct).includes(undefined)) {
      ProductManager.id++;
      this.products.push({ ...newProduct, id: ProductManager.id });
    } else {
      console.log("Todos los campos son requeridos");
    }
  }

  getProducts() {
    return this.products;
  }
  getProductById(id) {
    if (!this.products.find((product) => product.id === id)) {
      console.log("Not Found");
    } else {
      console.log(this.products.find((product) => product.id === id));
    }
  }
}

const productManager = new ProductManager();

// Primera llamada = arreglo vacío
console.log(productManager.getProducts());

// Agregamos productos
productManager.addProduct(
  "Producto 1",
  "Descripción 1",
  1000,
  "imagen1.jpg",
  "abc123",
  10
);

productManager.addProduct(
  "Producto 2",
  "Descripción 2",
  2000,
  "imagen2.jpg",
  "def456"
);

// Segunda llamada = areglo con producto
console.log(productManager.getProducts());

// Validacion de code repetido
productManager.addProduct(
  "Producto 3",
  "Descripción 3",
  3000,
  "imagen3.jpg",
  "abc123",
  7
);

// Busqueda de producto por ID
productManager.getProductById(2);

// Busqueda de producto por ID no encontrado
productManager.getProductById(3);
