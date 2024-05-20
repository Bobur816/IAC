import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Partners from "./Pages/Partners";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import ProductsLines from "./Pages/ProductsLines";
import ProductsSingleMachines from "./Pages/ProductsSingleMachines";
import ProductsCuttingMachines from "./Pages/ProductsCuttingMachines";
import CarouselPage from "./Pages/CarouselPage";
import Project from "./Pages/Project";
import Product from "./Pages/Product";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="about/carousel" element={<CarouselPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />

            <Route
              path="products"
              element={<Navigate replace to="/products/processing-lines" />}
            />
            <Route
              path="/products/processing-lines"
              element={<ProductsLines />}
            />
            <Route
              path="/products/single-machines"
              element={<ProductsSingleMachines />}
            />
            <Route
              path="/products/cutting-machines"
              element={<ProductsCuttingMachines />}
            />
            <Route path="/products/:id" element={<Product />} />
            <Route path="partners" element={<Partners />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
