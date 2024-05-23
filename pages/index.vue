<template>
    <div class="lg:px-40">
        <p class="text-xl font-semibold mb-2">All products</p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-auto h-auto lg:h-[80vh] lg:overflow-auto"
        >
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :price="product.price"
                :imgUrl="product.imageUrl"
                :quantity="product.quantity"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "#imports";

const productStore = useProductStore();
const products = productStore.allProducts;
</script>
