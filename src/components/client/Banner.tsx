import { useEffect } from 'react';
import banner1 from '../../asset/image/banner1.png';
import banner2 from '../../asset/image/banner2.jpg';
import banner3 from '../../asset/image/banner3.jpg';
import bst1 from '../../asset/image/bst1.jpg';
import bst2 from '../../asset/image/bst2.jpg';
import bst3 from '../../asset/image/bst3.jpg';
import bst4 from '../../asset/image/bst4.jpg';
import bst5 from '../../asset/image/bst5.jpg';
import bst6 from '../../asset/image/bst6.jpg';
import bst7 from '../../asset/image/bst7.jpg';
import bst8 from '../../asset/image/bst8.jpg';
import bst9 from '../../asset/image/bst9.jpg';

const Banner = () => {
    useEffect(() => {
        let c: any = setTimeout(() => {
            document.getElementById('right-click')?.click();
        }, 2500);
        return () => clearInterval(c);
    }, []);
    return (
        <div id="banner">
            <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
                    </div>

                    <div className="carousel-item">
                        <img src={banner2} alt="Chicago" className="d-block" style={{ width: '100%' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} alt="New York" className="d-block" style={{ width: '100%' }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                    id="right-click"
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#demo"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* banner 2 */}
            <h1 id="title-banner">Thế giới đồng hồ chất lượng </h1>
            {/*  */}
            <div id="collection-banner">
                <div className="collection-left">
                    <img src={bst5}></img>
                </div>
                <div className="collection-right">
                    <div className="collection-right-top">
                        <img style={{ float: 'left' }} className="collection-left-top-left" src={bst7} alt="" />
                        <img style={{ float: 'right' }} className="collection-left-top-right" src={bst6} alt="" />
                    </div>
                    <div className="collection-right-bottom">
                        <img src={bst9} alt="" />
                    </div>
                </div>
                <div className="collection-bottom">
                    <div>
                        <img src={bst1} alt="" />
                        <p>BST ĐỒNG HỒ NAM HOT</p>
                    </div>
                    <div style={{ marginLeft: 21 }}>
                        <img src={bst2} alt="" />
                        <p>BST ĐỒNG HỒ NAM HOT</p>
                    </div>
                    <div>
                        <img src={bst3} alt="" />
                        <p>ĐỒNG HỒ ĐEO TAY MỚI VỀ</p>
                    </div>
                    <div>
                        <img src={bst4} alt="" />
                        <p>CÁC MẪU TRANG SỨC MỚI</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
