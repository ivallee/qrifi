import React from "react";

type LayoutProps = {
  children?: React.ReactNode,
};

export default function Layout({ children } : LayoutProps) {
  return (
    <main className="w-full max-w-lg mx-auto py-6">
      {children}
    </main>
  );
}