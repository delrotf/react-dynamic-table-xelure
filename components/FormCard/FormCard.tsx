import React from "react";
import { TableForm } from "..";

const FormCard = props => {
  return (
    <div className="form-card">
      <div>
        <TableForm {...props} />
      </div>
    </div>
  );
};

export { FormCard };
