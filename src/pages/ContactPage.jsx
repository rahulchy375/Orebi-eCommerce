import React from "react";
import HeadingReuse from "../reuse/HeadingReuse";

const ContactPage = () => {
  return (
    <section id="contactSection">
      <div className="container mx-auto p-[10px]">
        <HeadingReuse heading="Contacts" to="Home" from="Contacts" toLink="/" />

        <h2 className="text-[30px] font-bold mt-[50px]">Fill up the Form</h2>
        <div className="md:w-[60%] lg:w-[50%] mt-[30px] mb-[50px]">
          <div className="">
            <label for="name" className="block font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Input your name..."
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
            border-b border-[#eeeeed]"
            />
          </div>
          <div className="mt-[20px]">
            <label for="mail" className="block font-bold">
              Email
            </label>
            <input
              type="text"
              id="mail"
              placeholder="Input mail here..."
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
            border-b border-[#eeeeed]"
            />
          </div>
          <div className="mt-[20px]">
            <label for="msg" className="block font-bold">
              Message
            </label>
            <textarea
              id="msg"
              placeholder="Write your message here"
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
            border-b border-[#eeeeed] resize-none"
            rows={4}
            ></textarea>
          </div>

          <button className="border border-[#D8D8D8] px-[50px] sm:px-[70px] py-[10px] mt-[30px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            Post
          </button>
        </div>

        <div className="mb-[30px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.21826365963!2d91.65422151951107!3d22.357629611510667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1726773803088!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
