<template>
    <div class="px-40">
        <p>All products</p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-auto h-auto"
        >
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :price="product.price"
                :imgUrl="product.imgUrl"
                :quantity="products.quantity"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "#imports";

const productStore = useProductStore();
const products = productStore.allProducts;
</script>
