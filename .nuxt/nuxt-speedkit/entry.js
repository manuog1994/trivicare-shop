import { hasSufficientPerformance, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

let initialized = false
const layerEl = global.document.getElementById('nuxt-speedkit-layer');

const triggerRunCallback = sufficient => global.dispatchEvent(new CustomEvent('nuxt-speedkit:run', { detail: { sufficient } }))

async function initApp(force) {
  if (initialized) {
    return;
  }

  document.documentElement.classList.remove('nuxt-speedkit-reduced-view');

  try {
    initialized = true;

    triggerRunCallback(true)

    return import('../client');
  } catch (error) {
    triggerRunCallback(false)

    if (!!layerEl) {
      // User must interact via the layer.
      updateSpeedkitLayerMessage('nuxt-speedkit-message-weak-hardware');
    }
  }

  return null;
};

function observeSpeedkitButton (id, callback) {
  Array.from(document.querySelectorAll(`#${id}`)).forEach(el => {
    el.addEventListener('click', callback, { capture: true, once: true, passive: true })
  })
}

function updateSpeedkitLayerMessage(id) {
  const el = global.document.getElementById(id)
  if (!el) {
    throw new Error(`Can\'t update speedkit-layer, message ${id} missing.`);
  } else {
    el.style.display = 'block'
    layerEl.className += ' nuxt-speedkit-layer-visible';
  }
}

function initReducedView () {
  document.documentElement.classList.add('nuxt-speedkit-reduced-view');

  // activate fonts
  global.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })

  // transform noscript>picture to picture
  Array.from(document.querySelectorAll('noscript.nuxt-speedkit-picture-noscript')).forEach(el => {
    const tmp = document.createElement('div');
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  })
}

function setupSpeedkitLayer(supportedBrowser) {
  if(!supportedBrowser) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-unsupported-browser');
  }
  if(!hasSufficientDownloadPerformance()) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-reduced-bandwidth');
  }
}

const supportedBrowser = isSupportedBrowser({regex: new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(14[_.]5|14[_.]([6-9]|\u005Cd{2,})|14[_.]8|14[_.](9|\u005Cd{2,})|(1[5-9]|[2-9]\u005Cd|\u005Cd{3,})[_.]\u005Cd+|15[_.]5|15[_.]([6-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})[_.]\u005Cd+|16[_.]0|16[_.]([1-9]|\u005Cd{2,})|(1[7-9]|[2-9]\u005Cd|\u005Cd{3,})[_.]\u005Cd+)(?:[_.]\u005Cd+)?)|(Opera Mini(?:\u005C\u002Fatt)?\u005C\u002F?(\u005Cd+)?(?:\u005C.\u005Cd+)?(?:\u005C.\u005Cd+)?)|(Opera\u005C\u002F.+Opera Mobi.+Version\u005C\u002F(72|(7[3-9]|[8-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+)|(Opera\u005C\u002F(72|(7[3-9]|[8-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+.+Opera Mobi)|(Opera Mobi.+Opera(?:\u005C\u002F|\u005Cs+)(72|(7[3-9]|[8-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+)|((?:Chrome).*OPR\u005C\u002F(91|(9[2-9]|\u005Cd{3,}))\u005C.\u005Cd+\u005C.\u005Cd+)|(SamsungBrowser\u005C\u002F(18|(19|[2-9]\u005Cd|\u005Cd{3,}))\u005C.\u005Cd+)|(Edge\u005C\u002F(107|(10[8-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))(?:\u005C.\u005Cd+)?)|((Chromium|Chrome)\u005C\u002F(106|(10[7-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))\u005C.\u005Cd+(?:\u005C.\u005Cd+)?)|(Version\u005C\u002F(15\u005C.6|15\u005C.([7-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+|16\u005C.0|16\u005C.([1-9]|\u005Cd{2,})|(1[7-9]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+)(?:\u005C.\u005Cd+)? Safari\u005C\u002F)|(Firefox\u005C\u002F(102|(10[3-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,})|106|(10[7-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))\u005C.\u005Cd+\u005C.\u005Cd+)|(Firefox\u005C\u002F(102|(10[3-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,})|106|(10[7-9]|1[1-9]\u005Cd|[2-9]\u005Cd\u005Cd|\u005Cd{4,}))\u005C.\u005Cd+(pre|[ab]\u005Cd+[a-z]*)?)", "")});

window.addEventListener('load', function () {
  if (!document.getElementById('nuxt-speedkit-layer')) {
    initApp();
  } else {
    observeSpeedkitButton('nuxt-speedkit-button-init-reduced-view', initReducedView);
    observeSpeedkitButton('nuxt-speedkit-button-init-app', () => initApp(true));

    setup({"timing":{"fcp":800,"dcl":1200}});

    if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || ((true && hasSufficientPerformance()) && supportedBrowser)) {
      initApp();
    } else {
      setupSpeedkitLayer(supportedBrowser)
    }
  }
});
