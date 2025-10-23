// src/lib/auth.js
import { Client, Account } from "appwrite";
import { useAuthStore } from "../store/auth";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export async function initAuthListener() {
  console.log("👂 Auth listener initialized...");
  try {
    const user = await account.get();
    const authStore = useAuthStore();
    authStore.user = user;
    console.log("✅ Logged in user:", user);
  } catch (error) {
    console.warn("⚠️ No user logged in:", error.message);
  }
}

export const authService = {
  async signUp({ email, password, name, username, phone, userType }) {

    const user = await account.create("unique()", email, password, name);


    await account.createEmailPasswordSession(email, password);


    await account.updatePrefs({
      username,
      phone,
      userType,
    });


    const updatedUser = await account.get();

    const authStore = useAuthStore();
    authStore.user = updatedUser;

    console.log("✅ Username saqlandi:", updatedUser.prefs.username);
    return updatedUser;
  },

  async fetchUser() {
    try {
      const user = await account.get();
      const authStore = useAuthStore();
      authStore.user = user;
      console.log("✅ Current user:", user);
    } catch (error) {
      console.warn("⚠️ No user logged in:", error.message);
    }
  },

  async signOut() {
    try {
      await account.deleteSession("current");
      const authStore = useAuthStore();
      authStore.user = null;
      console.log("👋 Logged out");
    } catch (error) {
      console.error("❌ Logout error:", error.message);
    }
  },
};
