import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/Seo/Seo'

export function InfoPage({
  title,
  description,
  path,
  children,
}: {
  title: string
  description: string
  path: string
  children: ReactNode
}) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-[#1B6B6B]">
          <Link to="/">← Back to the wheel</Link>
        </p>
        <article className="prose-rpw mt-4 space-y-4 leading-relaxed">{children}</article>
      </main>
    </>
  )
}
