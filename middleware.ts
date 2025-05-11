// middleware.ts
import { NextRequest, NextResponse } from 'next/server'


export function middleware(request: NextRequest) {
  // Check if there's any supported locale in the pathname
  const { pathname } = request.nextUrl
  const searchParams = request.nextUrl.searchParams
  
  // Try to get the language from search parameter
  const lang = searchParams.get('lang') || 'en'
  
  // If the language is in the search params, we'll use it
  if (['en', 'ar'].includes(lang)) {
    // Clone the URL to modify it
    const url = request.nextUrl.clone()
    
    // Remove the lang parameter from the URL to avoid duplication
    searchParams.delete('lang')
    url.search = searchParams.toString()
    
    // Set a cookie for future requests
    const response = NextResponse.rewrite(url)
    response.cookies.set('lang', lang)
    
    return response
  }
  
  // Check for a cookie if no search parameter is present
  const cookieLang = request.cookies.get('lang')?.value
  if (cookieLang && ['en', 'ar'].includes(cookieLang)) {
    const url = request.nextUrl.clone()
    url.searchParams.set('lang', cookieLang)
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}