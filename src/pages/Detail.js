import React from 'react';
import '../style/detail.css';
import { useParams } from 'react-router-dom';
import productData from '../data/productDate';
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Detail() {

  const { id } = useParams();
  const { data } = productData;

  const product = data.find((item) => item.id === id);

  const [mainImage, setMainImage] = useState(product ? product.image : '');

  const [selectedMain, setSelectedMain] = useState('');
  const [selectedSub, setSelectedSub] = useState('');

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  const hasSubOptions = product.subOptions && product.subOptions.length > 0;

  const [selectedItems, setSelectedItems] = useState([]);

  const addItemToList = (mainOpt, subOpt) => {
    const uniqueKey = `${mainOpt.id}-${subOpt ? subOpt.id : 'none'}`;

    const isExist = selectedItems.some(item => item.key === uniqueKey);
    if (isExist) {
      alert("이미 선택한 옵션입니다.");
      return;
    }

    const newItem = {
      key: uniqueKey,
      mainName: mainOpt.name,
      subName: subOpt ? subOpt.name : '',
      extraPrice: (mainOpt.extraPrice || 0) + (subOpt ? subOpt.extraPrice : 0),
      count: 1
    };

    setSelectedItems([...selectedItems, newItem]);
  };
  const changeCount = (key, val) => {
    setSelectedItems(
      selectedItems.map(item =>
        item.key === key
          ? { ...item, count: Math.max(1, item.count + val) }
          : item
      )
    );
  };
  const removeItem = (key) => {
    setSelectedItems(selectedItems.filter(item => item.key !== key));
  };
  const totalCount = selectedItems.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = selectedItems.reduce((acc, item) => {
    return acc + (product.price + item.extraPrice) * item.count;
  }, 0);

  const handleMainChange = (e) => {
    const mainId = e.target.value;
    if (!mainId) return;

    const findMain = product.mainOptions.find(opt => opt.id === mainId);

    if (!hasSubOptions) {
      addItemToList(findMain, null);
      setSelectedMain('');
    } else {
      setSelectedMain(mainId);
    }
  };

  const handleSubChange = (e) => {
    const subId = e.target.value;
    if (!subId) return;

    const findMain = product.mainOptions.find(opt => opt.id === selectedMain);
    const findSub = product.subOptions.find(sub => sub.id === subId);

    addItemToList(findMain, findSub);

    setSelectedMain('');
    setSelectedSub('');
  };
  return (
    <div>
      <div className="detailSection">
        <div className="detailItem">
          <div className="detailItemImg">
            <img
              src={mainImage}
              alt={product.title}
            />
            <ul className='detailThumnail'>
              {
                product.detailImages && product.detailImages.map((imgUrl, index) => (
                  <li key={index} onClick={() => setMainImage(imgUrl)} style={{ cursor: 'pointer', marginRight: '10px' }}>
                    <img src={imgUrl} alt={`${product.title} thumbanil ${index + 1}`} className='thumnail' />
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="detailItemInfo">
            <p className='detailTitle' >{product.title}
            </p>
            <p className='detailItemSmallTitle'>{product.smalltitle}
            </p>
            <div className="detailPriceBox">
              <del>
                {product.delprice.toLocaleString()}원
              </del>
              <p>
                {product.price.toLocaleString()}원
                <span>{product.percent}</span>
              </p>
            </div>
            <div className="detailMid">
              <div className="txt">
                <p>구매적립금</p>
                <p>{Math.floor(product.price * 0.01).toLocaleString()}원</p>
              </div>
              <div className="txt">
                <p>배송비</p>
                <p>무료</p>
              </div>
              <div className="optionBox01">
                <p>구성선택</p>
                <select
                  value={selectedMain}
                  onChange={handleMainChange}
                >
                  <option value="">- [필수] 옵션을 선택해주세요 -</option>
                  {product.mainOptions && product.mainOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name} {opt.extraPrice > 0 ? `(+${opt.extraPrice.toLocaleString()}원)` : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div className="optionBox02">
                <p>옵션선택</p>
                <select
                  value={selectedSub}
                  onChange={handleSubChange}
                >
                  <option value="">- [필수] 사은품/추가 구성을 선택해주세요 -</option>
                  {product.subOptions.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name} {sub.extraPrice !== 0 ? `(${sub.extraPrice.toLocaleString()}원)` : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ItemResult">
              {
                selectedItems.map((item) => (
                  <div key={item.key} className="resultSummaryBox">
                    <div className="resultTop">
                      <div className="resultTitleGroup">
                        <p className="mainProdTitle">{product.title}</p>
                        <p className="selectedOptName">
                          ㄴ{item.mainName} {item.subName ? `+ ${item.subName}` : ''}
                        </p>
                      </div>

                    </div>
                    <div className="resultItemBot">
                      <p className="resultPrice">
                        {((product.price + item.extraPrice) * item.count).toLocaleString()}원
                      </p>
                      <div className="countGroup">
                        <button onClick={() => changeCount(item.key, -1)}>-</button>
                        <span>{item.count}</span>
                        <button onClick={() => changeCount(item.key, 1)}>+</button>
                      </div>

                    </div>
                    <button className="deleteBtn" onClick={() => removeItem(item.key)}>✕</button>

                  </div>
                ))
              }
            </div>

            <div className="finalTotalSection">
              <span className="totalLabel">총 상품 금액</span>
              <span className="totalPriceValue">
                {totalPrice.toLocaleString()}원
                <span className="totalCountLabel">({totalCount}개)</span>
              </span>
            </div>

            <div className="buySection">
              <button className='butBtn'>
                구매하기
              </button>
              <div className="buySubBtn">
                <button>
                  장바구니 담기
                </button>
                <button>
                  <img src={process.env.PUBLIC_URL + '/assets/gift.png'} alt="" />선물하기
                </button>
              </div>
            </div>
          </div>

        </div>

        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="상세정보" >
            <div className="detailContents" >
              {
                product && product.detailInfo && product.detailInfo.map((imgUrl, index) => (
                  <img key={index} src={imgUrl} alt={`상세정보 이미지 ${index + 1}`} style={{width: '1180px', display: 'block', margin : '0 auto'}}/>
                ))
              }
            </div>

          </Tab>
          <Tab eventKey="profile" title="상품후기">
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="상품문의">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="배송/교환/환불 안내">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </div>
  );
} 
