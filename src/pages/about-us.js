import React from "react";
import Image from "next/image";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const AboutUs = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader
        headerBg={storeCustomizationSetting?.about_us?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.about_us?.title
        )}
      />

      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="max-w-screen-2xl mx-auto lg:py-24 py-12 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl mb-6 font-serif font-bold text-gray-900 leading-tight">
                <CMSkeleton
                  count={1}
                  height={60}
                  loading={loading}
                  data={storeCustomizationSetting?.about_us?.top_title}
                />
              </h1>

              <div className="text-lg text-gray-600 leading-relaxed mb-8">
                <CMSkeleton
                  count={5}
                  height={24}
                  loading={loading}
                  data={storeCustomizationSetting?.about_us?.top_description}
                />
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl transform transition-transform group-hover:scale-105 shadow-lg"></div>
                  <div className="relative p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl text-white">
                    {loading ? (
                      <CMSkeleton
                        count={3}
                        height={20}
                        error={error}
                        loading={loading}
                      />
                    ) : (
                      <>
                        <div className="text-4xl font-bold mb-2">
                          {showingTranslateValue(
                            storeCustomizationSetting?.about_us?.card_one_title
                          )}
                        </div>
                        <div className="text-sm font-medium opacity-90 mb-1">
                          {showingTranslateValue(
                            storeCustomizationSetting?.about_us?.card_one_sub
                          )}
                        </div>
                        <p className="text-xs opacity-80 leading-relaxed">
                          {showingTranslateValue(
                            storeCustomizationSetting?.about_us?.card_one_description
                          )}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl transform transition-transform group-hover:scale-105 shadow-lg"></div>
                  <div className="relative p-6 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl text-white">
                    {loading ? (
                      <CMSkeleton
                        count={3}
                        height={20}
                        error={error}
                        loading={loading}
                      />
                    ) : (
                      <>
                        <div className="text-4xl font-bold mb-2">
                          {showingTranslateValue(
                            storeCustomizationSetting?.about_us?.card_two_title
                          )}
                        </div>
                        <div className="text-sm font-medium opacity-90 mb-1">
                          {showingTranslateValue(
                            storeCustomizationSetting?.about_us?.card_two_sub
                          )}
                        </div>
                        <p className="text-xs opacity-80 leading-relaxed">
                          {showingTranslateValue(
                            storeCustomizationSetting?.about_us?.card_two_description
                          )}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  width={920}
                  height={750}
                  src={
                    storeCustomizationSetting?.about_us?.content_right_img ||
                    "/about-us.jpg"
                  }
                  alt="About All American Foods Network"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4">
                  Our Mission & Values
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-red-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <CMSkeleton
                    count={5}
                    height={24}
                    loading={loading}
                    data={
                      storeCustomizationSetting?.about_us?.middle_description_one
                    }
                  />
                </p>

                <p>
                  <CMSkeleton
                    count={8}
                    height={24}
                    error={error}
                    loading={loading}
                    data={
                      storeCustomizationSetting?.about_us?.middle_description_two
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Banner */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 pb-16 lg:pb-24">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              width={1920}
              height={570}
              src={
                storeCustomizationSetting?.about_us?.content_middle_Img ||
                "/about-banner.jpg"
              }
              alt="All American Foods Network Store"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Quality You Can Trust
                </h3>
                <p className="text-lg text-white/90">
                  Delivering fresh, high-quality products to your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best shopping experience with quality products and exceptional service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Guaranteed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product is carefully selected and inspected to ensure the highest quality standards
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quick and reliable delivery service to get your orders to you fresh and on time
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Customer First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your satisfaction is our priority. We're here to help with exceptional customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
