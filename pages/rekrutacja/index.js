import Layout from '../../src/components/Layout';
import Banner from '../../src/components/Banner';
import Button from 'react-bootstrap/Button';

const Rekrutacja = () => {
  return (
    <Layout>
      <Banner background={'../header/Act1.jpg'} text='Rekrutacja' />
      <div className='button-container'>
        <div className='mb-2'>
          <Button variant='dark' size='lg' href='/rekrutacja/program-act'>
            Program ACT
          </Button>{' '}
          <Button variant='light' size='lg' href='/rekrutacja/2021-2022'>
            Rekrutacja
          </Button>
        </div>
        <style jsx>{`
          .button-container {
            width: 100%;
            margin: 50px auto;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Rekrutacja;
