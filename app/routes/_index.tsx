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
    <div className="grid p-8">
      <header className="flex justify-between items-center px-4">
        <h1>WERK</h1>
        <ul className="flex  flex-row space-x-4 list-none flex-wrap">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </header>
    </div>
  );
}
