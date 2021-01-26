import React, { useState } from "react";

export const AppContext = React.createContext({
  rowCount: 0,
  setRowCount: null,
  columnCount: 0,
  setColumnCount: null
});

const AppContextProvider = props => {
  const [rowCount, setRowCount] = useState(0);
  const [columnCount, setColumnCount] = useState(0);
  return (
    <AppContext.Provider
      value={{
        rowCount,
        setRowCount,
        columnCount,
        setColumnCount
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
