import React from 'react';
import tintuc1 from '../../asset/image/tintuc1.jpg';
import tintuc2 from '../../asset/image/tintuc2.jpg';
import '../../asset/css/client/index.scss';
function New() {
    return (
        <div style={{ width: '100%', height: 'auto', marginTop: '10px', padding: '10px' }}>
            <div id="tintucvideo">Tin Tức Video</div>
            <div
                style={{
                    backgroundColor: '#796752',
                    width: '100%',
                    height: '1px',
                    marginTop: '0.2px',
                    marginBottom: '50px',
                }}
            ></div>
            <div style={{ display: 'flex', marginLeft: '2%' }}>
                <div style={{ width: '600px', height: '340px', display: 'inline-block' }}>
                    <iframe
                        style={{ display: 'inline-block' }}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/KRxdfxoZsl8?si=jwgi9Y-snDKxe6or"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* */}
                <div style={{ width: '600px', height: '340px', display: 'inline-block', marginLeft: '4%' }}>
                    <div style={{ width: '97%', height: '113px' }}>
                        <div style={{ float: 'left', width: '70%' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                Sự kiện Seiko Việt Nam chính thức ra mắt
                            </p>
                            <p>
                                Thương hiệu đồng hồ nổi tiếng của Nhật Bản - Seiko đã chính thức ra mắt thị trường Việt
                                Nam tại sự kiện Seiko Vietnam...
                            </p>
                        </div>
                        <img src={tintuc1} alt="" style={{ float: 'right', width: '29%', height: '93%' }} />
                    </div>
                    <div style={{ width: '97%', height: '113px', marginTop: '4%' }}>
                        <div style={{ float: 'left', width: '70%' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                Có phải mặt kính sapphire sẽ không bao giờ bị xước?
                            </p>
                            <p>
                                Mặt kính sapphire là một trong những loại kính được sử dụng phổ biến trong sản xuất đồng
                                hồ. Kính sapphire có độ cứng...
                            </p>
                        </div>
                        <img src={tintuc2} alt="" style={{ float: 'right', width: '29%', height: '93%' }} />
                    </div>
                    <div style={{ paddingRight: '20px', paddingTop: '30px' }}>
                        <div
                            style={{
                                float: 'right',
                                display: 'inline-block',
                                padding: '7px',
                                backgroundColor: 'rgb(0, 136, 255)',
                                color: 'white',
                                borderRadius: '10px',
                            }}
                        >
                            Xem thêm tin tức
                        </div>
                    </div>
                </div>
                {/* */}
            </div>
        </div>
    );
}

export default New;
