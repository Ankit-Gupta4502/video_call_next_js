
import { NextRequest, NextResponse } from "next/server"


export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname
    const isPublic = path === "/login" || path === "/register"
    const token: string | undefined = request.cookies.get("video_chat_token")?.value as string | undefined

    if (isPublic && token) {
        return NextResponse.rewrite(new URL("/", request.nextUrl))
    }
    if (!isPublic && !token) {
        return NextResponse.rewrite(new URL("/", request.nextUrl))
    }
}

export const config = {
    matcher: ['/login', '/dashboard/:path*', "/register"],
}