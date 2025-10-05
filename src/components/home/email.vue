<template>
    <div class="email">
        <Container>
            <div class="email-card">
                <h3>Stay Updated with Our
                    Latest Collections</h3>
                <p>Be the first to know about new arrivals, exclusive offers, and design inspiration
                    delivered to your inbox.</p>
                <form action="https://formspree.io/f/xpwqlbvl" method="POST">
                    <input type="email" name="email" required placeholder="Enter your email adress">
                    <button type="submit">Subscribe</button>
                </form>
                <span>We respect your privacy. Unsubscribe at any time.</span>
            </div>
        </Container>
    </div>
</template>

<style scoped>
.email {
    background-color: #FFFBEB;
    width: 100%;
    padding: 64px 0;
}
.email-card{
    width: 672px;
    border: 1px solid #E5E5E5;
    padding: 57px 47px;
    border-radius: 14px;
    margin: 0 auto;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.email-card > h3{
    color: #0A0A0A;
    font-size: 30px;
    font-weight: 700;
    width: 400px;
    text-align: center;
    margin: auto auto 19px auto;
}
.email-card > p{
    color: #737373;
    font-size: 16px;
    font-weight: 400;
    width: 600px;
    text-align: center;
}
.email-card > form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 27px;
    margin-bottom: 16px;
}
.email-card > form > input{
    width: 337px;
    padding: 9.5px 13px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #E5E5E5;
}
.email-card > form > button{
    padding: 10px 16px;
    background-color: #973C00;
    border-radius: 8px;
    color: white;
}
.email-card > span{
    color: #737373;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    justify-content: center;
}
</style>

<script setup>
import Container from "../../layouts/container.vue"
</script>