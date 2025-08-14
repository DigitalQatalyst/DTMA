'use client';

import Link from 'next/link';

export default function CheckoutComingSoon() {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="text-center">
                <div className="mb-4">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
                        <path d="M8 16L9 19L11 18L9.5 21L8 16Z" fill="currentColor" />
                        <path d="M16 16L15 19L13 18L14.5 21L16 16Z" fill="currentColor" />
                    </svg>
                </div>

                <h1 className="display-4 fw-bold text-dark mb-3">Checkout Coming Soon!</h1>

                <p className="lead text-muted mb-4">
                    We're working hard to bring you a seamless checkout experience.<br />
                    This feature is currently being developed in another branch.
                </p>

                <div className="d-flex gap-3 justify-content-center">
                    <Link href="/cart" className="btn btn-outline-primary">
                        Back to Cart
                    </Link>
                    <Link href="/course-with-filter" className="btn btn-primary">
                        Continue Shopping
                    </Link>
                </div>

                <div className="mt-5 text-muted">
                    <small>Expected completion: Soon™</small>
                </div>
            </div>
        </div>
    );
}