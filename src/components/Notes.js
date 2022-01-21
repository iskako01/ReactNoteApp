import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} timeout={750} className="note">
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <span>{note.date}</span>
            </div>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemove(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
