import Sponsors from "~/components/Sponsors";
import PriceCard from "../components/PriceCard";
import Faqs from "~/components/Faqs";

const sponsorData = [
  { name: "Spotify", logo: "/public/Vector-sportify.png" },
  { name: "Microsoft", logo: "/public/microsoft.png" },
  { name: "SpaceX", logo: "/public/spacex.png" },
  { name: "PiggyVest", logo: "/public/piggyvest.png" },
  { name: "Opera", logo: "/public/opera.png" },
];
function price() {
  return (
    <>
      <PriceCard />
      <Sponsors
        title="Loved by 100,000+ organizations across the globe"
        sponsors={sponsorData}
      />
      <Faqs />
    </>
  );
}

export default price;
