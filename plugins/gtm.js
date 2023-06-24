export default function({ app, $gtm, route, store }) {
    app.router.afterEach((to, from) => {
        // Verifica si el usuario ha aceptado las cookies
        const acceptGtm = store.state.gtm
        if (acceptGtm) {
          // Habilita el módulo GTM
          $gtm.init('GTM-K446ZB4');
        }
    })
}
  