import artistIcon from "../../assets/images/artist-icon.png";
import starIcon from "../../assets/images/star-icon.png";

const ArtistProfileCard = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-5">
        <div className="-mt-20 w-36 rounded-full border-4 border-[#eeecfb] bg-[#7cff00] p-1 shadow-sm sm:w-40 md:w-44">
          <img
            src={artistIcon}
            alt="Artist profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#2f2b78] sm:text-5xl">
              Jolyne Starchaser
            </h1>
            <img
              src={starIcon}
              alt="Featured artist"
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
          </div>

          <p className="text-2xl font-semibold text-[#636363] sm:text-3xl">
            @starchaserthegoat
          </p>
        </div>

        <div className="max-w-xl space-y-3 text-[15px] leading-8 text-[#3e3a55] md:text-lg">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book....
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtistProfileCard;
