<template>
    <div class="flex items-center">
        <img src="https://picsum.photos/200/300" alt="Product" class="h-20" />
        <div class="flex items-center">
            <p>{{ name }}</p>
            <Icon
                name="material-symbols:remove"
                size="24"
                color="#000"
                class="cursor-pointer"
            />
            <p>1</p>
            <Icon
                name="material-symbols:add-rounded"
                size="24"
                color="#000"
                class="cursor-pointer"
            />
            <p>KSH {{ price }}</p>
            <Icon
                name="streamline:interface-delete-2-remove-bold-add-button-buttons-delete"
                size="24"
                color="#000"
                class="cursor-pointer"
                @click="cartStore.removeItem(id)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "#imports";

const cartStore = useCartStore();

defineProps(["id", "name", "price", "imgUrl", "quantity"]);
</script>
