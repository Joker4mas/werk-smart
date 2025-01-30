import PropTypes from "prop-types";

interface Sponsor {
  name: string;
  logo: string;
}

interface SponsorsProps {
  sponsors: Sponsor[];
  title: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors, title }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 justify-center bg-gray-100 my-8">
      {/* Reusable Header */}
      <h2 className="text-black text-lg text-center md:text-3xl font-bold my-4">
        {title}
      </h2>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 mx-4 justify-center">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sponsors;
