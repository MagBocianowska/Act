import Jumbo from '../Jumbo';

export const Banner = ({ background, text }) => {
  return (
    <div className='hero-image'>
      <div className='text-container'>
        <h1>{text}</h1>
      </div>
      <style jsx>{`
        .hero-image {
          position: relative;
          height: 450px;
          width: 100%;
          overflow: hidden;
          background: url(${background}) no-repeat;
          background-size: cover;
          background-position: center;
        }
        .text-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 20px 30px;
        }
        h1 {
          color: #fff;
          font-weight: 300;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
};
