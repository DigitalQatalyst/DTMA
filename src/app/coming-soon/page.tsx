import { Metadata } from "next";
import Image from "next/image";
import error_img from "@/assets/img/error/error.png";
import Link from "next/link";
import HeaderTwo from "@/components/header/header-two";
import FooterSeven from "@/components/footer/footer-seven";
import coming_soon_img from "@/assets/page_not_found/soon.svg";
import FooterTwo from "@/components/footer/footer-two";
import HeaderNine from "@/components/header/header-nine";

export const metadata: Metadata = {
  title: "Coming Soon - DTMA",
};

export default function NotFound() {
  return (
    <>
      {/* header area start */}
      <HeaderTwo inner={false} />
      {/* <HeaderNine /> */}
      {/* header area end */}
      <main>
        {/* not found area start */}
        <div className="tp-error-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-error-wrapper text-center">
                  <h4 className="tp-error-title">Coming Soon</h4>
                  <div className="tp-error-thumb mb-50 d-flex justify-content-center">
                    <Image
                      src={coming_soon_img}
                      alt="error-img"
                      style={{ height: "auto", width: "550px" }}
                    />
                  </div>
                  <div className="tp-error-content">
                    <p style={{
                      color: "#000A06",
                      textAlign: "center",
                      fontSize: "32px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "60px"
                    }}>This Page is coming soon</p>
                    <Link
                      className="tp-btn-inner"
                      href="/"
                      style={{
                        borderRadius: "8px",
                        background: "#008080",
                      }}
                    >
                      Back to Home
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