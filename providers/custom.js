import { joinURL } from 'ufo'
// import {} from '~image'

const serverUrl = 'https://api.trivicare.com/nuxt/'

export function getImage(src, { modifiers = {}, baseURL = serverUrl }, { options, nuxtContext, $img }) {
  const { width, height, format, fit, ...providerModifiers } = modifiers
  const operations = []
  // process modifiers
  const operationsString = operations.join(',')
  return {
    url: joinURL(baseURL, operationsString, src)
  }
}
