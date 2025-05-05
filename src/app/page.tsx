import Navbar from "./home-component/navbar";
import Hero from "./home-component/hero";
import About from "./home-component/about";
import EducationCards from "./home-component/education-cards";
import ProgramShowcase from "./home-component/program-showcase";
import Footer from "./home-component/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <EducationCards />
        <ProgramShowcase />
        {/* Add more sections here as needed */}
      </main>
      <Footer />
    </div>
  );
}
