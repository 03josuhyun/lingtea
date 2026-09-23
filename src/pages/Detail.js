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

  const [qandaBox, setQandaBox] = useState([]); 

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
              <button className='buyBtn'>
                구매하기
              </button>
              <div className="buySubBtn">
                <button className='buyCartBtn'>
                  장바구니 담기
                </button>
                <button className='buyGiftBtn'>
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
                  <img key={index} src={imgUrl} alt={`상세정보 이미지 ${index + 1}`} style={{ width: '850px', display: 'block', margin: '0 auto' }} />
                ))
              }
            </div>

          </Tab>
          <Tab eventKey="profile" title="상품후기">
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="상품문의">
            <div className="qandaSection">
              {
                qandaBox.map((qa, index) => (
                  <div className="qanda">

                  </div>
                ))
              }
            </div>
          </Tab>
          <Tab eventKey="contact" title="배송/교환/환불 안내">
            <p className='text01' style={{width: '880px', margin: '0 auto', textAlign: 'justify', marginTop: '60px', color: '#444'}}>
              고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.

              무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
              주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
            </p>
            <br />
            <p className='text02' style={{width: '880px', margin: '0 auto', textAlign: 'justify' , color: '#444'}}>
              교환 및 반품이 가능한 경우
              - 단순변심, 착오구매에 따른 교환/반품 신청은 상품을 공급 받으신 날로부터 7일 이내 가능
              (교환/반품 왕복 배송비 5,000원 고객 부담)
              - 공급 받으신 상품 및 용역의 내용이 표시/광고 내용과 다르거나 계약내용과 다르게 이행된 경우에는 공급 받은 날로부터 3개월 이내, 그 사실을 알게 된 날로부터 30일 이내 (배송비 회사 부담) 
              - 교환/반품을 원하는 고객은 쇼핑몰의 [마이페이지주문내역조회]를 통해 신청, 신청 후 지정 택배사가 직접 방문하여 상품을 수거
              - 제품, 배송 문의는 카카오톡 채널 [링티] 또는 고객센터 [1544-5200]로 문의
              - 상품 구매 시 사은품/증정품 등이 제공된 경우, 상품 교환/반품 시 함께 동봉
              - 반품 처리는 영업일 기준 7일 정도 소요

              교환 및 반품이 불가능한 경우
              - 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
              - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
              - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
              - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우
              - 복제가 가능한 상품 등의 포장을 훼손한 경우
              (자세한 내용은 고객감동센터 또는 카카오톡 플러스친구 '링티'를 추가하여 확인 해주시기 바랍니다.)

              ※ 단순 변심으로 인해 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담해주셔야 합니다. (맛 교환 등 포함)
            </p>
            <br />
            <p className='text03' style={{width: '880px', margin: '0 auto', textAlign: 'justify' , color: '#444'}}>
              배송 방법 : 택배
              배송 지역 : 전국지역
              배송 비용 : 무료
              배송 기간 : 1일 ~ 3일
              배송 안내 :
              주문한 상품은 언제쯤 배송되나요?
              평일 낮 12시 이전 주문 건은 당일 출고가 진행됩니다. 택배사 사정에 따라 출고일로부터 1~2일 정도(공휴일 제외) 배송기간이 소요됩니다.

              지역별 배송비를 알고싶어요
              제주/ 도서산간지역 구분하지 않고 전지역 동일하게 배송비 2,500원 부담됩니다. 결제금액 3만원 이상 주문시 배송비는 무료입니다.

              상품을 따로 주문했는데 묶음배송이 가능한가요?
              묶음배송의 경우는 주문하신 시간이 낮 12시 이전에 주문 건에 대해서는 상품을 따로 주문하셨더라도 묶음 배송처리가 가능합니다.
              다만 낮 12시 이후 주문의 경우에는 이전 주문 건이 출고가 되어, 묶음배송 처리가 어렵습니다.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
} 
