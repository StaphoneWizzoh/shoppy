import { defineStore } from "pinia";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export const useProductStore = defineStore({
    id: "Product",
    state: () => ({
        products: [] as any[],
    }),
    getters: {
        allProducts() {
            return this.products;
        },
    },
    actions: {},
});
