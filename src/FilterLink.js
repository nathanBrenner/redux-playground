import React from "react";
import { store, Actions } from "./Store";

const FilterLink = ({ filter, children }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: Actions.SET_VISIBILITY_FILTER,
          filter
        });
      }}
    >
      {children}
    </button>
  );
};

export default FilterLink;
