import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "It must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "It must be 15 characters or less")
            .required("Required"),
          email: Yup.string().email("Not a valid email").required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "You need to accept the terms and conditions to continue"
          ),
          jobType: Yup.string()
            .oneOf(
              ["designer", "developer", "it-senior"],
              "The option is not valid right now"
            )
            .required("You need to pick something"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Jobs</label>
            <Field name="jobType" as="select">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
