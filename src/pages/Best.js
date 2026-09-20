import React from 'react';
import '../style/best.css';
import productDate from '../data/productDate';
//import { useState } from 'react';

export default function Best() {

  const { data } = productDate;
  const bestProduct = data.filter((item) => (item.isBest === true));
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
              bestProduct.map((item) => (
                <div className="bestItem" key={item.id}>
                  <div className="bestItemImg">
                    <img src={item.image} alt={item.title} />
                    <button className='cartbtn'>
                    <img src={process.env.PUBLIC_URL + '/assets/btncart.png'} alt="" />
                  </button>
                  <button className='heartbtn'>
                    <img src={process.env.PUBLIC_URL + '/assets/btnheart.png'} alt="" />
                  </button>
                  </div>
                  <div className="bestItemInfo">
                    <p className='bestItemName'>{item.title}</p>
                    <p className='bestsmallTitle'>{item.smalltitle}</p>
                    <div className="bestItemPrice">
                      <p>{item.price.toString()}원</p>
                      <del>{item.delprice.toString()}원</del>
                    </div>
                    <span>{item.pricedetail}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
