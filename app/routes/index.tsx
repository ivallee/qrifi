import { Outlet } from "@remix-run/react";
import GeneratorRoute from "./__generator";
import Layout from "~/components/layout";

export default function Index() {
  return (
    <Layout>
      <GeneratorRoute/>
    </Layout>
  );
}
