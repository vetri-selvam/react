import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

// Reducer function

// params: current state, action
// returns: new state

function FormReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      const newState = {
        ...state,
        [action.field]: action.value,
      };
      // return new state for every key stroke
      return newState;
    case "RESET":
      return initialState;
    // return current state as default
    default:
      return state;
  }
}

export default function FormComponent() {
  const [formState, dispatch] = useReducer(FormReducer, initialState);

  // NOTE: dispatch's ONLY argument : action

  const handleChange = (e) => {
    // send action object for every key stroke
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formState);
    // empty fields once submitted
    dispatch({ type: "RESET" });
  };

  return (
    <>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        style={{ padding: "2rem", maxWidth: "400px" }}
      >
        <h2>Contact Us</h2>
        <input
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formState.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: "100px" }}
        />{" "}
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </>
  );
}

// styling
const inputStyle = {
  display: "block",
  marginBottom: "1rem",
  padding: "0.8rem",
  width: "100%",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "0.8rem 1.2rem",
  fontSize: "1rem",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
