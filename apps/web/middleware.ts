import { type NextRequest } from 'next/server';

import { updateSession } from './lib/supabase/server';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sw.js (service worker)
     * - manifest files
     * - static assets
     */
    '/((?!_next/static|_next/image|favicon.ico|sw.js|manifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json|js|css|woff|woff2)$).*)',
  ],
};
