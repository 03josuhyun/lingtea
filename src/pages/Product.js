import React from 'react';
import '../style/product.css'
//import { Outlet } from 'react-router-dom';
import productDate from '../data/productDate';
import { useState } from 'react';
import ProductCard from '../components/item';
import { addItem } from './store';



export default function Product() {

  const { data, allProduct } = productDate;
  const [activeTab, setActiveTab] = useState('all');
  const [sort, setSort] = useState('default');
  const currentTopImg = allProduct.find(
    (item) => item.id === activeTab
  )?.topImg.image;
  const filteredProducts =
    activeTab === 'all' ? data : data.filter((product) => product.category?.includes(activeTab));

  let sortedProducts = filteredProducts;

  if (sort === 'popular') {
    sortedProducts = [...filteredProducts].sort(
      (a, b) => b.viewCount - a.viewCount
    );
  }
  if (sort === 'new') {
    sortedProducts = [...filteredProducts].sort(
      (a, b) => new Date(b.newDate) - new Date(a.newDate)
    );
  }

  return (
    <div>
      <div className="allSection">
        <div className="allbreadscrum">
          <span>홈</span>
          <span>/</span>
          <span>전 제품</span>
        </div>
        <div className="alltopImg">
          <img src={currentTopImg} alt="" />
        </div>
        <div className="allBox">
          <div className="allTitle">
            <p>전 제품 소개</p>
          </div>
          <div className="Tab">
            <div className="tab01">
              <button className={activeTab === 'origainal' ? 'on' : ''} onClick={() => setActiveTab('origainal')}>
                링티 오리지널
              </button>
              <button className={activeTab === 'ceylon' ? 'on' : ''} onClick={() => setActiveTab('ceylon')}>
                카페 링티 드 실론
              </button>
              <button className={activeTab === 'collagen' ? 'on' : ''} onClick={() => setActiveTab('collagen')}>
                링티 수분콜라겐
              </button>
              <button className={activeTab === 'dot' ? 'on' : ''} onClick={() => setActiveTab('dot')}>
                닷티
              </button>
              <button className={activeTab === 'activepro' ? 'on' : ''} onClick={() => setActiveTab('activepro')}>
                링티 액티브 프로
              </button>
              <button className={activeTab === 'terathy' ? 'on' : ''} onClick={() => setActiveTab('terathy')}>
                테라티
              </button>
              <button className={activeTab === 'nightie' ? 'on' : ''} onClick={() => setActiveTab('nightie')}>
                나잇티
              </button>
              <button className={activeTab === 'morningtea' ? 'on' : ''} onClick={() => setActiveTab('morningtea')}>
                모닝티
              </button>
              <button className={activeTab === 'ringtiI' ? 'on' : ''} onClick={() => setActiveTab('ringtiI')}>
                링티 아이
              </button>
              <button className={activeTab === 'allcare' ? 'on' : ''} onClick={() => setActiveTab('allcare')}>
                올케어
              </button>
              <button className={activeTab === 'passmate' ? 'on' : ''} onClick={() => setActiveTab('passmate')}>
                패스메이트
              </button>
            </div>
            <div className="tab02">
              <button className={activeTab === 'gosotin' ? 'on' : ''} onClick={() => setActiveTab('gosotin')}>
                고소틴
              </button>
              <button className={activeTab === 'gosomil' ? 'on' : ''} onClick={() => setActiveTab('gosomil')}>
                고소밀
              </button>
              <button className={activeTab === 'focus' ? 'on' : ''} onClick={() => setActiveTab('focus')}>
                포커스카페인 환
              </button>
              <button className={activeTab === 'light' ? 'on' : ''} onClick={() => setActiveTab('light')}>
                라잇티
              </button>
              <button className={activeTab === 'dext' ? 'on' : ''} onClick={() => setActiveTab('dext')}>
                덱스트
              </button>
              <button className={activeTab === 'synergy' ? 'on' : ''} onClick={() => setActiveTab('synergy')}>
                씨너지 에너지드링트
              </button>
              <button className={activeTab === 'lemonapple' ? 'on' : ''} onClick={() => setActiveTab('lemonapple')}>
                레몬 & 애플라이트
              </button>
              <button className={activeTab === 'recoverygear' ? 'on' : ''} onClick={() => setActiveTab('recoverygear')}>
                리커버리 기어
              </button>
              <button className={activeTab === 'impact' ? 'on' : ''} onClick={() => setActiveTab('impact')}>
                임팩트 유산균 프리미엄
              </button>
            </div>
            <button className={activeTab === 'pharmacy' ? 'on' : ''} onClick={() => setActiveTab('pharmacy')}>
              약국 / 기업 전용상품
            </button>
            <button className={activeTab === 'bottle' ? 'on' : ''} onClick={() => setActiveTab('bottle')}>
              보틀 & 쇼핑백
            </button>
          </div>
          <div className="allItemNum">
            <p>
              총 <span>{sortedProducts.length}</span>개의 상품이 있습니다
            </p>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">정렬방식</option>
              <option value="new">신상품</option>
              <option value="popular">인기상품</option>
            </select>
          </div>
          <hr />
          <div className="sheet">
            {
              sortedProducts.map((product) => (
                <ProductCard 
                key={product.id}
                product={{...product, delprice: activeTab === 'pharmacy' ? 0 : product.delprice}}
                onCartClick={(prod) => dispatchEvent(addItem({...prod, count : 1}))}
                 />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}