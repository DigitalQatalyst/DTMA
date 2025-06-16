// import Link from "next/link";
// import { SearchSvgTwo } from "../svg";
import FaqItem from "./faq-item";
import '../../app/(home)/home-online-course/main.css'; // Adjust the path as necessary


// navData.js
export const navItems = [
  { id: "home", label: "Student", active: true },
  { id: "profile", label: "Instructor", active: false },
];

const tabContentData = [
  {
    id: "home",
    label: "home-tab",
    title: "Home",
    topics: [
      { id: 1, text: "Account/Profile (1)", href: "/my-profile" },
      { id: 2, text: "Course Taking (2)", href: "/course-with-filter" },
      { id: 3, text: "Getting Started (1)", href: "#" },
      { id: 4, text: "Mobile (1)", href: "#" },
      { id: 5, text: "Purchase/Refunds (3)", href: "#" },
      { id: 6, text: "Troubleshooting (2)", href: "#" },
    ],
    faqs: [
      {
        id: 6,
        question: "Is there a free trial available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        id: 7,
        active: true,
        question: "Can I change my plan later?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 8,
        question: "What is your cancellation policy?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 9,
        question: "Can other info be added to an invoice?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 10,
        question: "How does billing work?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 11,
        question: "How do I change my account email?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: "profile",
    label: "profile-tab",
    title: "Profile",
    topics: [
      { id: 1, text: "Account/Profile (1)", href: "#" },
      { id: 2, text: "Course Taking (2)", href: "#" },
      { id: 3, text: "Getting Started (1)", href: "#" },
      { id: 4, text: "Mobile (1)", href: "#" },
      { id: 5, text: "Purchase/Refunds (3)", href: "#" },
      { id: 6, text: "Troubleshooting (2)", href: "#" },
    ],
    faqs: [
      {
        id: 6,
        question: "Is there a free trial available?",
        answer:
          "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      },
      {
        id: 7,
        active: true,
        question: "Can I change my plan later?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 8,
        question: "What is your cancellation policy?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 9,
        question: "Can other info be added to an invoice?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 10,
        question: "How does billing work?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 11,
        question: "How do I change my account email?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
];

export default function FaqArea() {
  return (
    <section className="tp-faq-area tp-faq-p pt-50 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-instructor-become-tab">
              <div className="tp-faq-section">
                <h5 className="tp-faq-subtitle">Frequently asked questions</h5>
                <h3 className="tp-faq-title">Get answers to common questions about DTMA courses and billing.</h3>
              </div>
              {/* <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${item.active ? "active" : ""}`}
                      id={`${item.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${item.id}`}
                      type="button"
                      role="tab"
                      aria-controls={item.id}
                      aria-selected={item.active}
                      tabIndex={item.active ? 0 : -1}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul> */}

              <div className="tab-content" id="myTabContent">
                {tabContentData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${tab.id === "home" ? "show active" : ""
                      }`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={tab.label}
                  >
                    <div className="row">
                      {/* <div className="col-lg-4"> */}
                      {/* <div className="tp-faq-wrap"> */}
                      {/* <div className="tp-faq-search">
                            <div className="tp-header-2-search">
                              <form action="#">
                                <input type="text" placeholder="Search..." />
                                <button
                                  className="tp-header-2-search-btn"
                                  type="submit"
                                >
                                  <span>
                                    <SearchSvgTwo />
                                  </span>
                                </button>
                              </form>
                            </div>
                          </div>
                          <div className="tp-faq-sidebar">
                            <h4 className="tp-faq-sidebar-title">
                              Related Topics
                            </h4>
                            <ul>
                              {tab.topics.map((topic) => (
                                <li key={topic.id}>
                                  <Link href={topic.href}>{topic.text}</Link>
                                </li>
                              ))}
                            </ul>
                            <div className="tp-faq-sidebar-btn">
                              <Link
                                className="tp-btn-inner w-100 text-center"
                                href="/contact"
                              >
                                Contact Us
                              </Link>
                            </div>
                          </div> */}
                      {/* </div> */}
                      {/* </div> */}
                      <div className="col-lg-8">
                        <div className="tp-faq-box">
                          <div className="tpd-accordion">
                            <div
                              className="accordion accordion-flush"
                              id={tab.id}
                            >
                              {tab.faqs.map((faq) => (
                                <FaqItem key={faq.id} faq={faq} parentId={tab.id} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
