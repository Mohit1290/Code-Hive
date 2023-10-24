import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../Hook/windowSize";
import "./CodeInput.css";
import {
  faSquareCaretUp,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
function CodeInput() {
  const [showInputBar, setShowInputBar] = useState(false);
  const [testInput, setTestInput] = useState("");

  const toggleInputBar = () => {
    setShowInputBar(!showInputBar);
  };

  return (
    <div className="sm:border flex flex-col justify-end w-1/2 md:w-full bg-gray-100 h-64 md:h-1/3">
      <button
        className="flex ml-0 items-center bg-gray-200 pt-2 pr-2 rounded-md text-base justify-center w-16"
        onClick={toggleInputBar}
      >
        stdin{" "}
        <FontAwesomeIcon
          icon={showInputBar ? faSquareCaretUp : faSquareCaretDown}
          size="xs"
          className="ml-1"
        />
      </button>
      {showInputBar && (
        <textarea
          className="p-2 outline-none container border-none bg-white"
          cols="30"
          rows="15"
          placeholder=""
          value={testInput}
          onChange={(e) => setTestInput(e.target.value)}
        ></textarea>
      )}
    </div>
  );
};

export default CodeInput;
