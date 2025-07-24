'use client';
import { useState } from "react";
import Link from "next/link";
import './cart.css'
import Image from "next/image";
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

type IProps = {
  item: ICart;
  onRemove: (id: number) => void;
}

export default function CartItem({ item, onRemove }: IProps) {
  const handleRemoveItem = () => {
    console.log(`Attempting to remove item with ID: ${item.id}`);
    onRemove(item.id);
  };

  return (
    <div className="tp-cart-item d-flex align-items-center mb-30">
      <div className="tp-cart-item__img mr-20">
        <Link href={`/shop-details/${item.id}`}>
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={210}
            style={{ objectFit: 'cover', borderRadius: '5px' }}
          />
        </Link>
      </div>
      <div className="tp-cart-item__content flex-grow-1">

        <div className="d-flex align-items-start mb-10">
          <h4 className="tp-cart-item__title mb-0 flex-grow-1">
            <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
          </h4>
          <div className="tp-cart-item__remove">
            <button className="tp-cart-item__remove-btn" onClick={handleRemoveItem}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0_11114_32751" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_11114_32751)">
                  <path d="M7 21C6.45 21 5.97933 20.8042 5.5875 20.4125C5.19583 20.0207 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0207 18.4125 20.4125C18.0207 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="currentColor" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="tp-cart-item__meta d-flex align-items-center mb-10">
          <span className="tp-cart-item__tag mr-10">{item.tag}</span>
          <div className="tp-cart-item__details-row">
            <span className="tp-cart-item__chapters mr-20">
              <i className="fa-regular fa-book-open"></i> {item.chapters} Chapters
            </span>
            <span className="tp-cart-item__learners mr-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                <path d="M6.5711 7.5C8.36215 7.5 9.81407 6.04493 9.81407 4.25C9.81407 2.45507 8.36212 1 6.5711 1C4.78005 1 3.32812 2.45507 3.32812 4.25C3.32812 6.04493 4.78005 7.5 6.5711 7.5Z" stroke="#636366" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.1429 14.0031C12.1429 11.4876 9.64577 9.45312 6.57143 9.45312C3.49709 9.45312 1 11.4876 1 14.0031" stroke="#636366" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg> {item.learners} Learners
            </span>

          </div>
        </div>
        <div className="tp-cart-item__rating d-flex align-items-center mb-10">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`${i < item.rating.stars ? 'fa-solid' : 'fa-regular'} fa-star is-rating-star`}
            ></i>
          ))}
          <span className="tp-cart-item__rating-count">({item.rating.count})</span>
        </div>
        <div className="tp-cart-item__price">
          <span>{formatPrice(item.price, true)} credits</span>
        </div>
      </div>

    </div>
  );
}