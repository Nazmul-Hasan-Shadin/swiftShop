import React from "react";
import Container from "../../../Container/Container";

const VideoSection = () => {
  return (
    <Container className={'mt-[92px]'}>
      <div className=" flex justify-center items-center gap-[120px] bg-[#F6C447] px-11">
        <div className="w-1/3">
          <h2 className="text-4xl font-bold">
            Learn About SwiftShop Seller Sign up
          </h2>

          <button className="bg-[#E1F6E8] w-[200px] h-[50px] mt-7">
            Watch here
          </button>
        </div>

        <div className="py-[101px] w-2/3">
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
