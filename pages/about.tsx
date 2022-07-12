import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
        <h1 className="title">About</h1>

        <p className="description">
          Get started by editing{" "}
          <code className="code">pages/index.js</code>
        </p>
        <h1 className="title">
          <Link href="/"> Back Home</Link>
        </h1>
        </MainLayout>
  );
}
