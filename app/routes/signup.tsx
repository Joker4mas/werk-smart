import React, { useState } from "react";
import { Form, Button } from "rsuite";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div
      className="grid
    place-items-center place-content-center h-screen w-screen"
    >
      <div className="flex flex-col bg-gray-200 text-gray-900 p-4  md:p-6 rounded-xl items-center justify-center gap-6">
        <img src="/public/logo.png" alt="" className="" />
        <p className="text-wrap text-sm md:text-md lg:text-lg text-center ">
          Start your Journey to a smart and <br /> productive werk life.
        </p>
        <Form
          className="grid grid-flow-row 
          place-content-center
          gap-3"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="email">
            <Form.ControlLabel className="text-sm md:text-md">
              Your work email
            </Form.ControlLabel>
            <Form.Control
              name="email"
              type="email"
              className="bg-gray-50 p-2 rounded-md"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@go.com"
            />
          </Form.Group>
          <Form.Group className="grid">
            <Button
              className="grid bg-primary p-3 rounded-xl text-white  hover:bg-white
              hover:text-primary
            hover:border-2 border-primary
            cursor-pointer"
            >
              <span>Get started for free</span>
            </Button>
          </Form.Group>
          <span className="my-2 mx-auto text-sm md:text-md">
            No credit card required
          </span>
          <div className="divider-container grid grid-flow-col gap-2 place-items-center place-content-center">
            <div className="w-32 border border-gray-300"></div>
            <span className="text-sm md:text-md">Or</span>
            <div className="w-32 border border-gray-300"></div>
          </div>
          <Form.Group className="grid">
            <Button
              className="grid bg-white p-3 rounded-xl border-2 border-primary
              hover:bg-primary
              hover:text-white cursor-pointer
              items-center
              justify-center"
              onClick={handleSubmit}
            >
              <span className="flex flex-row items-center gap-2">
                <img src="/public/Google.png" alt="" />
                <p className="ho">Get started for free</p>
              </span>
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
