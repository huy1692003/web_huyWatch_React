import React from 'react';
import '../../asset/css/client/index.scss';
import Menu from './Menu';

const Header = () => {
    return (
        <>
            <div id="header">
                <div id="logoshop">
                    <h3>Huy Watch</h3>
                    <p>Thế giới đồng hồ chính hãng</p>
                </div>
                <div id="search">
                    <input type="text" placeholder="Bạn cần tìm ...." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="contact">
                    <h5>Gọi ngay</h5>
                    <p>0364.174.636</p>
                </div>
                <div id="cart">
                    <p className="fa-solid fa-cart-shopping">
                        <span>0</span>
                    </p>
                </div>
            </div>
            <Menu />
        </>
    );
};

export default Header;
