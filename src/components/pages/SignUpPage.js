import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthTemplate from "../templates/AuthTemplate";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    // submit the form to the server
  };

  return (
    <AuthTemplate>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <Field id="firstName" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <Field id="lastName" name="lastName" />
                <ErrorMessage name="lastName" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field id="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Field id="password" type="password" name="password" />
                <ErrorMessage name="password" />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </AuthTemplate>
  );
};

export default SignUpPage;
