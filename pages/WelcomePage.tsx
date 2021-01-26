import React from "react";
import { DynamicTable, FormCard } from "../components";
import { AppContextProvider } from "../context";

const WelcomePage = props => {
  return (
    <AppContextProvider>
      <div className="login-page mt-5 pt-5 d-flex justify-content-center">
        <FormCard {...props} />
      </div>
      <div className="p-5">
        <DynamicTable />
      </div>
    </AppContextProvider>
  );
};

export { WelcomePage };
