import React from "react";
import Container from "../../../Container/Container";

const VideoSection = () => {
  return (
    <Container className={'mt-[92px]'}>
      <div className=" flex  flex-col md:flex-row md:justify-center md:items-center gap-8 lg:gap-[120px] bg-[#F6C447] px-3 lg:px-11">
        <div className="md:w-1/3">
          <h2 className=" text-2xl lg:text-4xl font-bold">
            Learn About SwiftShop Seller Sign up
          </h2>

          <button className="bg-[#E1F6E8] w-[200px] h-[50px] mt-7 rounded-md">
            Watch here
          </button>
        </div>

        <div className="lg:py-[101px] lg:w-2/3">
          <video
            className="w-[699px] h-[375px] bg-[#D9D9D9]"
            src=""
            controls
          ></video>
        </div>
      </div>
    </Container>
  );
};

export default VideoSection;
