import type { MetaFunction } from "@remix-run/node";
import * as React from "react";
import { Link } from "@remix-run/react";
import { Container, Header, Content, Footer, Button, Form, Card } from "rsuite";
import { Menu, X } from "lucide-react";
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

  return (
    <Container className="grid md:mx-16  mx-2">
      <Header className="flex items-center  flex-wrap md:gap-6 mt-4 justify-between ">
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
          } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto dark:bg-black 
           lg:bg-transparent p-4 lg:p-0 space-y-4 lg:space-y-0 lg:items-center lg:space-x-8 shadow-lg lg:shadow-none`}
        >
          <ul
            className="flex  flex-col md:flex-row space-x-4 list-none flex-wrap flex-1 items-center justify-end 
            text-lg
            gap-4
          text-gray-600 
          md:text-white
          "
          >
            <Link to="/pricing">Pricing</Link>
            <Link to="/product">product</Link>
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
        <div className="hero-section grid md:grid-cols-2 mt-4" id="hero">
          {/* Hero section write up */}

          <Card
            className="text-hero
          flex flex-col items-center justify-center gap-4
          "
          >
            <Card.Body>
              <h1
                className="text-3xl md:text-5xl font-bold text-blue-600 
              text-center
              md:text-start
              md:leading-relaxed mb-4"
              >
                Manage your projects with ease, in real-time.
              </h1>

              <p className="text-center md:text-start text-md">
                Whether you're managing a personal project or leading a team,
                Werk makes it easy to get the job done. Werk lets you use simple
                drag-and-drop techniques for creating, managing, and tracking
                all your projects.
              </p>

              {/* Form action */}
              <Form
                method="post"
                action=""
                className="w-full flex flex-col md:flex-row md:justify-between
                items-center
               gap-2 align-start mt-6"
              >
                <Form.Group controlId="email">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="jondoe@gomail.com"
                    className="md:min-w-96 p-4 rounded-full border-blue-600 
                    dark:border-none
                    dark:text-gray-200"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="w-36  bg-blue-700 p-4 rounded-full"
                >
                  Get Started
                </Button>
              </Form>
            </Card.Body>
          </Card>

          {/* Hero-section image right container */}
          <div className="image-hero">
            <img src="/public/Illustration-hero.png" alt="" />
          </div>
        </div>

        {/* Features section */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className=" font-bold">Welcome to WERK</h1>
          <p className="text-2xl">The best place to find jobs</p>
        </div>
      </Content>
      <Footer>
        <div className="flex items-center justify-center">
          <p className="text-2xl">Footer</p>
        </div>
      </Footer>
    </Container>
  );
}
