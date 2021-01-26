import { Formik, Form } from "formik";
import React, { useContext, useState } from "react";
import { Button, Form as BsForm } from "react-bootstrap";
import * as Yup from "yup";
import { Input } from "..";
import { AppContext } from "../../context";

const TableForm = props => {
  const {setRowCount, setColumnCount} = useContext(AppContext);

  const formValues = {
    rowCount: "",
    columnCount: ""
  };

  const validationSchema = Yup.object({
    rowCount: Yup.number()
    .required("Rows field is required.")
    .integer("No Decimal")
    .min(1, "Please enter a number between ${min}-9")
    .max(9, "Please enter a number between 1-${max}"),

    columnCount: Yup.number()
    .required("Columns field is required.")
    .integer("No Decimal")
    .min(1, "Please enter a number between ${min}-9")
    .max(9, "Please enter a number between 1-${max}"),
  });

  const onSubmit = values => {
    setRowCount(values.rowCount);
    setColumnCount(values.columnCount);
    console.log("values", values);
  };

  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className="p-3">
              <BsForm.Row>
                <Input
                  controlId="rowCount"
                  name="rowCount"
                  type="number"
                  hint="Rows"
                />
                <Input
                  controlId="columnCount"
                  name="columnCount"
                  type="number"
                  hint="Columns"
                />
              </BsForm.Row>
            </div>
            <div className="d-flex justify-content-center p-3">
              <Button variant="primary" type="submit">
                Create table
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { TableForm };
