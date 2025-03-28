<script setup>
import { defineProps, defineEmits } from "vue";
import { categories } from "../../mock-data/products";

const props = defineProps({
  categories: Object,
  selectedCategory: null,
});

const emit = defineEmits(["category-change", "search-change"]);

function categoryChange(id) {
  emit("category-change", id || null);
}

function searchChange(event) {
  emit("search-change", event.target.value);
}
</script>

<template>
  <input type="text" @input="searchChange" />
  <select>
    <option
      value=""
      @click="categoryChange(null)"
      data-test="category-option"
      :selected="!selectedCategory"
    >
      All Categories
    </option>
    <option
      v-for="category in categories"
      :key="category?.id"
      :value="category?.id"
      :selected="selectedCategory === category?.id"
      @click="categoryChange(category?.id)"
      data-test="category-option"
    >
      {{ category.name }}
    </option>
  </select>
</template>

<style></style>
