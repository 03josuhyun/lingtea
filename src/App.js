//import logo from './logo.svg';
import '@flaticon/flaticon-uicons/css/regular/rounded.css';
import './App.css';

import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
//import { useState } from 'react';
import { useState, useEffect } from 'react';
//import productDate from './data/productDate';

import Home from './pages/Home';
import Product from './pages/Product';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Event from './pages/Event';
import Best from './pages/Best';
import Brand from './pages/Brand';
import Login from './pages/Login';
import Like from './pages/Like';

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return() => {
      window.removeEventListener('scroll',handleShowButton);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App">
      {
        showButton && (
          <div style={{position: 'fixed', bottom: '60px', right: '50px', zIndex: 100}}>
            <button onClick={scrollToTop} style={{ width: '50px', height: '50px', backgroundColor: '#008BE5', color: 'white', borderRadius: '50%', border: 'none', fontSize: '20px'}}>
              Top
            </button>
          </div>
        )
      }

      <Navbar className='nav' expand="sm">
        <Container fluid>
          <Navbar.Brand onClick={() => { navigate('/') }}>
            <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="로고" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="gnb">
                <Nav.Link
                  className={`lnb lnb01 ${location.pathname === '/home' ? 'active' : ''}`}
                  onClick={() => { navigate('/') }}
                >홈</Nav.Link>
                <Nav.Link
                  className={`lnb lnb01 ${location.pathname === '/brand' ? 'active' : ''}`}
                  onClick={() => { navigate('/brand') }}
                >브랜드</Nav.Link>
                <Nav.Link
                  className={`lnb lnb01 ${location.pathname === '/product' ? 'active' : ''}`}
                  onClick={() => { navigate('/product') }}
                >전체제품</Nav.Link>
                <Nav.Link
                  className={`lnb lnb01 ${location.pathname === '/best' ? 'active' : ''}`}
                  onClick={() => { navigate('/best') }}
                >
                  Best</Nav.Link>
                <Nav.Link
                  className={`lnb lnb01 ${location.pathname === '/event' ? 'active' : ''}`}
                  onClick={() => { navigate('/event') }}
                >이벤트</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{borderRadius: '20px'}}
                />
                <Button className='searchbtn'>검색</Button>
              </Form>
              <button className='loginbtn' onClick={() => navigate('/login')}>
                <i className="fi fi-rr-user" style={{ fontSize: '30px', lineHeight:'20px' }}></i>
              </button>
              <button className='btncart' onClick={() => navigate('/cart')}>
                <i className="fi fi-rr-basket-shopping-simple" style={{fontSize: '30px', lineHeight: '20px'}}></i>
              </button>
              <button className='heartbtn' onClick={()=> navigate('/like')}>
                <i class="fi fi-rr-heart" style={{fontSize: '30px', lineHeight: '20px'}}></i>
              </button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='brand' element={<Brand />} />
        <Route path='product' element={<Product />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='event' element={<Event />} />
        <Route path='best' element={<Best />} />
        <Route path='login' element={<Login />} />
        <Route path='cart' element={<Cart />} />
        <Route path='like' element={<Like />} />
      </Routes>

      <div className="footer">
        <div className="footerBox">
          <div className="footerLeft">
            <div className="footerLogo" onClick={() => { navigate('/home') }}>
              <img className='logo' src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="로고" />
            </div>
            <div className="footerMid">
              <div>
                <span>회사소개</span>
                <span>이용약관</span>
                <span>개인정보처리방침</span>
                <span>이용안내</span>
              </div>
              <div>
                <span>공지사항</span>
                <span>FAQ</span>
                <span>1:1문의</span>
                <span>이벤트</span>
              </div>
            </div>
            <div className="footerBot">
              <p className='text01'>쇼핑몰 기본 정보</p>
              <div className="footerTxt01">
                <div className="footertxt01">
                  <p className='text01'>상호명</p>
                  <p className='text02'>주식회사 링티</p>
                </div>
                <div className="footertxt02">
                  <p className='text01'>대표자명</p>
                  <p className='text02'>이원철</p>
                </div>
              </div>

              <div className="footertxt03">
                <p className='text01'>사업자 주소</p>
                <p className='text02'>06193 서울 강남구 선릉로90길 48 (대치동, 비티큐 타워)</p>
              </div>
              <div className="footertxt04">
                <p className='text01'>사업자 등록번호</p>
                <p className='text02'>815 - 86 - 00600</p>
              </div>
              <div className="footertxt05">
                <p className='text01'>통신판매업 신고번호</p>
                <p className='text02'>제 2026 - 서울강남 - 02816호</p>
                <span className='text03'>[사업자정보확인]</span>
              </div>
              <div className="footerTxt02">
                <div className="footertxt06">
                  <p className='text01'>개인정보보호책임자</p>
                  <p className='text02'>이원철</p>
                </div>
                <div className="footertxt07">
                  <p className='text01'>대표메일</p>
                  <p className='text02'>info@lingtea.co.kr</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footerRight">
            <p className='text01'>고객센터 정보</p>
            <p className='text04'>상담/주문 전화 1544 - 5200</p>
            <div className="footertxt08">
              <p className='text01'>마케팅 제휴문의</p>
              <p className='text02'>info@lingtea.co.kr</p>
            </div>
            <div className="footertxt09">
              <p className='text01'>기업 주문문의</p>
              <p className='text02'>biz@lingtea.co.kr</p>
            </div>
            <div className="footertxt10">
              <p className='text01'>cs 운영시간</p>
              <div className="footertxt11">
                <p className='text02'>운영시간 : 평일 AM 9:00 ~ PM 01:00 (토,일요일 및 공휴일 휴무)</p>
                <p className='text02'>점심시간 : AM 11:50 ~ PM 01:00</p>
                <p className='text02'>배송안내 : 롯데택배 (Tel : 1588 - 2121)</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
