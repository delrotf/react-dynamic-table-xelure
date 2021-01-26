import React from "react";
import { FormCard } from "../components";
import { AppContextProvider } from "../context";

const WelcomePage = props => {
  return (
    <AppContextProvider>
      <div className="login-page mt-5 pt-5 d-flex justify-content-center">
        <FormCard {...props} />
      </div>
    </AppContextProvider>
  );
};

export { WelcomePage };
