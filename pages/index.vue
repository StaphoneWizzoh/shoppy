<template>
    <div class="px-40">
        <p>All products</p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-auto h-auto"
        >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useProductStore } from "#imports";
</script>
