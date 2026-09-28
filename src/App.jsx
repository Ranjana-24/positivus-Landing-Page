import Layout from "./components/Layout";
import HeroPage from "./pages/HeroPage";
import ServicesPage from "./pages/ServicesPage";
import ThingHappenPage from "./pages/ThingsHappenPage";
import WorkingProcessPage from "./pages/WorkingProcessPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import TeamPage from "./pages/TeamPage";
import TestimonialPage from "./pages/TestimonialPage";
function App() {
  return (
    <>
      <Layout>
        <HeroPage />
        <ServicesPage />
        <ThingHappenPage />
        <CaseStudiesPage />
        <WorkingProcessPage />
        <TeamPage />
        <TestimonialPage />
      </Layout>
    </>
  );
}

export default App;
