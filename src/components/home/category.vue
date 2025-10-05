<template>
    <Container>
        <div class="category-title">
            <h3>Shop by Category</h3>
            <p>Find the perfect carpet for every room and style preference</p>
        </div>
        <div class="category-card-wrapper">
    <div
      class="category-card"
      v-for="(category, index) in categories"
      :key="index"
    >
      <img :src="category.imageSrc" alt="category image" />
      <div class="text">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
        <span>{{ category.productsCount }} products</span>
      </div>
    </div>
  </div>    
    </Container>
</template>

<style scoped>
.category-title{
    margin-top: 64px;
}
.category-title{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.category-title > h3{
    color: #0A0A0A;
    font-weight: 700;
    font-size: 36px;
}
.category-title > p{
    color: #737373;
    font-size: 18px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 48px;
}
.category-card {
    position: relative;
    border: 1px solid #E5E5E5;
    display: inline-block;
    padding: 20px 0;
    border-radius: 14px;
}
.category-card > img{
    filter: brightness(0.8) 
}
.text{
    position: absolute;
    top: 109px;
    left: 24px;
    color: white;
}
.text > h3{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4px;
}
.text > p{
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
}
.text > span{
    padding: 4px 8px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
}
.category-card-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px; 
  justify-content: space-between; 
  margin-bottom: 64px;
}

</style>

<script setup>
import Container from "../../layouts/container.vue"

const categories = [
  {
    imageSrc: "/images/category.svg",
    title: "Traditional Rugs",
    description: "Timeless patterns and rich heritage",
    productsCount: 156,
  },
  {
    imageSrc: "/images/category2.svg",
    title: "Modern Rugs",
    description: "Sleek designs for contemporary spaces",
    productsCount: 98,
  },
  {
    imageSrc: "/images/category.svg",
    title: "Vintage Rugs",
    description: "Classic pieces with character and charm",
    productsCount: 73,
  },
  {
    imageSrc: "/images/category2.svg",
    title: "Outdoor Rugs",
    description: "Durable and stylish for open-air living",
    productsCount: 45,
  },
  {
    imageSrc: "/images/category.svg",
    title: "Kids Rugs",
    description: "Playful colors and cozy comfort",
    productsCount: 62,
  },
  {
    imageSrc: "/images/category2.svg",
    title: "Bohemian Rugs",
    description: "Eclectic patterns and relaxed vibes",
    productsCount: 84,
  },
];

</script>