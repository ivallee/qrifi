import { Form, useTransition, } from "@remix-run/react";

type LayoutProps = {
  children?: React.ReactNode,
};

export default function Layout({ children } : LayoutProps) {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-light">
          <strong className="font-bold">
            QRifi
          </strong>
        </h1>
      </header>
      <main className="w-full md:w-3/4 lg:w-2/4 mx-auto py-6 my-6">
        {children}
      </main>
    </div>
  );
}