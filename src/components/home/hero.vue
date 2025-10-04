<template>
    <div class="hero">
        <Container>
            <div class="hero-wrapper flex items-center justify-between">
                <div class="text">
                    <h1>Premium Carpets for Every Home</h1>
                    <p>Discover our curated collection of handwoven rugs,
                        modern carpets, and timeless designs that transform
                        any space into a masterpiece.</p>
                    <div class="button-group">
                        <button class="first-btn">
                            <p>Shop Collection</p>
                            <img src="../../../public/images/strelka.svg" alt="">
                        </button>
                        <button class="second-btn">
                            View Catalog
                        </button>
                    </div>
                </div>
                <div class="image">
                    <img src="../../../public/images/carpet.png" alt="">
                </div>
            </div>
        </Container>
    </div>
</template>

<style scoped>
.hero {
    background: linear-gradient(to bottom, #FFFBEB 0%, #FFEDD4 100%);
    border-top: 1px solid #E5E5E5;
    padding: 128px 0;
}
.text > h1{
    color: #7B3306;
    font-size: 60px;
    font-weight: 700;
    width: 600px;
    line-height: 75px;
    margin-bottom: 23px;
}
.text > p{
    color: #BB4D00;
    font-size: 20px;
    font-weight: 400;
    width: 500px;
    line-height: 28px;
    margin-bottom: 35px;
}
.button-group{
    display: flex;
    align-items: center;
    gap: 16px;
}
.first-btn{
    background-color: #973C00;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 16px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    font-size: 14px;
}
.second-btn{
    padding: 12px 25px;
    background-color: transparent;
    border: 1px solid #973C00;
    border-radius: 8px;
}
.image > img{
    width: 700px;
    height: 700px;
    border-radius: 10px;
}
</style>

<script setup>
import Container from "../../layouts/container.vue";
</script>