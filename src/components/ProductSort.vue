<script setup>
const props = defineProps({
  currentSort: String,
});

const emit = defineEmits(["sort-change"]);

import { defineProps, defineEmits } from "vue";

const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Rating: High to Low" },
];

function sortChange(sortValue) {
  emit("sort-change", sortValue);
}
</script>

<template>
  <div class="sort-options">
    <select>
      <option
        v-for="option in sortOptions"
        :key="option.value"
        data-test="sort-option"
        :class="{ active: currentSort === option.value }"
        :data-value="option.value"
        @click="sortChange(option.value)"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
