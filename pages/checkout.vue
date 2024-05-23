<template>
    <div class="px-40">
        <div class="flex xs:flex-col">
            <div class="lg:w-[540px] flex-col">
                <h1 class="text-xl font-semibold mb-2">Shopping Cart</h1>

                <CartItem
                    v-for="item in cartItems"
                    :key="item.id"
                    :id="item.id"
                    :name="item.name"
                    :price="item.price"
                    :imgUrl="item.imgUrl"
                    :quantity="item.quantity"
                />
            </div>

            <div class="lg:w-[540px]">
                <p class="text-xl font-semibold mb-2">Order Summary</p>
                <div class="flex-col items-center">
                    <div class="flex justify-between mb-[48px]">
                        <p>Total</p>
                        <p>KSH {{ cartStore.totalCartAmount }}</p>
                    </div>
                    <button
                        class="bg-black text-white text-xl py-4 border-6 rounded-md h-14 w-[400px] mx-auto my-0"
                        @click="cartStore.clearCart"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "#imports";

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.allItems);
</script>
