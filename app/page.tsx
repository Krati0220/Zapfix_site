import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { HowItWorks } from "@/components/HowItWorks";
import { AIDiagnosis } from "@/components/AIDiagnosis";
import { Professionals } from "@/components/Professionals";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Screenshots } from "@/components/Screenshots";
import { Download } from "@/components/Download";
import { Vision } from "@/components/Vision";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/interactive/CursorGlow";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Problems />
      <HowItWorks />
      <AIDiagnosis />
      <Professionals />
      <Features />
      <Categories />
      <Screenshots />
      <Download />
      <Vision />
      <Footer />
    </main>
  );
}
