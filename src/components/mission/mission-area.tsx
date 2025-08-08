// import Image from "next/image";
// import mission_main_img from '@/assets/img/our-mission/thumb-1.png';
// import mission_thumb_1 from "@/assets/img/our-mission/mission-item-1.jpg";
// import mission_thumb_2 from "@/assets/img/our-mission/mission-item-2.jpg";
// import mission_thumb_3 from "@/assets/img/our-mission/mission-item-3.jpg";
// import { RightArrowTwo } from "../svg";

// const missionData = [
//   {
//     id: 1,
//     title: "Creativity",
//     description:
//       "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
//     imgSrc: mission_thumb_1,
//   },
//   {
//     id: 2,
//     title: "Scholarship",
//     description:
//       "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
//     imgSrc: mission_thumb_2,
//   },
//   {
//     id: 3,
//     title: "Community",
//     description:
//       "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
//     imgSrc: mission_thumb_3,
//   },
// ];

// type IProps = {
//   top_cls?: string;
// }
//{top_cls='grey-bg pt-30'}: IProps
export default function MissionArea() {
  return (
    // <section className={`tp-our-mission-area ${top_cls}`}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-4">
    //         <div
    //           className="tp-our-mission-thumb wow fadeInUp"
    //           data-wow-delay=".3s"
    //         >
    //           <Image src={mission_main_img} alt="mission-img" style={{height:'auto'}} />
    //         </div>
    //       </div>
    //       <div className="col-lg-8">
    //         <div
    //           className="tp-our-mission-wrapper wow fadeInUp"
    //           data-wow-delay=".5s"
    //         >
    //           <div className="tp-our-mission-heading">
    //             <h3 className="tp-our-mission-title">Mission and values</h3>
    //             <p>
    //               We prepare you to launch your career by providing a
    //               supportive, creative, <br /> and professional. Our mission is
    //               to prepare students to understand, contribute <br /> to, and
    //               succeed in a rapidly changing society,
    //             </p>
    //           </div>

    //           {missionData.map((item, i) => (
    //             <div
    //               key={item.id}
    //               className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${
    //                 i !== missionData.length - 1 ? "mb-20" : ""
    //               }`}
    //             >
    //               <div className="tp-our-mission-item-content">
    //                 <h4 className="tp-our-mission-item-title">{item.title}</h4>
    //                 <p
    //                   dangerouslySetInnerHTML={{ __html: item.description }}
    //                 ></p>
    //                 <div className="tp-our-mission-item-btn">
    //                   <a className="tp-btn-3" href="#">
    //                     Learn More{" "}
    //                     <i>
    //                       <RightArrowTwo clr="white" />
    //                     </i>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="tp-our-mission-item-thumb">
    //                 <div className={`tp-our-mission-item-thumb-${item.id}`}>
    //                   <Image src={item.imgSrc} alt={item.title} style={{ height: "auto" }} />
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
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
      width: "578.905px",
      height: "368px",
      flexShrink: 0
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
    Mission
  </div>
  <div
  style={{
    alignSelf: "stretch",
    color: "#000",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px"
  }}
>
  Our mission is to provide accessible, flexible, and cutting-edge education that empowers individuals and organizations to excel in the digital economy.
</div>
<div
  style={{
    alignSelf: "stretch",
    color: "#000",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px"
  }}
>
  By offering specialized, role-based courses and real-world case studies, we equip professionals with the knowledge and tools to navigate the challenges of digital transformation and drive innovation within their organizations.
</div>
  </div>
  </div>
    <div
    style={{
      width: "651.017px",
      height: "571.352px",
      flexShrink: 0,
      aspectRatio: "651.02/571.35",
      borderRadius: "8px",
      background: "url(/assets/img/about/about/mission.png) lightgray 50% / cover no-repeat"
    }}
  >
  </div>
    </div>
  );
}
