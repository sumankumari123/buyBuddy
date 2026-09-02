import React,{useEffect} from 'react'
import { fetchProduct } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = () => {
 const dispatch = useDispatch();
  const {data, loading, error}= useSelector((state) => state.products);
console.log("**", data)
console.log("**", loading)
console.log("**", error)



  useEffect(()=>{
    dispatch(fetchProduct());
  },[])
  return (
    <div>
      
    </div>
  )
}

export default ProductCard
