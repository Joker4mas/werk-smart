import { NavLink, Link } from "@remix-run/react";
import { Facebook, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <NavLink to="">
            <Link to="/product">Products</Link>
          </NavLink>
        </div>
        <div></div>
        <div></div>
        <div>
          <Twitter />
          <Facebook />
          <Instagram />
          <Youtube />
          <LinkIn />
        </div>
      </div>
    </div>
  );
}

export default Footer;
