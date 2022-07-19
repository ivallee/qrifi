import { Form, useFetcher } from "@remix-run/react";
export default function GeneratorRoute() {
  const generator = useFetcher();
  return (
    <div>Hello! world!</div>
  );
}