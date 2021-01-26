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
    rowCount: Yup.number().required("This field is required.").positive("Must be positive").integer("No Decimal").max(8, "Max of ${max}"),
    columnCount: Yup.number().required("This field is required.").positive("Must be positive").integer("No Decimal").max(8, "Max of ${max}"),
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
                  label="Row"
                  hint="Count of rows"
                />
                <Input
                  controlId="columnCount"
                  name="columnCount"
                  type="number"
                  label="Column"
                  hint="Count of columns"
                />
              </BsForm.Row>
            </div>
            <div className="d-flex p-3">
              <Button variant="primary" className="flex-fill" type="submit">
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { TableForm };
