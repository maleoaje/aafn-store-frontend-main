import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";

//internal import

import Price from "@components/common/Price";
import Stock from "@components/common/Stock";
import { notifyError } from "@utils/toast";
import useAddToCart from "@hooks/useAddToCart";
import useGetSetting from "@hooks/useGetSetting";
import Discount from "@components/common/Discount";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ProductModal from "@components/modal/ProductModal";
import ImageWithFallback from "@components/common/ImageWithFallBack";
import { handleLogEvent } from "src/lib/analytics";

const ProductCard = ({ product, attributes }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { handleIncreaseQuantity } = useAddToCart();
  const { globalSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const currency = globalSetting?.default_currency || "$";

  // console.log('attributes in product cart',attributes)

  const handleAddItem = (p) => {
    if (p.stock < 1) return notifyError("Insufficient stock!");

    if (p?.variants?.length > 0) {
      setModalOpen(!modalOpen);
      return;
    }
    const { slug, variants, categories, description, ...updatedProduct } =
      product;
    const newItem = {
      ...updatedProduct,
      title: showingTranslateValue(p?.title),
      id: p._id,
      variant: p.prices,
      price: p.prices.price,
      originalPrice: product.prices?.originalPrice,
    };
    addItem(newItem);
  };

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
  };

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}

      <div className="group box-border overflow-hidden flex rounded-md border border-gray-200 shadow-sm hover:shadow-lg pe-0 flex-col items-center bg-white relative transition-all duration-200">
        <div className="w-full flex justify-between absolute top-2 left-0 z-10 px-2">
          <Stock product={product} stock={product.stock} card />
          <Discount product={product} />
        </div>
        <div
          onClick={() => {
            handleModalOpen(!modalOpen, product._id);
            handleLogEvent(
              "product",
              `opened ${showingTranslateValue(product?.title)} product modal`
            );
          }}
          className="relative flex justify-center cursor-pointer w-full h-48 bg-gray-50"
        >
          <div className="relative w-full h-full p-4">
            {product.image[0] ? (
              <ImageWithFallback src={product.image[0]} alt="product" />
            ) : (
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="100%"
                alt="product"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            )}
          </div>
        </div>
        <div className="w-full px-4 py-3 overflow-hidden border-t border-gray-100">
          <div className="relative mb-2">
            <h2 className="text-heading mb-1 block text-sm font-normal text-gray-700 hover:text-primary-500 transition-colors">
              <span className="line-clamp-2">
                {showingTranslateValue(product?.title)}
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <Price
              card
              product={product}
              currency={currency}
              price={
                product?.isCombination
                  ? product?.variants[0]?.price
                  : product?.prices?.price
              }
              originalPrice={
                product?.isCombination
                  ? product?.variants[0]?.originalPrice
                  : product?.prices?.originalPrice
              }
            />

            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-9 w-full flex items-center justify-center gap-3 py-1 px-3 bg-primary-600 text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-white text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-white px-1 font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                        >
                          <span className="text-white text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                aria-label="cart"
                className="h-9 w-full flex items-center justify-center gap-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:border-primary-600 hover:bg-primary-600 hover:text-white transition-all uppercase"
              >
                <span className="text-base">
                  <IoBagAddSharp />
                </span>
                <span>Add to Cart</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
