<template>
   <footer>
      <Container>
         <div class="footer-menu">
            <div class="info-company">
               <img src="../../../public/images/footerlogo.svg" alt="">
               <p>Premium carpets and rugs for discerning
                  homeowners. Quality craftsmanship meets timeless design.
               </p>
               <span>📍 123 Design District, NY 10001</span>
               <span>📞 (555) 123-4567</span>
               <span>✉️ hello@carpetcraft.com</span>
            </div>

            <div class="flex justify-between w-full">
               <div class="footer-links">
                  <p>Quick Links</p>
                  <ul>
                     <li>About Us</li>
                     <li>Our Story</li>
                     <li>Showroom</li>
                     <li>Custom Orders</li>
                     <li>Care Guide</li>
                  </ul>
               </div>

               <div class="footer-links">
                  <p>Customer Service</p>
                  <ul>
                     <li>Contact Us</li>
                     <li>Shipping Info</li>
                     <li>Returns</li>
                     <li>Size Guide</li>
                     <li>FAQ</li>
                  </ul>
               </div>

               <div class="footer-email">
                  <p>Stay Connected</p>
                  <span>Get design tips and exclusive offers</span>
                  <form action="https://formspree.io/f/xpwqlbvl" method="POST">
                     <input type="email" name="email" placeholder="Your email" required>
                     <button type="submit">Subscribe</button>
                  </form>
               </div>
            </div>
         </div>
         <hr>
         <p style="color: #99A1AF; margin-top: 33px; font-size: 14px; font-weight: 400; text-align: center;">© 2024
            CarpetCraft. All rights reserved. | Privacy Policy | Terms of Service</p>
      </Container>


   </footer>
</template>

<style scoped>
footer {
   background-color: #101828;
   width: 100%;
   color: white;
   padding: 48px 0;
}

.info-company>p {
   color: #D1D5DC;
   font-size: 14px;
   width: 340px;
   line-height: 20px;
   margin: 18px 0;
}

.info-company>span {
   display: block;
   margin-top: 8px;
   color: #D1D5DC;
   font-size: 14px;
   font-weight: 400;
}

.footer-links>p {
   font-size: 16px;
   font-weight: 600;
   margin-bottom: 16px;
}

.footer-links>ul {
   display: flex;
   flex-direction: column;
   gap: 12px;
   color: #D1D5DC;
   font-size: 14px;
   font-weight: 400;
}

.footer-links>ul>li {
   cursor: pointer;
}

.footer-links>ul>li:hover {
   opacity: 0.5;
}

.footer-email>p {
   font-size: 16px;
   font-weight: 600;
   margin-bottom: 16px;
}

.footer-email>span {
   color: #D1D5DC;
   font-size: 14px;
   font-weight: 400;
}

.footer-email>form>input {
   margin-top: 16px;
   border: 1px solid #364153;
   border-radius: 8px;
   background-color: #1E2939;
   padding: 9.5px 13px;
   outline: none;
   box-shadow: 0px 1px 2px 0px #0000000D;
   width: 100%;
}

.footer-email>form>button {
   background-color: #973C00;
   border-radius: 8px;
   box-shadow: 0px 1px 2px 0 #0000000D;
   padding: 10px 0;
   border: none;
   width: 100%;
   margin-top: 8px;
}

.footer-email>button:hover {
   opacity: 0.8;
   color: white;
}

.footer-menu {
   display: flex;
   gap: 48px;
}

hr {
   margin-top: 32px;
   background-color: #1E2939;
   height: 2px;
   border: none;
}
</style>

<script setup>
import Container from "../../layouts/container.vue"
</script>