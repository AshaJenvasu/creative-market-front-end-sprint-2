import ProductHeaderBar from "../components/Product/01_ProductHeaderBar";
import ProductGallery from "../components/Product/02_ProductGallery";
import ProductInfo from "../components/Product/03_ProductInfo";
import ArtistInfo from "../components/Product/04_ArtistInfo";
import ProductPurchasePanel from "../components/Product/05_ProductPurchasePanel";
import ProductShowcase from "../components/Product/06_ProductShowcase";

const Product = () => {
  return (
    <main className="min-h-screen w-full bg-[#eeecfb]">
      <ProductHeaderBar />

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-12 md:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="w-full">
            <ProductGallery />
          </div>

          <div className="flex w-full flex-col gap-8">
            <ProductInfo />
            <ArtistInfo />
            <ProductPurchasePanel />
          </div>
        </div>

        <ProductShowcase />
      </section>
    </main>
  );
};

export default Product;
