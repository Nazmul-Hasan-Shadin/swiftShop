import React from "react";
import bannerCartImg from "../../../assets/bannerCart.png";
import { useForm } from "react-hook-form";
import Container from "../../../Container/Container";
import { GoVerified } from "react-icons/go";
import "./Banner.css";
import VerificationForm from "../../../components/VerificationForm/VerificationForm";
const Banner = () => {


  return (
    <div className="bg-[#E1F6E8] py-14   ">
      <Container>
        <div className="grid grid-cols-2 place-items-center ">
          {/* =========left side started */}
          <div className="">
            <div className="">
              <h2 className="text-6xl font-bold h-[147px] ">
                Bangladesh’s #1 <br /> Marketplace
              </h2>
              <span className="text-[#3a3a3a] block mt-4 text-xl">
                Create a SwiftShop account in 5 minutes and reach millions of
                customers today !
              </span>
            </div>

            <div>
              <img className="w-80 h-80" src={bannerCartImg} alt="" />
            </div>
          </div>
          {/* ===================left side end============== */}

          {/*  ==============login form===================== */}
        <VerificationForm></VerificationForm>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
