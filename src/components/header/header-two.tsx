import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./button/search-button";
import HeaderCategoryArea from "./header-category/header-category-area";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import CartButton from "./button/cart-button";
import OffcanvasButton from "./button/offcanvas-btn";
import SignInButton from "./sign-in-button/SignInButton"; // Import the separate component

// prop type 
type IProps = {
  inner?: boolean;
  transparent?: boolean;
}

export default function HeaderTwo({ inner = false, transparent }: IProps) {
  return (
    <>
      <header className="header-area p-relative">
        <HeaderStickyWrapper cls={`tp-header-2 ${transparent ? 'tp-header-transparent' : ''}`}>
          <div className="container custom-container-larg">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-6">
                <div className="tp-header-2-right d-flex align-items-center">
                  <div className="tp-header-inner-logo tp-header-logo">
                    <Link href="/">
                      <Image src="/assets/dtma/dtma_logo.svg" alt="logo" width={100} height={50} priority style={{ height: 'auto' }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                <div className="main-menu text-xl-center d-none d-xl-block">
                  <nav>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Courses</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Help & Support</a></li>
                      <li style={{ marginTop: '5px' }}><SearchButton /></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
                <div className="tp-header-2-contact d-flex align-items-center justify-content-end">
                  <Image src="/assets/dtma/lock.svg" alt="lock" width={16} height={16} style={{ marginRight: '10px' }} />
                  <SignInButton />
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar"/>
      {/* mobile offcanvas */}

      {/* cart mini sidebar */}
      <div id="cart-mini-sidebar"></div>
      {/* cart mini sidebar */}
    </>
  );
}