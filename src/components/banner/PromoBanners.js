import Image from "next/image";
import Link from "next/link";

const PromoBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Dark Banner - Left */}
      <div className="relative bg-black rounded-lg overflow-hidden min-h-[250px] flex items-center">
        <div className="w-full lg:w-1/2 p-8 lg:p-10 z-10">
          <p className="text-primary-500 text-sm font-medium mb-2 uppercase">
            THE BEST LAPTOP
          </p>
          <h2 className="text-white text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            SONY VAIO
            <br />
            CHIP CORE I9
          </h2>
          <Link
            href="/search"
            className="inline-block px-6 py-2.5 bg-white text-black text-sm font-bold uppercase rounded hover:bg-gray-100 transition-colors"
          >
            SHOP NOW →
          </Link>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
              alt="Sony Vaio Laptop"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Light Banner - Right */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden min-h-[250px] flex items-center">
        <div className="w-full lg:w-1/2 p-8 lg:p-10 z-10">
          <p className="text-primary-500 text-sm font-medium mb-2 uppercase">
            NEW ARRIVALS
          </p>
          <h2 className="text-black text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            GALAXY TAB
            <br />
            64GB/4GB RAM
          </h2>
          <Link
            href="/search"
            className="inline-block px-6 py-2.5 bg-black text-white text-sm font-bold uppercase rounded hover:bg-gray-800 transition-colors"
          >
            SHOP NOW →
          </Link>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
              alt="Galaxy Tab"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;
