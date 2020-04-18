<template>
    <div>
        <b-navbar class="top-navbar" toggleable="sm" variant="info">
            <b-navbar-brand href="#">
                <img class="d-inline-block align-top" src="~/assets/autocode_color.png" alt="alternative" width="70">
            </b-navbar-brand>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <img class="d-inline-block align-top rounded-circle" rounded="circle" :src="user.avatar" alt="alternative" width="50">
                    </template>
                    <b-dropdown-item href="#" @click="signOut">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import firebaseApp, {firebaseAuth, googleProvider} from '~/services/fireinit.js'


export default {
    name: "Header",

    mounted() {
        console.log("Header-component")
    },

    computed: {
        ...mapGetters('modules/user', [
            'uid',
            'user'
        ])
    },

    methods: {
        ...mapActions('modules/user', [ 'logout']),
        async signOut () {
            try {
                await this.logout()
                this.$router.push('/login')
            } catch (error) {
                console.log("error while signOut", error)
            }
        }
    }

}
</script>

<style>
    .top-navbar {
        background: linear-gradient(90deg, rgba(102,16,242,1) 0%, rgba(111,66,193,1) 100%);
        padding: 0.25rem 0.5rem;
    }

    .dropdown-toggle::after{
        content: none !important; 
    }
</style>