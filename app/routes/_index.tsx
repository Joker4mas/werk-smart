import type { MetaFunction } from "@remix-run/node";
import * as React from "react";
import { Link } from "@remix-run/react";
import {
  Container,
  Header,
  Content,
  Footer,
  Button,
  Toggle,
  Divider,
} from "rsuite";
import HeroSection from "~/components/HeroSection";
import { Menu, X } from "lucide-react";
import Steps from "~/components/Steps";
import BriefSection from "~/components/BriefSection";
import Share from "~/components/ShareSection";
import Sponsors from "~/components/Sponsors";
import SignUpContainer from "~/components/SignUpContainer";
import FooterBase from "~/components/Footer";
export const meta: MetaFunction = () => {
  return [
    { logo: "/favicon.ico" },
    { title: "Werk" },
    { name: "description", content: "Welcome to WERK!" },
  ];
};

export default function Index() {
  // State to manage the menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const [isDarkMode, setIsDarkMode] = React.useState(false); // Assume dark mode is off for this example

  // const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Assume user is logged in for this example

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFormSubmit = (
    formValue: Record<string, []> | null,
    event?: React.FormEvent<HTMLFormElement>
  ): void => {
    if (event) {
      event.preventDefault();
    }
    console.log("Form submitted!", formValue);
  };

  return (
    <Container className="grid">
      <Header className="flex items-center mx-4 md:mx-16  flex-wrap md:gap-6 mt-4 justify-between ">
        <img src="/public/logo.png" alt="" className="w-32 md:w-52" />

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button
          className="lg:hidden p-2 hover:bg-blue-400 rounded-md"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation and Buttons - Hidden on mobile unless menu is open */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full mx-4 lg:w-auto  
           lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:items-center lg:space-x-8 
           bg-gray-500 
           shadow-lg lg:shadow-none`}
        >
          <Toggle></Toggle>
          <ul
            className="flex  flex-col md:flex-row space-x-4 list-none flex-wrap flex-1 items-center justify-end 
            text-lg
            gap-4
          text-gray-00 
          md:text-white
          "
          >
            <Link to="/pricing">Pricing</Link>
            <Link to="/product">Product</Link>
            <Link to="/Learn More">Learn More</Link>
          </ul>
          <div className="login flex flex-col md:flex-row gap-4 flex-wrap">
            <Button
              className="w-56
            md:w-32 rounded-full bg-blue-700
              hover:border-2 
              hover:border-blue-600 hover:bg-black
              text-lg mx-auto
              md:mx-0
              hover:transition-ease-in-out
            "
            >
              <Link to={"/login"}>Login</Link>
            </Button>
            <Button
              className="w-56 md:w-32  rounded-full bg-blue-700
              hover:border-2 hover:border-blue-600 hover:bg-black
              text-lg mx-auto
              md:mx-0
            "
            >
              <Link to="/registration">Get Started</Link>
            </Button>
          </div>
        </div>
      </Header>

      <Content>
        {/* Hero section */}
        <HeroSection
          title="Manage your projects with ease, in real-time."
          description="Whether you're managing a personal project or leading a team, Werk makes it easy to get the job done. Werk lets you use simple drag-and-drop techniques for creating, managing, and tracking all your projects."
          imageSrc="/public/heroImage.png"
          onSubmit={handleFormSubmit}
        />

        {/*Brainstorm  */}

        <Steps />

        {/* Boost section */}
        <div className="w-full grid gap-8 items-center justify-center bg-primary my-2 md:p-12 lg:p-24">
          <h2 className="text-2xl my-4  text-center text-wrap md:my-0 md:text-4xl lg:text-5xl font-bold md:leading-relaxed  ">
            Boost productivity {<br />} with soft
            <span className="text-accent"> werk</span>
          </h2>

          <p className=" text-sm text-center text-wrap mb-4 md:mb-0 md:text-2xl lg:text-3xl">
            Review your projects, organize them into lists and sprints, and
            {<br />}
            break them down into smaller tasks
          </p>
        </div>

        {/* Organization info section */}
        <BriefSection />

        {/* Share section */}
        <Share />

        {/* Team sponsors */}
        <Sponsors />

        {/* sign-up container */}
        <SignUpContainer />
      </Content>

      <Divider className="text-gray-400" />
      <FooterBase />
    </Container>
  );
}
