<template>
    <div class="boxShadow-custom my-12 flex items-center justify-between">
        <img :src="imgUrl" alt="Product" class="w-[90px] rounded-xl" />

        <p class="w-[156px]">{{ name }}</p>

        <p>1</p>

        <p class="text-l font-semibold">KSH {{ price }}</p>
        <Icon
            name="streamline:interface-delete-2-remove-bold-add-button-buttons-delete"
            size="24"
            color="#000"
            class="cursor-pointer"
            @click="cartStore.removeItem(id)"
        />
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "#imports";

const cartStore = useCartStore();

defineProps(["id", "name", "price", "imgUrl", "quantity"]);
</script>
