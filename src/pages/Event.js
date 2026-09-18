import React from 'react';
import '../style/event.css';
import productDate from '../data/productDate';

export default function Event() {

  const { eventInfo } = productDate;
  return (
    <div>
      <div className="eventBannerSection">
        <div className="eventTitle">
          <p className='title01'>링티 공식몰 이벤트</p>
          <p className='title02'>더 즐거운 해택과 즐거움을 드려요!</p>
        </div>
        <select className='eventSelect'>
          <option value="default">전체</option>
          <option value="ing">진행 중인 이벤트</option>
          <option value="end">종료된 이벤트</option>
        </select>
        <div className="eventBannerBox">
          {
            eventInfo.map((event) =>
              <div className="eventBanner" key={event.id}>
                <div className="eventBannerImg">
                  <img src={event.image} alt={event.name} />
                </div>
                <div className="eventBannerDetail">
                  <p className='eventBannerTitle'>{event.name}</p>
                  <span>{event.day}</span>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  )
}
