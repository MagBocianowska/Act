import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <p>Znajdziesz nas na:</p>
        <SocialIcon
          url='https://www.facebook.com/ACTstudioaktorskie-102747651970970'
          style={{ width: 30, height: 30 }}
        />{' '}
        <SocialIcon
          url='https://www.instagram.com/invites/contact/?i=a0ha2m7g7rj1&utm_content=ly2eutt'
          style={{ width: 30, height: 30 }}
        />
      </div>
      <style jsx>{`
        .footer-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(230, 230, 230);
        }
        p {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 10px;
        }
      `}</style>
    </footer>
  );
};
