import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { DNA } from "react-loader-spinner";

const LoginPage = () => {
  let [showPass, setShowPass] = useState(false);
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  const auth = getAuth();
  const handlePassword = () => {
    setShowPass(!showPass);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    setLoader(true)
    if (!mail) {
      toast.error("Please Enter Email");
      setLoader(false)
    } else if (!password) {
      toast.error("Please Enter Password");
      setLoader(false)
    } else {
      signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified !== true) {
            toast.error("Please go to mailbox and verify the mail first");
            setLoader(false);
          } else {
            toast.success("Login Successful");
            navigate("/");
            setLoader(false);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("Invalid credentials");
          setLoader(false);
        });
    }
  };

  return (
    <section id="loginSection">
      <div className="container mx-auto p-[10px]">
        <div className="my-[50px]">
          <HeadingReuse heading="Login" to="Home" from="Login" toLink="/" />
        </div>
        <div className="border-b border-[#eeeeed]">
          <p className="text-center sm:text-left pb-[30px] lg:w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
            temporibus ad dicta quisquam, delectus unde numquam hic corporis
            pariatur!
          </p>
        </div>

        <h2 className="text-[24px] font-bold my-[30px]">Returning Customer</h2>
        <div className="sm:flex gap-[30px]">
          <div className="mb-[20px] sm:w-[48%] lg:w-[30%]">
            <label htmlFor="mail">Email Address</label>
            <input
              onChange={handleMail}
              type="email"
              id="mail"
              placeholder="Enter your mail..."
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
              border-b border-[#eeeeed]"
            />
          </div>
          <div className="relative sm:w-[48%] lg:w-[30%]">
            <label htmlFor="password">Password</label>
            <input
              onChange={handlePasswordChange}
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Enter your password..."
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
              border-b border-[#eeeeed]"
            />
            <div
              className="absolute top-[60%] sm:top-[40%] translate-x-[-50%] right-[10px]"
              onClick={handlePassword}
            >
              {showPass ? <IoEye /> : <IoEyeOff />}
            </div>
          </div>
        </div>
        <div className="pb-[40px] border-b border-[#eeeeed]">
          {loader ? (
            <div className="">
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="border border-[#D8D8D8] px-[35px] py-[10px] mt-[30px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300"
            >
              Log In
            </button>
          )}
        </div>

        <h2 className="text-[24px] font-bold text-center sm:text-left my-[30px]">
          New Customer
        </h2>
        <p className="text-center sm:text-left mb-[15px] lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
          temporibus ad dicta quisquam, delectus unde numquam hic corporis
          pariatur!
        </p>

        <div className="flex justify-center sm:justify-start items-center mb-[30px]">
          <button className="border border-[#D8D8D8] px-[35px] py-[10px] mt-[30px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            <Link to="/signUp">Create New Account</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
