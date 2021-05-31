// Imort useState from "react"
// Import { v4 as uuidv4 } from "uuid" - Universally Unique Identifier
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// List function
const List = (props) => {
  // useState
  const [userInput, setUserInput] = useState("");
  const placeholder = "Please add a ToDo";

  // changeHandle function
  function changeHandle(e) {
    // Targeting the value
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // prevState holds on the value of state before any update on the state
    // Trim out userInput to remove any unwanted spaces at the beginning and at the end of the input
    console.log(uuidv4());
    if (userInput.length) {
      props.setList((prevState) => [
        ...prevState,
        {
          id: uuidv4(),
          title: userInput.trim(),
          done: false,
        },
      ]);
      setUserInput("");
    }
  }
  // Return the result for the form and the input's
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={userInput}
        onChange={changeHandle}
        placeholder={placeholder}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

// Export default List
export default List;
