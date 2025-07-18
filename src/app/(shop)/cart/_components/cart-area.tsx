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
    price: 49.00,
  },
  {
    id: 2,
    image: '/assets/img/cartmini/cart-1.jpg',
    title: 'Mastering Digital Workforce Skills',
    tag: 'Economy 4.0',
    chapters: 9,
    learners: '45 +',
    rating: { stars: 4, count: 12 },
    price: 49.00,
  },
  {
    id: 3,
    image: '/assets/img/cartmini/cart-1.jpg',
    title: 'Mastering Digital Workforce Skills',
    tag: 'Economy 4.0',
    chapters: 9,
    learners: '45 +',
    rating: { stars: 4, count: 12 },
    price: 49.00,
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
    <section className="tp-cart-area pt-120 pb-120">
      <div className="container">
         {successMessage && (
          <div className="alert alert-success tp-alert" role="alert">
            {successMessage}
          </div>
        )}
        <div className="row">
          {/* Left Column: Cart Items and Coupon/Update */}
          <div className="col-xl-9 col-lg-8">
            <div className="tp-cart-list">
              <h3 className="tp-cart-title mb-40">Shopping Cart</h3>
              <p className="tp-cart-subtitle mb-30">Your selected Courses</p>

              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={handleRemoveItemFromCart} />
                ))
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

          {/* Right Column: Order Summary */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tp-cart-checkout-wrapper">
              <h4 className="tp-cart-checkout-order-summary-title mb-25">Order Summary</h4>
              <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between mb-15">
                <span className="tp-cart-checkout-top-title tp-cart-price-text">Subtotal</span>
                <span className="tp-cart-checkout-top-price">${subtotal.toFixed(2)}</span>
              </div>
              <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between mb-25">
                <span className="tp-cart-checkout-top-title tp-cart-price-text">Tax</span>
                <span className="tp-cart-checkout-tax-price">${tax.toFixed(2)}</span>
              </div>

              <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between mt-20">
                <span className="tp-cart-price-text"> <strong>Total</strong> ({cartItems.length} Course{cartItems.length !== 1 ? 's' : ''}):</span>
                <span className="tp-cart-checkout-total-price">${total.toFixed(2)}</span>
              </div>
              <div className="tp-cart-checkout-proceed mt-30">
                <Link href="/checkout" className="tp-cart-checkout-btn w-100">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}