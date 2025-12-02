import Image from "next/image";

const PromoBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Banner 1 */}
      <div className="group relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
        <div className="relative overflow-hidden">
          <Image
            src="/banner1.png"
            alt="Promotional Banner 1"
            width={600}
            height={300}
            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Banner 2 */}
      <div className="group relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
        <div className="relative overflow-hidden">
          <Image
            src="/banner2.png"
            alt="Promotional Banner 2"
            width={600}
            height={300}
            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default PromoBanners;
