import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavbarMenusTwo from "./navbar/navbar-menus-2";
import logo from "@/assets/img/logo/dtma.svg";
import cart from "@/assets/img/hero/local_mall.svg";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";

type IProps = {
  inner?: boolean;
  transparent?: boolean;
}

export default function HeaderTwo({ inner = false, transparent }: IProps) {
  return (
    <>
      {/* The header-area class now needs to sit inside the container
          or have its own max-width and margin: auto to prevent touching edges.
          Based on the image, the whole white navbar box has padding/margins
          from the sides.
      */}
      <header className="header-area p-relative">
        <HeaderStickyWrapper cls={`tp-header-2 ${transparent ? 'tp-header-transparent' : ''}`}>
          {/* Apply custom-container-larg directly to the content wrapper inside header-area */}
          <div className="container custom-container-larg"> {/* This container will manage the horizontal spacing */}
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-6">
                <div className="tp-header-2-right d-flex align-items-center">
                  <div className="tp-header-inner-logo tp-header-logo" style={{ borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                    <Link href="/">
                      <Image src={logo} alt="logo" priority style={{ height: 'auto' }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                <div className="main-menu text-xl-center d-none d-xl-block">
                  <NavbarMenusTwo />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
                <div className="tp-header-2-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-2-cart home-2 d-none d-xxl-block">
                    <Image src={cart} alt="cart" style={{ height: "20px", width: "20px", cursor: "pointer" }} />
                  </div>
                  <div className={`tp-header-inner-btn ${inner ? '' : 'home-2'} d-none d-xxl-block`}>
                    <Link className="tp-sign-in-btn" href="/">
                      Sign In
                    </Link>
                  </div>
                  <div className="offcanvas-btn d-xxl-none ml-30">
                    <OffcanvasButton offcanvas_cls="offcanvas__2" offcanvas_menu_2={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar" />
      {/* mobile offcanvas */}

      {/* cart mini sidebar */}
      <div id="cart-mini-sidebar"></div>
      {/* cart mini sidebar */}
    </>
  );
}