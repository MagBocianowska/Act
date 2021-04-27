export const ImgTextLeft = ({ name, text, image }) => {
  return (
    <div className='container'>
      <div className='img-container'>
        <img src={image} alt='kadra' />
      </div>
      <div className='text-container'>
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
      <style jsx>{`
        .container {
          margin-top: 50px;
          flex-wrap: wrap;
          display: flex;
          width: 100%;
          padding: 20px 10px;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }
        .img-container {
          width: 500px;
        }
        .text-container {
          width: 500px;
        }
        .text-container * {
          margin-bottom: 30px;
        }
        div img {
          display: inline-block;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export const ImgTextRight = ({ name, text, image }) => {
  return (
    <div className='container'>
      <div className='text-container'>
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
      <div className='img-container'>
        <img src={image} alt='kadra' />
      </div>
      <style jsx>{`
        .container {
          margin-top: 50px;
          flex-wrap: wrap;
          display: flex;
          width: 100%;
          padding: 20px 10px;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }
        .img-container {
          width: 500px;
        }
        .text-container {
          width: 500px;
        }
        .text-container * {
          margin-bottom: 30px;
        }
        div img {
          display: inline-block;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
