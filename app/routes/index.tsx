import { Link, Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Index() {
  return (
    <Layout>
      <Link to="/generator">Hit the generator!</Link>
    </Layout>
  );
}
