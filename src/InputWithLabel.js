import React, { useRef, useEffect } from "react";

// ************************************************************************************************************************ //
// InputWithLabel COMPONENT / FUNCTION//////////////////////////////////////////////////////
// ************************************************************************************************************************ //

const InputWithLabel = ({ todoTitleValue, handleTitleChange, children }) => {
  // Moved below from AddToDoForm.js into a "multi-line return," which is just "return", then "(", then some kind of <div> or in this case a fragment <>, then the various lines of code, closed with a ")" (Lesson 1.6)

  // A: Create a ref with React’s useRef Hook (Lesson 1.6)
  const inputRef = useRef();

  //  C: "...opt into React’s lifecycle with React’s useEffect Hook, performing the focus on the input field when the component renders.  (Lesson 1.6)
  useEffect(() => {
    // D: "... since the ref is passed to the input field’s ref attribute, its current property gives access to the element. Execute its focus programmatically as a side-effect..." (Lesson 1.6)
    inputRef.current.focus();
  }, [todoTitleValue]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        id="todoTitle"
        name="title"
        value={todoTitleValue}
        onChange={handleTitleChange}
        // B: Pass React useRef hook ("inputRef") to JSX-reserved ref attribute (Lesson 1.6)
        ref={inputRef}
      ></input>
    </>
  );
};

export default InputWithLabel;
