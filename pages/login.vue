<template>
    <div class="login-container-wrapper"><img src="../assets/autocode_color.png" width="150" height="100" alt="">
        <p class="login-description-text">Sign in for the full experience</p>
        <div class="login-button-container">
            <div class="google-login-button" @click="googleSignUp">
              <img src="../assets/google.svg" width="20" height="20" alt="">
              <div class="login-text">Connect With Google</div>
              <div v-if="showSpinner" class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebaseApp, {firebaseAuth, googleProvider} from '@/services/fireinit.js'

export default {
    layout: 'minimal',

    middleware: ['login-middleware'],

    data() {
      return {
        showSpinner: false
      }
    },

    methods: {
      ...mapActions('modules/user', [ 'login' ]),
        
        async googleSignUp () {
          this.showSpinner = true
          const { user } = await firebaseAuth.signInWithPopup(googleProvider)
          await this.login(user)
          this.$router.push('/infrastructure')
        },
    }
}
</script>


<style scoped>

.spinner-border{
  width: 20px !important;
  height: 20px !important;
  border-top-color: currentcolor !important;
  border-top-style: solid !important;
  border-top-width: 0.15em !important;
  border-right-color: transparent !important;
  border-right-style: solid !important;
  border-right-width: 0.15em !important;
  border-bottom-color: currentcolor !important;
  border-bottom-style: solid !important;
  border-bottom-width: 0.15em !important;
  border-left-color: currentcolor !important;
  border-left-style: solid !important;
  border-left-width: 0.15em !important;
  border-image-source: initial !important;
  border-image-slice: initial !important;
  border-image-width: initial !important;
  border-image-outset: initial !important;
  border-image-repeat: initial !important;
}

.lnd_button_4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 280px;
  margin-bottom: 20px;
  margin-left: 0px;
  padding: 12px 35px;
  border-radius: 30px;
  background-color: #7540ee;
  -webkit-transition: all 250ms ease;
  transition: all 250ms ease;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
}

.lnd_button_4.google-login-button {
  margin-bottom: 40px;
  background-color: #fff;
  box-shadow: 6px 0 8px 0 rgba(76, 98, 235, 0.25);
  color: #000;
}

.lnd_button_4.facebook-login-button {
  margin-bottom: 40px;
  background-color: #3b5998;
  box-shadow: 4px 4px 8px 0 rgba(76, 98, 235, 0.25);
}

.lnd_button_4.number-login-button {
  margin-bottom: 40px;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0 rgba(76, 98, 235, 0.25);
  color: #000;
}

.login-container-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  /* -webkit-box-align: start; */
  /* -webkit-align-items: flex-start; */
  -ms-flex-align: start;
  /* align-items: flex-start; */
  text-align: center;

  margin-top:40px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-align-items: center;
  
}

.login-description-text {
  width: auto;
  margin-bottom: 35px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(0,0,0,0.9);
  line-height: 20px;
  margin-top: 25px;
}

.login-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.see-demo {
  display: block;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  color: #4c62eb;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

.google-login-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 280px;
  max-width: 280px;
  min-height: 35px;
  min-width: 0px;
  margin-bottom: 40px;
  padding: 5px 15px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0 rgba(76, 98, 235, 0.25);
  cursor: pointer;
}

.google-login-button.facebook-login-button {
  background-color: #3b5998;
}

.lnd_badge_circle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30px;
  height: 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 100px;
  background-color: #38cb89;
}

.login-text {
  margin-left: 8px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #000;
  font-size: 1.2;
  /* font-weight: 700; */
  text-align: center;
  letter-spacing: 1.5px;
}

.facebook-login-text {
  margin-left: 8px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.5px;
}

.facebbok-login-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 280px;
  max-width: 280px;
  min-height: 35px;
  min-width: 0px;
  margin-bottom: 40px;
  padding: 5px 15px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: #3b5998;
  box-shadow: 4px 4px 8px 0 rgba(76, 98, 235, 0.25);
  cursor: pointer;
}

.facebbok-login-button.facebook-login-button {
  background-color: #3b5998;
}

.login-button-container-copy {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.number-login-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 280px;
  max-width: 280px;
  min-height: 35px;
  min-width: 0px;
  margin-bottom: 40px;
  padding: 5px 15px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0 rgba(76, 98, 235, 0.25);
  cursor: pointer;
}

.number-login-button.facebook-login-button {
  background-color: #3b5998;
}

@media (max-width: 767px) {
  .lnd_button_4 {
    margin-left: 15px;
  }
  .login-container-wrapper {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .login-description-text {
    max-width: 268px;
  }
  .body {
    margin-left: 0px;
  }
}

@media (max-width: 479px) {
  .login-container-wrapper {
    margin-top: 40px;
  }
}

</style>

