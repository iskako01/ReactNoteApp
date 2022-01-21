import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { FirebaseContext } from "../context/firebase/firebaseContex";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      firebase.addNote(value.trim());
      alert.show("The task was created ! ", "success");
      setValue("");
    } else {
      alert.show("Enter the text. ");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
