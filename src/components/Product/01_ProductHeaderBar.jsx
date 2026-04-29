const ProductHeaderBar = () => {
  return (
    <section className="w-full bg-[#eeecfb]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:px-8">
        <div className="flex flex-col items-stretch gap-5 md:flex-row md:items-center md:justify-between">
          <form className="w-full md:max-w-md">
            <label htmlFor="product-search" className="sr-only">
              Search product
            </label>
            <div className="flex items-center rounded-xl border-2 border-[#393276] bg-white px-4 py-3">
              <input
                id="product-search"
                type="text"
                placeholder="Search product"
                className="w-full bg-transparent text-base text-[#393276] outline-none placeholder:text-[#6c67b0]"
              />
              <button
                type="submit"
                className="ml-3 text-[#4b45a3]"
                aria-label="Search product"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </button>
            </div>
          </form>

          <h1 className="text-center text-3xl font-bold text-[#4b45a3] md:flex-1">
            Handmade
          </h1>

          <div className="hidden md:block md:w-[26rem]" />
        </div>

        <div className="h-[2px] w-full bg-[#6b648b]" />
      </div>
    </section>
  );
};

export default ProductHeaderBar;
