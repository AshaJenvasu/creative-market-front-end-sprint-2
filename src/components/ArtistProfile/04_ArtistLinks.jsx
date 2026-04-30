const ArtistLinks = () => {
  return (
    <section className="w-full">
      <div className="flex max-w-xl flex-col gap-4">
        <a
          href="#"
          className="inline-flex w-fit min-w-64 items-center justify-center rounded-xl bg-black px-6 py-3 text-lg font-medium text-white"
        >
          Instragram/Starchaser.dev
        </a>

        <a
          href="#"
          className="inline-flex w-fit min-w-72 items-center justify-center rounded-xl bg-black px-6 py-3 text-lg font-medium text-white"
        >
          Instagram/Starchaser.playground
        </a>
      </div>
    </section>
  );
};

export default ArtistLinks;
