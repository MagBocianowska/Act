import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='img-container'>
        <img src='/ACT.png' alt='act' />
      </div>
      <div className='text-container'>
        <h4>
          Masz pytania? <span>Napisz do nas:</span>
        </h4>
        <p>Mokotowska 24/63 00-561 Warszawa</p>
        <p>Mail: biuro@actstudioaktorskie.pl</p>
        <p>Tel.: 663411525</p>
        <div className='social-container'>
          <SocialIcon url='https://www.facebook.com/ACTstudioaktorskie-102747651970970' />{' '}
          <SocialIcon url='https://www.instagram.com/invites/contact/?i=a0ha2m7g7rj1&utm_content=ly2eutt' />
        </div>
      </div>
      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 80%;
          margin: 50px auto 0;
          background-color: rgba(50, 50, 50, 0.1);
          border-radius: 5px;
          box-shadow: 0 0 10px 1px #ddd;
        }
        .social-container {
          margin: 10px 0;
        }
        .img-container {
          width: 300px;
          padding: 20px;
        }
        .img-container img {
          display: inline-block;
          width: 100%;
        }
        p {
          margin: 10px 0;
        }
        h4 {
          margin-top: 30px;
          font-style: italic;
        }
        span {
          font-weight: bold;
          font-style: normal;
        }
        @media (max-width: 825px) {
          .contact-container {
            flex-direction: column;
            align-items: center;
          }
          .text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;
          }
          p {
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
};
