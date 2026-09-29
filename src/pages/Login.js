import React from 'react';
import '../style/login.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [id, setId] = useState('');
  const [passward, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const fixedId = 'lingtea123';
    const fidxedPassward = '@ling123';

    if(id === fixedId && passward === fidxedPassward) {
      alert('로그인에 성공하셨습니다');
      localStorage.setItem('userName', 'OOO');
      navigate('/');
    }else {
      alert('로그인에 실패하셨습니다');
    }
  };

  return (
    <div>
      <div className="loginSection">
        <div className="loginImg">
          <img src={process.env.PUBLIC_URL + '/assets/login.png'} alt="" />
        </div>
        <div className="loginBox">
          <div className="loginTop">
            <input type="text" placeholder='아이디' className='login login_id' value={id} onChange={(e)=>setId(e.target.value)}
            />
            <input type="text" placeholder='비밀번호' className='login login_pw' value={passward} onChange={(e)=>setPassword(e.target.value)} />
            <div className="loginchk">
              <input type="checkbox" id='remember_id' />
              <label htmlFor="remember_id">아이디 저장</label>
              <input type="checkbox" id='logining' />
              <label htmlFor="logining">로그인 상태 유지</label>
            </div>
          </div>
          <div className="loginMid">
            <button className='login_btn' onClick={handleLogin}>
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
