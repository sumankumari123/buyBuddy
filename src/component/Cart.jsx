import React from 'react'
import { useDispatch, useSelector } from "react-redux";



const Cart = () => {
    //   const dispatch = useDispatch();

 const { fechItems, cartItem, loading, error } = useSelector(
    (state) => state.products,
  );

    console.log("CARTRE", cartItem);

  return (
    <>hgjhjh</>
//     <div>
//       {cartItem.map((value, index)=>{
// <div>
//   thsi caa
// </div>
//       })}
//     </div>
  )
}

export default Cart
