import { Metadata } from "next";
import Image from "next/image";
import error_img from "@/assets/img/error/error.png";
import Link from "next/link";
import HeaderTwo from "@/components/header/header-two";
import FooterSeven from "@/components/footer/footer-seven";
import group_img from "@/assets/page_not_found/Group.svg";
import FooterTwo from "@/components/footer/footer-two";
import HeaderNine from "@/components/header/header-nine";

export const metadata: Metadata = {
  title: "Not Found - DTMA",
};

export default function NotFound() {
  return (
    <>
      {/* header area start */}
      {/* <HeaderTwo inner={false} /> */}
      <HeaderNine />
      {/* header area end */}
      <main>
        {/* not found area start */}
        <div className="tp-error-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-error-wrapper text-center">
                  <div className="tp-error-thumb mb-50 d-flex justify-content-center">
                    <Image
                      src={group_img}
                      alt="error-img"
                      style={{ height: "auto", width: "550px" }}
                    />
                  </div>
                  <div className="tp-error-content">
                    <p style={{
                      color: "#000A06",
                      textAlign: "center",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "60px"
                    }}>Page Not Found</p>
                    <Link
                      className="tp-btn-inner"
                      href="/"
                      style={{
                        borderRadius: "8px",
                        background: "#008080",
                      }}
                    >
                      Go Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* not found area end */}
      </main>

      {/* footer area start */}
      <FooterTwo />
      {/* footer area end */}
    </>
  );
}