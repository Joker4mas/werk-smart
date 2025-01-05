import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { logo: "/favicon.ico" },
    { title: "Werk" },
    { name: "description", content: "Welcome to WERK!" },
  ];
};

export default function Index() {
  return (
    <div className="grid px-16 ">
      <header className="flex items-center  flex-wrap flex-1 gap-8 mt-4">
        <img src="/public/logo.png" alt="" />
        <ul className="flex space-x-4 list-none flex-wrap flex-1 items-center justify-end">
          <li>Pricing</li>
          <li>Product</li>
          <li>Learn More</li>
        </ul>
        <div className="login flex gap-4 flex-wrap">
          <button className="hover:border-2 border-blue-600  w-32 hover:rounded-2xl">
            Login
          </button>
          <button
            className="w-32 rounded-2xl bg-blue-700
            hover:border-2 hover:border-blue-600 hover:bg-black
          "
          >
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
}
