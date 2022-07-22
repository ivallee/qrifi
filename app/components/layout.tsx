import { Form, useTransition, } from "@remix-run/react";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode,
};

export default function Layout({ children } : LayoutProps) {
  return (
    <React.Fragment>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-light">
          <strong className="font-bold">
            QRifi
          </strong>
        </h1>
      </header>
      <main className="w-full max-w-lg mx-auto py-6 my-6">
        {children}
      </main>
    </React.Fragment>
  );
}