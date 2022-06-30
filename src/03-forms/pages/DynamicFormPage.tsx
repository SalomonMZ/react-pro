import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
import formJSON from "../data/custom-form.json";

const initialValues: Record<string, any> = {};
const requiredFields: Record<string, any> = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required");
    }

    if (rule.type === "email") {
      schema = schema.email("Not a valid email");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        `Must have at less ${(rule as any).value || 2} characters`
      );
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>Type ${type} is not supported</span>;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
