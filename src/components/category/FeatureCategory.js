import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

//internal import
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const FeatureCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const {
    data,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
  });

  // console.log("category", data);

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };

  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {data[0]?.children?.slice(0, 10).map((category, i) => (
            <li className="group" key={i + 1}>
              <div
                onClick={() =>
                  handleCategoryClick(
                    category._id,
                    showingTranslateValue(category?.name)
                  )
                }
                className="flex flex-col items-center justify-center p-6 cursor-pointer transition duration-200 ease-linear"
              >
                <div className="mb-3">
                  {category.icon ? (
                    <Image
                      src={category?.icon}
                      alt="category"
                      width={80}
                      height={80}
                      className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-200"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                      alt="category"
                      width={80}
                      height={80}
                      className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-200"
                    />
                  )}
                </div>

                <h3 className="text-sm text-gray-500 font-medium text-center leading-tight">
                  {showingTranslateValue(category?.name)}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
