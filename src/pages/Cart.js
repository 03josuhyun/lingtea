import React from 'react';
import '../style/cart.css'
import productDate from '../data/productDate';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, subCount, addItem } from './store';
import { useMemo, useState } from 'react';

export default function Cart() {

  const cartAddImg = productDate.cartAddItem;
  const state = useSelector((state => state));
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState([]);

  const isAllChecked = state.cart.length > 0 && checkedItems.length === state.cart.length;

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = state.cart.map((item) => item.id);
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheck = (checked, id) => {
    if (checked) {
      setCheckedItems((prev) => [...prev, id]);
    } else {
      setCheckedItems((prev) => prev.filter((item) => item !== id));
    }
  };

  const totalProductPrice = useMemo(() => {
    if (!state.cart) return 0;
    return state.cart.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0);
  }, [state.cart]);

  const shippingFee = useMemo(() => {
    if (totalProductPrice === 0 || totalProductPrice >= 30000) return 0;
    return 3000;
  }, [totalProductPrice]);

  const totalDiscount = 0;

  const finalPaymentAmount = totalProductPrice - totalDiscount + shippingFee;


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
                      <p className='cartAddName'>{item.title || item.name}
                      </p>
                      <div className='cartAddPrice'>
                        <span>{item.persent}</span>
                        <p>{item.price.toLocaleString()}원</p>
                      </div>
                      <button className='cartAddbtn' onClick={() => dispatch(addItem({ ...item, count: 1 }))}>
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
                <input type="checkbox" id="allChk" checked={isAllChecked} onClick={(e)=>handleAllCheck(e.target.checked)} />
                <label htmlFor="allChk">전체선택</label>
              </div>
              <p>장바구니 보관기간은 30일입니다.</p>
            </div>
            <div className="cartItemBox">
              {
                state.cart.map((item) => {
                  return (
                    <div className="cart" key={item.id}>

                      <div className="cartImg">
                        <input
                          type="checkbox"
                          id={`cartItemChk_${item.id}`}
                          checked={checkedItems.includes(item.id)}
                          onChange={(e)=>handleCheck(e.target.checked, item.id)}
                        />

                        <img
                          src={item.image}
                          alt={item.title || item.name}
                        />
                      </div>

                      <div className="cartDetail">

                        <button className="giftbtn">
                          <img
                            src={process.env.PUBLIC_URL + '/assets/gift.png'}
                            alt=""
                          />
                          선물하기
                        </button>

                        <p className="cartName">
                          {item.title || item.name}
                        </p>

                        <p className="cartOption">
                          {item.option}
                        </p>

                        <p className="cartPay">
                          {item.price.toLocaleString()}원
                        </p>

                        <div className="cartBtn">

                          <button
                            className="btn_min"
                            onClick={() => dispatch(subCount(item.id))}
                          >
                            -
                          </button>

                          <span>{item.count}</span>

                          <button
                            className="btn_pluse"
                            onClick={() => dispatch(addCount(item.id))}
                          >
                            +
                          </button>

                        </div>

                        <button
                          className="cartDelte"
                          onClick={() => dispatch(deleteItem(item.id))}
                        >
                          <img
                            src={process.env.PUBLIC_URL + '/assets/x.png'}
                            alt=""
                          />
                        </button>

                      </div>
                    </div>
                  );
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
                <p className='text02'>{totalProductPrice.toLocaleString()}원</p>
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
                <p><span>{finalPaymentAmount.toLocaleString()}</span>원</p>
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
              <button onClick={()=> alert('선물을 하시겠습니까?')}>
                <img src={process.env.PUBLIC_URL + '/assets/gift.png'} alt="" />
                선물하기
              </button>
              <button onClick={()=>alert('선택하신 상품을 주문하시겠습니까?')}>
                선택상품주문
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
