import React, { useState } from "react";
import "./scss/_faqAccordion.scss";
import { IoAdd } from "react-icons/io5";

interface FAQAccordionProps {
  question: string;
  answer: string;
  answer2?: string;
  answer3?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  question,
  answer,
  answer2,
  answer3,
}) => {
  const [showAccordion, setShowAcccordion] = useState(false);

  const handleShowAccordion = () => {
    setShowAcccordion(!showAccordion);
  };

  //problemet -> diven som ligger i acordion påverkas när flex körs

  return (
    <>
      <div className="accordion" onClick={handleShowAccordion}>
        <p className="question">
          <IoAdd size={24} className={showAccordion ? "icon-active" : "icon"} />
          {question}
        </p>
        <div className={`panel ${showAccordion ? "open" : ""}`}>
          <div className="wrapper">
            <p className="answer">{answer}</p>
            <br />
            <p className="answer">{answer2}</p>
            <br />
            <p className="answer">{answer3}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
