import React from 'react';
import '../../asset/css/client/index.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <div className="home">
                <Link className="fa-solid fa-house-chimney" to="/"></Link>
            </div>
            <ul className="menu1">
                <li>
                    <a href="">Thương Hiệu</a>
                    <ul className="menu2">
                        <li>Burberry</li>
                        <li>Gucci</li>
                        <li>Givenchy</li>
                        <li>Rolex</li>
                        <li>D&G</li>
                    </ul>
                </li>
                <li>
                    <a href="./HTML/donghonam.html">Đồng Hồ Nam</a>
                </li>
                <li>
                    <a href="./HTML/donghonu.html">Đồng Hồ Nữ</a>
                </li>
                <li>
                    <a href="./HTML/donghodoi.html">Đồng Hồ Đôi</a>
                </li>
                <li>
                    <a href="./HTML/donghotrangtri.html">Đồng Hồ Trang Trí</a>
                </li>
                <li>
                    <a href="#">Phụ Kiện</a>
                    <ul className="menu2">
                        <li>Dây đeo</li>
                        <li>Mặt kính</li>
                        <li>Núm</li>
                        <li>Khóa dây</li>
                        <li>Mắt dây</li>
                    </ul>
                </li>
                <li>
                    <a className="online-support" href="#">
                        Hỗ trợ online
                    </a>
                </li>
            </ul>
        </div>
    );
}
