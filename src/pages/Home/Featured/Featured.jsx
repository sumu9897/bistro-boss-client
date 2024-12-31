import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading="Featured Item"
        subHeading="check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-55 pt-12 pb-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            ipsum placeat repellat soluta quo voluptas maxime sunt ducimus,
            nulla harum? Commodi quam aut reprehenderit fuga dignissimos
            laudantium veniam placeat ipsam.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
