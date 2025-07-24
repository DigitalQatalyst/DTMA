'use client';

import { useState } from 'react';
import Link from "next/link";
import CartItem from "./cart-item";
// import bookData from "@/data/book-shop-data";
import { formatPrice } from "@/lib/format-price";

type ICart = {
  id: number;
  image: string;
  title: string;
  tag: string;
  chapters: number;
  learners: string;
  rating: {
    stars: number;
    count: number;
  };
  price: number;
}

const initialCartItems: ICart[] = [
  {
    id: 1,
    image: '/assets/img/cartmini/cart-1.jpg',
    title: 'Mastering Digital Workforce Skills',
    tag: 'Economy 4.0',
    chapters: 9,
    learners: '45 +',
    rating: { stars: 4, count: 12 },
    price: 100,
  },
  {
    id: 2,
    image: '/assets/img/cartmini/cart-1.jpg',
    title: 'Advanced Data Analytics',
    tag: 'Data Science',
    chapters: 12,
    learners: '32 +',
    rating: { stars: 5, count: 8 },
    price: 200,
  },
  {
    id: 3,
    image: '/assets/img/cartmini/cart-1.jpg',
    title: 'Machine Learning Fundamentals',
    tag: 'AI & ML',
    chapters: 15,
    learners: '28 +',
    rating: { stars: 4, count: 15 },
    price: 100,
  },
];



export default function CartArea() {
  const [cartItems, setCartItems] = useState<ICart[]>(initialCartItems);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = 1.00;
  const total = subtotal + tax;

  const handleRemoveItemFromCart = (idToRemove: number) => {
    // Logic to filter the cart items and update the state
    const itemRemoved = cartItems.find(item => item.id === idToRemove);
    const updatedCart = cartItems.filter(item => item.id !== idToRemove);

    setCartItems(updatedCart);

    if (itemRemoved) {
      setSuccessMessage(`${itemRemoved.title} has been removed from your cart.`);
    } else {
      setSuccessMessage("Item removed from cart successfully.");
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  return (
    <section className="tp-cart-area">
      <div className="container">

        {successMessage && (
          <div className="alert alert-success tp-alert" role="alert">
            {successMessage}
          </div>
        )}
        <div className="row gx-5">
          {/* Left Column: Cart Items and Coupon/Update */}
          <div className={cartItems.length === 0 ? "col-12" : "col-xl-9 col-lg-8"}>
            <div className="tp-cart-list">


              {cartItems.length === 0 ? (
                <>
                  <div className="tp-cart-breadcrumb mb-20 mt-20">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/" className="tp-cart-breadcrumb-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.51977 1C8.63975 1 8.75629 1.03762 8.85088 1.10687L16.5179 6.71407L15.8557 7.49997L14.9193 6.81497V13C14.9187 13.265 14.8063 13.5191 14.6065 13.7065C14.4068 13.894 14.136 13.9995 13.8535 14H3.1957C2.91321 13.9994 2.64246 13.8939 2.44271 13.7065C2.24297 13.5191 2.1305 13.265 2.12992 13V6.81042L1.19347 7.49552L0.53125 6.70967L8.18866 1.10687C8.28325 1.03762 8.39979 1 8.51977 1ZM8.52459 2.13572L3.1957 6.03072V13H13.8535V6.03597L8.52459 2.13572Z" fill="#1A1A1A" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39844 13H7.46422V9H9.59577V13H10.6616V9C10.6612 8.73488 10.5488 8.4807 10.349 8.29323C10.1492 8.10576 9.87834 8.0003 9.59577 8H7.46422C7.18164 8.00026 6.91072 8.10571 6.71091 8.29319C6.5111 8.48066 6.39872 8.73486 6.39844 9V13Z" fill="#1A1A1A" />
                            </svg>
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="/courses" className="tp-cart-breadcrumb-link">
                            All Courses
                          </Link>
                        </li>
                      </ol>
                    </nav>
                  </div>

                  <h3 className="tp-cart-title">Shopping Cart</h3>
                  <p className="tp-cart-subtitle mb-30">Your selected Courses</p>


                  <div className="tp-cart-empty-state">
                    <div className="tp-cart-empty-image mb-30">
                      <img src="/assets/img/cartmini/empty2.png" alt="Empty Cart" />
                    </div>
                    <h4 className="tp-cart-empty-title mb-15">Your Cart is Empty</h4>
                    <p className="tp-cart-empty-subtitle mb-30">
                      Browse our courses and start learning<br />
                      today !
                    </p>
                    <Link href="/courses" className="tp-cart-checkout-btn">
                      Browse Courses
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Shopping Cart Title and Subtitle */}
                  <h3 className="tp-cart-title">Shopping Cart</h3>
                  <p className="tp-cart-subtitle mb-30">Your selected Courses</p>

                  {/* Render cart items if available */}
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={handleRemoveItemFromCart} />
                  ))}
                </>
              )}
            </div>

            {/* <div className="tp-cart-bottom mt-50">
              <div className="row align-items-end">
                <div className="col-xl-6 col-md-8">
                  <div className="tp-cart-coupon">
                    <form action="#">
                      <div className="tp-cart-coupon-input-box">
                        <label>Coupon Code:</label>
                        <div className="tp-cart-coupon-input d-flex align-items-center">
                          <input type="text" placeholder="Enter Coupon Code" />
                          <button type="submit">Apply</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 col-md-4">
                  <div className="tp-cart-update text-md-end mr-30">
                    <button type="button" className="tp-cart-update-btn">Update Cart</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column: Order Summary - Only show when cart has items */}
          {cartItems.length > 0 && (
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-cart-checkout-wrapper">
                <h4 className="tp-cart-checkout-order-summary-title mb-25">Order Summary</h4>
                <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between mb-15">
                  <span className="tp-cart-checkout-top-title tp-cart-price-text">Original Price</span>
                  <span className="tp-cart-checkout-top-price">{subtotal} Credits</span>
                </div>
                {/* <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between mb-25">
                  <span className="tp-cart-checkout-top-title tp-cart-price-text">Tax</span>
                  <span className="tp-cart-checkout-tax-price">${tax.toFixed(2)}</span>
                </div> */}

                <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between mt-20">
                  <span className="tp-cart-price-text"> <strong>Total</strong> ({cartItems.length} Course{cartItems.length !== 1 ? 's' : ''}):</span>
                  <span className="tp-cart-checkout-total-price">{total}</span>
                </div>
                <div className="tp-cart-checkout-proceed mt-30">
                  <Link href="/checkout" className="tp-cart-checkout-btn w-100">Proceed to Checkout</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}