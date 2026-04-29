const ProductPurchasePanel = () => {
  return (
    <section className="w-full text-[#2f2b78]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex min-w-32 items-center justify-center rounded-md border border-[#b7b2d7] px-4 py-2 text-sm font-medium text-[#5a5596]">
            #Handmade
          </span>
          <span className="inline-flex min-w-28 items-center justify-center rounded-md border border-[#b7b2d7] px-4 py-2 text-sm font-medium text-[#5a5596]">
            #Jewery
          </span>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="flex items-end gap-4">
            <p className="text-5xl font-bold leading-none">300.-</p>
            <p className="text-5xl font-bold leading-none">บาท</p>
          </div>

          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center text-[#3f3988]"
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-14 w-14"
            >
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H7" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-[#393276] px-6 py-4 text-2xl font-bold text-white transition hover:bg-[#2f295f]"
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default ProductPurchasePanel;
