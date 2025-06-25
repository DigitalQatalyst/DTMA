import { ChevronDown, Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import "./acc.css";

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

const FaqAccordion = ({ faq, parentId, isOpen, onToggle }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  console.log("faq", faq);
  return (
    <div className="accordion-area">
      <div className="accordion">
        <div className="accordion-header" onClick={toggleOpen}>
          <div>
            <p className="accordion-title">{faq?.question}</p>
          </div>
          <div className={`icon ${open ? "activeicon" : ""}`}>
            {!open ? (
              <Plus onClick={toggleOpen} size={20} />
            ) : (
              <Minus onClick={toggleOpen} size={20} />
            )}
          </div>
        </div>
        <div className={`accordion-answer ${open ? "open" : "none"}`}>
          <p>{faq?.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
