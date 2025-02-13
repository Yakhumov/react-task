import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IForm } from "../../../../../shared/types/types"; 

interface LoginFormProps {
  register: UseFormRegister<IForm>;
  errors: FieldErrors<IForm>;
  onSubmit: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ register, errors, onSubmit }) => {
  return (
    <form className="form-input" onSubmit={onSubmit}>
      <label htmlFor="login">Имя пользователя:</label>
      <input
        id="login"
        type="text"
        {...register("login", { required: "Логин обязателен" })}
        placeholder="Введите логин"
      />
      {errors.login && <p style={{ color: "red" }}>{errors.login.message}</p>}

      <label htmlFor="password">Пароль:</label>
      <input
        id="password"
        type="password"
        {...register("password", {
          required: "Пароль обязателен",
          minLength: {
            value: 2,
            message: "Пароль должен содержать минимум 2 символа",
          },
        })}
        placeholder="Введите пароль"
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}

      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
