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
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`mx-auto min-h-screen max-w-screen-lg border border-primaryblue-400 ${
          className ? className : ""
        }`}
      >
        {children}
      </main>
    </>
  );
};
export default Layout;