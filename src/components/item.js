import React from "react";
import Product from "../pages/Product";
import productData from "../data/productDate";

const ProductCard = ({ product, onCartClick = true }) => {
  return (
    <div className="itemBox">
      <div className="itemImg">
        <img src={product.image} alt={product.title} />
        <button className="cartbtn" onCartClick={(prod) => dispatch(addItem({ ...prod, count: 1 }))}>
          <img src={process.env.PUBLIC_URL + '/assets/btncart.png'} alt="장바구니" />
        </button>
        <button className="heartbtn">
          <img src={process.env.PUBLIC_URL + '/assets/btnheart.png'} alt="" />
        </button>
      </div>

      <div className="itemInfo">
        <p className="itemTitle">
          {product.title}
        </p>
        <p className="itemSmailTitle">
          {product.smalltitle}
        </p>
        <div className="price_box">
          <p className="price">
            {product.price.toLocaleString()}원
          </p>
          <del className="delprice">
            {product.delprice.toLocaleString()}원
          </del>
        </div>
        <span className="pricedetail">
          {product.pricedetail}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;