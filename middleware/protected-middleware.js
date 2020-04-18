export default function ({ store, redirect, route }) {

    // if user is not logged in then redirect to login page
    // and if user is loigged in then do nothing

    console.log("infrastructure-isAuthenticated", store.getters['modules/user/isAuthenticated'])

    if (!store.getters['modules/user/isAuthenticated']) {
        return redirect('/login')
    }
}