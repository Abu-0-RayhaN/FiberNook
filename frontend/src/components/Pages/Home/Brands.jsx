import imagePaths from "../../../assets/brand";

const Brands = () => {
  return (
    <div className="max-w-screen-2xl py-12 xl:px-12 px-4 ">
      <ul className=" items-center justify-between text-black flex flex-wrap flex-col sm:flex-row gap-5 sm:gap-0">
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`Image ${index + 1}`} />
        ))}
      </ul>
    </div>
  );
};

export default Brands;
