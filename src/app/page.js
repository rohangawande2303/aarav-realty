import Banner from "./components/Banner";
import FeaturedProject from "./components/FeaturedProject";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-white">
      <Banner />
      <Projects />
      <FeaturedProject />
      <ContactForm />
    </main>
  );
}
