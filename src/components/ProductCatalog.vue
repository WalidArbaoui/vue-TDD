<script setup>
import { computed } from "vue";
import { useProductStore } from "../stores/productStore.js";
import ProductFilter from "./ProductFilter.vue";
import ProductSort from "./ProductSort.vue";
import ProductCard from "./ProductCard.vue";

const store = useProductStore();
const categories = computed(() => store.categories);
const selectedCategory = computed(() => store.selectedCategory);
const sortOption = computed(() => store.sortOption);
const filteredProducts = computed(() => store.filteredProducts);

const onCategoryChange = (categoryId) => {
  store.setCategory(categoryId);
};

const onSearchChange = (searchQuery) => {
  store.setSearchQuery(searchQuery);
};

const onSortChange = (sortValue) => {
  store.setSortOption(sortValue);
};
</script>

<template>
  <div>
    <div>
      <ProductFilter
        :categories="categories"
        :selectedCategory="selectedCategory"
        @category-change="onCategoryChange"
        @search-change="onSearchChange"
      />
      <ProductSort :currentSort="sortOption" @sort-change="onSortChange" />
    </div>

    <div v-if="filteredProducts.length > 0">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div v-else>No products found</div>
  </div>
</template>
