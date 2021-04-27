import Head from 'next/head';
import Link from 'next/link';
import Menu from '../src/components/Menu';
import Carousel from '../src/components/Carousel';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>Act</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <Carousel />
      <div className='button-container'>
        <div className='mb-2'>
          <Button variant='dark' size='lg'>
            <Link href='/rekrutacja/program-act'>
              <a className='white'>Program ACT</a>
            </Link>
          </Button>{' '}
          <Button variant='light' size='lg'>
            <Link href='/rekrutacja/2021-2022'>
              <a>Rekrutacja</a>
            </Link>
          </Button>
        </div>
      </div>
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
        .button-container {
          width: 100%;
          margin: 0 auto;
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        a {
          color: #222;
          text-decoration: none;
        }
        .white {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Home;
