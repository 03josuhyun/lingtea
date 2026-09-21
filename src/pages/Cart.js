import React from 'react';
import '../style/cart.css'
import productDate from '../data/productDate';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, subCount } from './store';
//import { Outlet } from 'react-router-dom';

export default function Cart() {

  const cartAddImg = productDate.cartAddItem;
  const state = useSelector((state => state));
  const dispatch = useDispatch();
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
                      <p className='cartAddName'>{item.name}</p>
                      <div className='cartAddPrice'>
                        <span>{item.persent}</span>
                        <p>{item.price.toLocaleString()}원</p>
                      </div>
                      <button className='cartAddbtn'>
                        담기
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="cartBox">
          <div className="cartLeft">
            <div className="cartTop">
              <div className="allChkBox">
                <input type="checkbox" id="allChk" />
                <label htmlFor="allChk">전체선택</label>
              </div>
              <p>장바구니 보관기간은 30일입니다.</p>
            </div>
            <div className="cartItemBox">
              {


                state.cart.map((item, i) => {
                  return (
                    <div className="cart" key={i}>

                      <div className="cartImg">
                        <input type="checkbox" name="" id="cartItemChk" />
                        <img src={state.cart[i].image} alt={state.cart[i].title} />
                      </div>
                      <div className="cartDetail">
                        <button className='giftbtn'>
                          <img src={process.env.PUBLIC_URL + '/assets/gift.png'} alt="" /> 선물하기
                        </button>
                        <p className="cartName">
                          {state.cart[i].title}
                        </p>
                        <p className='cartOption'>
                          {state.cart[i].option}
                        </p>
                        <p className='cartPay'>
                          {state.cart[i].price.toLocaleString()}원
                        </p>
                        <div className="cartBtn">
                          <button className='btn_min' onClick={() => dispatch(subCount(state.cart[i].id))}>
                            -
                          </button>
                          <span>1</span>
                          <button className='btn_pluse' onClick={() => dispatch(addCount(state.cart[i].id))}>
                            +
                          </button>
                          
                        </div>
                        <button className='cartDelte' onClick={() => dispatch(deleteItem(state.cart[i].id))}>
                            <img src={process.env.PUBLIC_URL + '/assets/x.png'} alt="" />
                          </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="cartRight">
            <div className="cartPrice">
              <p className='cartPriceTitle01'>
                결제 예정 금액
              </p>
              <div className="cartTxt01">
                <p className='text01'>총 상품 금액</p>
                <p className='text02'>84,800원</p>
              </div>
              <p className='cartPriceTitle02'>
                총 할인 금액
              </p>
              <div className="cartTxt02">
                <div className="text03">
                  <p>ㄴ 상품회원(회원)</p>
                  <p>ㄴ 상품 쿠폰 할인</p>
                  <p>ㄴ 장바구니 쿠폰 할인</p>
                  <p>ㄴ 배송비 쿠폰 할인</p>
                </div>
                <div className="text04">
                  <p>0원</p>
                  <p>0원</p>
                  <p>0원</p>
                  <p>0원</p>
                </div>
              </div>
              <div className="cartTxt03">
                <p>총 배송비</p>
                <p><span>0</span>원</p>
              </div>
              <hr />
              <div className="cartTxt04">
                <p>총 결제예정 금액</p>
                <p><span>84,800</span>원</p>
              </div>
              <div className="cartTxt05">
                <div className="text05">
                  <p>ㄴ 적립예정 적립금</p>
                  <p>ㄴ 추가 적립예정 적립금</p>
                </div>
                <div className="text06">
                  <p>0원</p>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <button className='allPayBtn'>
              전체상품주문
            </button>
            <div className='payBtn'>
              <button>
                <img src={process.env.PUBLIC_URL + '/assets/gift.png'} alt="" />
                선물하기
              </button>
              <button>
                선택상품주문
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
