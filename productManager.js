class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese código");
            return;
        }

        const newProduct = {
            id: this.nextProductId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct("Tomate", "Frescos", 19.99, "tomate.jpg", "Tomate1", 50);
productManager.addProduct("Banana", "Importada de Ecuador", 29.99, "banana.jpg", "Banana2", 30);

console.log("Lista de productos:", productManager.getProducts());

const productIdToSearch = 2;
console.log("Producto con ID", productIdToSearch, ":", productManager.getProductById(productIdToSearch));