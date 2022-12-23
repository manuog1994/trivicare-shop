
export default async function ({ app, store, redirect }) {
  // the following look directly for the cookie created by nuxtjs/auth
  // instead of using $auth.loggedIn
  const user = store.state.auth.loggedIn
  if (user === true) {
    //console.log('user', user)
    redirect('/my-account')
  } else {
    // redirect to homepage
    //console.log()
    redirect('/login')
  }
}