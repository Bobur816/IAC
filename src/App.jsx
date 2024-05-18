import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Products from "./Pages/Products";
import Partners from "./Pages/Partners";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import ProductsLines from "./Pages/ProductsLines";
import ProductsSingleMachines from "./Pages/ProductsSingleMachines";
import ProductsCuttingMachines from "./Pages/ProductsCuttingMachines";
import CarouselPage from "./Pages/CarouselPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="about/carousel" element={<CarouselPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="products" element={<Products />} />
            <Route path="/products/lines" element={<ProductsLines />} />
            <Route
              path="/products/singlemachines"
              element={<ProductsSingleMachines />}
            />
            <Route
              path="/products/cuttingmachines"
              element={<ProductsCuttingMachines />}
            />
            <Route path="partners" element={<Partners />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
