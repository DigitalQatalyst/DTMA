// import Image from "next/image";
// import shape_underline from "@/assets/img/shape/bottom-line/line.svg";
// import email from "@/assets/img/cta/meassage.svg";
// import checkSvg from "@/assets/img/cta/vector.svg";

export default function CtaTwo() {
  return (
    <section
      className="cta-area tp-cta-2-bg"
      style={{ backgroundColor: "#008080" }}
    >
      <div className="cta-container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-2-wrapper text-center">
              <h2
                className=""
                style={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: "semibold",
                  paddingBottom: "2rem",
                }}
              >
                Subscribe to our newsletter
                {/* <span>
                  Transformation
                  <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  /> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="255" height="14" viewBox="0 0 255 14" fill="none">
  <path fill-rule="evenodd" className="tp-underline-shape-12" clip-rule="evenodd" d="M245.314 11.8294C137.677 -4.10527 43.4202 5.90023 10.377 11.723C7.5142 12.2274 3.45021 13.6854 1.29983 13.0138C-0.850547 12.3422 -0.273017 9.79535 2.58978 9.29088C39.0188 2.8715 138.836 -7.44895 251.717 9.18444C254.831 9.59926 255.921 12.1211 254.153 12.8515C252.385 13.5819 248.428 12.2442 245.314 11.8294Z" fill="#008080"/>
</svg> */}
                {/* </span> */}
              </h2>
              {/* <p>Get expert insights, AI trends & career-boosting tips – straight to your inbox!</p> */}
              <div className="tp-cta-2-form">
                {/* <form action="#" className="subscribe-inputs"> */}
                {/* <span>
                    <Image
                      alt="email evg"
                      src={email} />
                  </span> */}
                <div>
                  <input
                    type="text"
                    className="tp-cta-2-input"
                    placeholder="Email address"
                    style={{
                      borderRadius: "5px",
                      padding: "17px 16px 17px 20px",
                      width: "456px",
                    }}
                  />
                </div>

                <div className="tp-cta-btn">
                  <button className="tp-btn-subscribe">Subscribe Now</button>
                </div>
                {/* </form> */}
              </div>
              {/* <div className="tp-cta-2-info-list">
                <span>
                  <span>
                    <Image
                      alt="checksvg"
                      src={checkSvg}
                      style={{ width: "12px", height: "8.25px" }}
                    />
                  </span>
                  Free weekly insights
                </span>
                <span>
                  <span>
                    <Image
                      alt="checksvg"
                      src={checkSvg}
                      style={{ width: "12px", height: "8.25px" }} />
                  </span>
                  No spam
                </span>
                <span>
                  <span>
                    <Image
                      alt="checksvg"
                      src={checkSvg}
                      style={{ width: "12px", height: "8.25px" }} />
                  </span>
                  Unsubscribe anytime
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
