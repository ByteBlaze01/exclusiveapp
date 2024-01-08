"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface SignUpFormInput {
  name: string;
  email: string;
  password: number;
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>();
  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => console.log(data);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2">
        <div className="w-[100%]">
          <img src="/Images/signUpLogo.svg" alt="camera image"></img>
        </div>
        <div className="mx-auto my-auto">
          <p className="lg:text-[30px] sm:mx-2 text-[30px]  sm:text-[25px] font-semibold">
            Create an account
          </p>
          <p className="text-[14px] sm:mx-2">Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
              <input
                type="text"
                placeholder="name"
                className="outline-none sm:mx-2 border-b pb-1 border-black md:w-[350px]"
                {...register("name", {
                  required: "userName is required!",
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 md:mx-2">
                  {errors.name.message}
                </p>
              )}
            </div>
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
                  className="absolute top-0 right-10 cursor-pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <FaEye
                  className="absolute top-0 right-10 cursor-pointer"
                  onClick={handleShowPassword}
                />
              )}
              {errors.password && (
                <p className="text-red-500 mt-1 md:mx-2 w-[250px]">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              className="text-center sm:mx-2 bg-[#DB4444] w-[250px] mt-5 sm:mt-3 md:mt-5 h-[40px] rounded-md text-white"
              type="submit"
            >
              Create Account
            </button>
            <div className="border-black border flex justify-center items-center w-[250px] sm:mx-2 mt-3 my-3">
              <img src="Images/Google.svg" />
              <button className="text-center rounded-md my-3 mx-2">
                sign up with Google
              </button>
            </div>
            <p className="text-center  w-[250px] h-[40px]">
              Already have account ?{" "}
              <Link
                href="/Login"
                className="outline-none font-semibold border-b  pb-1 border-black"
              >
                {" "}
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}