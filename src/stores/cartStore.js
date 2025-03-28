import { defineStore } from "pinia";

const TAX_RATE = 0.08;

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    items: [],
    totalItems: 0,
    subtotal: 0,
    tax: 0,
    grandTotal: 0,
  }),

  actions: {
    addToCart(product) {
      this.totalItems++;
      this.subtotal += product.price;
      this.tax = roundNumbers(this.subtotal * TAX_RATE);
      this.grandTotal = roundNumbers(this.subtotal + this.tax);
      const existingItem = this.items.find(
        (item) => item.product.id === product.id
      );
      existingItem
        ? existingItem.quantity++
        : this.items.push({ product, quantity: 1 });
    },

    updateQuantity(productId, newQuantity) {
      const item = this.items.find((item) => item.product.id === productId);
      if (item) {
        item.quantity = newQuantity;
        this.subtotal = this.items
          .map((item) => item.product.price * item.quantity)
          .reduce((prev, current) => prev + current);
        this.totalItems = this.items.reduce(
          (prev, current) => prev.quantity + current.quantity,
          { quantity: 0 }
        );
      }
    },

    removeFromCart(id) {
      const item = this.items.find((item) => item.product.id === id);
      if (item) {
        this.totalItems -= item.quantity;
        this.items = this.items.filter((item) => item.product.id !== id);
      }
    },

    clearCart() {
      this.items = [];
      this.totalItems = 0;
    },
  },
});

function roundNumbers(x, round = 2) {
  return Number.parseFloat(x.toFixed(round));
}
