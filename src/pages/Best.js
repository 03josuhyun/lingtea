import React from 'react';
import '../style/best.css';
import productDate from '../data/productDate';
import ProductCard from '../components/item';
import Product from './Product';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addItem } from './store.js';

export default function Best() {

  const { data } = productDate;
  const bestProduct = data.filter((item) => (item.isBest === true));
  const dispatch = useDispatch()
  return (
    <div>
      <div className="bestItemSection">
        <div className="bestItembreadscrum">
          <span>홈</span>
          <span>/</span>
          <span>BEST</span>
        </div>
        <div className="bestItemtopImg">
          <img src={process.env.PUBLIC_URL + '/assets/allItem/allItem02.jpg'} alt="" />
        </div>
        <div className="bestItemBox">
          <div className="bestItemTitle">
            <p>BEST</p>
          </div>
          <div className="bestItemNum">
            <p>
              총 <span>{bestProduct.length}</span>의 상품이 있습니다.
            </p>
          </div>
          <hr />
          <div className="sheet">
            {
              bestProduct.map((product) => (
                <ProductCard
                key={product.id}
                product={product}
                onCartClick={(prod) => dispatch(addItem({ ...prod, count: 1 }))}
                 />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
