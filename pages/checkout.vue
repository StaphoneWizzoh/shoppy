<template>
    <div class="px-40">
        <div class="flex xs:flex-col">
            <div
                class="lg:w-[540px] flex-col lg:mr-6 lg:h-[85vh] overflow-auto"
            >
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

            <div class="lg:w-[540px] lg:ml-6">
                <p class="text-xl font-semibold mb-10">Order Summary</p>

                <div class="flex justify-between mb-12">
                    <p class="flex-1">Total</p>
                    <p class="text-l font-bold">
                        KSH {{ cartStore.totalCartAmount }}
                    </p>
                </div>
                <div class="flex items-center">
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
