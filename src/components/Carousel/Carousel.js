import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Carousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='img-container'>
          <img src='banner/banner1.jpg' alt='' />
        </div>
        <div className='img-container'>
          <img src='banner/20210411_144204.jpg' />
        </div>
        <div className='img-container'>
          <img src='banner/20210417_130711.jpg' />
        </div>
      </Slider>
      <style jsx>{`
        .img-container {
          width: 80%;
          height: 400px;
          margin: 20px auto;
        }
        .img-container img {
          display: inline-block;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
