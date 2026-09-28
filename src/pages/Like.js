import React from 'react'
import '../style/like.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function Like() {

  const likeItem = useSelector((state) => state.likeItem);
  const navigate = useNavigate(); 

  return (
    <div>
      <div className="likeSection">
        <div className="likeTitle">
          <p>찜하기</p>
        </div>

        <div className="like" style={{ borderTop: '1px solid #ccc', display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '0 70px' }}>
          {
            likeItem && likeItem.length > 0 ? (
              likeItem.map((item, index) => (
                <div className="likeItemBox" key={item.id || index} style={{ margin: '30px 0', width: '200px',border: '1px solid #eee', boxSizing: 'border-box', cursor: 'pointer' }} onClick={() => navigate(`/detail/${item.id}`)}>
                  <div className="likeImg" style={{ width: '200px', height: '200px' }}>
                    <img src={item.image} alt={item.title || item.name} style={{ width: '200px', height: '200px' }} />
                  </div>
                  <p className='likeName' style={{ width: '200px', padding: '10px ' }}>
                    {item.title || item.name}
                  </p>
                  <p className='likePay' style={{ padding: '5px 10px' }}>
                    {item.price?.toLocaleString()}원
                  </p>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', padding: '100px 0', fontSize: '26px' }}>찜한 상품이 없습니다.</p>
            )
          }
        </div>
      </div>
    </div>
  )
}
