import { URLS } from './constants'
import { runCTAClick } from './gtag'

export const getWhatsUrl = (text, url) =>
  encodeURI(`${url || URLS.whatsapp}${text}`)

export const openWhatsUrl = text => window.open(getWhatsUrl(text), '_blank')

export const open = address => window.open(address, '_blank')

export const handleCtaClick = url => async e => {
  await runCTAClick(e)
  openWhatsUrl(url)
}
