import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@/utils";

export default async function Home() {
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();
  const pageInfo = await fetchPageInfo();

  return (
    <div className="bg-black/90 text-white h-screen overflow-y-scroll z-0 snap-mandatory snap-y overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-indigo-400 scrollbar-thin">
      <Header socials={socials}/>

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
      </section>
    </div>
  );
}
