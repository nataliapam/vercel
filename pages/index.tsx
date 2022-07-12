import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className="title">
        With link to <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
