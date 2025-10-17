import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
  }),

  actions: {

    async signUp(payload) {
      this.loading = true
      this.error = null
      try {

        await new Promise(resolve => setTimeout(resolve, 1000))

      
        this.user = {
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName,
          middleName: payload.middleName,
          phone: payload.phone,
          userType: payload.userType,
          username: payload.username
        }

        
        this.token = 'fake-token-' + Date.now()


        localStorage.setItem('user', JSON.stringify(this.user))
        localStorage.setItem('token', this.token)

        return true
      } catch (err) {
        this.error = 'Sign up failed'
        return false
      } finally {
        this.loading = false
      }
    },

    
    async signIn(payload) {
      this.loading = true
      this.error = null
      try {
        await new Promise(resolve => setTimeout(resolve, 800))

        
        const stored = JSON.parse(localStorage.getItem('user') || 'null')
        if (stored && stored.username === payload.username) {
          this.user = stored
          this.token = 'fake-token-' + Date.now()
          localStorage.setItem('token', this.token)
          return true
        } else {
          this.error = 'Invalid credentials'
          return false
        }
      } catch (err) {
        this.error = 'Sign in failed'
        return false
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
})
