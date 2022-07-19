import { Outlet } from "@remix-run/react";
import Layout from "~/components/layout";

export default function GeneratorRoute() {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}