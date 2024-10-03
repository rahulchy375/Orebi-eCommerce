import React from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import newImg from "../../public/newImg.png";
import newImg2 from "/newImg2.png";
import AboutResue from "../reuse/AboutResue";
import AboutReuse2 from "../reuse/AboutReuse2";

const AboutPage = () => {
  return (
    <section id="aboutSection">
      <div className="container mx-auto p-[10px]">
        <div className="my-[50px]">
          <HeadingReuse heading="About" to="Home" from="About" toLink="/" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-[50px] mb-[50px]">
          <AboutResue img={newImg} btn="Our Brands" />
          <AboutResue img={newImg2} btn="Our Stores" to="/shop"/>
        </div>
        <p className="text-[19px] lg:text-[23px] mb-[30px]">
          Orebi is one of the world's leading eCommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>

        <div className="md:flex text-center lg:text-left lg:gap-[20px] lg:mb-[50px]">
          <AboutReuse2
            heading="Our Vision"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            hic sequi sunt pariatur in consequuntur ipsum officiis veritatis, et
            ipsam doloremque fugit cumque numquam quis. Consequatur sunt laborum
            aut quos."
          />
          <AboutReuse2
            heading="Our Story"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            hic sequi sunt pariatur in consequuntur ipsum officiis veritatis, et
            ipsam doloremque fugit cumque numquam quis. Consequatur sunt laborum
            aut quos."
          />
          <AboutReuse2
            heading="Our Brands"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            hic sequi sunt pariatur in consequuntur ipsum officiis veritatis, et
            ipsam doloremque fugit cumque numquam quis. Consequatur sunt laborum
            aut quos."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
