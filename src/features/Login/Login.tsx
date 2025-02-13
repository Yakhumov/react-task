import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IForm } from "../../shared/types/types";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data: IForm) => {
    if (data.login === "admin" && data.password === "12345") { 
      navigate("/profile");
    } else {
      setError("login", {
        message: "Неверный логин или пароль",
      });

      setError("password", {
        message: "Неверный логин или пароль", 
      });
    }
  };

  return (
    <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
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
