<script setup>
import { defineProps, defineEmits } from "vue";
import { computed } from "vue";

const props = defineProps({
  product: Object,
});

const formattedPrice = computed(() => {
  return props.product.price.toFixed(2);
});

const emit = defineEmits(["add-to-cart"]);

function addToCart() {
  emit("add-to-cart", props.product);
}
</script>

<template>
  <div class="product-card">
    <img :src="product?.images[0]" :alt="product?.name" class="product-image" />
    <h3 class="product-name">{{ product?.name }}</h3>
    <p class="product-price">${{ formattedPrice }}</p>
    <p class="product-rating">Rating: {{ product?.rating }}/5</p>
    <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 250px;
  margin: auto;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-name {
  font-size: 1.2rem;
  margin: 8px 0;
}

.product-price {
  font-weight: bold;
  color: #333;
}

.product-rating {
  color: #666;
  margin-bottom: 16px;
}

.add-to-cart-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>
