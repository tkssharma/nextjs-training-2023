import { Suspense } from "react";
import ComparisonBox from "../components/ComparisonBox";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <Header text="Which Pokémon is Rounder?" />
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* @ts-ignore */}
        <ComparisonBox />
      </Suspense>
      <Footer />
    </>
  );
}
