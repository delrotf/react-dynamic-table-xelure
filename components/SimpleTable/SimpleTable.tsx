import React from "react";
import { Table } from "react-bootstrap";

const SimpleTable = props => {
  const { rows } = props;

  return (
    <div className="m-3">
      <Table className="shadow-lg" bordered>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((col, index) => (
                <td key={index} className="simple-cell" />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-muted text-center">
        <span>Simple Table with cells with effect on hover.</span>
      </div>
    </div>
  );
};

export { SimpleTable };
