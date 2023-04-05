import { getShoppingCart } from "../utilities/fakedb";

const cardProductsLoader = async () => {
      const loaderProduct = await fetch('products.json');
      const products = await loaderProduct.json();
      const storedCard = getShoppingCart();

      const savedCart = [];
      for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                  addedProduct.quantity = storedCard[id];
                  savedCart.push(addedProduct);
            }
      }

      return savedCart;
}

export default cardProductsLoader;