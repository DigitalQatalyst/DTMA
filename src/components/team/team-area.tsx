// import React from "react";
// import TeamSlider from "./slider/team-slider";
// import shape_underline from "@/assets/img/unlerline/team-2-svg-1.svg";
// import Image from "next/image";
// import { NextArrowTwo, PrevArrowTwo } from "../svg";

export default function TeamArea() {
  return (
    // <section className="team-area pt-100 mb-100">
    //   <div className="container">
    //     <div className="row align-items-end">
    //       <div className="col-lg-6 col-md-8">
    //         <div className="tp-section mb-45">
    //           <h5 className="tp-section-3-subtitle">Our Team</h5>
    //           <h3 className="tp-section-3-title">
    //             Meet Our{' '}
    //             <span>
    //               Teachers
    //               <Image
    //                 className="tp-underline-shape-9 wow bounceIn"
    //                 data-wow-duration="1.5s"
    //                 data-wow-delay=".4s"
    //                 src={shape_underline}
    //                 alt="shape-underline"
    //               />
    //             </span>
    //           </h3>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-4">
    //         <div className="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
    //           <div className="tp-team-2-prev pointer">
    //             <span>
    //               <PrevArrowTwo />
    //             </span>
    //           </div>
    //           <div className="tp-team-2-next pointer">
    //             <span>
    //               <NextArrowTwo />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* team slider */}
    //     <TeamSlider />
    //     {/* team slider */}
    //   </div>
    // </section>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch"
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "80px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "64px",
          alignSelf: "stretch"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <div
              style={{
                color: "#000006",
                textAlign: "center",
                fontFamily: "Outfit",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "60px",
                letterSpacing: "-0.8px"
              }}
            >
              Our Leadership Team Members
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "1280px",
            justifyContent: "space-between",
            alignItems: "flex-start"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px"
            }}
          >


            <div
              style={{
                width: "270px",
                height: "330px",
              }}
            >
              <div
                style={{
                  width: "270px",
                  height: "330px",
                  flexShrink: 0,
                  borderRadius: "8px",
                  background: "url(assets/img/about/about/p1.png) white 50% / cover no-repeat",
                  position: "relative",
                  marginBottom: "8px",
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "16px",
                    transform: "translateX(-50%)",
                    width: "230px",
                    height: "83px",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "8px",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)", // optional, for subtle shadow
                    zIndex: 2
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "230px", height: "83px", zIndex: 1 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="84" viewBox="0 0 230 84" fill="none">
                      <mask id="mask0_10326_17532" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="230" height="84">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                      </mask>
                      <g mask="url(#mask0_10326_17532)">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                        <circle cx="210.709" cy="25.0564" r="0.646687" transform="rotate(-90 210.709 25.0564)" fill="#3758F9" />
                        <circle cx="216.397" cy="25.0564" r="0.646687" transform="rotate(-90 216.397 25.0564)" fill="#3758F9" />
                        <circle cx="222.092" cy="25.0564" r="0.646687" transform="rotate(-90 222.092 25.0564)" fill="#3758F9" />
                        <circle cx="227.779" cy="25.0564" r="0.646687" transform="rotate(-90 227.779 25.0564)" fill="#3758F9" />
                        <circle cx="210.709" cy="19.3689" r="0.646687" transform="rotate(-90 210.709 19.3689)" fill="#3758F9" />
                        <circle cx="216.397" cy="19.3689" r="0.646687" transform="rotate(-90 216.397 19.3689)" fill="#3758F9" />
                        <circle cx="222.092" cy="19.3689" r="0.646687" transform="rotate(-90 222.092 19.3689)" fill="#3758F9" />
                        <circle cx="227.779" cy="19.3689" r="0.646687" transform="rotate(-90 227.779 19.3689)" fill="#3758F9" />
                        <circle cx="210.709" cy="13.6736" r="0.646687" transform="rotate(-90 210.709 13.6736)" fill="#3758F9" />
                        <circle cx="216.397" cy="13.6736" r="0.646687" transform="rotate(-90 216.397 13.6736)" fill="#3758F9" />
                        <circle cx="222.092" cy="13.6736" r="0.646687" transform="rotate(-90 222.092 13.6736)" fill="#3758F9" />
                        <circle cx="227.779" cy="13.6736" r="0.646687" transform="rotate(-90 227.779 13.6736)" fill="#3758F9" />
                        <circle cx="210.709" cy="7.98613" r="0.646687" transform="rotate(-90 210.709 7.98613)" fill="#3758F9" />
                        <circle cx="216.397" cy="7.98613" r="0.646687" transform="rotate(-90 216.397 7.98613)" fill="#3758F9" />
                        <circle cx="222.092" cy="7.98613" r="0.646687" transform="rotate(-90 222.092 7.98613)" fill="#3758F9" />
                        <circle cx="227.779" cy="7.98613" r="0.646687" transform="rotate(-90 227.779 7.98613)" fill="#3758F9" />
                        <circle cx="210.709" cy="2.29081" r="0.646687" transform="rotate(-90 210.709 2.29081)" fill="#3758F9" />
                        <circle cx="216.397" cy="2.29081" r="0.646687" transform="rotate(-90 216.397 2.29081)" fill="#3758F9" />
                        <circle cx="222.092" cy="2.29081" r="0.646687" transform="rotate(-90 222.092 2.29081)" fill="#3758F9" />
                        <circle cx="227.779" cy="2.29081" r="0.646687" transform="rotate(-90 227.779 2.29081)" fill="#3758F9" />
                        <circle cx="16" cy="98.7031" r="45" fill="#13C296" fillOpacity="0.11" />
                      </g>
                    </svg>
                  </div>
                  {/* Text content */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        color: "#111928",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "24px"
                      }}
                    >
                      Coriss Ambady
                    </div>
                    <div
                      style={{
                        color: "#637381",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "20px"
                      }}
                    >
                      Web Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div
              style={{
                width: "270px",
                height: "330px"
              }}
            >
              <div
                style={{
                  width: "270px",
                  height: "330px",
                  flexShrink: 0,
                  borderRadius: "8px",
                  background: "url(assets/img/about/about/p3.png) white 50% / cover no-repeat",
                  position: "relative",
                  marginBottom: "8px",
                  overflow: "hidden"
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "16px",
                    transform: "translateX(-50%)",
                    width: "230px",
                    height: "83px",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "8px",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)", // optional, for subtle shadow
                    zIndex: 2
                  }}
                >

                  <div style={{ position: "absolute", top: 0, left: 0, width: "230px", height: "83px", zIndex: 1 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="84" viewBox="0 0 230 84" fill="none">
                      <mask id="mask0_10326_17532" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="230" height="84">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                      </mask>
                      <g mask="url(#mask0_10326_17532)">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                        <circle cx="210.709" cy="25.0564" r="0.646687" transform="rotate(-90 210.709 25.0564)" fill="#3758F9" />
                        <circle cx="216.397" cy="25.0564" r="0.646687" transform="rotate(-90 216.397 25.0564)" fill="#3758F9" />
                        <circle cx="222.092" cy="25.0564" r="0.646687" transform="rotate(-90 222.092 25.0564)" fill="#3758F9" />
                        <circle cx="227.779" cy="25.0564" r="0.646687" transform="rotate(-90 227.779 25.0564)" fill="#3758F9" />
                        <circle cx="210.709" cy="19.3689" r="0.646687" transform="rotate(-90 210.709 19.3689)" fill="#3758F9" />
                        <circle cx="216.397" cy="19.3689" r="0.646687" transform="rotate(-90 216.397 19.3689)" fill="#3758F9" />
                        <circle cx="222.092" cy="19.3689" r="0.646687" transform="rotate(-90 222.092 19.3689)" fill="#3758F9" />
                        <circle cx="227.779" cy="19.3689" r="0.646687" transform="rotate(-90 227.779 19.3689)" fill="#3758F9" />
                        <circle cx="210.709" cy="13.6736" r="0.646687" transform="rotate(-90 210.709 13.6736)" fill="#3758F9" />
                        <circle cx="216.397" cy="13.6736" r="0.646687" transform="rotate(-90 216.397 13.6736)" fill="#3758F9" />
                        <circle cx="222.092" cy="13.6736" r="0.646687" transform="rotate(-90 222.092 13.6736)" fill="#3758F9" />
                        <circle cx="227.779" cy="13.6736" r="0.646687" transform="rotate(-90 227.779 13.6736)" fill="#3758F9" />
                        <circle cx="210.709" cy="7.98613" r="0.646687" transform="rotate(-90 210.709 7.98613)" fill="#3758F9" />
                        <circle cx="216.397" cy="7.98613" r="0.646687" transform="rotate(-90 216.397 7.98613)" fill="#3758F9" />
                        <circle cx="222.092" cy="7.98613" r="0.646687" transform="rotate(-90 222.092 7.98613)" fill="#3758F9" />
                        <circle cx="227.779" cy="7.98613" r="0.646687" transform="rotate(-90 227.779 7.98613)" fill="#3758F9" />
                        <circle cx="210.709" cy="2.29081" r="0.646687" transform="rotate(-90 210.709 2.29081)" fill="#3758F9" />
                        <circle cx="216.397" cy="2.29081" r="0.646687" transform="rotate(-90 216.397 2.29081)" fill="#3758F9" />
                        <circle cx="222.092" cy="2.29081" r="0.646687" transform="rotate(-90 222.092 2.29081)" fill="#3758F9" />
                        <circle cx="227.779" cy="2.29081" r="0.646687" transform="rotate(-90 227.779 2.29081)" fill="#3758F9" />
                        <circle cx="16" cy="98.7031" r="45" fill="#13C296" fillOpacity="0.11" />
                      </g>
                    </svg>
                  </div>

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        color: "#111928",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "24px"
                      }}
                    >
                      glorius Cristian
                    </div>
                    <div
                      style={{
                        color: "#637381",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "20px"
                      }}
                    >
                      App Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div
              style={{
                width: "270px",
                height: "330px"
              }}
            >
              <div
                style={{
                  width: "270px",
                  height: "330px",
                  flexShrink: 0,
                  borderRadius: "8px",
                  background: "url(assets/img/about/about/p4.png) white 50% / cover no-repeat",
                  position: "relative",
                  marginBottom: "8px",
                  overflow: "hidden"
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "16px",
                    transform: "translateX(-50%)",
                    width: "230px",
                    height: "83px",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "8px",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)", // optional, for subtle shadow
                    zIndex: 2
                  }}
                >

                  <div style={{ position: "absolute", top: 0, left: 0, width: "230px", height: "83px", zIndex: 1 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="84" viewBox="0 0 230 84" fill="none">
                      <mask id="mask0_10326_17532" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="230" height="84">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                      </mask>
                      <g mask="url(#mask0_10326_17532)">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                        <circle cx="210.709" cy="25.0564" r="0.646687" transform="rotate(-90 210.709 25.0564)" fill="#3758F9" />
                        <circle cx="216.397" cy="25.0564" r="0.646687" transform="rotate(-90 216.397 25.0564)" fill="#3758F9" />
                        <circle cx="222.092" cy="25.0564" r="0.646687" transform="rotate(-90 222.092 25.0564)" fill="#3758F9" />
                        <circle cx="227.779" cy="25.0564" r="0.646687" transform="rotate(-90 227.779 25.0564)" fill="#3758F9" />
                        <circle cx="210.709" cy="19.3689" r="0.646687" transform="rotate(-90 210.709 19.3689)" fill="#3758F9" />
                        <circle cx="216.397" cy="19.3689" r="0.646687" transform="rotate(-90 216.397 19.3689)" fill="#3758F9" />
                        <circle cx="222.092" cy="19.3689" r="0.646687" transform="rotate(-90 222.092 19.3689)" fill="#3758F9" />
                        <circle cx="227.779" cy="19.3689" r="0.646687" transform="rotate(-90 227.779 19.3689)" fill="#3758F9" />
                        <circle cx="210.709" cy="13.6736" r="0.646687" transform="rotate(-90 210.709 13.6736)" fill="#3758F9" />
                        <circle cx="216.397" cy="13.6736" r="0.646687" transform="rotate(-90 216.397 13.6736)" fill="#3758F9" />
                        <circle cx="222.092" cy="13.6736" r="0.646687" transform="rotate(-90 222.092 13.6736)" fill="#3758F9" />
                        <circle cx="227.779" cy="13.6736" r="0.646687" transform="rotate(-90 227.779 13.6736)" fill="#3758F9" />
                        <circle cx="210.709" cy="7.98613" r="0.646687" transform="rotate(-90 210.709 7.98613)" fill="#3758F9" />
                        <circle cx="216.397" cy="7.98613" r="0.646687" transform="rotate(-90 216.397 7.98613)" fill="#3758F9" />
                        <circle cx="222.092" cy="7.98613" r="0.646687" transform="rotate(-90 222.092 7.98613)" fill="#3758F9" />
                        <circle cx="227.779" cy="7.98613" r="0.646687" transform="rotate(-90 227.779 7.98613)" fill="#3758F9" />
                        <circle cx="210.709" cy="2.29081" r="0.646687" transform="rotate(-90 210.709 2.29081)" fill="#3758F9" />
                        <circle cx="216.397" cy="2.29081" r="0.646687" transform="rotate(-90 216.397 2.29081)" fill="#3758F9" />
                        <circle cx="222.092" cy="2.29081" r="0.646687" transform="rotate(-90 222.092 2.29081)" fill="#3758F9" />
                        <circle cx="227.779" cy="2.29081" r="0.646687" transform="rotate(-90 227.779 2.29081)" fill="#3758F9" />
                        <circle cx="16" cy="98.7031" r="45" fill="#13C296" fillOpacity="0.11" />
                      </g>
                    </svg>
                  </div>

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        color: "#111928",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "24px"
                      }}
                    >
                      glorius Cristian
                    </div>
                    <div
                      style={{
                        color: "#637381",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "20px"
                      }}
                    >
                      Ui/Ux Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "270px",
                height: "330px"
              }}
            >
              <div
                style={{
                  width: "270px",
                  height: "330px",
                  flexShrink: 0,
                  borderRadius: "8px",
                  background: "url(assets/img/about/about/p5.png) white 50% / cover no-repeat",
                  position: "relative",
                  marginBottom: "8px",
                  overflow: "hidden"
                }}
              >

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "16px",
                    transform: "translateX(-50%)",
                    width: "230px",
                    height: "83px",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "8px",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)", // optional, for subtle shadow
                    zIndex: 2
                  }}
                >

                  <div style={{ position: "absolute", top: 0, left: 0, width: "230px", height: "83px", zIndex: 1 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="84" viewBox="0 0 230 84" fill="none">
                      <mask id="mask0_10326_17532" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="230" height="84">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                      </mask>
                      <g mask="url(#mask0_10326_17532)">
                        <rect y="0.703125" width="230" height="83" rx="8" fill="white" />
                        <circle cx="210.709" cy="25.0564" r="0.646687" transform="rotate(-90 210.709 25.0564)" fill="#3758F9" />
                        <circle cx="216.397" cy="25.0564" r="0.646687" transform="rotate(-90 216.397 25.0564)" fill="#3758F9" />
                        <circle cx="222.092" cy="25.0564" r="0.646687" transform="rotate(-90 222.092 25.0564)" fill="#3758F9" />
                        <circle cx="227.779" cy="25.0564" r="0.646687" transform="rotate(-90 227.779 25.0564)" fill="#3758F9" />
                        <circle cx="210.709" cy="19.3689" r="0.646687" transform="rotate(-90 210.709 19.3689)" fill="#3758F9" />
                        <circle cx="216.397" cy="19.3689" r="0.646687" transform="rotate(-90 216.397 19.3689)" fill="#3758F9" />
                        <circle cx="222.092" cy="19.3689" r="0.646687" transform="rotate(-90 222.092 19.3689)" fill="#3758F9" />
                        <circle cx="227.779" cy="19.3689" r="0.646687" transform="rotate(-90 227.779 19.3689)" fill="#3758F9" />
                        <circle cx="210.709" cy="13.6736" r="0.646687" transform="rotate(-90 210.709 13.6736)" fill="#3758F9" />
                        <circle cx="216.397" cy="13.6736" r="0.646687" transform="rotate(-90 216.397 13.6736)" fill="#3758F9" />
                        <circle cx="222.092" cy="13.6736" r="0.646687" transform="rotate(-90 222.092 13.6736)" fill="#3758F9" />
                        <circle cx="227.779" cy="13.6736" r="0.646687" transform="rotate(-90 227.779 13.6736)" fill="#3758F9" />
                        <circle cx="210.709" cy="7.98613" r="0.646687" transform="rotate(-90 210.709 7.98613)" fill="#3758F9" />
                        <circle cx="216.397" cy="7.98613" r="0.646687" transform="rotate(-90 216.397 7.98613)" fill="#3758F9" />
                        <circle cx="222.092" cy="7.98613" r="0.646687" transform="rotate(-90 222.092 7.98613)" fill="#3758F9" />
                        <circle cx="227.779" cy="7.98613" r="0.646687" transform="rotate(-90 227.779 7.98613)" fill="#3758F9" />
                        <circle cx="210.709" cy="2.29081" r="0.646687" transform="rotate(-90 210.709 2.29081)" fill="#3758F9" />
                        <circle cx="216.397" cy="2.29081" r="0.646687" transform="rotate(-90 216.397 2.29081)" fill="#3758F9" />
                        <circle cx="222.092" cy="2.29081" r="0.646687" transform="rotate(-90 222.092 2.29081)" fill="#3758F9" />
                        <circle cx="227.779" cy="2.29081" r="0.646687" transform="rotate(-90 227.779 2.29081)" fill="#3758F9" />
                        <circle cx="16" cy="98.7031" r="45" fill="#13C296" fillOpacity="0.11" />
                      </g>
                    </svg>
                  </div>

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        color: "#111928",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "24px"
                      }}
                    >
                      Nikolas Brooten
                    </div>
                    <div
                      style={{
                        color: "#637381",
                        textAlign: "center",
                        fontFamily: "Inter",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "20px"
                      }}
                    >
                      Sales Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
