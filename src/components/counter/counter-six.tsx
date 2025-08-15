// import CounterItem from "./counter-item";

// const counterData = [
//   {
//     endValue: 10,
//     label: "Students Enrolled",
//     suffix: "k",
//   },
//   {
//     endValue: 3,
//     label: "Enrollment Forms",
//     suffix: "k",
//   },
//   {
//     endValue: 240,
//     label: "Online Instructors",
//     suffix: "",
//     duration: 1,
//   },
//   {
//     endValue: 110,
//     label: "Countries",
//     suffix: "",
//   },
// ];

export default function CounterSix() {
  return (
    // <section
    //   className="tp-instructor-counter-area p-relative tp-instructor-bg fix"
    //   data-background="assets/img/instructor/instructor-bg.jpg"
    //   style={{
    //     backgroundImage: "url(/assets/img/instructor/instructor-bg.jpg)",
    //   }}
    // >
    //   <div className="container">
    //     <div className="row">
    //       {counterData.map((item, index) => (
    //         <div key={index} className="col-lg-3 col-sm-6">
    //           <div className="tp-instructor-counter-item text-center">
    //             <h3 className="tp-counter-count mb-10">
    //               <CounterItem min={0} max={item.endValue} />
    //               {item.suffix}
    //             </h3>
    //             <p>{item.label}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "80px",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <div
        style={{
          width: "651.017px",
          height: "571.352px",
          flexShrink: 0,
          borderRadius: "8px",
          background: "url(/assets/img/about/about/approach.png) white 50% / cover no-repeat"
        }}
      >

      </div>
      <div
        style={{
          width: "578.905px",
          height: "328px",
          flexShrink: 0,
          marginLeft: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "578.905px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px"
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#000006",
              fontFamily: "Outfit",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "60px",
              letterSpacing: "-0.8px"
            }}
          >
            Our Approach
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "#000",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "40px"
            }}
          >
            Our approach focuses on empowering learners with flexible, personalized, and practical education. Using AI-driven learning paths, we ensure that you gain the skills most relevant to your career goals.
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "#000",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "40px"
            }}
          >
            From microlearning sessions to immersive case studies, our courses are designed to fit seamlessly into your schedule, helping you stay competitive and relevant in today’s digital world.
          </div>
        </div>
      </div>
    </div>
  );
}
