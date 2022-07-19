import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function GeneratorRoute() {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}