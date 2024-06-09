const SellOnSection = ({ heading, text, logo }) => {
  return (
    <div className="flex gap-3">
      <img className="w-10 h-10" src={logo} alt="" />
      <div>
        <h1 className="text-2xl pb-3"> {heading} </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SellOnSection;
