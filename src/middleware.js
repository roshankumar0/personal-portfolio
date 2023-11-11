import { NextResponse } from "next/server"

export function middleware(request) {
    const Token = request.cookies.get('loginToken')?.value;
    if (request.nextUrl.pathname === '/api/login' || request.nextUrl.pathname === '/api/user') {
        return
    }
    
    const alreadyLogin = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup'
    if (alreadyLogin) {
        if (Token) {
            return NextResponse.redirect(new URL("/profile", request.url))
        }
    }
    else {
        if (!Token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
    
}


export const config = {
    matcher: ['/profile/:path*', '/api/:path*', '/login', '/signup'],
}