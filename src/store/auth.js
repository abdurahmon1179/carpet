import { defineStore } from "pinia";
import { account } from "../lib/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      try {
        this.user = await account.get();
        console.log("✅ User fetched:", this.user);
      } catch (error) {
        this.user = null;
        console.warn("⚠️ No user logged in:", error.message);
      }
    },

    async signOut() {
      try {
        await account.deleteSession("current"); 
        this.user = null;
        console.log("👋 Logged out successfully");
      } catch (error) {
        console.error("❌ Logout failed:", error.message);
      }
    },
  },
});
