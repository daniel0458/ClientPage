import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../upload/profile.jpg'

const Menu = () => {
    const activeStyle = {
        color: 'blue',
        fontSize: '1.5rem'
    };

    return (
        <div>
            <ul>
           
                <li><NavLink exact to="/" activeStyle={activeStyle}>메인</NavLink></li>
                <li><NavLink to="/Dallyeog" activeStyle={activeStyle}>공연일정</NavLink></li> 
                <li><NavLink to="/QNA" activeStyle={activeStyle}>문의사항</NavLink></li>
                <li><NavLink to="/mypage" activeStyle={activeStyle}>마이페이지</NavLink></li>
                {/* <li><NavLink to="/calendar" activeStyle={activeStyle}>캘린더</NavLink></li> */}
                <li><NavLink to="Juhyun" activeStyle={activeStyle}>극단위치</NavLink></li>
                {/* <li><NavLink to="/schedule11" activeStyle={activeStyle}>캘린더</NavLink></li> */}
                <ul>
                <li><NavLink to="/MyShow" activeStyle={activeStyle}>나의공연</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Q&A문의내역</NavLink></li>
                {/* <li><NavLink to="/wishlist" activeStyle={activeStyle}>찜한연극</NavLink></li> */}
                <li><NavLink to="/clientinformation" activeStyle={activeStyle}>회원정보수정</NavLink></li>
                <li><NavLink to ="/clientinformation2" activeStyle={activeStyle}>회원정보수정2</NavLink></li>
                <li><NavLink to="/ScheduleJanuary" activeStyle={activeStyle}>스케줄</NavLink></li>
                </ul>
                <li><img src={profile} alt="이미지 없음" width="64" height="64" /></li>
             
            </ul>
            <hr />
        </div>
    );
};

export default Menu;