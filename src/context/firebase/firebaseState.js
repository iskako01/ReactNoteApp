import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContex";
import { FirebaseReduser } from "./firebaseReduser";
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from "../types";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initionalState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(FirebaseReduser, initionalState);

  const showLoader = () =>
    dispatch({
      type: SHOW_LOADER,
    });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);
    const payLoad = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({ type: FETCH_NOTES, payLoad });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };
    const res = await axios.post(`${url}/notes.json`, note);
    const payLoad = {
      ...note,
      id: res.data.name,
    };
    dispatch({ type: ADD_NOTE, payLoad });
  };
  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({ type: REMOVE_NOTE, payLoad: id });
  };
  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
