
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  publickRoutes: ['/api/webhooks/clerk']

});

export const config = {
  
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};