import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';


const Register = () => {
    const{register, handleSubmit, formState: { errors }}= useForm();
    // const {createUser, updateUserProfile}=useAuth();

    const {createUser}=useAuth();

    // const[profilePic, setProfilePic]= useState();
    // const axiosInstance= useAxios();
    const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from || "/";

    // const onSubmit = (data) => {
    //     console.log(data);
    //     createUser(data.email, data.password)
    //     .then(async(result)=>{
    //         console.log(result.user);

    //         // update userinfo in the database
    //         const userInfo={
    //             email: data.email,
    //             role: 'user',
    //             created_at: new Date().toISOString(),
    //             last_log_in: new Date().toISOString()
    //         }

    //         const userRes= await axiosInstance.post('/users', userInfo);
    //         console.log(userRes.data);

    //         //update userProfile in the firebase
    //         const profileInfo={
    //             displayName: data.name,
    //             photoURL: profilePic
    //         }
    //         updateUserProfile(profileInfo)
    //         .then(()=>{
    //             console.log('profile name pic updated');
    //             navigate(from);
    //         })
    //         .catch(error=>{
    //             console.error(error);
    //         })
    //     })
    //     .catch(error=>{
    //         console.error(error);
    //     })
    // }

    const onsubmit = (data) => {
        console.log(data);
            createUser(data.email, data.password)
        .then(async(result)=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })

    }

    // const handleImageUpload = async(e)=>{
    //     const image =e.target.files[0];
    //     console.log(image);

    //     const formData = new FormData();
    //     formData.append("image", image);

    //     const imageUploadUrl= `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`
    //     const res = await axios.post(imageUploadUrl, formData); 

    //     setProfilePic(res.data.data.url);
    // }
    return (
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Create Account!</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
            <fieldset className="fieldset">
          
          {/* Name Input */}
          <label className="label">Your Name</label>
          <input type="text" {...register("name", {required: true}) } className="input" placeholder="Your Name" />

          {
            errors.email?.type === "required" && (
                <p className="text-red-600">Name is required</p>
            )
          }

          {/* Name Input */}
          {/* <label className="label">Name</label>
          <input type="file" onChange={handleImageUpload}  className="input" placeholder="Your profile picture" /> */}

          {/* Email Input */}
          <label className="label">Email</label>
          <input type="email" {...register("email", {required: true}) } className="input" placeholder="Email" />

          {
            errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
            )
          }

          {/* Password Input */}
          <label className="label">Password</label>
          <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />

          {
            errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
            )
          }
          {
            errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be at least 6 characters or longer</p>
            )
          }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary text-black mt-4">Register</button>
        </fieldset>
        <p><small>Already Have an Account? <Link className='btn btn-link' to="/login">Login</Link></small></p>
        </form>
        {/* <SocialLogin></SocialLogin> */}
      </div>
    </div>

    );
};

export default Register;