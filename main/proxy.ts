import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const CATALOG_URL = process.env.CATALOG_URL || 'http://localhost:3001';
    const SHOP_URL = process.env.SHOP_URL || 'http://localhost:3002';
    const ACCOUNT_URL = process.env.ACCOUNT_URL || 'http://localhost:3003';

    // Catalog Rewrite
    if (pathname.startsWith('/catalog')) {
        return NextResponse.rewrite(new URL(`${CATALOG_URL}${pathname}`));
    }

    // Shop Rewrite
    if (pathname.startsWith('/shop')) {
        return NextResponse.rewrite(new URL(`${SHOP_URL}${pathname}`));
    }

    // Account Rewrite
    if (pathname.startsWith('/account')) {
        return NextResponse.rewrite(new URL(`${ACCOUNT_URL}${pathname}`));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/catalog/:path*', '/shop/:path*', '/account/:path*'],
};
