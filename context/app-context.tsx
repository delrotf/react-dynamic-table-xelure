import React, { useState } from "react";

export const AppContext = React.createContext({
  firstname: 0,
  setFirstname: null,
  lastname: 0,
  setLastname: null
});

const AppContextProvider = props => {
  const [firstname, setFirstname] = useState(0);
  const [lastname, setLastname] = useState(0);
  return (
    <AppContext.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
