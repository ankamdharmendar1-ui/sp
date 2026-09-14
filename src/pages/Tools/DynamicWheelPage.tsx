import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Seo } from '../../components/Seo/Seo'
import { WHEEL_TEMPLATES } from '../../data/templates'
import { makeWheel } from '../../data/defaults'
import { useWheel } from '../../hooks/useWheelStore'
import { WheelWorkbench } from '../Home/WheelWorkbench'

export function DynamicWheelPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>()
  const { wheels, switchWheel } = useWheel()

  const template = WHEEL_TEMPLATES.find(
    (t) => t.category === category && t.slug === slug
  )

  useEffect(() => {
    if (template) {
      const existing = wheels.find((w) => w.name === template.title)
      if (existing) {
        switchWheel(existing.id)
      } else {
        const newW = makeWheel(template.title, template.defaultOptions)
        wheels.push(newW)
        switchWheel(newW.id)
      }
    }
  }, [template, wheels, switchWheel])

  if (!template) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Seo
        title={template.title}
        description={template.metaDescription}
        path={`/${template.category}/${template.slug}`}
        faq={template.faq}
      />
      <WheelWorkbench
        heading={template.h1}
        subheading={template.metaDescription}
      />
    </>
  )
}
