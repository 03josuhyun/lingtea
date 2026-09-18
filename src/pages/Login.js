import React from 'react';
//import { Outlet } from 'react-router-dom';
import '../style/login.css'

export default function Login() {
  return (
    <div>
      <div className="loginSection">
        <div className="loginImg">
          <img src={process.env.PUBLIC_URL + '/assets/login.png'} alt="" />
        </div>
        <div className="loginBox">
          <div className="loginTop">
            <input type="text" placeholder='아이디' className='login login_id'/>
            <input type="text" placeholder='비밀번호' className='login login_pw' />
            <div className="loginchk">
              <input type="checkbox" id='remember_id' />
              <label htmlFor="remember_id">아이디 저장</label>
              <input type="checkbox" id='logining' />
              <label htmlFor="logining">로그인 상태 유지</label>
            </div>
          </div>
          <div className="loginMid">
            <button className='login_btn'>
              로그인
            </button>
            <button className='loginadd_btn'>
              회원가입
            </button>
          </div>
          <div className="loginBot">
            <button className='login_k'>
              <img src={process.env.PUBLIC_URL + '/assets/login_logo02.png'} alt="" />
              카카오 1초 로그인/회원가입
            </button>
            <button className='login_n'>
              <img src={process.env.PUBLIC_URL + '/assets/login_logo01.png'} alt="" />
              네이버 로그인/회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
