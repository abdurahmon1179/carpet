
<template>
  <Container>
    <div class="title">
      <h2>Featured Collection</h2>
      <p>
        Handpicked carpets that showcase exceptional craftsmanship and
        timeless design~
      </p>
    </div>

    <div class="card-wrapper">
      <div class="card" v-for="(card, index) in visibleCards" :key="index">
        <div class="card-img">
          <img :src="card.imageSrc" alt="" />
          <span>{{ card.discount }}</span>
          <img class="like" src="/images/like.svg" alt="" />
        </div>

        <div class="card-body">
          <span>{{ card.category }}</span>
          <h3>{{ card.title }}</h3>

          <div class="product-rate">
            <img src="/images/star.svg" alt="rating star" />
            <p>{{ card.rating.score }}</p>
            <span>({{ card.rating.reviews }} reviews)</span>
          </div>

          <div class="product-price">
            <p>${{ card.price.current }}</p>
            <span>${{ card.price.old }}</span>
          </div>

          <BaseButton class="btn-extra">
            <img src="/images/whitecart.svg" alt="" />
            <p>Add to Cart</p>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="btn-wrapper">
      <button
        class="add-btn"
        :disabled="loading || allLoaded"
        @click="loadMore"
      >
        <template v-if="loading">
          <span class="spinner"></span>
          Loading...
        </template>

        <template v-else-if="allLoaded">
          All Products Loaded
        </template>

        <template v-else>
          View All Products
        </template>
      </button>
    </div>












  </Container>
</template>

<script setup>
import { ref, computed } from "vue"
import Container from "../../layouts/container.vue"
import BaseButton from '../ui/button.vue'

const cards = Array.from({ length: 16 }, () => ({
  imageSrc: "/images/card.svg",
  discount: "-19%",
  category: "Traditional",
  title: "Persian Heritage Rug",
  rating: { score: 4.8, reviews: 124 },
  price: { current: 1299, old: 1599 },
}))

const visibleCount = ref(4)
const loading = ref(false)
const allLoaded = ref(false)

const visibleCards = computed(() => cards.slice(0, visibleCount.value))

function loadMore() {
  if (allLoaded.value) return

  loading.value = true
  setTimeout(() => {
    visibleCount.value += 4
    loading.value = false
    if (visibleCount.value >= cards.length) {
      allLoaded.value = true
    }
  }, 1000)
}
</script>


<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title>h2 {
  color: #0A0A0A;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 19px;
  margin-top: 64px;
}

.title>p {
  color: #737373;
  font-size: 18px;
  font-weight: 400;
  width: 550px;
  text-align: center;
  margin-bottom: 52px;
}

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.card {
  border: 1px solid #E5E5E5;
  padding: 25px 0 41px 0;
  display: inline-block;
  border-radius: 14px;
}

.card-img {
  position: relative;
}

.card-img>span {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #FB2C36;
  padding: 4px 11px;
  border-radius: 12px;
  border: none;
  color: white;
}

.like {
  position: absolute;
  top: 12px;
  right: 12px;
}

.card-body {
  margin-top: 42px;
  padding: 0 17px;
}

.card-body>span {
  background-color: #F5F5F5;
  padding: 4px 11px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.card-body>h3 {
  margin-top: 8px;
  color: #0A0A0A;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
}

.product-rate {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 14px;
}

.product-rate>p {
  color: #0A0A0A;
  font-size: 14px;
  font-weight: 500;
}

.product-rate>span {
  color: #737373;
  font-size: 14px;
  font-weight: 400;
}

.product-price {
  display: flex;
  gap: 7px;
  align-items: center;
}

.product-price>p {
  color: #973C00;
  font-size: 24px;
  font-weight: 700;
}

.product-price>span {
  color: #737373;
  font-size: 18px;
  font-weight: 400;
  text-decoration: line-through;
}

.btn-extra{
  margin-top: 18px;
}

.add-btn {
  background-color: #fff;
  color: #000;
  border: 1px solid #E5E5E5;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.add-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid #000;
  border-top-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
