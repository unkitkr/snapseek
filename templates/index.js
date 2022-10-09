const paths = new Map([['twitter-v1', '/twitter-v1']])
const templatePath = new Map([['twitter-v1', 'twitter-screenshot/index.html']])

const currentURL = document.location.href
const locationHash = document.location.hash
const actualPath = locationHash.split('#')[1]
const [pathWithoutParams, params] = [
  actualPath.split('?')[0],
  actualPath.split('?')[1],
]

if (paths.has(pathWithoutParams)) {
  const locationHref = templatePath.get(pathWithoutParams)
  window.location.href = `${window.location.origin}/${locationHref}${
    params ? '?' + params : ''
  }`
}
