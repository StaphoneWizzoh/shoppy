import { useProductStore } from "#imports";

export default defineNuxtPlugin(async (nuxtApp) => {
    const productStore = useProductStore(nuxtApp.$pinia);

    try {
        await productStore.fetchProducts();
        console.log("Products fetched successfully");
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});
