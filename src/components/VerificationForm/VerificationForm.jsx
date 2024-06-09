import React from "react";
import { useForm } from "react-hook-form";
import { GoVerified } from "react-icons/go";

const VerificationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="relative ">
        <div className="flex gap-2 pb-4 absolute -top-9">
          <span>Want to sell from overseas to Bangladesh?</span>
          <span className="text-white bg-primary">
            Register as Global seller
          </span>
        </div>

        <div className="bg-primary rounded-[12px] w-[570px] h-[449px]  p-[52px]">
          <div className="grid place-items-center">
            <h2 className="text-3xl text-white">Create An Account</h2>
            <p className="text-white text-[18px] font-normal text-center">
              Welcome! Millions of SwiftShop users are waiting to buy your
              product.
            </p>
            <div>
              <form onSubmit={handleSubmit()} action="">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-white text-sm font-bold"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-[280px] bg-[#FFFFFF] h-10 px-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <span className="font-bold text-white text-sm ">
                    Please fill in the correct phone formate
                  </span>
                </div>

                <div className="pt-6 relative">
                  <label className="text-white text-sm font-bold">
                    Verification
                  </label>
                  <input
                    type="button"
                    id="phone"
                    value={"Verified"}
                    className={`mt-2 block   w-[280px] bg-[#FFFFFF] relative font-bold h-10 px-3 border border-gray-300 rounded-md  focus:outline-none sm:text-sm partial-color-button`}
                  />
                  <div className="w-8 h-8  ">
                    <GoVerified className=" absolute right-3  top-1/2 rounded-full bg-primary"></GoVerified>
                  </div>
                </div>

                <div className="">
                  <input
                    type="button"
                    id="phone"
                    value={"create an account"}
                    name="phone"
                    placeholder="Enter your phone number"
                    className=" block w-[280px] bg-[#FFFFFF] font-bold h-10 px-3 border border-gray-300 rounded-md  focus:outline-none sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
