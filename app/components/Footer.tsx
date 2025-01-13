import { Link } from "@remix-run/react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Divider } from "rsuite";

function Footer() {
  return (
    <div className="grid p-4 md:p-12">
      <img src="/public/logo.png" alt="" className="ml-4 md:mr-0" />
      <div className="grid grid-cols-2 md:grid-cols-4 border-t-0 border-grayishBlue   p-4 text-white">
        <div className="product grid grid-cols-1 gap-4">
          <span className="text-2xl uppercase">product</span>
          <Link to="/werk">Why Werk</Link>
          <Link to="/overview">Overview</Link>
          <Link to="/feature">Features</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="product grid grid-cols-1 gap-4">
          <span className="text-2xl uppercase">product</span>
          <Link to="/werk">Why Werk</Link>
          <Link to="/overview">Overview</Link>
          <Link to="/feature">Features</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="product mt-4 md:mt-0 grid grid-cols-1 gap-4">
          <span className="text-2xl uppercase">product</span>
          <Link to="/werk">Why Werk</Link>
          <Link to="/overview">Overview</Link>
          <Link to="/feature">Features</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="product grid grid-flow-col md:grid-flow-row gap-4 ">
          <div className="flex mt-4 md:mt-0 justify-between">
            <FaLinkedin />
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="rc">
        <p>All rights reserved & </p>
      </div>
    </div>
  );
}

export default Footer;
