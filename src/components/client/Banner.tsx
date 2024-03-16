import { useEffect } from 'react';
import banner1 from '../../asset/image/banner1.png';
import banner2 from '../../asset/image/banner2.jpg';
import banner3 from '../../asset/image/banner3.jpg';
import { clearTimeout } from 'timers';
const Banner = () => {
    useEffect(() => {
        var v: any = setTimeout(() => {
            document.getElementById('right-click')?.click();
        }, 2500);
    }, []);
    return (
        <>
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
        </>
    );
};

export default Banner;
