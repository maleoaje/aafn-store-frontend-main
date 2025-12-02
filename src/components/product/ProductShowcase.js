import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "@components/modal/ProductModal";
import useUtilsFunction from "@hooks/useUtilsFunction";

const ProductShowcase = ({ popularProducts, discountProducts, attributes }) => {
  const { showingTranslateValue } = useUtilsFunction();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const sections = [
    {
      title: "Top Selling",
      products: popularProducts?.slice(0, 5) || [],
    },
    {
      title: "Trending Products",
      products: popularProducts?.slice(5, 10) || [],
    },
    {
      title: "Recently Added",
      products: popularProducts?.slice(10, 15) || [],
    },
    {
      title: "Top Rated",
      products: popularProducts?.slice(15, 20) || [],
    },
  ];

  return (
    <div className="bg-gray-50 py-10 lg:py-16">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-primary-600">
                {section.title}
              </h3>
              <div className="relative h-[400px] overflow-hidden">
                <div className="vertical-scroll space-y-4">
                  {/* Duplicate products for seamless loop */}
                  {[...section.products, ...section.products].map((product, i) => (
                    <div
                      key={`${product._id}-${i}`}
                      onClick={() => handleQuickView(product)}
                      className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 hover:border-primary-600 transition-all cursor-pointer"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <img
                          src={product.image?.[0] || "/placeholder.png"}
                          alt={showingTranslateValue(product.title)}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {showingTranslateValue(product.title)}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-600 font-bold text-base">
                            ${product.prices?.price || product.price}
                          </span>
                          {product.prices?.originalPrice && (
                            <span className="text-gray-400 line-through text-xs">
                              ${product.prices.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={selectedProduct}
          attributes={attributes}
        />
      )}

      <style jsx>{`
        @keyframes verticalScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .vertical-scroll {
          animation: verticalScroll 20s linear infinite;
        }

        .vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;
