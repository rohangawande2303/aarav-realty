import Banner from "./components/Banner";
import Card from "./components/Card";
import FeaturedProject from "./components/FeaturedProject";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-18 bg-white">
      <Banner />
      <section
        id="projects"
        className="w-full h-auto min-h-[80vh] flex items-center justify-center py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
          <Card title="Kalyan" link="/kalyan" />
          <Card title="Dombivali" link="/dombivli" />
        </div>
      </section>
      <FeaturedProject />
      <ContactForm />
    </main>
  );
}

// import Banner from "./components/Banner";
// import Card from "./components/Card";
// import Projects from "./components/Projects";
// import FeaturedProject from "./components/FeaturedProject";
// import ContactForm from "./components/ContactForm";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between pt-18 bg-white">
//       <Banner />
//       <section className="w-full h-[80vh] bg-gray-300 flex items-center justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
//           <Card
//             title="Kalyan"
//             description="Explore projects in Kalyan"
//             link="/kalyan"
//           />
//           <Card
//             title="Dombivali"
//             description="Explore projects in Dombivali"
//             link="/dombivli"
//           />
//         </div>
//       </section>
//       {/* <Projects /> */}
//       <FeaturedProject />
//       <ContactForm />
//     </main>
//   );
// }
