import { Controller, useForm } from "react-hook-form";
import { Input, Button, Form } from "rsuite";
import React from "react";

const SignUpContainer: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();
  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-4 place-items-center  text-center  my-8">
      {/* // SignUp form component */}
      <h1 className="text-2xl text-center md:text-5xl font-bold text-wrap  md:my-6 leading-normal md:text-start lg:text-start md:leading-relaxed">
        300,000+ top-tier teams use {<br />} Werk every day. Join them.
      </h1>
      <Form onSubmit={() => handleSubmit(onSubmit)()}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              placeholder="jondoe@jackmail.com"
              id="email"
              className="md:min-w-96 p-4 rounded-full border-blue-600 dark:border-none dark:text-gray-200 my-4"
            />
          )}
        />
        {errors.email && <span>This field is required</span>}
        <Button
          appearance="primary"
          type="submit"
          className="w-46 bg-primary p-4 rounded-full mx-4"
        >
          Sign Up for free
        </Button>
      </Form>
      <p className="my-8">No need of credit card!</p>
    </div>
  );
};

export default SignUpContainer;
