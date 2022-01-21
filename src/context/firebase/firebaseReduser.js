import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types";

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payLoad }) => ({
    ...state,
    notes: [...state.notes, payLoad],
  }),
  [FETCH_NOTES]: (state, { payLoad }) => ({
    ...state,
    notes: payLoad,
    loading: false,
  }),
  [REMOVE_NOTE]: (state, { payLoad }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payLoad),
  }),
  DEFAULT: (state) => state,
};

export const FirebaseReduser = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
