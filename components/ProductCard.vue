<template>
    <div class="w-90 h-90 flex-col items-center justify-center mx-4 my-6">
        <div class="flex justify-center">
            <img
                :src="imgUrl"
                alt="placeholder"
                class="lg:w-50 lg:h-40 rounded-lg"
            />
        </div>
        <div class="text-center">
            <p class="my-2">{{ name }}</p>
            <p class="text-l font-semibold my-2">KSH {{ price }}</p>
        </div>
        <div class="flex justify-center">
            <button
                v-if="!cartStore.isItemInCart(id)"
                class="bg-black text-white w-[160px] h-8 text-sm my-auto mx-auto rounded-lg"
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
                class="bg-black text-white w-[160px] h-8 text-sm my-auto mx-auto rounded-lg"
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
