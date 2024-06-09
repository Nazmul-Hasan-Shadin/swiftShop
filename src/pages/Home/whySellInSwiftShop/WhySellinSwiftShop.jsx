import React, { useEffect, useState } from "react";
import SellOnSection from "../../../components/SellOnSection/SellOnSection";
import Container from "../../../Container/Container";
import serviceData from "../../../../public/whySellInSwiftShop.json";
import Testimonial from "../../../components/Testimonial/Testimonial";

const WhySellinSwiftShop = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    setService(serviceData);
  }, []);
  return (
    <Container className={"mt-[100px]"}>
      <div>
        <h2 className="text-4xl pb-10 font-bold">
          Why Sell on <span className="text-primary"> SwiftShop</span> ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20">
          {service.map((service, index) => {
            return (
              <SellOnSection
                key={index}
                text={service.text}
                heading={service.heading}
                logo={service.logo}
              ></SellOnSection>
            );
          })}
        </div>
      </div>

      <Testimonial></Testimonial>
    </Container>
  );
};

export default WhySellinSwiftShop;
