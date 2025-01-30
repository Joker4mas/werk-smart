import PropTypes from "prop-types";

const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      "50 Daily Tasks",
      "10 Projects",
      "5 Teams",
      "75 Members",
      "In-app Messaging",
      "500MB max sharable file size",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: 12,
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: 39,
    features: [
      "Unlimited Users",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    highlight: true,
  },
];

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  highlight: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features }) => {
  return (
    <div
      className={`price-option grid gap-4 bg-gray-600 justify-center text-center items-center p-6 rounded-lg `}
    >
      <h2 className="text-2xl text-gray-200 font-bold">{name}</h2>
      <div className="amount flex relative text-blue-700 gap-4  mx-auto">
        <span className="absolute top-0 -left-2">$</span>
        <p className="text-5xl font-bold">{price}</p>
        <span className="absolute bottom-0 -right-6">/m</span>
      </div>
      <ul className="text-center flex flex-col gap-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="but-card grid mt-6">
        <button className="bg-blue-700 text-center p-4 rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  highlight: PropTypes.bool.isRequired,
};

const Pricing = () => {
  return (
    <div className="price-container mt-8 mx-4 md:mx-16 lg:18 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center">
        Choose the plan that best suits your needs.
      </h1>
      <div className="price-options grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
