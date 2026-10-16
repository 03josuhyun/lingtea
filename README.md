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
### 1. useState를 사용한 탭 전환 기능
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
사용자가 원하는 제품 카테고리를 선택하면 해당 카테고리의 콘텐츠가 표시되도록 구현하기 위해 UseState를 사용했습니다.
* **useState** : 현재 선택한 제품 카테고리 상태 관리
* **onClick** : 카테고리 버튼 클릭 시 setActiveTab()을 호출하여 선택된 카테고리 상태를 변경
* **className** : actuveTab의 값에 따라 on 클래스를 적용하여 선택된 탭의 활성화 스타일을 표시
* **조건부 렌더링(&&)** : activeTab의 값에 따라 해당 카테고리의 콘텐츠만 표시
<br>
페이지 이동없이 하나의 영역에서 여러 제품 카테고리를 전환하며 확인할 수 있도록 구현했습니다. 또한 선택된 카테고리를 상태로 관리하여 버튼의 활성화 스타일과 콘텐츠가 함께 변경되도록 했습니다.

### 2. map()과 slice()를 이용한 상품 출력
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
상품 데이터를 반복해서 출력하고, 베스트 상품영역에 최대 4개의 상품만 표시하기 위해 slice()와 map()을 사용했습니다.
* **slice(0,4)** : 상품 배열에서 인덱스 0~3까지, 앞의 4개 상품을 선택합니다. 원본 배열은 변경하지 않습니다.
*  **map()** : 선택된 상품 데이터를 하나씩 순회하며 ProductCard 컴포넌트를 생성합니다.
*  **key={prodcut.id}** : 각 상품 컴포넌트를 구분할 수 있도록 고유한 상품 ID를 지정합니다.
*  **product={product} : 현재 상품 데이터를 ProdouctCard 컴포넌트 props로 전달합니다.
*  **onCartClick** : 상품 카드에서 장바구니 추가 기능을 실행할 수 있도록 이벤트 함수를 전달합니다.
<br>
베스트 상품을 하나씩 직접 작성하는 대신 상품 데이터를 반복 출력하여 코드 중복을 줄이고, 베스트 상품 영역에 보여줄 상품 수를 4개로 제한했습니다. 또한 상품 데이터를 컴포넌트에 전달하여 상품 표시와 장바구니 기능을 연결했습니다. 

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
