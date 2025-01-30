import { Link } from "@remix-run/react";
import FAQSection from "./FAQ-s";

function Faqs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  p-4">
        <h1 className="text-3xl font-bold">Frequently asked questions</h1>
        <FAQSection />
        <div className="my-8 text-center">
          <h3 className="text-center text-lg text-gray-400 font-semibold my-4hh">
            Try out the all features of Werk free for 7 days. No card details
            required. Pay only if you choose to.
          </h3>
          <Link to="#" className=" hover:text-blue-400 mx-auto"></Link>
          <button className="bg-blue-800 p-4 items-center text-white rounded-full mt-4">
            start free trial
          </button>
        </div>
      </div>
    </>
  );
}

export default Faqs;
