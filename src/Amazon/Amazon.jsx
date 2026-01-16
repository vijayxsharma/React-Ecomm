import React from "react";
import Product from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Utility/Productslice";
const Amazon = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productSlice);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="container">
      <div className="row">
        {productList.map((elm,ind)=>( 
          <Product key={ind} elm={elm}/>
        ))}
      </div>
    </div>
  );
};

export default Amazon;
