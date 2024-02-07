const FooterBottom = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl container py-6 xl:px-28  px-4 pb-6">
        <div className="flex justify-center sm:justify-between items-center text-white flex-col sm:flex-row gap-2 sm:gap-0">
          <p>&copy;2024 FiberNook,Inc</p>
          <p>Payment Methods</p>
          <button
            className=""
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
