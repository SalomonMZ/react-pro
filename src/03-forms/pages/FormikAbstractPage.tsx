import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";
import "../styles/styles.css";

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation Tutorial</h1>

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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Fist Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="example@org.com"
              type="email"
            />

            <MySelect label={"Job Type"} name={"jobType"}>
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox label={"Terms & Conditions"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
