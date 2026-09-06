import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItem } = useSelector((state) => state.products);

  // Each product's quantity
  const [itemQuantity, setItemQuantity] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setItemQuantity((prev) => ({
      ...prev,
      [id]: Number(quantity),
    }));
  };

  const placeOrder = () => {
    alert("Your order is placed");
    navigate("/");
  };

  // Total price according to quantity
  const total = cartItem.reduce((acc, item) => {
    const quantity = itemQuantity[item.id] || 1;

    return acc + item.price * quantity;
  }, 0);

  return (
    <div className="w-full min-h-screen px-7 py-6">

      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-7">
        <h1 className="text-3xl font-bold">
          Your Cart Items
        </h1>

        <span className="text-2xl">
          {cartItem?.length || 0} items
        </span>
      </div>

      {/* Cart Items */}
      <div>
        {cartItem && cartItem.length > 0 ? (
          cartItem.map((value) => {

            // Current item's quantity
            const quantity = itemQuantity[value.id] || 1;

            // Current item's total price
            const itemTotal = value.price * quantity;

            return (
              <div
                key={value.id}
                className="flex items-center justify-between border-b-2 border-gray-300 py-10"
              >

                {/* Product Information */}
                <div className="flex items-center gap-8 w-[55%]">

                  {/* Image */}
                  <div className="w-28 h-28 flex items-center justify-center">
                    <img
                      src={value.thumbnail}
                      alt={value.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Title & Brand */}
                  <div>
                    <h2 className="text-2xl font-bold">
                      {value.title}
                    </h2>

                    <p className="text-xl mt-5">
                      {value.brand}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(value.id, e.target.value)
                  }
                  className="w-60 h-16 border-2 border-gray-400 rounded-md px-3 text-xl"
                />

                {/* Price + Remove */}
                <div className="flex items-center gap-5">

                  <p className="text-2xl font-bold text-teal-600">
                    ${itemTotal.toFixed(2)}
                  </p>

                  <button
                    onClick={() => dispatch(removeCart(value.id))}
                    className="bg-[#5684a5] hover:bg-[#416d8c] text-white text-xl px-10 py-4 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              </div>
            );
          })
        ) : (
          <div>
            There is no item
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-5">

        <button
          onClick={placeOrder}
          className="bg-[#5684a5] hover:bg-[#416d8c] text-white text-xl px-10 py-4 rounded-xl"
        >
          Place Order
        </button>

        <h2 className="text-2xl font-bold text-green-700">
          Total : ${total.toFixed(2)}
        </h2>

      </div>

    </div>
  );
};

export default Cart;