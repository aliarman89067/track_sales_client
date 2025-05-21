"use client";
import React from "react";
import { Header } from "./Header";
import { DetailsSection } from "./DetailsSection";
import AgentHistoryPanel from "./AgentHistoryPanel";
import Footer from "./Footer";
import { useGetAuthUserQuery } from "@/state/api";
import { Loader2 } from "lucide-react";

const LandingPage = () => {
  const { data, isLoading } = useGetAuthUserQuery();
  if (isLoading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div className="flex justify-center items-center gap-2">
          <Loader2 className="size-5 text-primaryGray animate-spin" />
          <span className="text-base text-primaryGray">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <section className="flex flex-col w-full gap-2">
      <Header isAuth={!!data} />
      <DetailsSection />
      <AgentHistoryPanel />
      <Footer />
    </section>
  );
};

export default LandingPage;
