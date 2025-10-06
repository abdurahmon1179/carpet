<template>
    <div class="no-data">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9" />
        </svg>
        <h2>No Orders Yet</h2>
        <p>You haven't placed orders yet. Start shopping to see your order history here.</p>

        <router-link to="/" class="logo-link">
                    <button class="btn">Start Shopping</button>
        </router-link>
        
    </div>
</template>

<style scoped>
.no-data{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 64px 0;
}
.no-data > svg{
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
}
.no-data > h2{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
}
.no-data > p{
    color: #737373;
    width: 400px;
    text-align: center;
    margin-bottom: 16px;
}
.btn{
    background-color: #973C00;
   border-radius: 8px;
   box-shadow: 0px 1px 2px 0 #0000000D;
   padding: 10px 12px;
   border: none;
   color: white;
   margin-top: 8px;
}
</style>

<script setup>

</script>