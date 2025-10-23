<template>
  <Container>
    <div class="nav">
      <!-- Top bar -->
      <div class="nav-bar-top flex justify-between items-center">
        <p>Free shipping on orders over $500</p>
        <div class="flex items-center gap-4">
          <p>Track Order</p>
          <p>Help & Support</p>
        </div>
      </div>

      <hr />

      <!-- Main bar -->
      <div class="nav-bar-main flex justify-between items-center">
        <router-link to="/" class="logo-link">
          <img src="/images/logo.svg" alt="Logo" class="logo" />
        </router-link>

        <div class="search flex items-center">
          <Input
            type="text"
            variant="small"
            placeholder="Search carpets, rugs, categories..."
            icon="pi pi-search"
            iconPosition="left"
          />
        </div>

        <div class="wishlist flex items-center gap-4">
          <img src="/images/heart.svg" alt="heart" class="w-6 h-6" />

          <Button class="p-button-text p-button-plain" @click="openMenu">
            <img src="/images/person.svg" alt="profile" class="w-8 h-8 cursor-pointer" />
          </Button>

          <Menu :model="menuItems" popup ref="menuRef" />

          <router-link to="/cart">
            <img src="/images/cart.svg" alt="cart" class="w-6 h-6" />
          </router-link>
        </div>
      </div>

      <hr />

      <!-- Categories bar -->
      <div class="nav-bar-menu">
        <ul class="flex gap-6">
          <li style="color: #0a0a0a">All Categories</li>
          <li>Traditional</li>
          <li>Modern</li>
          <li>Vintage</li>
          <li>Luxury</li>
          <li>Outdoor</li>
          <li style="color: #e7000b">Sale</li>
        </ul>
      </div>
    </div>

    <Toast />
  </Container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import Container from "../../layouts/container.vue";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Toast from "primevue/toast";
import Input from "../ui/input.vue";
import { useToast } from "primevue/usetoast";
import { useAuthStore } from "../../store/auth";

const toast = useToast();
const router = useRouter();
const menuRef = ref(null);
const authStore = useAuthStore();

onMounted(async () => {
  await authStore.fetchUser();
  console.log("🧠 Full user object:", authStore.user);
});

const isLoggedIn = computed(() => !!authStore.user);

const openMenu = (event) => {
  menuRef.value?.toggle?.(event);
};

const menuItems = computed(() => {
  if (isLoggedIn.value && authStore.user) {
    return [
      {
  label: `👤 ${authStore.user?.prefs?.username || "User"}`,
  disabled: true,
},

      { separator: true },
      {
        label: "Profile",
        command: () => router.push("/profile"),
      },
      {
        label: "Logout",
        command: async () => {
          await authStore.signOut();
          toast.add({ severity: "success", summary: "Logged out", life: 2000 });
          router.push("/");
        },
      },
    ];
  } else {
    return [
      { label: "Sign In", command: () => router.push("/signin") },
      { label: "Sign Up", command: () => router.push("/signup") },
    ];
  }
});
</script>


<style scoped>
.nav {
  width: 100%;
}

.nav-bar-top {
  color: #737373;
  font-size: 14px;
  height: 37px;
}

.nav-bar-main {
  margin: 16px 0;
}

.wishlist {
  gap: 28px;
}

.nav-bar-menu {
  margin: 16px 0;
}

.nav-bar-menu > ul {
  color: #737373;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  gap: 31px;
}

.nav-bar-menu > ul > li {
  cursor: pointer;
}

.nav-bar-menu > ul > li:hover {
  opacity: 0.5;
}

.p-button-plain {
  width: 24px;
  height: 24px;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.p-button-plain:hover {
  background: transparent !important;
}
</style>
