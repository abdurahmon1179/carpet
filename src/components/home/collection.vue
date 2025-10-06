<template>
  <Container>
    <div class="title">
      <h2>Featured Collection</h2>
      <p>
        Handpicked carpets that showcase exceptional craftsmanship and
        timeless design
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

          <button>
            <img src="/images/whitecart.svg" alt="" />
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>

    <div class="btn-wrapper">
      <button v-if="!loading && visibleCards.length < cards.length" class="add-btn" @click="loadMore">
        View All Products
      </button>

      <div v-else-if="loading" class="loader"></div>
    </div>
  </Container>
</template>

<script setup>
import { ref, computed } from "vue"
import Container from "../../layouts/container.vue"

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

const visibleCards = computed(() => cards.slice(0, visibleCount.value))

function loadMore() {
  loading.value = true
  setTimeout(() => {
    visibleCount.value += 4
    loading.value = false
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

.card-body>button {
  background-color: #973C00;
  margin-top: 18px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  color: white;
}

.add-btn {
  border: 1px solid #E5E5E5;
  padding: 12px 25px;
  border-radius: 8px;
  color: #0A0A0A;
  font-weight: 500;
  font-size: 14px;
  display: block;
  margin: 0 auto;
  margin-bottom: 76px;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}


.loader {
  width: 32px;
  height: 32px;
  border: 3px solid #ccc;
  border-top: 3px solid #973C00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
