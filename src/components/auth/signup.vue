<template>
  <Container>
    <Toast />
    <div class="wrapper-form">
      <h3>Create Account</h3>
      <p>Sign up for your CarpetCraft account</p>

      <form @submit.prevent="handleSubmit">
        <label>First Name</label>
        <Input v-model="firstName" class="form-input" variant="auth" type="text" placeholder="John" />
        <span v-if="errors.firstName" class="error-text">{{ errors.firstName }}</span>

        <label>Last Name</label>
        <Input v-model="lastName" class="form-input" variant="auth" type="text" placeholder="Doe" />
        <span v-if="errors.lastName" class="error-text">{{ errors.lastName }}</span>

        <label>Middle Name</label>
        <Input v-model="middleName" class="form-input" variant="auth" type="text" placeholder="Smith" />
        <span v-if="errors.middleName" class="error-text">{{ errors.middleName }}</span>

        <label>Username</label>
        <Input v-model="username" class="form-input" variant="auth" type="text" placeholder="john_smith" />
        <span v-if="errors.username" class="error-text">{{ errors.username }}</span>

        <label>Email</label>
        <Input v-model="email" class="form-input" variant="auth" type="email" placeholder="john@example.com" />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>

        <label>Phone</label>
        <Input v-model="phone" class="form-input" variant="auth" type="text" placeholder="+998901234567" />
        <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>

        <label>User Type</label>
        <Input v-model="userType" class="form-input" variant="auth" type="text" placeholder="Customer / Admin" />
        <span v-if="errors.userType" class="error-text">{{ errors.userType }}</span>

        <label>Password</label>
        <Input v-model="password" class="form-input" variant="auth" type="password" placeholder="Enter your password" />
        <span v-if="errors.password" class="error-text">{{ errors.password }}</span>

        <BaseButton style="margin-top: 16px; margin-bottom: 18px;" type="submit">
          Sign Up
        </BaseButton>
      </form>

      <div class="sign-up">
        <p>Already have an account?</p>
        <span @click="$router.push('/signin')">Sign in</span>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { ref } from "vue";
import { z } from "zod";
import Container from "../../layouts/container.vue";
import Input from "../ui/input.vue";
import BaseButton from "../ui/button.vue";
import { account } from "../../lib/auth";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth";

const toast = useToast();
const router = useRouter();
const authStore = useAuthStore();


const firstName = ref("");
const lastName = ref("");
const middleName = ref("");
const username = ref("");
const email = ref("");
const phone = ref("");
const userType = ref("");
const password = ref("");

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  middleName: z.string().optional(),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?\d{9,15}$/, "Please enter a valid phone number"),
  userType: z.string().min(3, "User type is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const errors = ref({
  firstName: "",
  lastName: "",
  middleName: "",
  username: "",
  email: "",
  phone: "",
  userType: "",
  password: "",
});

async function handleSubmit() {
  for (let key in errors.value) errors.value[key] = "";

  const result = schema.safeParse({
    firstName: firstName.value,
    lastName: lastName.value,
    middleName: middleName.value,
    username: username.value,
    email: email.value,
    phone: phone.value,
    userType: userType.value,
    password: password.value,
  });

  if (!result.success) {
    result.error.issues.forEach((err) => {
      const field = err.path[0];
      errors.value[field] = err.message;
    });
    return;
  }

  try {
    
    await account.create(
      "unique()",
      email.value,
      password.value,
      `${firstName.value} ${lastName.value}`
    );

    
    await account.createEmailPasswordSession(email.value, password.value);

    
    await account.updatePrefs({
      username: username.value,
      phone: phone.value,
      userType: userType.value,
    });

  
    await authStore.fetchUser();

    toast.add({
      severity: "success",
      summary: "Account Created",
      detail: "You have been signed up and logged in successfully!",
      life: 3000,
    });


    setTimeout(() => {
      router.push("/");
    }, 1500);
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Sign Up Failed",
      detail: error.message,
      life: 3000,
    });
  }
}

</script>




<style scoped>
.wrapper-form {
  padding: 25px;
  border: 1px solid #E5E5E5;
  border-radius: 14px;
  width: 448px;
  margin: 64px auto;
}

.wrapper-form > h3 {
  color: #0A0A0A;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 6px;
}

.wrapper-form > p {
  color: #737373;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 24px;
  text-align: center;
}

form > label {
  color: #0A0A0A;
  font-size: 14px;
  font-weight: 500;
}

.form-input {
  margin: 8px 0 16px 0;
}

.sign-up {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
}

.sign-up > p {
  color: #737373;
  font-size: 14px;
  font-weight: 400;
}

.sign-up > span {
  color: #973C00;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.error-text {
  color: red;
  font-size: 13px;
  margin-top: -8px;
  margin-bottom: 10px;
  display: block;
}
</style>
