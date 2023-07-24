import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const Login = () => {
    const [show, setShow] = useState(false);
//   let from = location.state?.from?.pathname || "/";
//   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
    return (
        <div className="hero min-h-screen py-10">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5 text-pink-600">
              Please Login!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md bg-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600">required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: true,
                    })}
                    placeholder="password"
                    className="input input-bordered relative w-full"
                  />
                  <span
                    className="absolute right-10 p-2 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <label className="label">
                  <Link to='/forgetPass' className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center mb-10">
              <p>
                New to this site! Please{" "}
                <Link to="/register" className="hover:underline text-blue-500">
                  Register
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;