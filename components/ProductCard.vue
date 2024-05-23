<template>
    <div class="w-90 h-90 flex-col items-center justify-center">
        <img :src="imgUrl" alt="placeholder" class="lg:w-50 lg:h-40" />
        <div class="flex-col justify-center items-center">
            <p>{{ name }}</p>
            <p class="text-2xl font-semibold">KSH {{ price }}</p>
            <div></div>
            <button
                v-if="!cartStore.isItemInCart(id)"
                class="bg-black text-white w-24 h-6 text-sm my-auto mx-auto"
                @click="
                    cartStore.addItem({
                        id: id,
                        name: name,
                        price: price,
                        imgUrl: imgUrl,
                        quantity: quantity - 1,
                    })
                "
            >
                Add to Cart
            </button>
            <button
                v-else
                class="bg-black text-white w-24 h-6 text-sm my-auto mx-auto"
                @click="cartStore.removeItem(id)"
            >
                Remove Item
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "#imports";

const cartStore = useCartStore();

defineProps(["id", "name", "price", "imgUrl", "quantity"]);
</script>
