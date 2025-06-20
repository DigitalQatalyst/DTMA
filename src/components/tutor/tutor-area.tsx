// import { TutorIconOne, TutorIconThree, TutorIconTwo, WorldSvg } from '../svg';


// const tutorData = [
//   {
//     id: 1,
//     icon: <TutorIconOne />,
//     title: "Professional Educators",
//     description: "Get one-on-one help from our subject matter experts.",
//     delay: ".3s",
//   },
//   {
//     id: 2,
//     icon: <TutorIconTwo />,
//     title: "Real-Time Support",
//     description: "Ask questions over live chat or schedule a virtual meeting.",
//     delay: ".5s",
//   },
//   {
//     id: 3,
//     icon: <TutorIconThree />,
//     title: "Free Access",
//     description: "Every course offers online tutoring at no additional charge.",
//     delay: ".7s",
//   },
// ];


export default function TutorArea() {
  return (
    // <section className="tp-about-tutor-area pt-110 pb-90">
    //   <div className="container">
    //     <div className="row align-items-end">
    //       <div className="col-lg-6">
    //         <div className="tp-about-tutor-heading mb-130">
    //           <div className="tp-about-tutor-subtitle d-flex align-items-center">
    //             <span><WorldSvg /></span>
    //             <p>Know about classes</p>
    //           </div>
    //           <h3 className="tp-about-tutor-title">We create unique <br />
    //             digital media experiences.</h3>
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="tp-about-tutor-right d-flex justify-content-lg-end mb-130">
    //           <div className="tp-about-tutor-content">
    //             <p>Online courses from the worlds leading experts. <br />
    //               Lorem ipsum is simply dummy of the printing and <br />
    //               typesetting industry lorem</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       {tutorData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="col-lg-4 col-md-6 wow fadeInUp"
    //           data-wow-delay={item.delay}
    //         >
    //           <div className="tp-tutor-item about text-center mb-30">
    //             <div className="tp-tutor-icon">
    //               <span>{item.icon}</span>
    //             </div>
    //             <div className="tp-tutor-content">
    //               <h4 className="tp-tutor-title">
    //                 <a href="#">{item.title}</a>
    //               </h4>
    //               <p>{item.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

      <div
      style={{
        display: "flex",
        padding: "80px",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1.5rem", // gap-4 is typically 1.5rem in Tailwind/Bootstrap
        alignSelf: "stretch"
      }}
    ><div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          alignSelf: "stretch"
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "#000006",
            textAlign: "center",
            fontFamily: "Outfit",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 700, // bold
            lineHeight: "60px",
            letterSpacing: "-0.8px"
          }}
        >
          About Us
        </div>
         <div
          style={{
            alignSelf: "stretch",
            color: "rgba(0, 0, 6, 0.60)",
            textAlign: "center",
            fontFamily: "Outfit",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "40px"
          }}
        >
          At DTMA, we are committed to bridging the skills gap in today’s digital economy. Our platform offers world-class, accredited courses designed to help professionals stay ahead in an ever-evolving digital landscape. Whether you&apos;re seeking to future-proof your career or elevate your organization&apos;s digital maturity, our personalized learning paths provide the tools you need to thrive.
        </div>
         <div
          style={{
            display: "flex",
            height: "40px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "8px",
            background: "var(--Primary, #008080)"
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              flex: "1 0 0",
              alignSelf: "stretch"
            }}
          >
            <a href="/contact" style={{ textDecoration: "none" }}>
            <button
            style={{
              color: "var(--Primary-100, #FFF)",
              textAlign: "center",
              fontFamily: "Outfit",
              fontSize: "var(--Label-Large-Size, 14px)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "var(--Label-Large-Line-Height, 20px)",
              letterSpacing: "var(--Label-Large-Tracking, 0.1px)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
          >
            Contact Us
          </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}
