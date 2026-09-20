import React from 'react';
import '../style/cart.css'
import productDate from '../data/productDate';
//import { useSelector, useDispatch } from 'react-redux';
//import { Outlet } from 'react-router-dom';

export default function Cart() {

  const cartAddImg = productDate.cartAddItem;
  return (
    <div>
      <div className="cartSection">
        <div className="cartTitle">
          <p>고객님의 주문내역을 한 번더 확인해주세요!</p>
        </div>
        <div className="cartAdd">
          <div className="cartAddTitle">
            <p>1시간 한정 특정 특가 이벤트</p>
          </div>
          <div className="cartAddTimeBox">
            <span className='cartAddTime'>
              52:10
            </span>
            <span className='cartAddTimeTxt'>
              후에 혜택이 사라져요!
            </span>
          </div>
          <div className="cartAddItemBox">
            <div className="cartAddItemTitle">
              <p className='cartAddItemTxt'><span>무료배송</span>혜택이 적용되었습니다!</p>
              <div className='cartAddLine'></div>
            </div>
            <div className="cartAddItem">
              {
                cartAddImg.map((item) => (
                  <div className="cartAddbox" key={item.id}>
                    <div className="cartAddImg">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cartAddDetail">
                      
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
