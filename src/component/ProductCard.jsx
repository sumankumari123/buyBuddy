import React, { useEffect } from "react";
import { addToCart, fetchProduct, removeCart } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {
  const dispatch = useDispatch();
  const { fechItems, cartItem, loading, error } = useSelector(
    (state) => state.products,
  );
  // console.log("fechItems", fechItems);
  console.log("RemoveI", cartItem);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <div className=" grid rounded  sm:grid-cols-3 gap-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {fechItems ? (
        fechItems.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Product Image */}
            <div className="h-64 flex items-center justify-center bg-white p-4">
              <img
                src={product?.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Product Information */}
            <div className="px-5 pb-5">
              {/* Product Name */}
              <h2 className="text-xl font-bold text-gray-900 truncate">
                {product.title}
              </h2>

              {/* Brand */}
              <p className="text-gray-500 text-lg mt-2">{product.brand}</p>

              {/* Price */}
              <p className="text-[#43978e] text-xl font-bold mt-2">
                ${product.price}
              </p>

              {/* Rating */}
              <p className="text-gray-500 text-lg mt-1">⭐ {product.rating}</p>

              {/* Add To Cart */}
              
              {cartItem &&
              (cartItem?.length > 0) &
                cartItem.some((c) => c.id == product?.id) ? (
                <button
                  onClick={() => dispatch(removeCart(product?.id))}
                  className="w-full mt-3 bg-red-400  text-white text-xl py-3 rounded-lg transition cursor-pointer"
                >
                  Remove from cart{" "}
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="w-full mt-3 bg-[#5485a8] hover:bg-[#467796] text-white text-xl py-3 rounded-lg transition cursor-pointer"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <h1>There is no Product</h1>
        </>
      )}
    </div>
  );
};

export default ProductCard;
