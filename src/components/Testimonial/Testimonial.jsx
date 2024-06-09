

const Testimonial = () => {
  return (
    <div className="flex flex-col  md:flex-row md:gap-14 lg:gap-[70px] my-[100px] " >
      <div className="flex-1 bg-[#D9D9D9]"></div>
      <div className="flex flex-1  flex-col gap-y-3 md:gap-y-4 lg:gap-y-7">

        <div className="lg:w-[432px] rounded-xl " style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)' }}>
          <figure className="bg-[#D9D9D9] h-[184px]"></figure>
         
          <div className="p-5">
          <button className="w-[140px] h-[38px] text-primary border border-primary my-3"> Testimony</button>
            <h2 className="font-bold pt-3 text-[#1D1D1D] text-[22px] pb-2"> ABC</h2>
            <p className="text-sm md:text-base lg:text-base font-bold">
              ABC dream of owning a fashion store that provides trendy clothes
              at affordable prices came true. With SwiftShop,he was able to
              expand his market all over the country
            </p>
          </div>
        </div>
        <div className="lg:w-[432px] rounded-xl " style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)' }}>
          <figure className="bg-[#D9D9D9] h-[184px]"></figure>
         
          <div className="p-5">
          <button className="w-[140px] h-[38px] text-primary border border-primary my-3"> Testimony</button>
            <h2 className="font-bold pt-3 text-[#1D1D1D] text-[22px] pb-2"> ABC</h2>
            <p className="text-sm md:text-base lg:text-base font-bold">
              ABC dream of owning a fashion store that provides trendy clothes
              at affordable prices came true. With SwiftShop,he was able to
              expand his market all over the country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
