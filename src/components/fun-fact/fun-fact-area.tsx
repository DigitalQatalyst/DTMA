import Image from "next/image";
import icon from "@/assets/img/icon/funfact/Company logo.svg";
import icon_1 from "@/assets/img/icon/funfact/Company logo (1).svg";
import icon_2 from "@/assets/img/icon/funfact/Company logo (2).svg";
import icon_3 from "@/assets/img/icon/funfact/Company logo (3).svg";
import icon_4 from "@/assets/img/icon/funfact/Company logo (4).svg";
import icon_5 from "@/assets/img/icon/funfact/Company logo (5).svg";

const funFacts = [
  {
    id: 1,
    title: "Flexible classes",
    description: "You pick schedule.",
    icon: icon,
  },
  {
    id: 2,
    // title: "Offline mode",
    // description: "Download classes.",
    icon: icon_1,
    // cls: "tp-funfact-item-2",
  },
  {
    id: 3,
    // title: "10k online courses",
    // description: "Explore fresh topics.",
    icon: icon_2,
    // cls: "tp-funfact-item-3",
  },
  {
    id: 4,
    // title: "Educator help",
    // description: "Always get answers.",
    icon: icon_3,
  },
  {
    id: 5,
    // title: "Educator help",
    // description: "Always get answers.",
    icon: icon_4,
  },
  {
    id: 6,
    // title: "Educator help",
    // description: "Always get answers.",
    icon: icon_5,
  },
];

export default function FunFactArea() {
  return (
    <section
      className="funfact-area tp-funfact-bg"
    // data-background="assets/img/bg/funfact-2-bg-1.jpg"
    // style={{ backgroundImage: "url(/assets/img/bg/funfact-2-bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <p className="trustee">Trusted by Industry Leaders</p>
          {funFacts.map((fact) => (
            <div key={fact.id} className="col-lg-2 col-sm-5">
              <div className={"tp-funfact-item d-flex align-items-center"}>
                <div className="tp-funfact-icon">
                  <span>
                    <Image src={fact.icon} alt="icon" />
                  </span>
                </div>
                <div className="tp-funfact-content">
                  {/* <h4 className="tp-funfact-title">{fact.title}</h4>
                  <span>{fact.description}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
