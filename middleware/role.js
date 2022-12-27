export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.auth.user.roles[0].name != 'admin') {
      return redirect('/')
    }
}