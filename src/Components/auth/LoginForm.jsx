import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    // make an API call
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData,
      );

      if (response.status === 200) {
        const { token, user } = response.data;

        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(`login time auth token: ${authToken}`);

          setAuth({ user, authToken, refreshToken });

          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-15"
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email id is required" })}
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          className={`w-full rounded-md border ${errors.email ? "border-red-500" : "border-[#CCCCCC]"} bg-lighterDark p-1.5 focus:outline-none lg:p-3 placeholder:text-gray-400 caret-white text-white`}
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password id is required",
            minLength: {
              value: 8,
              message: "Your password must be 8 characters",
            },
          })}
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          className={`w-full rounded-md border ${errors.password ? "border-red-500" : "border-[#CCCCCC]"} bg-lighterDark p-1.5 focus:outline-none lg:p-3 placeholder-gray-400 caret-white text-white`}
        />
      </Field>

      <p>{errors?.root?.random?.message}</p>

      <Field>
        <button className="w-full rounded-md p-1.5 bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
