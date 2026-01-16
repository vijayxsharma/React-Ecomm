import React from "react";

const Product = ({elm:{image,title,description,price,category}}) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-md-8 overflow-hidden p-4 d-flex flex-column position-static" style={{maxHeight:"210px"}}>
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            {title}
          </strong>
          <h3 className="mb-0">{category}</h3>
          <div className="mb-1 text-body-secondary">${price}</div>
          <p className="card-text overflow-hidden mb-auto" style={{maxHeight:"75px"}}>
          {description}
          </p>
        </div>
        <div className="col-md-4 text-center ">
          <img
            src={image}
            alt=""
            className="img-fluid h-75 mt-3" style={{maxHeight:"150px",maxWidth:"150px"}}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
            <button className="btn btn-primary mx-3">Add Cart</button>
            <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
