import React from "react";
import { fontStyles, styles } from "../style";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Para1 from "./Para1";
import { useGlobalContext } from "../context";

const AccordianComp = ({ data: { id, question, answer, open } }) => {
  const { updateAccordian } = useGlobalContext();
  return (
    <div className={`${styles.flexCol} gap-6`}>
      <div
        className={`${styles.flexBetween} ${
          open ? "bg-orange-500 text-white" : "bg-orange-200 text-blue"
        }  w-full rounded-lg p-4 `}
      >
        <p className={`${fontStyles.p1} font-bold`}>{question}</p>
        <button onClick={() => updateAccordian(id)} className="text-xl">
          {open ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      {open && <Para1 fontWeight="font-normal">{answer}</Para1>}
    </div>
  );
};

export default AccordianComp;
