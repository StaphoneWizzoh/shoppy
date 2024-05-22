import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        items: [] as any[],
        total: 0,
    }),
    getters: {
        itemsNumber(state) {
            return state.items.length;
        },

        totalCartAmount(state) {
            return state.total;
        },
    },
    actions: {
        addItem(item: any) {
            this.items.push(item);
        },

        removeItem(itemId: number) {
            this.items = this.items.filter((item) => item.id !== itemId);
        },

        clearCart() {
            this.items = [];
        },
    },
});
