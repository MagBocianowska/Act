import Jumbotron from 'react-bootstrap/Jumbotron';

export const Jumbo = ({ children }) => {
  // return <Jumbotron>{children}</Jumbotron>;
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          padding: 50px 20px;
        }
      `}</style>
    </div>
  );
};
