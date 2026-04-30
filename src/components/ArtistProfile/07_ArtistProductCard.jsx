import favoriteIcon from "../../assets/images/favorite-icon.png";
import artistProduct1 from "../../assets/images/artist-product-1.png";

const ArtistProductCard = () => {
  return (
    <article className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-semibold tracking-[-0.03em]">
          Cybernecklace
        </h3>

        <div className="overflow-hidden border border-[#4b4b4b] bg-white">
          <div className="relative">
            <img
              src={artistProduct1}
              alt="Cybernecklace"
              className="aspect-[4/3] w-full object-cover"
            />

            <button
              type="button"
              className="absolute right-4 top-4"
              aria-label="Add to favorites"
            >
              <img
                src={favoriteIcon}
                alt="Favorite icon"
                className="h-8 w-8 object-contain"
              />
            </button>
          </div>

          <div className="grid grid-cols-[1fr_auto] items-center border-t border-[#4b4b4b]">
            <div className="px-4 py-3 text-sm leading-6 text-[#5a5a5a]">
              <p>made from god</p>
              <p>asdasdasdasdasdad</p>
            </div>

            <div className="border-l border-[#4b4b4b] px-4 py-3">
              <p className="text-4xl font-semibold tracking-[-0.04em]">300.-</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArtistProductCard;
