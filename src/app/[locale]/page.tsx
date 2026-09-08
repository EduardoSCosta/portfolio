import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Experience />
      <OpenSource />
      <Skills />
      <Education />
    </main>
  );
}
