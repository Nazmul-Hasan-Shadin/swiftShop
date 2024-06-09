import React from "react";
import Container from "../../../Container/Container";

const SellerApp = () => {
  return (
    <Container className={'mt-[122px]'}>
  <div className="bg-primary pt-14">
  <div className=" flex flex-col lg:flex-row gap-3  px-3 lg:px-10">
        <div className="flex-1 ">
          <span className="pb-2 text-base font-bold text-[#E1F6E8]">Go Mobile</span>
          <h2 className="text-4xl font-bold pb-5 text-[#E1F6E8]">
            Use the free <span className="text-[#3A3A3A]">SwiftShop</span> Seller App
          </h2>
          <p className="text-[#E1F6E8] text-xl pb-3">
            The SwiftShop app is packed with features to help you manage and
            grow your ecommerce business whetever your are. It gives you the
            freedom to take care of business details right from your phone.
          </p>

          <div className="flex gap-3 pb-20">
            <img src="/logo/android.png" alt="" />
            <img src="/logo/appleLogo.png" alt="" />
          </div>
        </div>
        <div className="  lg:w-[370px] lg:h-[217px] bg-[#D9D9D9]"></div>
      </div>
  </div>
    </Container>
  );
};

export default SellerApp;
