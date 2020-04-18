import firebaseApp, {firebaseAuth, googleProvider} from '@/services/fireinit.js'
import Cookies from 'js-cookie'


export const state = () => ({
    uid: null,
    user: null
})

export const getters = {

uid(state) {
    if (state.user && state.user.uid) return state.user.uid
    else return null
},

user(state) {
    return state.user
},

isAuthenticated(state) {
        return !!state.user && !!state.user.uid
    }
}

export const actions = {

    async login({dispatch, state}, user) {
        const token = await firebaseAuth.currentUser.getIdToken(true)
        const userInfo = {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            uid: user.uid
        }

        Cookies.set("access_token", token, { expires: 7 }); // saving token in cookie for server rendering
        await dispatch('setUSER', userInfo)
        await dispatch('saveUID', userInfo.uid)
    },

    async logout({commit, dispatch}) {
        await firebaseAuth.signOut()
        
        Cookies.remove('access_token');
        commit('setUSER', null)
        commit('saveUID', null)
    },

    saveUID({commit}, uid) {
        commit('saveUID', uid)
    },

    setUSER({commit}, user) {
        commit('setUSER', user)
    }
}

export const mutations = {
    saveUID (state, uid) {
        state.uid = uid
    },
    setUSER (state, user) {
        state.user = user
    }
}