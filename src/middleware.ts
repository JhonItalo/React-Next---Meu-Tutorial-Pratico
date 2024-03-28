import { NextResponse, NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
	const currentUser = req.cookies.get('auth_token')?.value;

	if (!currentUser) {
		if (req.nextUrl.pathname === '/login') {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', req.url));
	}
}
export const config = {
	matcher: ['/private-route'],
};
