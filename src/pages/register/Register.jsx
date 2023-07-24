import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const Register = () => {
    const [show, setShow] = useState(false);
    // const {} = 
//   const navigate = useNavigate()
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
              Sign up now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg bg-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-600">required</span>}
              </div>
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
                  <span className="label-text">Photo URL*</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">required</span>
                )}
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
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
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
                {errors.password?.type === "required" && (
                  <p className="text-red-600">required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password*</span>
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type={show ? "text" : "password"}
                    {...register("confirmPass", { required: true })}
                    placeholder="Confirm Password"
                    className="input input-bordered w-full relative"
                  />
                  <span
                    className="absolute right-10 p-2 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.confirmPass?.type === "required" && (
                  <p className="text-red-600">required</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center mb-10">
              <p>
                Already have an account! Please{" "}
                <Link to="/login" className="hover:underline text-blue-500">
                  Login
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;