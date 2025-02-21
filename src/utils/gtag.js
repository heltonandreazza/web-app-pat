export const gtagReportConversion = url => {
  if (typeof window !== 'undefined' && window.gtag) {
    return new Promise(resolve => {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16816228435/FmFwCN2uoKEaENOQzdI-',
        gclid: getGclid() || undefined, // Pass GCLID if available
        event_callback: () => {
          resolve() // Ensure event is processed before proceeding
        },
      })
    })
  }
}

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

export function getGclid() {
  let gclid = getGclidFromUrl()

  if (!gclid) gclid = localStorage.getItem('gclid')

  return gclid
}

export function getGclidFromUrl() {
  const gclid = getParameterByName('gclid')
  if (gclid) {
    localStorage.setItem('gclid', gclid)
  }
}

export function setupGclid() {
  const gclid = getGclidFromUrl('gclid')
  if (gclid) {
    localStorage.setItem('gclid', gclid)
  }
}

export const runCTAClick = async e => {
  e.preventDefault() // Prevent default navigation
  await gtagReportConversion() // Trigger Google Ads conversion
}