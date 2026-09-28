import Layout from "./components/Layout";
import HeroPage from "./pages/HeroPage";
import ServicesPage from "./pages/ServicesPage";
function App() {
  return (
    <>
      <Layout>
        <HeroPage />
        <ServicesPage />
      </Layout>
    </>
  );
}

export default App;
