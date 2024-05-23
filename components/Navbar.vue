<template>
    <div
        class="w-screen sticky top-0 z-50 h-16 px-10 py-2 mb-2 flex items-center justify-between shadow-custom bg-opacity-100"
    >
        <!-- title/ logo section -->
        <NuxtLink to="/" class="font-bold text-2xl"> Shoppy </NuxtLink>

        <!-- Page Name Section -->
        <NuxtLink to="/">Home</NuxtLink>
        <!-- Icons section -->
        <div>
            <NuxtLink to="/checkout" class="relative">
                <Icon
                    name="ic:baseline-add-shopping-cart"
                    size="24"
                    color="#000"
                />
                <span
                    class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                    {{ store.itemsNumber }}
                </span>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "~/stores/CartStore";

const store = useCartStore();
</script>
