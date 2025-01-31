import type { MetaFunction } from "@remix-run/node";
import * as React from "react";
import { Container, Content, Divider } from "rsuite";
import Hero from "~/components/HeroSection";
import Steps from "~/components/Steps";
import BriefSection from "~/components/BriefSection";
import Share from "~/components/ShareSection";
import Sponsors from "~/components/Sponsors";
import SignUpContainer from "~/components/SignUpContainer";

export const meta: MetaFunction = () => {
  return [
    { logo: "/favicon.ico" },
    { title: "Werk" },
    { name: "description", content: "Welcome to WERK!" },
  ];
};

const sponsorData = [
  { name: "Spotify", logo: "../public/Vector-sportify.png" },
  { name: "Microsoft", logo: "../public/microsoft.png" },
  { name: "SpaceX", logo: "../public/spacex.png" },
  { name: "PiggyVest", logo: "../public/piggyvest.png" },
  { name: "Opera", logo: "../public/opera.png" },
];

export default function Index() {
  // State to manage the menu

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
      <Content>
        {/* Hero section */}
        <Hero
          title="Manage your projects with ease, in real-time."
          description="Whether you're managing a personal project or leading a team, Werk makes it easy to get the job done. Werk lets you use simple drag-and-drop techniques for creating, managing, and tracking all your projects."
          imageSrc="./public/heroImage.png"
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
        <Sponsors
          title="Join the thousands of teams doing smart work."
          sponsors={sponsorData}
        />

        {/* sign-up container */}
        <SignUpContainer />
      </Content>

      <Divider className="text-gray-400" />
    </Container>
  );
}
