import React from 'react';
import '../style/brand.css'
//import { Outlet } from 'react-router-dom';

export default function Brand() {
  return (
    <div>
      <section className="brandSection">
        <div className="brandTitle">
          <p>링티 브랜드 스토리</p>
        </div>
        <div className="ceoBox">
          <div className="ceoTitle">
            <p>대표 인사말</p>
          </div>
          <div className="ceo">
            <img src={process.env.PUBLIC_URL + '/assets/brand01.jpg'} alt="" />
            <div className="ceotext">
              <p className='text01'>CEO 인사말</p>
              <p className='text01'>안녕하세요</p>
              <p className='text02'>(주) 링티의 대표 이원철입니다.</p>
            </div>
          </div>
          <div className="ceoTxt">
            <p>
              링티는 2017년 5월, 세 명의 군의관들에 의해 시작된 회사입니다. <br /><br />
              3년간 특전사 군의관으로 복무하면서 여름철 뙤약볕 아래 훈련 중 꾸준히 탈진 증세를 보이는 대원들을 위해3명의 군의관들이 모여 방법을 고민하기 시작했고, 오랜 연구를 통해 링티를 설립하게 되었습니다. <br /><br />
              군인이 아닌 일반인에게도 불충분한 물의 섭취, 이뇨작용이 있는 음료의 과다한 섭취로 인해만성적인 수분 부족이 있다는 점을 알게 되었습니다. <br /><br />
              링티는 앞으로 많은 분들께 충분히 더 인정받고 사랑받을 제품이라고 믿기 때문에,청진기를 드는 대신 링티를 더 개량하고 대중화시키는 일에 매진하겠습니다.또한 항상 최고의 제품을 선보일 수 있도록 연구개발을 게을리하지 않겠습니다. <br /><br />
              앞으로도 링티에 많은 관심과 성원 부탁드립니다. <br />
              감사합니다.
            </p>
          </div>
        </div>

        <div className="birthBox">
          <div className="birthTitle">
            <p>링티의 탄생 스토리</p>
          </div>
          <div className="birthtext01">
            <p className='text01txt'>링티는 3명의 군의관으로부터 시작되었습니다.</p>
            <div className="birthTxt01" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/brand02.jpg)`, backgroundSize: 'cover' }} >
              <p>“특전사 대원 300여명 가운데 6명이 탈진해 쓰러지고 1명이 실종되며, 20여명이 다쳤습니다.”</p>
              <p>“산악훈련 중 탈진한 박모(27) 중위와 김모(22) 일병 등 열사병 및 의식장애 환자를 병원에 이송하는 경우가 있었습니다.”</p>
              <p>“장비가 매우 무겁고(20 ~ 30kg), 열배출이 거의 안되기 때문에 쉽게 탈진합니다.”</p>
              <p>3명의 군의관은 강도 높은 훈련과 직업 활동으로 탈진과 열사병 등 <br /> 위급한 상황이 매년 반복하여 발생하는 것을 현장에서 직접 목격했습니다.</p>
            </div>
          </div>
          <div className="birthtext02" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/brand03.jpg)`, backgroundSize: 'cover' }}>
            <p className='text03'>그러나 현장에서 즉시 실행하기 어려운 기존 처치법의 특성 상,<br /> 혈장량 보충의 문제점을 피부로 느꼈고</p>
            <div className="birthcicle">
              <div className="circle01">
                <p className='text04'>전문인력 부족</p>
                <p className='text05'>군의관 1명당<br /> 200명의 병사 전달</p>
              </div>
              <div className="circle02">
                <p className='text04'>시공간적 제약</p>
                <p className='text05'>멀리있는 병사에게<br /> 빠른 처치 불가</p>
              </div>
              <div className="circle03">
                <p className='text04'>무게 부담</p>
                <p className='text05'>한 세트당<br /> 1kg 이상</p>
              </div>
            </div>
          </div>
          <div className="birthtext03" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/brand.jpg)`, backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <p>
              조금 더 쉽고, 부담되지 않으면서 간편한 방법으로 혈장량을 빠르게 증가시켜 힘든 병사들을도울 수 있는 방법은 없을까? 끊임없이 고민했습니다. <br /><br />
              수분이 인체에서 흡수 되는 근본을 이해하고, 끊임없는 연구를 거듭한 끝에<br />
              <span>물에 혼합하여 간편하게 수분을 흡수할 수 있는 링티</span>가 탄생하게 되었습니다
              </p>
          </div>
        </div>
      </section>
    </div>
  )
}
