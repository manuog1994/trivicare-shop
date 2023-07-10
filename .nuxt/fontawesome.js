import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faTiktok as freeFabFaTiktok,
  faFacebookF as freeFabFaFacebookF,
  faInstagram as freeFabFaInstagram,
  faYoutube as freeFabFaYoutube,
  faTwitter as freeFabFaTwitter,
  faWhatsapp as freeFabFaWhatsapp,
  faGoogle as freeFabFaGoogle,
  faGooglePlay as freeFabFaGooglePlay,
  faApple as freeFabFaApple,
  faPinterest as freeFabFaPinterest,
  faLinkedinIn as freeFabFaLinkedinIn,
  faTelegram as freeFabFaTelegram
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFabFaTiktok,
  freeFabFaFacebookF,
  freeFabFaInstagram,
  freeFabFaYoutube,
  freeFabFaTwitter,
  freeFabFaWhatsapp,
  freeFabFaGoogle,
  freeFabFaGooglePlay,
  freeFabFaApple,
  freeFabFaPinterest,
  freeFabFaLinkedinIn,
  freeFabFaTelegram
)

config.autoAddCss = false

Vue.component('faIcon', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
