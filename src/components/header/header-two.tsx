import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./button/search-button";
import HeaderCategoryArea from "./header-category/header-category-area";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import CartButton from "./button/cart-button";
import OffcanvasButton from "./button/offcanvas-btn";
import SignInButton from "./sign-in-button/SignInButton";
import CustomHeader from "./custom-header/CustomHeader";
import MainMenu from "./main-menu/MainMenu";

// prop type
type IProps = {
  inner?: boolean;
  transparent?: boolean;
};

export default function HeaderTwo({ inner = false, transparent }: IProps) {
  return (
    <>
      <CustomHeader
        className="header-area p-relative"
        style={{
          background:
            "linear-gradient(186deg, rgba(12, 125, 129, 0.50) -3.07%, rgba(12, 125, 129, 0.00) 95.2%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px", // Adjust as needed
        }}
      >
        <div
          className="container custom-container-larg"
          style={{
            backgroundColor: "#FFFFFF",
            height: "70%", // 80% of CustomHeader's height
            width: "93%", // 80% of CustomHeader's width
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            maxHeight: "80%", // Prevent height overflow
            maxWidth: "95%", // Prevent width overflow
          }}
        >
          <div className="row align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-6">
              <div className="tp-header-2-right d-flex align-items-center">
                <div className="tp-header-inner-logo tp-header-logo">
                  <Link href="/">
                    <Image
                      src="/assets/dtma/dtma_logo.svg"
                      alt="logo"
                      width={100}
                      height={50}
                      priority
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
              <MainMenu />
            </div>
            <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
              <div className="tp-header-2-contact d-flex align-items-center justify-content-end">
                <Image
                  src="/assets/dtma/lock.svg"
                  alt="lock"
                  width={16}
                  height={16}
                  style={{ marginRight: "10px" }}
                />
                <SignInButton />
              </div>
            </div>
          </div>
        </div>
      </CustomHeader>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar" />
      {/* mobile offcanvas */}

      {/* cart mini sidebar */}
      <div id="cart-mini-sidebar"></div>
      {/* cart mini sidebar */}
    </>
  );
}
