// 'use client';

// // import { Metadata } from "next";
// import CartArea from "./_components/cart-area";
// import { Suspense } from "react";

// // Remove metadata export since this is now a client component
// // export const metadata: Metadata = {
// //     title: "Cart - Acadia",
// // }

// export default function CartPage() {
//   return (
//     <main>
//       {/* cart area start */}
//       <Suspense fallback={
//         <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//           <div className="spinner-border" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       }>
//         <CartArea />
//       </Suspense>
//       {/* cart area end */}
//     </main>
//   )
// }

import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import CartArea with no SSR
const CartArea = dynamic(() => import('./_components/cart-area'), {
  ssr: false,
  loading: () => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading cart...</span>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: "Cart - DTMA",
}

export default function CartPage() {
  return (
    <main>
      {/* cart area start */}
      <CartArea />
      {/* cart area end */}
    </main>
  )
}