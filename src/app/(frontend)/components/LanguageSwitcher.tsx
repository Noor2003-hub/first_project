// components/LanguageSwitcher.tsx
"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const searchParams = new URLSearchParams(useSearchParams())

  return (
    <div className="flex gap-4">
      <Link
        href={`${pathname}?${new URLSearchParams({ lang: 'en' })}`}
        className={searchParams.get('lang') !== 'ar' ? 'font-bold' : ''}
      >
        English
      </Link>
      <Link
        href={`${pathname}?${new URLSearchParams({ lang: 'ar' })}`}
        className={searchParams.get('lang') === 'ar' ? 'font-bold' : ''}
      >
        العربية
      </Link>
    </div>
  )
}