import Menu from '../Menu';
import Footer from '../Footer';

export const Layout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Menu />
      <main>{children}</main>
      {/* <Footer /> */}
      <style jsx>{`
        .wrapper {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 0 10px 1px #ddd;
        }
        main {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};
