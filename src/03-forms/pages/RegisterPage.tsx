import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData: { name, email, password1, password2 },
    isValidEmail,
    onSubmit,
    onChange,
    reset,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es requerido</span>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Este email no es valido</span>}

        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es requerido</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contrasena debe tener mas de 6 caracteres</span>
        )}

        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es requerido</span>}
        {password2.trim().length > 0 && password2 !== password1 && (
          <span>Las contrasenas no coinciden</span>
        )}

        <button type="submit">Create</button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
