import { Link, Outlet } from "@remix-run/react";
import Layout from "~/components/layout";

export default function Index() {
  return (
    <Layout>
      <Link to="/generator">Hit the generator!</Link>
    </Layout>
  );
}
