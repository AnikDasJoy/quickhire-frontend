import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const onsubmit = async (data) => {
    console.log(data);

    try {
      // 1️⃣ Create user in Firebase
      const result = await createUser(data.email, data.password);
      console.log("Firebase User:", result.user);

      // 2️⃣ Save user to MongoDB
      const userInfo = {
        name: data.name,
        email: data.email,
      };

      await axios.post("http://localhost:5000/api/users", userInfo);

      console.log("User saved in MongoDB");

      // 3️⃣ Redirect after registration
      navigate(from);

    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create Account!</h1>

        <form onSubmit={handleSubmit(onsubmit)}>
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />

            {errors.name?.type === "required" && (
              <p className="text-red-600">Name is required</p>
            )}

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />

            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is required</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password must be at least 6 characters
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-success text-black mt-4">
              Register
            </button>
          </fieldset>

          <p>
            <small>
              Already Have an Account?{" "}
              <Link className="btn btn-link" to="/login">
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;