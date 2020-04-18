export default function ({ store, redirect, route }) {

    // if user is not logged in then redirect to login page
    // and if user is loigged in then do nothing

    return redirect('/login')
}
