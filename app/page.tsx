import Hero from "@/components/Hero";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
