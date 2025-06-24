type IProps = {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
  parentId: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ faq, parentId, isOpen, onToggle }: IProps) {
  console.log("faq", faq);
  return (
    <div className={`accordion-item${isOpen ? " expand" : ""}`} key={faq.id}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button${isOpen ? " faq-expend" : " collapsed"}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`flush-collapse${faq.id}`}
          style={{ color: "#000", background: "#fff" }}
          onClick={onToggle}
        >
          {faq.question}
          <span className="accordion-btn"></span>
        </button>
      </h2>
      <div
        id={`flush-collapse${faq.id}`}
        className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body" style={{ backgroundColor: "red" }}>
          <p className="faqanswer">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
