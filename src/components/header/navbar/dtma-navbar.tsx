import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/dtma.svg";
// import HeaderCategoryArea from "../header-category/header-category-area";
import HeaderStickyWrapper from "../header-sticky-provider/header-sticky-wrapper";
import { CategorySvg } from "@/components/svg";
import search from "@/assets/img/search.svg";
import user from "@/assets/img/icon/userAvatar.svg";
import { Button } from "react-bootstrap";

// prop type 
type IProps = {
  inner?: boolean;
  transparent?: boolean;
}

export default function HeaderTwo({ transparent }: IProps) {
  return (
    <>
      <header className="header-area p-relative">
        <HeaderStickyWrapper cls={`tp-header-2 ${transparent ? 'tp-header-transparent' : ''}`}>
          <div className="container custom-container-larg" style={{padding:"10px"}}>
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-6">
                <div className="tp-header-2-right d-flex align-items-center">
                  <div className="tp-header-inner-logo tp-header-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" priority style={{ height: 'auto', marginLeft:"-3em" }} />
                    </Link>
                  </div>
                  <div className="df" style={{display:"flex", flexDirection:"row", alignItems: "center", gap:"5px", marginLeft: "5rem" }}>
                    <CategorySvg /> 
                  <span>Category</span>
                  </div>
                  <div
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      background: "white", 
                      borderRadius: "10px", 
                      marginLeft: "1rem",
                      border: "1px solid #ccc", 
                      padding: "2px 10px" 
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="Search for Courses..." 
                      style={{ 
                        border: "none", 
                        outline: "none", 
                        padding: "2px 10px", 
                        borderRadius: "10px", 
                        fontSize: "14px",
                        height: "24px",
                        // flex: "1",
                        width: "10rem"
                      }} 
                    />
                    <Image 
                      src={search} 
                      alt="search" 
                      style={{ 
                        height: "20px", 
                        width: "20px", 
                        cursor: "pointer"
                      }} 
                    />
                  </div>

                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                <div className="main-menu text-xl-center d-none d-xl-block" style={{marginLeft:"15rem"}}>
                  <span style={{color:"#008080"}}>Home</span>
                  <span style={{marginLeft: "1rem"}}>About</span>
                  <span style={{marginLeft: "1rem"}}>Catalog</span>
                  <span style={{marginLeft: "1rem"}}>Resources</span>
                  <span style={{marginLeft: "1rem"}}>Contact</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
                <div className="tp-header-2-contact d-flex align-items-center justify-content-end" style={{marginLeft:"15rem"}}>
                  <div className="align-items-center d-flex">
                  <Image src={user} alt="user" style={{ height: '17px', width: "15px", marginRight:"3px" }} />
                  <span style={{marginRight:"15px" }}>Admin</span>
                  </div>
                  {/* <div className="tp-header-2-cart home-2 d-none d-xxl-block">
                    <CartButton/>
                  </div> */}
                  <div>
                  <Button style={{backgroundColor: "#008080", width:"7rem"}}>
                      Log in
                    </Button>

                    {/* <Link className="tp-btn-inner" style={{backgroundColor: "#008080", width:"7rem"}}>
                      Log in
                    </Link> */}
                  </div>
                  {/* profile dropdown */}
                  {/* <ProfileDropdown/> */}
                  {/* profile dropdown */}
                  {/* <div className="offcanvas-btn d-xxl-none ml-30">
                    <OffcanvasButton offcanvas_cls="offcanvas__2" offcanvas_menu_2={true}/>
                  </div> */}
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
