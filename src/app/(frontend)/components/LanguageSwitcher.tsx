"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()

  const segments = pathname.split('/')
  const currentLocale = segments[1] === 'ar' ? 'ar' : 'en'
  const newLocale = currentLocale === 'en' ? 'ar' : 'en'

  // Construct the new path without the origin
  const newPath = ['', newLocale, ...segments.slice(2)].join('/') || '/'

  return (
    <div className="flex gap-4">
      <Link href={newPath} className="font-bold">
        {newLocale === 'en' ? 'English' : 'العربية'}
      </Link>
    </div>
  )
}