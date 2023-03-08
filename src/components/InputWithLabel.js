import React, { useRef, useEffect } from "react";
import style from "./TodoListItem.module.css";
// For typechecking props
import PropTypes from "prop-types";

/* *********************************************************** */
// InputWithLabel COMPONENT / FUNCTION/////////////////////////////////////////
/* *********************************************************** */

const InputWithLabel = ({ todoTitleValue, handleTitleChange, children }) => {
  // Moved below from AddToDoForm.js into multi-line return (which is just "return", then "(", then some kind of <div>, then various lines of code, closed with a ")" (Lesson 1.6)

  // A: Create ref with React’s useRef Hook (Lesson 1.6)
  const inputRef = useRef();

  //  C: Used React’s lifecycle with useEffect hook, performing focus on input field when component renders (Lesson 1.6).
  useEffect(() => {
    // D: Since ref is passed to input field’s ref attribute, "current" property gives access to element. Executed its focus programmatically as a side-effect (Lesson 1.6).
    inputRef.current.focus();
  }, [todoTitleValue]);

  return (
    <>
      <label htmlFor="todoTitle" className={style.labelName}>
        {children}
      </label>
      <input
        id="todoTitle"
        name="title"
        value={todoTitleValue}
        onChange={handleTitleChange}
        // B: Passed React useRef hook ("inputRef") to JSX-reserved ref attribute (Lesson 1.6)
        ref={inputRef}
        className={style.inputName}
      ></input>
    </>
  );
};

InputWithLabel.propTypes = {
  todoTitleValue: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default InputWithLabel;
