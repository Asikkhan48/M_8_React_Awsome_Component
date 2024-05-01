import PropTypes from "prop-types";
import Features from "../Features/Features";


const PriceOption = ({ option }) => {
  const { id, name, price, features } = option;
  return (
    <>
      <div className="bg-yellow-200 rounded-lg flex flex-col p-4 space-y-5 mb-3">
        <h2>
          <span className="text-3xl">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-3xl">{name}</h4>
        {/* <h5> <span className="text-pretty font-bold">Features:</span> {features}</h5> */}

        <div className="flex-grow">
          {features.map((feature, idx) => (
            <Features key={idx} feature={feature}></Features>
          ))}
        </div>
        <button className="btn btn-circle font-semibold text-pink-500">
          Buy Now
        </button>
      </div>
    </>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
