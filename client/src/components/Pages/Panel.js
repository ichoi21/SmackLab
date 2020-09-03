import { Button } from "@material-ui/core";
import React from "react";

import { authContext } from "../../context/AuthContext";

const Panel = () => {
  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center"> {`Start Flexing!, ${auth.data}`}</h1>
        <Button
          variant="primary"
          type="button"
          className="w-100 mt-3"
          onClick={onLogOut}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Panel;
