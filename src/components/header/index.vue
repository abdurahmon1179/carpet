<template>
    <Container>
        <div class="nav">

            <div class="nav-bar-top flex justify-between items-center">
                <p>Free shipping on orders over $500</p>
                <div class="flex items-center gap-4">
                    <p>Track Order</p>
                    <p>Help & Support</p>
                </div>
            </div>

            <hr />


            <div class="nav-bar-main flex justify-between items-center">
                <router-link to="/" class="logo-link">
                    <img src="/images/logo.svg" alt="Logo" class="logo" />
                </router-link>


                <div class="search flex items-center">
                    <Input type="text" placeholder="Search carpets, rugs, categories..." icon="pi pi-search"
                        iconPosition="left" />
                </div>


                <div class="wishlist flex items-center gap-4">
                    <img src="/images/heart.svg" alt="heart" class="w-6 h-6" />


                    <Button class="p-button-text p-button-plain" @click="openMenu">

                        <img src="/images/person.svg" alt="profile" class="w-8 h-8 cursor-pointer" />
                    </Button>

                    <Menu :model="items" popup ref="menuRef" />

                    <router-link to="/cart">
                        <img src="/images/cart.svg" alt="cart" class="w-6 h-6" />
                    </router-link>
                </div>
            </div>

            <hr />


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
    </Container>

    <Toast />
</template>

<style scoped>
.nav {
    width: 100%;
}

.nav-bar-top {
    color: #737373;
    font-size: 400;
    font-size: 14px;
    height: 37px;
}

.nav-bar-top>div {
    gap: 15px;
}

.nav-bar-main {
    margin: 16px 0;
}

.search {
    position: relative;
}

.search>img {
    position: absolute;
    left: 5px;
}



.wishlist {
    gap: 28px;
}

.nav-bar-menu {
    margin: 16px 0;
}

.nav-bar-menu>ul {
    color: #737373;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    gap: 31px;
}

.nav-bar-menu>ul>li {
    cursor: pointer;
}

.nav-bar-menu>ul>li:hover {
    opacity: 0.5;
}

.p-button-plain {
    width: 24px;
    height: 24px;
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: none !important;
}

.p-button-plain:hover,
.p-button-plain:focus,
.p-button-plain:active {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    outline: none !important;
}
</style>

<script setup>
import { ref } from "vue";
import Container from "../../layouts/container.vue";
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Toast from "primevue/toast";
import Input from "../ui/input.vue"




const toast = useToast();

const menuRef = ref(null);

const openMenu = (event) => {
    if (menuRef.value && menuRef.value.toggle) {
        menuRef.value.toggle(event);
    }
};

const items = [
    {
        label: "Profile",

    },
    {
        label: "Settings",

    },
    { separator: true },
    {
        label: "Logout",
    },
];
</script>