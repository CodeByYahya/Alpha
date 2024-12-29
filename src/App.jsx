import Navbar from "./Components/Navbar";

import MainCarousel from "./Components/MainCarousel";
import ProductCard from "./Components/ProductCard";
import DataUploadForm from "./Components/DataUploadForm";

const App = () => {
  return (
    <>
      <Navbar />
      <MainCarousel />
      <div className="p-10 flex">
        <ProductCard />
      </div>
      <DataUploadForm />
    </>
  );
};

export default App;
