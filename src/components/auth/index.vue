<template>
    <Container>
        <div class="wrapper-form">
            <h3>Welcome Back</h3>
            <p>Sign in to your CarpetCraft account</p>
            <form action="">
                <label for="">Email</label>
                <Input class="form-input" variant="auth" type="text" placeholder="john@example.com" />
                <label for="">Password</label>
                <Input class="form-input" variant="auth" type="password" placeholder="Enter your password" />
                <span>forgot password?</span>
                <BaseButton style="margin-top: 16px; margin-bottom: 18px;">Sign In</BaseButton>
            </form>
            <div class="sign-up">
                <p>Don't have an account?</p>
                <span>Sign up</span>
            </div>
            <div class="example">
                <h3>Demo Credentials:</h3>
                <p>Admin: admin@carpetcraft.com / password</p>
                <p style="margin-top: 4px;">Customer: john@example.com / password</p>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.wrapper-form {
    padding: 25px;
    border: 1px solid #E5E5E5;
    border-radius: 14px;
    width: 448px;
    margin: 64px auto;
}

.wrapper-form>h3 {
    color: #0A0A0A;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 6px;
}

.wrapper-form>p {
    color: #737373;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
    text-align: center;
}

form>label {
    color: #0A0A0A;
    font-size: 14px;
    font-weight: 500;
}

.form-input {
    margin: 8px 0 16px 0;
}

form>span {
    color: #973C00;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 16px;
    cursor: pointer;
}

.sign-up {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
}

.sign-up>p {
    color: #737373;
    font-size: 14px;
    font-weight: 400;
}

.sign-up>span {
    color: #973C00;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}

.example {
    padding: 16px;
    margin-top: 24px;
    background-color: #FFFBEB;
    border-radius: 10px;
}

.example>h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #973C00;
}

.example>p {
    color: #BB4D00;
    font-size: 14px;
    font-weight: 400;
}
</style>

<script setup>
import Container from "../../layouts/container.vue"
import Input from "../ui/input.vue"
import BaseButton from "../ui/button.vue"
</script>