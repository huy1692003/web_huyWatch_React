import React from 'react';
import dathongbao from '../../asset/image/dathongbao.png';
import image4 from '../../asset/image/image4.png';
const Footer = () => {
    return (
        <footer id="footer-page">
            <div style={{ marginLeft: '5%', float: 'left', marginTop: '3%' }}>
                <h6 style={{ color: 'white', fontWeight: 'bold' }}>CÔNG TY TNHH PHÁT TRIỂN VÀ THƯƠNG MẠI QUANG HUY</h6>
                <p style={{ lineHeight: '28px' }}>
                    VPGD : 200A Phố Huế, Hai Bà Trưng, Hà Nội <br />
                    Điện thoại : (024) 2.214.8336 <br />
                    MST: 0105545498 Cấp ngày: 03/10/2011 Nơi cấp: Hà Nội
                </p>
            </div>
            <div style={{ marginTop: '2%', float: 'right', width: '40%', height: '30%', lineHeight: '50px' }}>
                <img src={dathongbao} style={{ width: '170px', height: '47px' }} alt="" />
                <span style={{ marginLeft: '50px' }}>© HuyWatch-All rights reserved</span>
                <img src={image4} alt="" />
                <p>Longines | Tissot | MIDO | Frederique Constant | Seiko | Citizen | Orient</p>
            </div>
        </footer>
    );
};

export default Footer;
