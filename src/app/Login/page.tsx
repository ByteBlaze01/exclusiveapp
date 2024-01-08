"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginFormInput {
  email: string;
  password: number;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="grid md:grid-cols-2 ">
        <div className=" mb-[50px] mt-[50px] ">
          <img src="/Images/loginImg.svg " alt="error"></img>
        </div>
        <div className="mx-auto my-auto">
          <h2 className="lg:text-[35px]  sm:mx-2 text-[30px]  sm:text-[25px] font-semibold ">
            Login in to Exclusive
          </h2>
          <p className=" text-[15px] sm:mx-2 font-semibold">
            Enter your details below
          </p>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                className="outline-none sm:mx-2 border-b pb-1 border-black md:w-[350px]"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 md:mx-2 w-[250px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="outline-none sm:mx-2 border-b pb-1 border-black md:w-[350px]"
                {...register("password", {
                  required: "Password is required!",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                    message:
                      "Password must have at least one uppercase letter, one lowercase letter, and be between 8 and 15 characters long",
                  },
                })}
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute top-0 right-5 cursor-pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <FaEye
                  className="absolute top-0 right-5 cursor-pointer"
                  onClick={handleShowPassword}
                />
              )}
              {errors.password && (
                <p className="text-red-500 mt-1 md:mx-2 w-[250px]">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="bg-[#DB4444] mt-8 px-8 text-white p-2 rounded   md: hover:bg-[#C2410C] cursor-pointer">
              Submit
            </button>
            <span className="text-[#DB4444]  ml-10">Forget password?</span>
          </form>
        </div>
      </div>
    </main>
  );
}