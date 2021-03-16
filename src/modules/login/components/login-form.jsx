import React from "react";
import { login } from "../login.service";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { TOKEN } from "../login.constants";
export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/project-type");
  };

  return (
    <div>
      <button
        onClick={() => {
          handleSubmit();
          dispatch(login(TOKEN));
        }}
      >
        login
      </button>
    </div>
  );
}
