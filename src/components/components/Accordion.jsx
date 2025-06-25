import { ChevronDown, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="accordion-area">
      <div className="accordion">
        <h2 className="accordion-header" onClick={toggleOpen}>
          <div className="accordion-title">Question1</div>
          <div className="icon">
            {!open ? (
              <Plus onClick={toggleOpen} size={20} />
            ) : (
              <Minus onClick={toggleOpen} size={20} />
            )}
          </div>
        </h2>
        <div className={`accordion-body ${open ? "open" : "none"}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae
            dolor distinctio accusamus accusantium, quibusdam iusto et ratione
            minus ut fuga sit esse, fugit modi, asperiores tempore blanditiis
            totam. Consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
