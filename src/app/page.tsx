import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { LatestPosts } from "@/components/sections/latest-posts";
import { Skills } from "@/components/sections/skills";
import { SystemDesign } from "@/components/sections/system-design";
import { Testimonials } from "@/components/sections/testimonials";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Trust />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <SystemDesign />
      <Achievements />
      {/* <Certifications /> */}
      <LatestPosts />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
