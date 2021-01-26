import React from "react";
import { TableForm } from "..";

const FormCard = props => {
  return (
    <div className="form-card border">
      <div className="header text-center p-2 text-light">Create table</div>
      <div>
        <TableForm {...props} />
      </div>
    </div>
  );
};

export { FormCard };
