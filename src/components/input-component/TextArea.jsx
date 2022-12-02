import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TextArea = ({
  placeholder,
  borderColor = "border-linecolor",
  backgroundColor = "bg-lightgraybg opacity-1",
  contentColor = "text-textparagraph",
  placeholderColor,
  contentSize,
  focus = "focus:text-black",
  outline = "focus:outline-none",
  margin,
  disabled = false,
  submitInput,
  value,
  width,
  padding = "px-3",
  height = "h-24",
}) => {
  const [content, setContent] = useState("");

  const getInputValue = ({ target: { value } }) => {
    setContent(value);
    if (submitInput) {
      submitInput(value);
    }
  };

  useEffect(() => {
    if (value && value !== content) {
      setContent(value);
    }
  }, [value, content]);
  return (
    <div>
      <textarea
        onChange={getInputValue}
        value={content}
        placeholder={placeholder}
        className={`${backgroundColor} ${outline}  border ${borderColor} box-border rounded ${margin} ${width} ${padding} ${height} font-body ${contentColor} ${placeholderColor} ${contentSize} ${focus}`}
      />
    </div>
  );
};
TextArea.protoTypes = {
  placeholder: PropTypes.string.isRequired,
  // backgroundColor: PropTypes.string,
  // loading: PropTypes.boolean,
  // contentColor: PropTypes.string,
  // borderColor: PropTypes.string,
  // borderRadius: PropTypes.string,
  submitInput: PropTypes.func.isRequired,
  // disabled: PropTypes.boolean,
};
export default TextArea;
