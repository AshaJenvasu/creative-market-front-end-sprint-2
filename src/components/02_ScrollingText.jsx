import heartIcon from "../assets/icons/heart.svg";

const baseItems = ["ART", "MUSIC", "SCULPTURE", "HANDMADE", "PAINTING"];

const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

const ScrollingText = () => {
  return (
    <div className="bg-black py-6 border-y border-gray-800 overflow-hidden flex">
      {/* ชุดที่ 1 */}
      <div className="flex items-center gap-8 animate-scroll shrink-0 w-max pr-8">
        {items.map((text, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-white text-2xl font-bold uppercase hover:opacity-80 transition-all ">
              {text}
            </span>
            <img src={heartIcon} alt="heart-icon" className="h-6 w-auto" />
          </div>
        ))}
      </div>

      {/* ชุดที่ 2 */}
      <div className="flex items-center gap-8 animate-scroll shrink-0 w-max pr-8">
        {items.map((text, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-white text-2xl font-bold uppercase hover:opacity-80 transition-all ">
              {text}
            </span>
            <img src={heartIcon} alt="heart-icon" className="h-6 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
