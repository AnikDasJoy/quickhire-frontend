import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const onSubmit = async (data) => {
  try {

    const result = await signIn(data.email, data.password);
    const user = result.user;

    // get role from backend
    const res = await axios.get(
      `http://localhost:5000/api/users/${user.email}`
    );

    const role = res.data.role;

    if (role === "admin") {
      navigate("/admin");
    } 
    else {
      navigate("/user");   // 👈 redirect user here
    }

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />

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

            <button className="btn btn-success text-black mt-4">
              Login
            </button>

          </fieldset>

          <p>
            <small>
              New to this website?{" "}
              <Link state={{ from }} className="btn btn-link" to="/register">
                Register
              </Link>
            </small>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;