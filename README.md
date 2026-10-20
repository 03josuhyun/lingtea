# React를 활용한 링티 리뉴얼 사이트

## 프로젝트 소개
### 📋 기획의도
복잡한 건강정보를 쉽게 직관적으로, **링티**를 일상 속에서 자연습럽게 경험할 수 있도록!!
기존 링티의 건강하고 활기찬 브랜드 이미지를 유지하면서, 제품과 브랜드 정보를 보다 **쉽고 직관적으로 전달하는 사용자 중심의 쇼핑몰**로 리뉴얼합니다.

### 💡 핵심 기능
* **메인 베너 & 이벤트 슬라이더**
  * 브랜드의 아이덴티티와 최신 프로모션을 시각적으로 전달하는 첫 화면 구성
  * Swiper/Slick 라이브러리를 활용해 자동 재생 및 이전/다음 슬라이드 이동 제어 기능 제공
* **전 제품 소개(카테고리 탭)**
  * 소비자의 건강목적(회복, 이너뷰티, 에너지)에 따른 제품 라인업 정보 제공
  * 목적별 추천 제품을 한눈에 파악하고 비교할 수 있도록 탭 형식의 화면으로 제공
* **상품목록 및 상태 관리**
  * 제품 이미지, 할인율, 1박스당 단가 계산 데이터 등을 컴포넌트 형식으로 구조화하여 제공
  * 사용자가 관심이쓴 상품을 따로 보관하고 관리할 수 있도록 찜하기 상태 변경 기능 활용
* **네비게이션 및 사용자 편의기능**
  * 쇼핑 편의성을 높이기 위해 홈, 브랜드, 베스트, 이벤트 등 주요 메뉴로 이동하는 라우팅 시스템 구축
  * 원하는 제품을 빠르게 찾을 수 있는 검색창 위치 노출 및 페이지 최상단으로 부드럽게 이동하는 TOP 버튼 제공

### 구현화면
<img width="1280" alt="banner" src="https://github.com/user-attachments/assets/c64d1034-7055-4d0b-b98d-6d31dc2d7fa1" />


## 사용한 기술(Tech Stack)
 - FrontEnd : React, HTML, CSS, JavaScript
 - Styling : Styled-components
 - Deployment : GitHub Pages

## 프로젝트 구조(Architecture)

### 1. 디렉토리 구조 (Directory Structure)
컴포넌트의 재사용성과 유지보수성을 극대화하기 위해 기능 및 역할별로 폴더를 구조화했습니다.
```text
src/
├── index.js          # 애플리케이션 진입점
├── App.js            # 전역 라우터 설정 및 전체 레이아웃 구성
├── Header            # 상단 글로벌 네비게이션 바 컴포넌트
├── Footer            # 하단 푸터 정보 컴포넌트
├── pages/            # 주소(URL)와 1:1 매칭되는 페이지 컴포넌트
│   ├── Home.js       # 메인 화면
│   ├── Product.js    # 전 제품 소개 화면 (내부적으로 id.ProductTab 연동)
│   ├── Detail.js     # 제품 상세 보기 화면
│   ├── Cart.js       # 장바구니 화면
│   ├── Brand.js      # 브랜드 스토리 화면
│   └── Login.js      # 로그인 화면
├── App.css           # 전역 스타일 및 공통 레이아웃 스타일
│   ├── header.css    # 헤더 전용 스타일
│   └── footer.css    # 푸터 전용 스타일
├── style-css/        # 각 페이지별 개별 CSS 스타일 관리
│   ├── Home.css / Brand.css / Cart.css
│   └── Login.css / Product.css / Detail.css
├── style-components/ # 재사용 가능한 스타일링된 독립 컴포넌트
│   └── productcard.js # 상품 카드 레이아웃 컴포넌트
├── components/       # 페이지 내에서 재사용되는 UI 컴포넌트
│   └── ProductTab.js # 제품 목록 카테고리 탭 컴포넌트
└── data/             # 로컬 Mock 데이터 관리 (JSON 파일)
    └── product.json / customer.json / review.json / Q&A.json
```

### 2. 라우터 구조 (Router Struture)
`react-router-dom`을 활용하여 클라이언트 사이드 라우팅(CSR)을 구현했으며, 사용자 중심의 직관적인 URL 체계를 구축했습니다.

* `/` : 메인 배너 및 베스트 상품을 보여주는 홈 화면 (`Home.js`)
* `/brand` : 링티 브랜드 스토리 소개 화면 (`Brand.js`)
* `/product` : 건강 목적별 전 제품 카테고리 리스트 화면 (`Product.js`)
* `/detail` : 선택한 상품의 상세 정보 및 리뷰 확인 화면 (`Detail.js`)
* `/cart` : 사용자가 담은 상품 목록 및 수량 조절 화면 (`Cart.js`)
* `/login` : 회원 로그인 화면 (`Login.js`)

### 사용 라이브러리 (Dependencies)
* **`react-router-dom`**: 화면 전환 없는 SPA 라우팅 구현
* **`react-bootstrap`**: UI 생산성 향상 및 컴포넌트 활용
  * `Offcanvas`: 슬라이드 아웃 방식의 사이드바/메뉴 구현
  * `Crossfade`: 부드러운 페이드 이펙트 효과 적용


## 코드 리뷰 (Code Review)
### 1. 사용자가 원하는 제품 카테고리를 선택하면 해당 카테고리의 콘텐츠가 표시되도록 구현하기 위해 UseState를 사용했습니다.
<p align= "left">
 <img width="1208" height="634" alt="ezgif com-gif-maker (2)" src="https://github.com/user-attachments/assets/b6b19ab3-9320-4d14-9065-fb6959a23423" />
</p>

```javascript
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('recovery');

  return (
    <div>
      {/* 카테고리 탭 버튼 */}
      <button 
        className={activeTab === 'recovery' ? 'on' : ''} 
        onClick={() => setActiveTab('recovery')}
      >
        회복솔루션
      </button>

      {/* 조건부 콘텐츠 렌더링 */}
      {activeTab === 'recovery' && (
        <div className="sheet">
          {/* 회복솔루션 콘텐츠 */}
        </div>
      )}
    </div>
  );
}
```
* **useState** : 현재 선택한 제품 카테고리 상태 관리
* **onClick** : 카테고리 버튼 클릭 시 setActiveTab()을 호출하여 선택된 카테고리 상태를 변경
* **className** : actuveTab의 값에 따라 on 클래스를 적용하여 선택된 탭의 활성화 스타일을 표시
* **조건부 렌더링(&&)** : activeTab의 값에 따라 해당 카테고리의 콘텐츠만 표시


### 2. 상품 데이터를 반복해서 출력하고, 베스트 상품영역에 최대 4개의 상품만 표시하기 위해 slice()와 map()을 사용했습니다.
<p align="left">
 
</p>

```javascript
<div className="bestBox">
          {
            bestProducts.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCartClick={(prod) => dispatch(addItem({ ...prod, count: 1 }))}
              />
            ))
          }
</div>
```
* **slice(0,4)** : 상품 배열에서 인덱스 0~3까지, 앞의 4개 상품을 선택 
*  **map()** : 선택된 상품 데이터를 하나씩 순회하며 ProductCard 컴포넌트를 생성
*  **key={prodcut.id}** : 각 상품 컴포넌트를 구분할 수 있도록 고유한 상품 ID를 지정
*  **product={product} : 현재 상품 데이터를 ProdouctCard 컴포넌트 props로 전달
*  **onCartClick** : 상품 카드에서 장바구니 추가 기능을 실행할 수 있도록 이벤트 함수를 전달

### 3. 베스트 상품 카드에서 장바구니 추가 기능을 실행하고, 선택한 정보를 Redux 스토어에 전달하기 위해 useDispatch와 addItem을 사용했습니다.
```javascript
import { addItem } from './store';
import { useDispatch } from 'react-redux';
export default function Home() {
const dispatch = useDispatch();
}
return {
<ProductCard
  key={product.id}
  product={product}
  onCartClick={(prod) => dispatch(addItem({ ...prod, count: 1 }))}
/>
}
```
* **useDispatch()** : Redux 스토어에 액션을 전달하기 위한 함수
* **addItem()** : 장바구니에 상품을 추가하기 위한 액션을 생성
* **onCartClick** : 상품 카드에서 장바구니 버튼을 클릭했을 때 실행할 함수를 전달
* **{...prod, count:1}** : 기존 상품 정보는 유지하면서 상품 수량을 1로 지정한 객체를 생성
*  **dispatch()** : 생성한 addItem 액션을 Redux 스토어에 전달
  
### 4. 사용자가 홈화면에서 특정 버튼을 클릭했을때 베스트 상품 페이지나 브랜드 스토리 페이지로 이동할 수 있도록 useNavigate를 사용했습니다.
```javascript
import { useNavigate, useLocation } from "react-router-dom";
export default funtion Home() {
 const navigate = useNavigate();

return (
  <button className='bestAdd' onClick={() => navigate('/best')}>
   전체보기
  </button>
  )
}
```
* ***useNavigate()** : React Router에서 페이지 이동을 처리하는 함수
*  **navigate('/best')** : 호출하면 /best 경로로 이동
*  **onClick** : 버튼 클릭 시 해당 경로로 이동하는 함수를 실행

### 5. 이벤트 목록에서 이전·다음 버튼을 클릭하면 표시되는 이벤트가 변경되도록 구현하기 위해 useState를 사용했습니다.
```javascript
export default function Home() {
const [startIndex, setStartIndex] = useState(0);

return (
 <div className="eventBox">
          <button className='event_prev' onClick={() => setStartIndex(prev => Math.max(0, prev - 1))}>
            <i className="fi fi-rr-angle-left" style={{fontSize: '32px'}}></i>
          </button>
          <div className="event">
            {
              eventInfo && eventInfo.slice(startIndex, startIndex + 3).map((event) => {
                return (
                  <div className="eventItem" key={event.id}>
                    <div className="eventImg">
                      <img src={event.image} alt={event.name} />
                    </div>
                    <p className='eventName'>{event.name}</p>
                    <span className='eventDay'>{event.day}</span>
                  </div>
                )
              })
            }
          </div>
          <button className='event_next' onClick={() => setStartIndex(prev => {
        if (eventInfo && prev + 3 < eventInfo.length) {
          return prev + 1;
        }
        return prev;
      })}>
            <i className="fi fi-rr-angle-right" style={{fontSize: '32px'}}></i>
          </button>
        </div>
)
```
* **useState(0)** : 처음 표시할 이벤트의 시작 인덱스를 0으로 설정
*  **setStartIndex()** : 이전·다음 버튼 클릭 시 이벤트의 시작 인덱스를 변경
*  **Math.max(0, prev - 1)** : 이전 버튼을 눌렀을 때 시작 인덱스가 0보다 작아지지 않도록 제한
*  **map()** : 선택된 이벤트 데이터를 반복하여 화면에 출력
*  **eventInfo.length** : 이벤트 배열의 전체 길이를 기준으로 다음 이벤트가 더 있는지 확인

    
### 실행 방법 (Getting Started)
1. 이 저장소를 클록(clone)하거나 Zip 파일로 다운로드합니다.
2. 터미널(Terminal)을 열고 해당 프로젝트 폴더로 이동합니다.
3. 프로젝트에 필요한 패키지들을 설치합니다.
   ```text
   npm install
   ```
5. 로컬 개발 서버를 실행하여 웹 브라우저에서 확인합니다.
   ```text
   npm start
   ```
7. 브라우저에서 https://localhost:3000(또는 터미널에서 표시된 주소)로 접속하여 확인합니다.

### 🔗 배포 링크 (Live Demo)
[링티 리뉴얼 사이트 바로가기](https://03josuhyun.github.io/lingtea/)
