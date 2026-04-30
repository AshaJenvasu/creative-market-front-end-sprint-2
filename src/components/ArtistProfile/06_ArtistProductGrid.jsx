import ArtistProductCard from "./07_ArtistProductCard";

const ArtistProductGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
        <ArtistProductCard />
      </div>
    </section>
  );
};

export default ArtistProductGrid;
