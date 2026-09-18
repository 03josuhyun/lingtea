//import React from 'react';
import '../style/home.css'
import Carousel from 'react-bootstrap/Carousel';
import productDate from '../data/productDate';
import { useState } from 'react';

export default function Home() {
  const { data: bestProducts, tabData, eventInfo } = productDate;
  const [activeTab, setActiveTab] = useState('recovery');
  const [activeTab01, setActiveTab01] = useState('origainal');

  return (
    <>
      <Carousel className='banner'>
        <Carousel.Item className='bannerImg' interval={2000}>
          <img src={process.env.PUBLIC_URL + '/assets/banner/banner01.webp'} alt='배너1' />
          <img
            src={process.env.PUBLIC_URL + '/assets/banner/banner02.webp'}
            alt="배너2"
          />
          <img
            src={process.env.PUBLIC_URL + '/assets/banner/banner03.webp'}
            alt="배너3"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='bannerImg' interval={2000}>
          <img
            src={process.env.PUBLIC_URL + '/assets/banner/banner04.webp'}
            alt="배너4"
          />
          <img
            src={process.env.PUBLIC_URL + '/assets/banner/banner05.jpg'}
            alt="배너5"
          />
          <img
            src={process.env.PUBLIC_URL + '/assets/banner/banner06.webp'}
            alt="배너6"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='bestSection'>
        <div className='bestTitle'>
          <p className='title01'>꾸준히 사랑받는 링티 베스트 셀러</p>
          <p className='title02'>다양한 혜택과 함께 만나요!</p>
        </div>
        <div className="bestBox">
          {
            bestProducts.slice(0, 4).map((product) => {
              return (
                <div className="bestItem" key={product.id}>
                  <div className="bestImg">
                    <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
                    <button className='cartbtn'>
                      <img src={process.env.PUBLIC_URL + '/assets/btncart.png'} alt="" />
                    </button>
                    <button className='heartbtn'>
                      <img src={process.env.PUBLIC_URL + '/assets/btnheart.png'} alt="" />
                    </button>
                  </div>
                  <div className="bestInfo">
                    <p className='itemtitle'>{product.title}</p>
                    <p className='smailltitle'>{product.smalltitle}</p>
                    <div className="price_box">
                      <p className='price'>{product.price}원</p>
                      <del className='delprice'>{product.delprice}원</del>
                    </div>
                    <span className='pricedetail'>{product.pricedetail}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className='bestAdd'>
          전체보기
        </button>
      </div>

      <div className="allItemSection">
        <div className="allItemTitle">
          <p className='title03'>전 제품 소개</p>
          <p className='title04'>링티와 다양한 제품을 소개합니다</p>
        </div>
        <div className="allItemBox">
          <div className="allItem">
            <div className="allItemTab">
              <button className={activeTab === 'recovery' ? 'on' : ''} onClick={() => setActiveTab('recovery')}>회복솔루션</button>
              <button className={activeTab === 'diet' ? 'on' : ''} onClick={() => setActiveTab('diet')}>이너뷰티 & 다이어트</button>
              <button className={activeTab === 'vitamin' ? 'on' : ''} onClick={() => setActiveTab('vitamin')}>비타민 활력</button>
              <button className={activeTab === 'sleep' ? 'on' : ''} onClick={() => setActiveTab('sleep')}>목 & 숙면 관리</button>
              <button className={activeTab === 'protein' ? 'on' : ''} onClick={() => setActiveTab('protein')}> 장 건강 & 단백질</button>
              <button className={activeTab === 'energy' ? 'on' : ''} onClick={() => setActiveTab('energy')}>에너지</button>
              <button className={activeTab === 'health' ? 'on' : ''} onClick={() => setActiveTab('health')}>건강음료</button>
            </div>
            <div className="allItemSheet">
              <div>
                {activeTab === 'recovery' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.recovery.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img className='sheetTabimg' src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.recovery.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
                {activeTab === 'diet' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.diet.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.diet.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
                {activeTab === 'vitamin' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.vitamin.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.vitamin.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
                {activeTab === 'sleep' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.sleep.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.sleep.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
                {activeTab === 'protein' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.protein.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.protein.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
                {activeTab === 'energy' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.energy.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.energy.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
                {activeTab === 'health' && (
                  <div className='sheet'>
                    <div className="sheetTab">
                      {
                        tabData.health.tabs.map((tabs) => (
                          <button key={tabs.id} className={activeTab01 === tabs.id ? 'on01' : ''} onClick={() => setActiveTab01(tabs.id)} >
                            <img src={tabs.image} alt="tabimg" />
                            {tabs.name}
                          </button>
                        ))
                      }
                    </div>
                    <div className="sheetsheet">
                      {
                        tabData.health.tabs.map((tabs) => (
                          activeTab01 === tabs.id && (
                            <img key={tabs.id} src={tabs.sheet} alt={tabs.name} />
                          )
                        ))
                      }
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="brandSection">
        <div className="brandImg">
          <img src={process.env.PUBLIC_URL + '/assets/brand.jpg'} />
        </div>

        <div className="brandText">
          <p className='title05'>의사의 고민에서 시작된 수분 솔루션, 링티</p>
          <p className='title06'>"어떻게 하면 더 빠르고, 더 간편하게 수분을 보충할 수 있을까?" <br />
            특전사 훈련 현장에서 마주한 갈증을 해결하기위해, 군의관들이 직접 연구하고 <br />
            설계하여 체내 흡수율을 극대화했습니다.
          </p>
          <button className='brandbtn'>
            브랜드 스토리
          </button>
        </div>
      </div>

      <div className="eventSection">
        <div className="eventTitle">
          <p className='title07'>이벤트</p>
          <p className='title08'>더 큰 혜택과 즐거움을 드려요!</p>
        </div>
        <div className="eventBox">
          <button className='event_prev'>
            <img src={process.env.PUBLIC_URL + '/assets/btnprev.png'} alt="" />
          </button>
          <div className="event">
            {
              eventInfo.slice(0,3).map((event)=> {
                return (
                  <div className="eventItem" key={event.id}>
                    <div className="eventImg">
                      <img src={process.env.PUBLIC_URL + event.image} alt={event.name} />
                    </div>
                    <p className='eventName'>{event.name}</p>
                    <span className='eventDay'>{event.day}</span>
                  </div>
                )
              })
            }
          </div>
          <button className='event_next'>
            <img src={process.env.PUBLIC_URL + '/assets/btnnext.png'} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}