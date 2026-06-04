import { contacts } from "@/data/contacts";
import { competences } from "@/data/competences";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { CompetenceSection } from "@/components/sections/CompetenceSection/CompetenceSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { WorkCategoriesSection } from "@/components/sections/WorkCategoriesSection/WorkCategoriesSection";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <>
      <Header profile={profile} contacts={contacts} />
      <main>
        <HeroSection profile={profile} />
        <CompetenceSection competences={competences} />
        <ExperienceSection items={experience} />
        <WorkCategoriesSection />
        <ContactSection contacts={contacts} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
