import Vue from 'vue'

import './fonts.css'

import { head } from 'nuxt-speedkit/plugins/vFont/head'
import vFont from 'nuxt-speedkit/plugins/vFont'
import FontList from 'nuxt-speedkit/classes/FontList'
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';

Vue.use(vFont)

const speedkit = Object.freeze({
  head: () => console.error('$speedkit.head() is not available in context'),
  crossorigin: "anonymous",
  isBrowserSupported: () => isSupportedBrowser({regex: new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(14[_.]5|14[_.]([6-9]|\u005Cd{2,})|14[_.]8|14[_.](9|\u005Cd{2,})|(1[5-9]|[2-9]\u005Cd|\u005Cd{3,})[_.]\u005Cd+|15[_.]5|15[_.]([6-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})[_.]\u005Cd+|16[_.]0|16[_.]([1-9]|\u005Cd{2,})|(1[7-9]|[2-9]\u005Cd|\u005Cd{3,})[_.]\u005Cd+)(?:[_.]\u005Cd+)?)|(Opera Mini(?:\u005C\u002Fatt)?\u005C\u002F?(\u005Cd+)?(?:\u005C.\u005Cd+)?(?:\u005C.\u005Cd+)?)|(Opera\u005C\u002F.+Opera Mobi.+Version\u005C\u002F(72|(7[3-9]|[8-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+)|(Opera\u005C\u002F(72|(7[3-9]|[8-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+.+Opera Mobi)|(Opera Mobi.+Opera(?:\u005C\u002F|\u005Cs+)(72|(7[3-9]|[8-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+)|((?:Chrome).*OPR\u005C\u002F(91|(9[2-9]|\u005Cd{3,}))\u005C.\u005Cd+\u005C.\u005Cd+)|(SamsungBrowser\u005C\u002F(18|(19|[2-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+)|(Edge\u005C\u002F(107|(10[8-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))(?:\u005C.\u005Cd+)?)|((Chromium|Chrome)\u005C\u002F(106|(10[7-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))\u005C.\u005Cd+(?:\u005C.\u005Cd+)?)|(Version\u005C\u002F(15\u005C.6|15\u005C.([7-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+|16\u005C.0|16\u005C.([1-9]|\u005Cd{2,})|(1[7-9]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+)(?:\u005C.\u005Cd+)? Safari\u005C\u002F)|(Firefox\u005C\u002F(102|(10[3-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,})|106|(10[7-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))\u005C.\u005Cd+\u005C.\u005Cd+)|(Firefox\u005C\u002F(102|(10[3-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,})|106|(10[7-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))\u005C.\u005Cd+(pre|[ab]\u005Cd+[a-z]*)?)", "")}),
  loader: () => undefined,
  targetFormats: ["webp","avif","jpg|jpeg|png|gif"]
});

const fontList = new FontList([]);

export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList));
  inject('speedkit', speedkit);

  // For each render an own critical font style map is generated, which is used initially during page loading.
  const criticalFontStyles = {};
  inject('addCriticalFontStyle', (style) => {
    criticalFontStyles[style.hid] = style;
  });
  if (process.static && process.server) {
    context.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._criticalFontStyles = criticalFontStyles
    })
  }
}

!('$speedkit' in Vue.prototype) && Object.defineProperty(Vue.prototype, '$speedkit', {
  get () {
    return Object.freeze(Object.assign({}, speedkit, {head: head.bind(this)}));
  }
});
