import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Werk" },
    { name: "description", content: "Welcome to WERK!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1>Hello jon</h1>
      </div>
    </div>
  );
}
