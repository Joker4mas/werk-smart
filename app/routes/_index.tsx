import type { MetaFunction } from "@remix-run/node";
import { Button } from "rsuite";
import { Container, Header, Content, Footer } from "rsuite";
export const meta: MetaFunction = () => {
  return [
    { logo: "/favicon.ico" },
    { title: "Werk" },
    { name: "description", content: "Welcome to WERK!" },
  ];
};

export default function Index() {
  return (
    <Container className="grid px-16 ">
      <Header className="flex items-center  flex-wrap flex-1 gap-8 mt-4">
        <img src="/public/logo.png" alt="" />
        <ul className="flex space-x-4 list-none flex-wrap flex-1 items-center justify-end">
          <li>Pricing</li>
          <li>Product</li>
          <li>Learn More</li>
        </ul>
        <div className="login flex gap-4 flex-wrap">
          <Button
            className="
            w-32 rounded-xl bg-blue-700
              hover:border-2 hover:border-blue-600 hover:bg-black
            "
          >
            Login
          </Button>
          <Button
            className="w-32 rounded-xl bg-blue-700
              hover:border-2 hover:border-blue-600 hover:bg-black
            "
          >
            Get Started
          </Button>
        </div>
      </Header>
      <Content>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold">Welcome to WERK</h1>
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
