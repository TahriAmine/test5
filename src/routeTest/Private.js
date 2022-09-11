import React from "react";
import Auth from "./Auth";

export const Private = props => {
  return (
    <div>
      <h1>App Layout</h1>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
