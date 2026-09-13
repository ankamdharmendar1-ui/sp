import { useEffect } from 'react'
import { SITE_DOMAIN, SITE_NAME } from '../../data/defaults'

interface SeoProps {
  title: string
  description: string
  path: string
}

export function Seo({ title, description, path }: SeoProps) {
  const url = `${SITE_DOMAIN}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  useEffect(() => {
    document.title = fullTitle
    upsert('name', 'description', description)
    upsert('property', 'og:title', fullTitle)
    upsert('property', 'og:description', description)
    upsert('property', 'og:url', url)
    upsert('property', 'og:type', 'website')
    upsert('property', 'og:site_name', SITE_NAME)
    upsert('name', 'twitter:card', 'summary_large_image')
    upsert('name', 'twitter:title', fullTitle)
    upsert('name', 'twitter:description', description)
    const canonical = ensure('link', 'rel', 'canonical')
    canonical.setAttribute('href', url)

    const jsonLd = ensure('script', 'id', 'rpw-jsonld')
    jsonLd.setAttribute('type', 'application/ld+json')
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: SITE_NAME,
      url: SITE_DOMAIN,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      description,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    })
  }, [description, fullTitle, url])

  return null
}

function upsert(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function ensure(tag: 'link' | 'script', attr: string, value: string) {
  let el = document.head.querySelector(`${tag}[${attr}="${value}"]`) as HTMLElement | null
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  return el
}
