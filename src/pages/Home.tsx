import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import WorkProcess from "@/components/WorkProcess";
import Solutions from "@/components/solutions/Solutions";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <WorkProcess />
      <Solutions />
      <Projects/>
    </main>
  );
}
