import { Link } from "@remix-run/react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
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
        {/* Company */}
        <div className="product grid grid-cols-1 gap-4">
          <span className="text-2xl uppercase">Company</span>
          <Link to="/werk">ABout Us</Link>
          <Link to="/overview">Contact Us</Link>
          <Link to="/feature">Partners</Link>
          <Link to="/price">Careers</Link>
        </div>

        {/* Resources */}
        <div className="product mt-4 md:mt-0 grid grid-cols-1 gap-4">
          <span className="text-2xl uppercase">Resources</span>
          <Link to="/werk">Terms and Conditions</Link>
          <Link to="/overview">Privacy Policy</Link>
          <Link to="/feature">Security</Link>
          <Link to="/price">Blog</Link>
        </div>

        {/* socials footer */}
        <div className="product grid grid-flow-col md:grid-flow-row gap-4 ">
          <div className="flex mt-4 md:mt-0 justify-between">
            <Link to="/">
              <FaLinkedin />
            </Link>
            <Link to="/">
              <FaFacebook />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="rc mx-auto text-center text-white my-4">
        <p>All rights reserved &copy; {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
