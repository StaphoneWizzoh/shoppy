import { defineStore } from "pinia";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const useProductStore = defineStore({
    id: "Product",
    state: () => ({
        products: [] as any[],
    }),
    getters: {
        allProducts(): any[] {
            return this.products;
        },
    },
    actions: {
        async fetchProducts() {
            this.products = await prisma.product.findMany();
        },

        async updateProductQuantity(id: number, newQuantity: number) {},
        async updateProduct(id: number, updatedProduct: any) {
            const product = await prisma.product.update({
                where: { id },
                data: updatedProduct,
            });
            const index = this.products.findIndex(
                (product) => product.id === id
            );
            if (index !== -1) {
                this.products[index] = product;
            }
        },
        async deleteProduct(id: number) {
            await prisma.product.delete({ where: { id } });
            this.products = this.products.filter(
                (product) => product.id !== id
            );
        },
    },
});
