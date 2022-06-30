import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  const { handleSubmit, handleReset, getFieldProps, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password1: "",
        password2: "",
      },
      onSubmit: (values) => {
        console.log({ values });
      },
      onReset: (e) => {
        console.log(e);
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required("This field is required")
          .max(15, "Name should not go over 15 characters")
          .min(2, "That is not a valid name"),
        email: Yup.string()
          .email("Not a valid Email")
          .required("This field is required")
          .min(6, "Email too short"),
        password1: Yup.string()
          .min(4, "Password too short")
          .required("This field is required"),
        password2: Yup.string()
          .oneOf([Yup.ref("password1")], "Password does not match")
          .required("This field is required"),
      }),
    });
  return (
    <div>
      <h1>Register Formik Page</h1>

      <form onSubmit={handleSubmit} noValidate>
        <input type="text" placeholder="Name" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <input type="email" placeholder="Email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <input
          type="password"
          placeholder="Password"
          {...getFieldProps("password1")}
        />
        {touched.password1 && errors.password1 && (
          <span>{errors.password1}</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          {...getFieldProps("password2")}
        />
        {touched.password2 && errors.password2 && (
          <span>{errors.password2}</span>
        )}

        <button type="submit">Create</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
