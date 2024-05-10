// Zustand.jsx
/* 
Lesson:
// Install Zustand: 'npm i zustand'
You will create a shopping cart using zustand:

Create a zustand store that:

- Allow a product to be added
- Clears the list of products.
 */

import { create } from "zustand";

const products = [
  {
    id: 0,
    title: "Milk",
    price: 19.99,
    discountedPrice: 19.99,
  },
  {
    id: 1,
    title: "Bread",
    price: 12.99,
    discountedPrice: 12.99,
  },
  {
    id: 2,
    title: "Cheese",
    price: 25.99,
    discountedPrice: 25.99,
  },
];

// Zustand store
const useProductsStore = create((set) => ({
  // State for the list of products
  products: products,

  // State for the cart
  cart: [],

  // Fn to add a product to the cart
  addToCart: (productId) => {
    set((state) => ({
      cart: [...state.cart, productId],
    }));
  },

  // Function to clear the cart
  clearCart: () => set({ cart: [] }),
}));

//

function App() {
  // Accessing state and actions from the Zustand store
  const cart = useProductsStore((state) => state.cart);
  const products = useProductsStore((state) => state.products);
  const addToCart = useProductsStore((state) => state.addToCart);
  const clearCart = useProductsStore((state) => state.clearCart);

  const getProductById = (productId) =>
    products.find((product) => product.id === productId);

  return (
    <div>
      {/* Displaying the cart  */}
      <h2>Shopping cart</h2>
      <ul>
        {/* Mapping through the cart items and displaying each one */}
        {cart.map((productId) => {
          const product = getProductById(productId);
          return (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          );
        })}
      </ul>

      {/* Buttons to add products to cart and clear cart */}
      <button onClick={addToCart(0)}>Add Milk to cart</button>
      <button onClick={addToCart(1)}>Add Bread to cart</button>
      <button onClick={addToCart(2)}>Add Cheese to cart</button>
      <button onClick={clearCart}>Clear cart</button>
    </div>
  );
}

export default App;
