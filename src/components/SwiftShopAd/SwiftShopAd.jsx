import React from "react";
import Container from "../../Container/Container";

const SwiftShopAd = () => {
  return (
    <div className=" bg-primary my-[100px]">
     <Container>
   <div className="flex justify-evenly items-center ">
   <div className="py-12">
        <h2 className="text-4xl font-bold text-[#FFFFFF]">
        What are you waiting for? <br /> Start selling with <span className="text-[#3A3A3A]">SwiftShop</span> today.
        </h2>
      </div>
      <div className="py-24">
        <button className="w-[193px] h-[48px] py-3 px-7 text-[#FFFFFF]">Get Started</button>
      </div>
   </div>
     </Container>
    </div>
  );
};

export default SwiftShopAd;
