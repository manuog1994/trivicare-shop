export default function ({ app, store, redirect, route }) {
    const cookies = app.$cookies.get('auth._token.laravelSanctum');

    if (cookies && route.path === '/login') {
        redirect('/');
    }

    if (!cookies && route.path == '/my-account') {
        redirect('/login');
    }
    
}