import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavbarMenusTwo from "./navbar/navbar-menus-2";
import logo from "@/assets/img/logo/dtma.svg";
import cart from "@/assets/img/hero/local_mall.svg";

import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";
import SignInButton from "./sign-in-button/SignInButton";
import MainMenu from "./main-menu/MainMenu";

type IProps = {
  inner?: boolean;
  transparent?: boolean;
}

export default function HeaderTwo({ inner = false, transparent }: IProps) {
  return (
    <>
      {/* <CustomHeader 
        className="header-area p-relative" 
        style={{ 
          background: 'linear-gradient(186deg, rgba(12, 125, 129, 0.50) -3.07%, rgba(12, 125, 129, 0.00) 95.2%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px', // Adjust as needed
        }}
      >
        <div 
          className="container custom-container-larg" 
          style={{
            backgroundColor: '#FFFFFF',
            height: '70%', // 80% of CustomHeader's height
            width: '93%', // 80% of CustomHeader's width
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            maxHeight: '80%', // Prevent height overflow
            maxWidth: '95%', // Prevent width overflow
          }}
        >
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
      </CustomHeader> */}

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

            <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
              <MainMenu />
            </div>
            <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
              <div className="tp-header-2-contact d-flex align-items-center justify-content-end">
                <Image src="/assets/dtma/lock.svg" alt="lock" width={16} height={16} style={{ marginRight: '10px' }} />
                <SignInButton />
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
