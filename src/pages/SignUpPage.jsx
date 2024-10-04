import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import SignUpReuse from "../reuse/SignUpReuse";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { DNA } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, push, ref, set } from "firebase/database";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phone, setPhone] = useState("");
  let [street, setStreet] = useState("");
  let [country, setCountry] = useState("");
  let [postCode, setPostCode] = useState("");
  let [city, setCity] = useState("");
  let [password, setPassword] = useState("");
  let [conPassword, setConPassword] = useState("");
  let [mail, setMail] = useState("");
  let navigate = useNavigate();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handlePostCode = (e) => {
    setPostCode(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  // console.log(mail);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // console.log(password);

  const handleConPassword = (e) => {
    setConPassword(e.target.value);
  };

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const auth = getAuth();

  // For loader:
  let [loader, setLoader] = useState(false);

  // mail validity:

  const handleSubmit = (e) => {
    const db = getDatabase();
    setLoader(true);
    e.preventDefault();

    // for mail validity:
    let mailValidity =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // for password validity :
    let digit = /^(?=.*\d)/;
    let lowerCase = /^(?=.*[a-z])/;
    let upCase = /^(?=.*[A-Z])/;
    let length = /^(?=.{8,})/;
    let special = /^(?=.*[!@#$%^&*])/;

    if (!mail) {
      toast.error("Please enter email");
      setLoader(false);
    } else if (!mailValidity.test(mail)) {
      toast.error("Please enter a valid email");
      setLoader(false);
    } else if (!password) {
      setLoader(false);
      toast.error("Please Enter a password first");
    } else if (!digit.test(password)) {
      setLoader(false);
      toast.error("Password need at least one digit");
    } else if (!lowerCase.test(password)) {
      setLoader(false);
      toast.error("Password need at least one lower case");
    } else if (!upCase.test(password)) {
      setLoader(false);
      toast.error("Password need at least one upper case");
    } else if (!length.test(password)) {
      setLoader(false);
      toast.error("Password need minimum 8 characters");
    } else if (!special.test(password)) {
      toast.error("Password need at least one special characters");
      setLoader(false);
    } else if (password !== conPassword) {
      toast.error("Passwords are not same");
      setLoader(false);
    } else if (checked !== true) {
      toast.error("Please read our policy and agree the policy below");
      setLoader(false);
    } else {
      createUserWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            set(ref(db, "allUsers/" + userCredential.user.uid), {
              firstName: firstName,
              lastName: lastName,
              email: mail,
              password: password,
              phone: phone,
              street: street,
              country: country,
              city: city,
              postCode: postCode,
            });
          });
          toast.success("Sign up successful");
          setLoader(false);
          navigate("/login");
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoader(false);
          toast.error("The mail is already existed");
        });
    }
  };

  let [showPassword, setShowPassword] = useState(false);
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  let [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleConfirmPass = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section id="signUpSection">
      <div className="container mx-auto p-[10px]">
        <HeadingReuse heading="Sign Up" to="Home" from="Sign up" toLink="/" />

        <p className="border-b border-[#eeeeed] mt-[30px] mb-[20px] pb-[20px] text-center sm:text-left lg:w-[80%] xl:w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          tempora saepe quis cum iure laboriosam autem aliquid, dicta excepturi
          mollitia.
        </p>

        <div className="mb-[30px]">
          <h2 className="text-[25px] font-bold mb-[15px]">Personal Details</h2>
          <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
            <SignUpReuse
              For="firstName"
              label="First Name"
              id="firstName"
              placeholder="Enter your first name..."
              type="text"
              onChange={handleFirstName}
            />
            <SignUpReuse
              For="lastName"
              label="last Name"
              id="lastName"
              placeholder="Enter your last name..."
              type="text"
              onChange={handleLastName}
            />
          </div>
          <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
            <SignUpReuse
              For="Email"
              label="Mail"
              id="Email"
              placeholder="Input mail here..."
              type="email"
              onChange={handleMail}
            />
            <SignUpReuse
              For="phone"
              label="Phone"
              id="phone"
              placeholder="input your mobile..."
              type="text"
              onChange={handlePhone}
            />
          </div>
        </div>

        <div className="mb-[30px]">
          <h2 className="text-[25px] font-bold mb-[15px]">Address Details</h2>
          <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
            <SignUpReuse
              For="address"
              label="Street/Address"
              id="address"
              placeholder="Enter your Address..."
              type="text"
              onChange={handleStreet}
            />
            <SignUpReuse
              For="country"
              label="Country"
              id="country"
              placeholder="Please Select..."
              type="text"
              onChange={handleCountry}
            />
          </div>
          <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
            <SignUpReuse
              For="postCode"
              label="Post Code"
              id="postCode"
              placeholder="Input post here..."
              type="text"
              onChange={handlePostCode}
            />
            <SignUpReuse
              For="city"
              label="City"
              id="city"
              placeholder="Please Select..."
              type="text"
              onChange={handleCity}
            />
          </div>
        </div>

        <div className="mb-[20px]">
          <h2 className="text-[25px] font-bold mb-[15px]">Passwords</h2>
          <div className="sm:flex gap-[20px] md:w-[80%] xl:w-[60%]">
            <div className="mb-[10px] sm:w-[50%] relative">
              <label htmlFor="password">New Password</label>
              <input
                type={showPassword === true ? "text" : "password"}
                id="password"
                placeholder="Make a Password..."
                className={`bg-[#fff9f9f5] w-full outline-none pb-[5px] 
                border-b border-[#eeeeed]`}
                required
                onChange={handlePassword}
              />
              <div
                className="absolute top-[60%] translate-x-[-50%] right-[0px] sm:right-[25px] md:right-[35px] lg:right-[50px]"
                onClick={handleShowPass}
              >
                {showPassword === true ? <MdRemoveRedEye /> : <IoEyeOff />}
              </div>
            </div>
            <div className="mb-[10px] sm:w-[50%] relative">
              <label htmlFor="confirmPass">Confirm Password</label>
              <input
                type={showConfirmPassword === true ? "text" : "password"}
                id="confirmPass"
                placeholder="Enter Password again..."
                className={`bg-[#fff9f9f5] w-full outline-none pb-[5px] 
                border-b border-[#eeeeed]`}
                required
                onChange={handleConPassword}
              />
              <div
                className="absolute top-[60%] translate-x-[-50%] right-[0px] sm:right-[25px] md:right-[35px] lg:right-[50px]"
                onClick={handleConfirmPass}
              >
                {showConfirmPassword === true ? (
                  <MdRemoveRedEye />
                ) : (
                  <IoEyeOff />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="mr-[10px]"
            />
            I have read and agree to the Privacy Policy
          </label>
        </div>
        <div className="cursor-default mt-[10px]">
          Subscribe Newsletter
          <label htmlFor="radio">
            <input
              id="radio"
              type="radio"
              value="Yes"
              name="option"
              className="ml-[20px]"
              checked
            />{" "}
            Yes
          </label>
          <label htmlFor="radio2">
            <input
              id="radio2"
              type="radio"
              value="No"
              name="option"
              className="ml-[10px]"
            />{" "}
            No
          </label>
        </div>

        {/* Loader making........ */}
        
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
            type="submit"
            onClick={handleSubmit}
            className="border border-[#D8D8D8] px-[15px] sm:px-[60px] py-[10px] mt-[30px] mb-[50px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300"
          >
            Sign Up
          </button>
        )}

        <p>
          Already have an account?{" "}
          <Link to="/login">
            {" "}
            <u>Login here.</u>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
