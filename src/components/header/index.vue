<template>
    <Container>
        <div class="nav">
            <div class="nav-bar-top flex justify-between items-center">
                <p>Free shipping on orders over $500</p>

                <div class="flex items-center">
                    <p>Track Order</p>
                    <p>Help & Support</p>
                </div>
            </div>
            <hr>
            <div class="nav-bar-main flex justify-between items-center">
                <router-link to="/" class="logo-link">
                    <img src="/images/logo.svg" alt="Logo" class="logo" />
                </router-link>

                <div class="search flex items-center">
                    <input type="text" placeholder="Search carpets, rugs, categories...">
                    <img src="../../../public/images/lupa.svg" alt="">
                </div>
                <div class="wishlist flex items-center">
                    <img src="../../../public/images/heart.svg" alt="">
                    <img src="../../../public/images/person.svg" alt="">
                    <router-link to="/cart">
                        <img src="/images/cart.svg" alt="cart" class="cart-icon" />
                    </router-link>
                </div>
            </div>
            <hr>
            <div class="nav-bar-menu">
                <ul>
                    <li style="color: #0A0A0A;">All Categories</li>
                    <li>Traditional</li>
                    <li>Modern</li>
                    <li>Vintage</li>
                    <li>Luxury</li>
                    <li>Outdoor</li>
                    <li style="color: #E7000B;">Sale</li>
                </ul>
            </div>
        </div>
    </Container>
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
    left: 12px;
}

.search>input {
    border: 1px solid #E5E5E5;
    width: 440px;
    height: 36px;
    border-radius: 8px;
    outline: none;
    padding-left: 38px;
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
</style>

<script setup>
import Container from "../../layouts/container.vue"
</script>