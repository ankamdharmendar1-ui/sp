import { useEffect } from 'react'
import { SITE_DOMAIN, SITE_NAME } from '../../data/defaults'

interface SeoProps {
  title: string
  description: string
  path: string
  faq?: Array<{ question: string; answer: string }>
}

export function Seo({ title, description, path, faq }: SeoProps) {
  const url = `${SITE_DOMAIN}${path}`
  const fullTitle = path === '/' ? `${title} | ${SITE_NAME}` : `${title} | ${SITE_NAME}`

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

    // Build WebApplication Schema with AggregateRating
    const appSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE_NAME,
      url: SITE_DOMAIN,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      description,
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      softwareVersion: '2.0',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1840',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    }

    // Build Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_DOMAIN,
      logo: `${SITE_DOMAIN}/favicon.svg`,
      sameAs: [
        'https://www.instagram.com/realpickerwheel_com',
        'https://www.facebook.com/share/1GeqhThN2T/',
      ],
    }

    // Build Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_DOMAIN,
        },
        ...(path !== '/'
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: title,
                item: url,
              },
            ]
          : []),
      ],
    }

    // Build HowTo Schema for the Step-by-Step Guide
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Use the Random Picker Wheel',
      description: 'A 3-step guide to insert entries, spin the wheel, and pick a random decision fairly.',
      totalTime: 'PT1M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Insert Your Inputs & Entries',
          text: 'Type options into the Entries box or paste a multi-line list. You can assign optional weights like Alice - 10.',
          image: `${SITE_DOMAIN}/step-inputs.png`,
          url: `${url}#step-1-inputs`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Spin the Wheel',
          text: 'Tap anywhere on the wheel or click the center SPIN hub to start 60 FPS rotation with audio tick sounds.',
          image: `${SITE_DOMAIN}/step-wheel.png`,
          url: `${url}#step-2-spin`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Review Results & Spin History',
          text: 'View the selected winner popup with celebration sparkles. Keep the winner or eliminate it for no-repeat raffles.',
          image: `${SITE_DOMAIN}/step-history.png`,
          url: `${url}#step-3-result`,
        },
      ],
    }

    // Combine Schemas into Graph
    const schemaGraph: Array<Record<string, unknown>> = [appSchema, orgSchema, breadcrumbSchema, howToSchema]

    if (faq && faq.length > 0) {
      schemaGraph.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      })
    }

    const jsonLd = ensure('script', 'id', 'rpw-jsonld')
    jsonLd.setAttribute('type', 'application/ld+json')
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    })
  }, [description, faq, fullTitle, path, url])

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

