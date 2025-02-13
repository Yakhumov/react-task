import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IForm } from "../../../shared/types/types";
import LoginForm from "../LoginForm/LogiForm";

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
    <div>
      <LoginForm
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};
