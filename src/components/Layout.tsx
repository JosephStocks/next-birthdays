import type { PropsWithChildren } from "react";
import Head from "next/head";

const Layout = ({
  children,
  title,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        className={`mx-auto min-h-screen max-w-screen-lg ${
          className ? className : ""
        }`}
      >
        {children}
      </main>
    </>
  );
};
export default Layout;
