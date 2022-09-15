import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { Oauth2Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "laravelPassport"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // laravelPassport
  $auth.registerStrategy('laravelPassport', new Oauth2Scheme($auth, {
  "endpoints": {
    "authorization": "http://api.trivicare.test/oauth/authorize",
    "token": "/_auth/oauth/laravelPassport/authorize",
    "userInfo": "http://api.trivicare.test...",
    "logout": false
  },
  "url": "http://api.trivicare.test",
  "clientId": "973bd2ef-601d-435b-a5b2-666435d949e4",
  "name": "laravelPassport",
  "token": {
    "property": "access_token",
    "type": "Bearer",
    "name": "Authorization",
    "maxAge": 31536000
  },
  "refreshToken": {
    "property": "refresh_token",
    "data": "refresh_token",
    "maxAge": 2592000
  },
  "user": {
    "property": false
  },
  "responseType": "code",
  "grantType": "authorization_code",
  "scope": "*"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
