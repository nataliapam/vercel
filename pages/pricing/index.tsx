import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1 className="title">
        With link to <Link href="/about">About</Link>
      </h1>

      <p className="description">Pricing</p>
    </MainLayout>
  );
}
