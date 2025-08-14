'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export default function CartIcon() {
    const { cartItemsCount, loading } = useCart();

    return (
        <Link href="/cart" className="cart-icon-link position-relative d-flex align-items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2H3C2.45 2 2 2.45 2 3C2 3.55 2.45 4 3 4H4.19L6.6 11.59C6.77 12.15 7.26 12.55 7.84 12.55H15C15.55 12.55 16 12.1 16 11.55C16 11 15.55 10.55 15 10.55H8.54L8.04 9H16C16.42 9 16.8 8.75 16.93 8.35L18.88 2.35C19.05 1.85 18.68 1.35 18.16 1.35H7.21L6.27 0.35C6.11 0.13 5.84 0 5.55 0H3C2.45 0 2 0.45 2 1C2 1.55 2.45 2 3 2H5.1L6 2ZM7 14C5.9 14 5 14.9 5 16C5 17.1 5.9 18 7 18C8.1 18 9 17.1 9 16C9 14.9 8.1 14 7 14ZM15 14C13.9 14 13 14.9 13 16C13 17.1 13.9 18 15 18C16.1 18 17 17.1 17 16C17 14.9 16.1 14 15 14Z" fill="currentColor"/>
            </svg>
            
            {/* Cart count badge */}
            {!loading && cartItemsCount > 0 && (
                <span className="cart-count-badge">
                    {cartItemsCount}
                </span>
            )}
        </Link>
    );
}