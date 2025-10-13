<template>
    <div class="email">
        <Container>
            <div class="email-card">
                <h3>Stay Updated with Our
                    Latest Collections</h3>
                <p>Be the first to know about new arrivals, exclusive offers, and design inspiration
                    delivered to your inbox.</p>
                <form action="https://formspree.io/f/xpwqlbvl" method="POST">
                    <Input type="email" name="email" variant="small" required placeholder="Enter your email adress"/>
                    <BaseButton size="small" type="submit">Subscribe</BaseButton>
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 448px;
    margin-top: 27px;
    margin-bottom: 16px;
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
import BaseButton from "../ui/button.vue"
import Input from "../ui/input.vue"
</script>