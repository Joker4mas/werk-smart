import React from "react";
import { Form, Card, Button } from "rsuite";
// import HeroImage from "../Illustration-hero.png"; // Adjust the path as necessary
import PropTypes from "prop-types";

// Props Types
interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  onSubmit: (
    formValue: Record<string, []> | null,
    event?: React.FormEvent<HTMLFormElement>
  ) => void;
}

const HeroForm = ({
  onSubmit,
}: {
  onSubmit: (
    formValue: Record<string, []> | null,
    event?: React.FormEvent<HTMLFormElement>
  ) => void;
}) => (
  <Form
    method="post"
    onSubmit={onSubmit}
    className="w-full flex flex-col md:flex-row md:justify-between items-center gap-2 align-start mt-6"
  >
    <Form.Group controlId="email">
      <Form.Control
        name="email"
        type="email"
        placeholder="jondoe@gomail.com"
        className="md:min-w-96 p-4 rounded-full border-blue-600 dark:border-none dark:text-gray-200"
        required
      />
    </Form.Group>
    <Button type="submit" className="w-36 bg-blue-700 p-4 rounded-full">
      Get Started
    </Button>
  </Form>
);

function HeroSection({
  title,
  description,
  imageSrc,
  onSubmit,
}: HeroSectionProps) {
  return (
    <div
      className="hero-section grid md:grid-cols-2 mt-4 mx-4 md:mx-16"
      id="hero"
    >
      {/* Hero section content */}
      <Card className=" content-center">
        <Card.Body className=" flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl  md:text-5xl font-bold text-center text-blue-600  leading-normal md:text-start lg:text-start md:leading-relaxed">
            {title}
          </h1>
          <p className="text-center text-wrap md:text-start lg:text-start text-md">
            {description}
          </p>

          {/* Hero form */}
          <HeroForm onSubmit={onSubmit} />
        </Card.Body>
      </Card>

      {/* Hero image */}
      <img src={imageSrc} alt="Hero" />
    </div>
  );
}
HeroForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// HeroImage.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
// };

export default HeroSection;
