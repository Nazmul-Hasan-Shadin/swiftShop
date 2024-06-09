import { useEffect, useState } from "react";
import SingleStartSelling from "../../../components/StartSelling/SingleStartSelling";
import Container from "../../../Container/Container";

const StartSelling = () => {
  const [sellingStep, setSellingStep] = useState([]);

  useEffect(() => {
    fetch("/sellingStep.json")
      .then((res) => res.json())
      .then((data) => setSellingStep(data));
  }, []);

  return (
    <Container className={'mt-[100px]'}>
     <div>
     <h2 className="text-4xl font-bold pb-10">5 Simple Steps to <span className="text-primary">Start Selling</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-7">
        {sellingStep.map((info, index) => {
          return (
            <SingleStartSelling
              key={index}
              text={info.text}
              heading={info.heading}
              logo={info.logo}
            ></SingleStartSelling>
          );
        })}
      </div>
     </div>
    </Container>
  );
};

export default StartSelling;
